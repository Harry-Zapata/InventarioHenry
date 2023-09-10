import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/Class/user.class';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private authSrv: LoginService) {
    }
  ngOnInit(): void {
    localStorage.clear();
  }

  miFormulario = new FormGroup({
    email: new FormControl("", [Validators.required,Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  login(){
    if (this.miFormulario.invalid) {
      this.toastr.error("Formulario invalido", "Error");
      return
    }
  let credenciales = {
    email: this.miFormulario.value.email,
    password: this.miFormulario.value.password
  }
    this.authSrv.login(credenciales).subscribe(
      data=> {
        if (typeof(data)!="object"){
          this.toastr.error(data, "Error");
        }else{
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.email);
          localStorage.setItem("id", data.id);
          this.toastr.success("Bienvenido", "Exito");
          this.router.navigate(['admin']);
        }
      }
    )
}
}
