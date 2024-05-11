import { Component, OnInit, inject } from '@angular/core';
import { ProductoService } from '../../services/http/producto.service';
import { ProductoInterface } from '../../interfaces/producto-interface';
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet,],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit {

  private readonly _productoHttp = inject(ProductoService);
  producto : ProductoInterface[] = []

  ngOnInit() : void{
    this._productoHttp.getProducto().subscribe(
      (res : ProductoInterface[])=>{
        this.producto = res;
      }
    )
  }

}
