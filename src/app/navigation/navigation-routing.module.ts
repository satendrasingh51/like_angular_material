import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PagenotefoundComponent } from './pagenotefound/pagenotefound.component';


const routes: Routes = [
  { path: '', redirectTo: '/h', pathMatch: 'full' },
  { path: 'h', component: HomeComponent},
  { path: 'a', component: AboutComponent },
  { path: 's', component: ServiceComponent},
  { path: 'c', component: ContactComponent},
  { path: 'l', component: LoginComponent},
  { path: '**', component: PagenotefoundComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
