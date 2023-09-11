import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/shared/services/login.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit{
  constructor(
    private LoginSrv:LoginService,
    private router:Router,
    private toastr:ToastrService,
    private userSrv:UsersService
  ) {}
  user!:any
  ngOnInit(): void {
    let id = localStorage.getItem('id');
    if(id!=null || id!=undefined){
      this.userSrv.getUserById(id).subscribe(
        data => {
          this.user = data;
          localStorage.setItem('role', this.user.role);
        }
      )
      
    }
  }
menu(){
  let anchoNavegador = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let body = document.getElementsByTagName('body')[0];
  let leftPanel = document.getElementById('left-panel');
  if(anchoNavegador<1008){
    if (leftPanel!=null) {
      leftPanel.style.display=="" || leftPanel.style.display=="none" ? leftPanel.style.display="block": leftPanel.style.display="none";
    }
  }else{
    body.classList.value=="" ? body.classList.add("open"): body.classList.remove("open");   
  }
}

Logout(){
  this.LoginSrv.logout().subscribe(
    data=>{
      localStorage.clear();
      this.router.navigate(['login']);
      this.toastr.error("Sesión Cerrada", "Exito");
    }
  );
}

}
