import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanComponent } from './pan/pan.component';


const routes: Routes = [

  {path: 'pan', component: PanComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanformRoutingModule { }
