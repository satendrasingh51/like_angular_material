import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanformRoutingModule } from './panform-routing.module';
import { PanComponent } from './pan/pan.component';


@NgModule({
  declarations: [PanComponent],
  imports: [
    CommonModule,
    PanformRoutingModule
  ]
})
export class PanformModule { }
