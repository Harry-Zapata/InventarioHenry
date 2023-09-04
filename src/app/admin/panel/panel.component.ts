import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
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

}
