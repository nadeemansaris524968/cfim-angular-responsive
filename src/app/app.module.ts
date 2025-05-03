import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MissionComponent } from './mission/mission.component';
import { QocComponent } from './qoc/qoc.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LocationComponent } from './location/location.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, MainComponent, FooterComponent, CardsComponent, WelcomeComponent, MissionComponent, QocComponent, ServicesOfferedComponent, CredentialsComponent, InsuranceComponent, LocationComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
