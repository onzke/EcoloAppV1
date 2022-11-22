import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { GestureEco } from './models/gesture-eco.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 

  /* interval$ : Est un Observable, c'est-à-dire, un objet qui émet des valeurs (nombres) pour chaque émission.
   * On marque un $ pour chaque Observable qu'on doit déclarer.
   */
  interval$!: Observable<number>;

 

  ngOnInit() {
    
       this.interval$ = interval(1000);
  }


}


