import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { ComidaComponent } from './pages/comida/comida.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'home'
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'producto',
        component: ProductoComponent,
        canActivate: [ authGuard ],
        children : [
            {
                path: 'comida',
                component: ComidaComponent
            },
            {
                path: 'tecnologia',
                component: TecnologiaComponent
            }
        ]
    }
];
