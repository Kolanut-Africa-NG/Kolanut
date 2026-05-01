import { create } from 'zustand';

export interface ComprehensiveAutoInsuranceFormData {
  // Step 1
  selectedPlan: string;
  selectedPlanPrice: number;
  // Step 2 - Personal Details
  carOwnership: string;
  companyName: string;
  firstName: string;
  lastname: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nin: string;
  rcNumber: string;
  state: string;
  city: string;
  address: string;
  identityDocument: string;
  // Vehicle Details
  plateNumber: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleBodyType: string;
  vehicleYear: string;
  color: string;
  engineNumber: string;
  chassisNumber: string;
  vehicleValue: string;
  // Payment
  couponCode: string;
}

interface ComprehensiveAutoInsuranceStore {
  currentStep: number;
  formData: ComprehensiveAutoInsuranceFormData;
  setStep: (step: number) => void;
  updateField: (
    field: keyof ComprehensiveAutoInsuranceFormData,
    value: string | number
  ) => void;
  reset: () => void;
}

const initialFormData: ComprehensiveAutoInsuranceFormData = {
  selectedPlan: '',
  selectedPlanPrice: 0,
  carOwnership: '',
  companyName: '',
  firstName: '',
  lastname: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  nin: '',
  rcNumber: '',
  state: '',
  city: '',
  address: '',
  identityDocument: '',
  plateNumber: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleBodyType: '',
  vehicleYear: '',
  color: '',
  engineNumber: '',
  chassisNumber: '',
  vehicleValue: '',
  couponCode: '',
};

export const useComprehensiveAutoInsuranceStore = create<ComprehensiveAutoInsuranceStore>((set) => ({
  currentStep: 1,
  formData: initialFormData,
  setStep: (step) => set({ currentStep: step }),
  updateField: (field, value) =>
     set((state) => ({
       formData: { ...state.formData, [field]: value },
     })),
  reset: () => set({ currentStep: 1, formData: initialFormData }),
}));
