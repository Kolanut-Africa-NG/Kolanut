import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { admin } from "@/lib/service";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/lib/constants";
import { useUserStore } from "@/lib/store/user-store";
import { toast } from "@/lib/utils/toast";

interface LoginResponse {
  id: string;
  created_at: string;
  updated_at: string;
  full_name: string;
  email: string;
  is_active: boolean;
  role: string;
  last_login_at: string;
  token_type: string;
  access_token: string;
  refresh_token: string;
  access_expires_at: string;
  refresh_expires_at: string;
  
}

interface LoginCredentials {
  username: string;
  password: string;
}

export const useAdminLogin = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await admin.post<LoginResponse>("auth/token", {
        username: credentials.username,
        password: credentials.password,
      });
      return response;
    },
    onSuccess: (data) => {
      // Store tokens in localStorage
      if (data.access_token) {
        localStorage.setItem(ACCESS_TOKEN, data.access_token);
      }
      if (data.refresh_token) {
        localStorage.setItem(REFRESH_TOKEN, data.refresh_token);
      }

      // Store user data in Zustand store
      if (data) {
        const { access_token, refresh_token, ...userData } = data;
        setUser(userData);
      }

      toast.success("Login successful", {
        description: `Welcome back, ${data.full_name || "Admin"}!`,
      });
    },
    onError: (error: any) => {
      toast.error("Login failed", {
        description:
          error?.message || "Please check your credentials and try again.",
      });
    },
  });
};

export const useAdminLogout = () => {
  const clearUser = useUserStore((state) => state.clearUser);

  return () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    clearUser();
    toast.success("Logged out successfully");
    if (typeof window !== "undefined") {
      window.location.href = "/admin";
    }
  };
};
