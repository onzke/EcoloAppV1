import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestureEcoService } from '../gesture-eco/services/gesture-eco.service';
import { GestureEco } from '../models/gesture-eco.model';


@Component({
  selector: 'app-single-gesture-eco',
  templateUrl: './single-gesture-eco.component.html',
  styleUrls: ['./single-gesture-eco.component.css']
})

export class SingleGestureEcoComponent implements OnInit{

  // Si un "!" est indiqué, ceçi permet de préciser que la propriété sera initialisée par la suite.
  gestureEco!: GestureEco;
  
    // Constructeur avec arguments.
    // Ce constructeur rappele le constructeur dans Gesture-Eco.component.
    // ActivatedRoute : Récupère les paramètres de la route activée.
    constructor(private gestureEcoService: GestureEcoService,
                private route: ActivatedRoute) {}

  ngOnInit() {
    
   const gestureEcoId = +this.route.snapshot.params['id'];
   this.gestureEco = this.gestureEcoService.gestureEcoById(gestureEcoId)
  }
}
