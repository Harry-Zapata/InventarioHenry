import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { MensajeClass } from 'src/app/shared/Class/mensaje.class';
import { MensajesService } from 'src/app/shared/services/mensajes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(
    private tostr: ToastrService,
    private mensajeSrv: MensajesService
  ) { }
  list: any = []
  ngOnInit(): void {
    this.mensajeSrv.getMensajes().subscribe(
      data => {
        this.list = data;
      })
  }
  miFormulario = new FormGroup({
    mensaje: new FormControl("", [Validators.required])
  });
  editarFormulario = new FormGroup({
    mensaje: new FormControl("", [Validators.required])
  })
  idEditar!: any;
  addTask() {
    let mensaje = {
      description: this.miFormulario.value.mensaje
    }
    this.mensajeSrv.crearMensajes(mensaje).subscribe(
      data => {
        this.ngOnInit();
        this.cerrarModal("modalAgregar");
        this.tostr.success("Mensaje Creado", "Exito");
        this.miFormulario.controls['mensaje'].setValue("")
      }
    );
  }
  editTask(id: any) {
    this.mensajeSrv.mensajeById(id).subscribe(
      data => {
        let mensajes: any = data;
        this.editarFormulario.controls['mensaje'].setValue(mensajes.description);
        this.idEditar = mensajes._id;
      }
    )
  }
  editarMensaje() {
    let mensaje = {
      description: this.editarFormulario.value.mensaje,
    }
    this.mensajeSrv.editarMensajes(this.idEditar, mensaje).subscribe(
      data => {
        this.ngOnInit();
        this.cerrarModal("modalEditar");
        this.editarFormulario.controls['mensaje'].setValue("")
        this.idEditar = "";
        this.tostr.success("Mensaje Editado", "Exito");
      }
    )
  }
  deleteTask(id: any) {
    this.mensajeSrv.eliminarMensaje(id).subscribe(
      data => {
        this.ngOnInit();
        this.tostr.error("Mensaje Eliminado", "Exito");
      }
    )
  }
  listTask(id: any, lista: any) {
    let finalizado = !lista
    this.mensajeSrv.editarMensajes(id, { checked: finalizado }).subscribe(
      data => {
        this.ngOnInit();
        finalizado ? this.tostr.warning("Mensaje Finalizado", "Exito") : this.tostr.info("Mensaje Pendiente", "Exito");
      }
    )
  }
  cerrarModal(id: string) {
    let modal = document.getElementById(id);
    if (modal != null) {
      modal.removeAttribute('style');
      modal.style.display = "none";
    }
    let Vmodal = document.getElementsByClassName("modal-backdrop fade show")[0];
    Vmodal.remove()
    this.editarFormulario.controls['mensaje'].setValue("")
  }
}
