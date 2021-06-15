import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { AboutLandingPanelComponent } from './pages/about/panels/about-landing-panel/about-landing-panel.component';
import { LandingPanelComponent } from './components/landing-panel/landing-panel.component';
import { StaffLandingPanelComponent } from './pages/staff/panels/staff-landing-panel/staff-landing-panel.component';
import { LocationsLandingPanelComponent } from './pages/locations/panels/locations-landing-panel/locations-landing-panel.component';
import { TrainingLandingPanelComponent } from './pages/training/panels/training-landing-panel/training-landing-panel.component';
import { StaffListPanelComponent } from './pages/staff/panels/staff-list-panel/staff-list-panel.component';
import {CommonModule} from '@angular/common';
import { BioComponent } from './components/bio/bio.component';
import { LexingtonPanelComponent } from './pages/locations/panels/lexington-panel/lexington-panel.component';
import { BeachHousePanelComponent } from './pages/locations/panels/beach-house-panel/beach-house-panel.component';
import { CorporatePanelComponent } from './pages/locations/panels/corporate-panel/corporate-panel.component';
import { InHomePanelComponent } from './pages/locations/panels/in-home-panel/in-home-panel.component';
import { MindbodyPanelComponent } from './pages/training/panels/mindbody-panel/mindbody-panel.component';
import { QuinPanelComponent } from './pages/locations/panels/quin-panel/quin-panel.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { LexingtonMbWidgetComponent } from './components/lexington-mb-widget/lexington-mb-widget.component';
import { PopupComponent } from './components/popup/popup.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from "@angular/material/chips";
import { SlideshowModule } from "ng-simple-slideshow";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { MissionPanelComponent } from './pages/about/panels/mission-panel/mission-panel.component';
import { TestimonialPanelComponent } from './pages/about/panels/testimonial-panel/testimonial-panel.component';
import { NewsletterPanelComponent } from './pages/about/panels/newsletter-panel/newsletter-panel.component';

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
    TwoColumnPanelComponent,
    AboutLandingPanelComponent,
    LandingPanelComponent,
    StaffLandingPanelComponent,
    LocationsLandingPanelComponent,
    TrainingLandingPanelComponent,
    StaffListPanelComponent,
    BioComponent,
    LexingtonPanelComponent,
    BeachHousePanelComponent,
    CorporatePanelComponent,
    InHomePanelComponent,
    MindbodyPanelComponent,
    QuinPanelComponent,
    DialogComponent,
    ContactDialogComponent,
    LexingtonMbWidgetComponent,
    PopupComponent,
    MissionPanelComponent,
    TestimonialPanelComponent,
    NewsletterPanelComponent
  ],
  imports : [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatChipsModule,
    SlideshowModule,
    IvyCarouselModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
