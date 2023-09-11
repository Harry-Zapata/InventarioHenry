import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PanelComponent } from './admin/panel/panel.component';
import { InicioComponent } from './admin/inicio/inicio.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { EntradasComponent } from './admin/entradas/entradas.component';
import { SalidasComponent } from './admin/salidas/salidas.component';
import { CategoriasComponent } from './admin/categorias/categorias.component';
import { loginGuard } from './shared/guard/login.guard';
import { usersGuard } from './shared/guard/users.guard';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'admin',component: PanelComponent, canActivate:[loginGuard],
  children:[
    {path:'',component: InicioComponent},
    {path:'inicio',component: InicioComponent},
    {path:'productos',component: ProductosComponent},
    {path:'usuarios',component: UsuariosComponent,canActivate:[usersGuard],},
    {path:'entradas',component:EntradasComponent},
    {path:'salidas',component:SalidasComponent},
    {path:'categorias',component:CategoriasComponent},
    {path:'**',redirectTo:'inicio',pathMatch:'full'}
  ]},
  {path:'**',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
