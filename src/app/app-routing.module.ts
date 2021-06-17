import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './pages/home/home-page/home-page.component';
import {AboutPageComponent} from './pages/about/about-page/about-page.component';
import {TrainingPageComponent} from './pages/training/training-page/training-page.component';
import {StaffPageComponent} from './pages/staff/staff-page/staff-page.component';
import {LocationsPageComponent} from './pages/locations/locations-page/locations-page.component';
import { ContactPageComponent } from './pages/contact/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'training', component: TrainingPageComponent },
  { path: 'staff', component: StaffPageComponent },
  { path: 'staff/:person', component: StaffPageComponent },
  { path: 'locations', component: LocationsPageComponent },
  { path: 'contact', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
