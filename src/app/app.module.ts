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

const appRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, MainComponent, FooterComponent, CardsComponent, WelcomeComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
