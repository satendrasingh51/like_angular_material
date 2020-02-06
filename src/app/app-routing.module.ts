import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./navigation/navigation.module').then(mod => mod.NavigationModule)
  },
  {
    path: '',
    loadChildren: () => import('./panform/panform.module').then(mod => mod.PanformModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
