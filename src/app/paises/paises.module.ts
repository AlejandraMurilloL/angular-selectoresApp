import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { SelectoresPageComponent } from './pages/selectores-page/selectores-page.component';


@NgModule({
  declarations: [
    SelectoresPageComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
