// Gesture-Eco-List est considéré comme le parent des composants Gesture-Eco.

import { Component, Input, OnInit } from '@angular/core';
import { GestureEcoService } from '../gesture-eco/services/gesture-eco.service';
import { GestureEco } from '../models/gesture-eco.model';



@Component({
  selector: 'app-gesture-eco-list',
  templateUrl: './gesture-eco-list.component.html',
  styleUrls: ['./gesture-eco-list.component.css']
})
export class GestureEcoListComponent implements OnInit {

  // @Input : Décorateur.
@Input() GestureEco!: GestureEco;

    gestEcos!: GestureEco[];

    // Constructeur avec argument.
    // Permet l'accès au service. 
    constructor(private gestureEcoService: GestureEcoService) { }
  
    ngOnInit() : void {
      this.gestEcos = this.gestureEcoService.getAllGestures();
    }
  }

