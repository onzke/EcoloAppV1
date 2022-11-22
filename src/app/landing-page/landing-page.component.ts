import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  userEmail!: string;
  

  // Constructeur avec pour argument le paramètre Router.
  constructor(private router: Router) {}

  // Rappel de la méthode ngOnInit.
  ngOnInit(): void {
    
  }
  
  // Appel de la méthode onContinue.
  // Permet au routeur de se rediriger vers le chemin aux gestes écologiques, grâce au module du routeur défini (App-routing.module).
  onContinue() {
    this.router.navigateByUrl('gesturesecos');
}



onSubmitForm(form: NgForm) {
  console.log(form.value);
}
}
