import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private tostr:ToastrService) { }
  miFormulario = new FormGroup({
    mensaje: new FormControl("", [Validators.required])
  });
  editarFormulario = new FormGroup({
    mensaje: new FormControl("", [Validators.required])
  })
  
  idEditar!: any;
  list: any[] = [
    { id: "1", description: "Conveniently fabricate interactive technology for ....", checked: false },
    { id: "2", description: "Creating component page", checked: false },
    { id: "3", description: "Follow back those who follow you", checked: true },
    { id: "4", description: "Design One page theme", checked: true },
    { id: "5", description: "Creating component page", checked: true },
  ];
  
  addTask() {
    if (this.miFormulario.valid) {
      let object = {
        id: this.list.length + 1,
        description: this.miFormulario.value.mensaje,
        checked: false
      }
      this.list.push(object);
      this.tostr.success("Tarea agregada", "Exito")
      this.cerrarModal("modalAgregar")
    } else {
      this.tostr.error("Complete todos los campos", "Error")
    }
  }
  cerrarModal(id:string) {
    let modal = document.getElementById(id);
    if (modal != null) {
      modal.removeAttribute('style');
      modal.style.display = "none";
    }
    let Vmodal = document.getElementsByClassName("modal-backdrop fade show")[0];
    Vmodal.remove()
  }
  editTask(id: any) {
    const indice = this.list.findIndex(item => item.id === id);
    this.idEditar=id;
    this.editarFormulario.controls['mensaje'].setValue(this.list[indice].description)
  }
  editarMensaje() {
    if (this.editarFormulario.valid) {
      this.list[this.idEditar].description = this.editarFormulario.value.mensaje
      console.log(this.list);
      this.tostr.success("Mensaje editado correctamente", "Exito")
      this.cerrarModal("modalEditar")
    }else {
      this.tostr.error("Complete todos los campos", "Error")
    }
  }
  deleteTask(id: any) {
    const indice = this.list.findIndex(item => item.id === id);
    if (indice !== -1) {
      this.list.splice(indice, 1);
      this.tostr.warning("Tarea eliminada", "Exito")
    }
  }
  listTask() {

  }
}
