import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private toastr: ToastrService,
    private router: Router) {}

  miFormulario = new FormGroup({
    email: new FormControl("", [Validators.required,Validators.email]),
    password: new FormControl("", [Validators.required])
  })
  user={
    email:"admin@gmail.com",
    password:"123456"
  }

  login(){
    if (this.miFormulario.invalid) {
      this.toastr.error("Formulario invalido", "Error");
      return
    }
    if (this.miFormulario.value.email != this.user.email || this.miFormulario.value.password != this.user.password) {
      this.toastr.error("Usuario o contraseña invalido", "Error");
      return
    }
    this.toastr.success("Bienvenido", "Exito");
    this.router.navigate(['/admin']);
}
}
