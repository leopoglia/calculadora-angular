import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VISORComponent implements OnInit {

  constructor() { }
  @Input() aaaa
  @Input() numero
  ngOnInit() {
  }
  resultado = "";
  expression = ""

  igual(){
    let expression = new String(this.aaaa);
    this.resultado = (eval(expression.toString()));
  }


}
