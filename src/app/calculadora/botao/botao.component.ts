import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BOTAOComponent implements OnInit {



  constructor() { }
  @Input() numero;
  @Output() onClick = new EventEmitter<String>();
  ngOnInit() {
  }

  receber2(){
    this.onClick.emit(this.numero);
  }

}
