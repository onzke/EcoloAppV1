import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestureEcoComponent } from './gesture-eco/gesture-eco.component';
import { GestureEcoListComponent } from './gesture-eco-list/gesture-eco-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleGestureEcoComponent } from './single-gesture-eco/single-gesture-eco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewGestureEcoComponent } from './new-gesture-eco/new-gesture-eco.component';

@NgModule({
  declarations: [
    AppComponent,
    GestureEcoComponent,
    GestureEcoListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleGestureEcoComponent,
    NewGestureEcoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
