import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoInterface } from '../../interfaces/producto-interface';
import { environment } from '../../environment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly _http = inject(HttpClient);

  constructor() { }

  getProducto():Observable<ProductoInterface[]> {
    return this._http.get<ProductoInterface[]>(`${environment.api}/products`)
  }
  getToken (){
    return this._http.post(`${environment.api}/auth/login`,{
      email: "john@mail.com",
      password: "changeme"
    });
  }
  
}
