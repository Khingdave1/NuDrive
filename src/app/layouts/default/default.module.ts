import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DriverSignupComponent } from 'src/app/modules/driver-signup/driver-signup.component';
import { RentComponent } from 'src/app/modules/rent/rent.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { VelocityOnWheelsComponent } from 'src/app/modules/velocity-on-wheels/velocity-on-wheels.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    DriverSignupComponent,
    RentComponent,
    AboutComponent,
    ContactComponent,
    VelocityOnWheelsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
