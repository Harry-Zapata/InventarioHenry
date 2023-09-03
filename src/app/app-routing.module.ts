import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PanelComponent } from './admin/panel/panel.component';
import { InicioComponent } from './admin/inicio/inicio.component';
import { ProductosComponent } from './admin/productos/productos.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'admin',component: PanelComponent,
  children:[
    {path:'',component: InicioComponent},
    {path:'inicio',component: InicioComponent},
    {path:'productos',component: ProductosComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
