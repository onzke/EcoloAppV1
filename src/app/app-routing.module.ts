/* Sous Angular, un module de routeur est mis en place.
 * Il indique à chaque composant une adresse URL, et par coséquent, une route (un chemin vers un lien).
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestureEcoListComponent } from './gesture-eco-list/gesture-eco-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewGestureEcoComponent } from './new-gesture-eco/new-gesture-eco.component';
import { SingleGestureEcoComponent } from './single-gesture-eco/single-gesture-eco.component';

/* Ce module de routeur contient un tableau. Il indique les chemins d'accès pour chaque composant.
 * Path : Indique le chemin. 
 * Component : Indique le composant.
 */
const routes: Routes = [
    { path: 'gesturesecos/:id', component: SingleGestureEcoComponent},
    { path: 'gesturesecos', component: GestureEcoListComponent },
    { path: 'create', component: NewGestureEcoComponent},
    { path: '', component: LandingPageComponent }
];

// @NgModule : Décorateur qui définit une classe et l'enregistre.
/* Ce module de routeur fait appel au routeur d'Angular.
 * Il enregistre les chemins que nous avons indiqué au sein du routeur.
 */
@NgModule({
imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}