import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private http = inject(HttpClient);

  getAddressFromPincode(pincode: string) {
    const url = `https://api.postalpincode.in/pincode/${pincode}`;
    return this.http.get<any[]>(url);
    // .pipe(
    //   map((response) => {
    //     if (
    //       response[0].Status === 'Success' &&
    //       response[0].PostOffice &&
    //       response[0].PostOffice.length > 0
    //     ) {
    //       const po = response[0].PostOffice[0];
    //       return {
    //         city: po.District,
    //         state: po.State,
    //         country: po.Country,
    //       };
    //     } else {
    //       throw new Error('Invalid PIN code');
    //     }
    //   })
    // );
  }
}
