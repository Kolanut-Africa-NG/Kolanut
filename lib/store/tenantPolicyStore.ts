import { create } from 'zustand';

export interface TenantPolicyFormData {
  // Step 1
  selectedPlan: string;
  selectedPlanPrice: number;
  // Step 2
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  dateOfBirth: string;
  nin: string;
  address: string;
}

interface TenantPolicyStore {
  currentStep: number;
  formData: TenantPolicyFormData;
  setStep: (step: number) => void;
  updateField: <K extends keyof TenantPolicyFormData>(
    field: K,
    value: TenantPolicyFormData[K],
  ) => void;
  reset: () => void;
}

const initialFormData: TenantPolicyFormData = {
  selectedPlan: '',
  selectedPlanPrice: 0,
  firstName: '',
  surname: '',
  email: '',
  phone: '',
  state: '',
  city: '',
  dateOfBirth: '',
  nin: '',
  address: '',
};

export const useTenantPolicyStore = create<TenantPolicyStore>((set) => ({
  currentStep: 1,
  formData: initialFormData,
  setStep: (step) => set({ currentStep: step }),
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  reset: () => set({ currentStep: 1, formData: initialFormData }),
}));
