import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CALCULADORAComponent implements OnInit {
 
  constructor() { }
  ngOnInit() {
  }
  numeroo = '';

  receber3(evento){
    this.numeroo += evento;
  }

  limpar(){
   this.numeroo = ""
  }

}
