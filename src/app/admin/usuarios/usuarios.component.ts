import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  constructor(private userSrv:UsersService) {}
  users:any;
  ngOnInit(): void {
    this.userSrv.getUsers().subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      }
    )
  }

}
