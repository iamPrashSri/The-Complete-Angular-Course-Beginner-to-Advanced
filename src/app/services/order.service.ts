import { Injectable } from '@angular/core';
import { AuthHttp } from "angular-jwt";

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp) {
  }

  getOrders() { 
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
