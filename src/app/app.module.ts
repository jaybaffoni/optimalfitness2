import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { HomeLandingPanelComponent } from './pages/home/panels/home-landing-panel/home-landing-panel.component';
import { AboutPanelComponent } from './pages/home/panels/about-panel/about-panel.component';
import { TrainingPanelComponent } from './pages/home/panels/training-panel/training-panel.component';
import { StaffPanelComponent } from './pages/home/panels/staff-panel/staff-panel.component';
import { LocationsPanelComponent } from './pages/home/panels/locations-panel/locations-panel.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';
import { PanelComponent } from './components/panel/panel.component';
import { AboutPageComponent } from './pages/about/about-page/about-page.component';
import { LocationsPageComponent } from './pages/locations/locations-page/locations-page.component';
import { StaffPageComponent } from './pages/staff/staff-page/staff-page.component';
import { TrainingPageComponent } from './pages/training/training-page/training-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitlePanelComponent } from './components/title-panel/title-panel.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { TwoColumnPanelComponent } from './components/two-column-panel/two-column-panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeLandingPanelComponent,
    AboutPanelComponent,
    TrainingPanelComponent,
    StaffPanelComponent,
    LocationsPanelComponent,
    HeaderBarComponent,
    FooterComponent,
    PageComponent,
    PanelComponent,
    AboutPageComponent,
    LocationsPageComponent,
    StaffPageComponent,
    TrainingPageComponent,
    TitlePanelComponent,
    PersonCardComponent,
    TwoColumnPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
