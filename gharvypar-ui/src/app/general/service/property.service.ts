import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Property } from '../interface/property.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private http = inject(HttpClient);

  constructor() {}

  private baseUrl = 'http://localhost:8080/api/properties';

  // ✅ Add a new property
  addProperty(userId: number, property: Property): Observable<Property> {
    return this.http.post<Property>(
      `${this.baseUrl}/add?userId=${userId}`,
      property
    );
  }

  // ✅ Get all properties for a specific user
  getAllPropertiesByUser(userId: number): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.baseUrl}/user/${userId}`);
  }

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.baseUrl}/user`);
  }

  // ❌ Delete a property by ID
  deleteProperty(propertyId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${propertyId}`);
  }

  // 📝 Update property (optional)
  updateProperty(propertyId: number, updated: Property): Observable<Property> {
    return this.http.put<Property>(
      `${this.baseUrl}/update/${propertyId}`,
      updated
    );
  }

  private baseUrlUnit = 'http://localhost:8080/api/units';
  // ✅ Add a new property
  addUnit(unit: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrlUnit}`, unit);
  }

  // ✅ Get all properties for a specific user
}
