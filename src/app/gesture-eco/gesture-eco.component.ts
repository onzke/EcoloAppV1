
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestureEco } from '../models/gesture-eco.model';
import { GestureEcoService } from './services/gesture-eco.service';


@Component({
  selector: 'app-gesture-eco',
  templateUrl: './gesture-eco.component.html',
  styleUrls: ['./gesture-eco.component.css']
})

export class GestureEcoComponent implements OnInit {

// @Input : Décorateur qui permet d'injecter les propriétés d'un composant.
@Input() GestureEco!: GestureEco

// Constructeur avec arguments.
// Le constructeur appele "GestureEcoService" et le routeur.
constructor (private gestureEcoService: GestureEcoService, 
  private router: Router) {}

// Si un "!" est indiqué, ceçi permet de préciser que la propriété sera initialisée par la suite.
id! : number;
title!: String;
description!: String;
imgUrl! : String;
validGest! : Boolean;
validDate! : Date;


  ngOnInit() {
    this.id = 1;
    this.title =  'Acheter une gourde',
    this.description = 'Acheter une gourde te permettra de ne pas acheter de bouteilles en plastique. Un petit plus pour ton porte-feuille et la planète !',
    this.imgUrl = 'https://i.pinimg.com/originals/48/e8/2a/48e82aeaaf9b4b01a46275a41be1dbe5.jpg',
    this.validGest = false,
    this.validDate = new Date(); 
}


onViewGestEco() {
  this.router.navigateByUrl(`gesturesecos/${this.GestureEco.id}`);
}
}