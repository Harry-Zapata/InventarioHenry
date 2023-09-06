import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EntradasComponent } from './entradas/entradas.component';
import { SalidasComponent } from './salidas/salidas.component';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [
    PanelComponent,
    InicioComponent,
    ProductosComponent,
    UsuariosComponent,
    EntradasComponent,
    SalidasComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    PanelComponent,
    InicioComponent,
    ProductosComponent
  ]
})
export class AdminModule { }
