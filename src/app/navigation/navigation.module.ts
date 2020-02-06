import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { NavigationRoutingModule } from './navigation-routing.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { PagenotefoundComponent } from './pagenotefound/pagenotefound.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, ServiceComponent, LoginComponent, PagenotefoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
