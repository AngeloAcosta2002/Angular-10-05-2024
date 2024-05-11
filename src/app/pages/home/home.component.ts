import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/http/producto.service';
import { ComidaComponent } from '../comida/comida.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComidaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly _http = inject(ProductoService);

  cambiar(){
    this._http.getToken().subscribe((res : any) =>{
      console.log(res);
      localStorage.setItem("token", res["access_token"]);
    });
  }
}
