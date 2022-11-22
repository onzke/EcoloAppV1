import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { GestureEcoService } from '../gesture-eco/services/gesture-eco.service';
import { GestureEco } from '../models/gesture-eco.model';

@Component({
  selector: 'app-new-gesture-eco',
  templateUrl: './new-gesture-eco.component.html',
  styleUrls: ['./new-gesture-eco.component.css']
})



export class NewGestureEcoComponent implements OnInit {


    gestForm!: FormGroup;
    gestEcoPreview$!: Observable<GestureEco>;
    urlRegex!: RegExp;
  
  constructor(private formBuilder: FormBuilder, private gestEcoService: GestureEcoService,
    private router: Router) { }
  //...
  
    ngOnInit(): void {
      this.gestForm = this.formBuilder.group({
        title: [null,[Validators.required]],
        description: [null, [Validators.required]],
        imgUrl: [null, [Validators.required,  Validators.pattern(this.urlRegex)]],
        validGest: [null, [Validators.required]],
        validDate: [null, [Validators.required]],
        location: [null]
      });
      this.gestEcoPreview$ = this.gestForm.valueChanges.pipe(
        map(formValue => ({
            ...formValue,
            createdDate: new Date(),
            id: 0
        }))
    );
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    }

    onSubmitForm() {
      this.gestEcoService.addFaceSnap(this.gestForm.value);
      this.router.navigateByUrl('/gesturesecos');
  }
}
