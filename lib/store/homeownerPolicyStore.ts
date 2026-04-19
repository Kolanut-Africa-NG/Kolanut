import { create } from 'zustand';

export interface HomeownerPolicyFormData {
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

interface HomeownerPolicyStore {
  currentStep: number;
  formData: HomeownerPolicyFormData;
  setStep: (step: number) => void;
  updateField: <K extends keyof HomeownerPolicyFormData>(
    field: K,
    value: HomeownerPolicyFormData[K],
  ) => void;
  reset: () => void;
}

const initialFormData: HomeownerPolicyFormData = {
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

export const useHomeownerPolicyStore = create<HomeownerPolicyStore>((set) => ({
  currentStep: 1,
  formData: initialFormData,
  setStep: (step) => set({ currentStep: step }),
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  reset: () => set({ currentStep: 1, formData: initialFormData }),
}));
