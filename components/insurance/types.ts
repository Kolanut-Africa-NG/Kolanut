// Generic insurance components types

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  features?: string[];
}

export interface CostRow {
  label: string;
  value: string;
  hide?: boolean;
}

export interface StepConfig {
  number: number;
  label: string;
}
