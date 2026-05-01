import { create } from 'zustand';

export interface LandlordPolicyFormData {
  // Step 1
  selectedPlan: string;
  selectedPlanPrice: number;
  // Step 2
  firstName: string;
  lastname: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  dateOfBirth: string;
  nin: string;
  address: string;
}

interface LandlordPolicyStore {
  currentStep: number;
  formData: LandlordPolicyFormData;
  setStep: (step: number) => void;
  updateField: <K extends keyof LandlordPolicyFormData>(
    field: K,
    value: LandlordPolicyFormData[K],
  ) => void;
  reset: () => void;
}

const initialFormData: LandlordPolicyFormData = {
  selectedPlan: '',
  selectedPlanPrice: 0,
  firstName: '',
  lastname: '',
  email: '',
  phone: '',
  state: '',
  city: '',
  dateOfBirth: '',
  nin: '',
  address: '',
};

export const useLandlordPolicyStore = create<LandlordPolicyStore>((set) => ({
  currentStep: 1,
  formData: initialFormData,
  setStep: (step) => set({ currentStep: step }),
  updateField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
  reset: () => set({ currentStep: 1, formData: initialFormData }),
}));
