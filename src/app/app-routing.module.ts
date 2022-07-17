import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { DriverSignupComponent } from './modules/driver-signup/driver-signup.component';
import { HomeComponent } from './modules/home/home.component';
import { RentComponent } from './modules/rent/rent.component';
import { VelocityOnWheelsComponent } from './modules/velocity-on-wheels/velocity-on-wheels.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'driver-signup',
        component: DriverSignupComponent,
        data: {
          title: 'Home',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'rent',
        component: RentComponent,
        data: {
          title: 'Rent',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'velocity-on-wheels',
        component: VelocityOnWheelsComponent,
        data: {
          title: 'Rent',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          description: 'Description Meta Tag Content'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
