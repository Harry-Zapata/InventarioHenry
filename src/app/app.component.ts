import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    let anchoNavegador = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let body = document.getElementsByTagName('body')[0];
    if (anchoNavegador<1008) {
      body.classList.add("small-device");
    }
  }
  title = 'libreria';
}
