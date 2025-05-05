import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LocationComponent } from './location/location.component';
import { MainComponent } from './main/main.component';
import { MissionComponent } from './mission/mission.component';
import { QocComponent } from './qoc/qoc.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SeenTodayComponent } from './seen-today/seen-today.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { AllergiesComponent } from './services/allergies/allergies.component';
import { CholestrolComponent } from './services/cholestrol/cholestrol.component';
import { DiabetesComponent } from './services/diabetes/diabetes.component';
import { FunctionalMedicineComponent } from './services/functional-medicine/functional-medicine.component';
import { HeavyMetalComponent } from './services/heavy-metal/heavy-metal.component';
import { HormonalImbalancesComponent } from './services/hormonal-imbalances/hormonal-imbalances.component';
import { HypertensionComponent } from './services/hypertension/hypertension.component';
import { LeakyGutComponent } from './services/leaky-gut/leaky-gut.component';
import { LymeComponent } from './services/lyme/lyme.component';
import { MoldComponent } from './services/mold/mold.component';
import { PrimaryCareComponent } from './services/primary-care/primary-care.component';
import { WeightLossComponent } from './services/weight-loss/weight-loss.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'services/primary-care', component: PrimaryCareComponent },
  {
    path: 'services/functional-medicine',
    component: FunctionalMedicineComponent,
  },
  {
    path: 'services/mold-toxicity',
    component: MoldComponent,
  },
  {
    path: 'services/leaky-gut',
    component: LeakyGutComponent,
  },
  {
    path: 'services/hypertension',
    component: HypertensionComponent,
  },
  {
    path: 'services/diabetes',
    component: DiabetesComponent,
  },
  {
    path: 'services/cholestrol',
    component: CholestrolComponent,
  },
  {
    path: 'services/heavy-metal-toxicity',
    component: HeavyMetalComponent,
  },
  {
    path: 'services/hormonal-imbalances',
    component: HormonalImbalancesComponent,
  },
  {
    path: 'services/allergies',
    component: AllergiesComponent,
  },
  {
    path: 'services/lyme-disease',
    component: LymeComponent,
  },
  {
    path: 'services/weight-loss',
    component: WeightLossComponent,
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
  },
  { path: '**', redirectTo: '' },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MainComponent,
    FooterComponent,
    CardsComponent,
    WelcomeComponent,
    MissionComponent,
    QocComponent,
    ServicesOfferedComponent,
    CredentialsComponent,
    InsuranceComponent,
    PrimaryCareComponent,
    WeightLossComponent,
    MoldComponent,
    LymeComponent,
    LeakyGutComponent,
    HypertensionComponent,
    HormonalImbalancesComponent,
    HeavyMetalComponent,
    FunctionalMedicineComponent,
    DiabetesComponent,
    CholestrolComponent,
    AllergiesComponent,
    LocationComponent,
    SeenTodayComponent,
    ReviewsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, routerOptions)],
  bootstrap: [AppComponent],
})
export class AppModule {}
