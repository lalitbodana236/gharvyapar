// models/property.model.ts
export interface Property {
  id?: number;
  propertyName: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  type: 'APARTMENT' | 'HOUSE' | 'PG';
  userId: number;
  floor: number;
}
