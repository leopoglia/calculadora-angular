import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CALCULADORAComponent } from './calculadora/calculadora.component';
import { VISORComponent } from './CALCULADORA/visor/visor.component';
import { BOTAOComponent } from './CALCULADORA/botao/botao.component';

@NgModule({
  declarations: [
    AppComponent,
    CALCULADORAComponent,
    VISORComponent,
    BOTAOComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
