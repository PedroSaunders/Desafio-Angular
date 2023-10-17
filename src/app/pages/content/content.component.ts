import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string="https://upload.wikimedia.org/wikipedia/commons/7/70/Serena_REFON.jpg"
  contentTitle:string="Cachorro Vira lata"
  contentDescription:string="O melhor tipo"
  constructor(){ }
  ngOnIniti():void{
  }
}
