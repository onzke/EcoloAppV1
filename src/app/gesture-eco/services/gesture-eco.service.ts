/* Sous Angular, un service centralise les interactions avec le composant défini afin qu'elles partagent de données.
 * Un service est une classe Typescript.
 */


import { Injectable } from '@angular/core';
import { GestureEco } from 'src/app/models/gesture-eco.model';

// @Injectable : Décorateur pour déclarer une classe.
@Injectable({
  providedIn: 'root'
})
export class    GestureEcoService {
  gestEcos: GestureEco[] = [
   
      {
        id: 1,
        title: 'Acheter une gourde',
        description: 'Acheter une gourde te permettra de ne pas acheter de bouteilles en plastique. Un petit plus pour ton porte-feuille et la planète !',
        imgUrl:'https://i.pinimg.com/originals/48/e8/2a/48e82aeaaf9b4b01a46275a41be1dbe5.jpg',
        validGest: false,
        validDate: new Date(),
        location: 'Cook'
        },
        {
        id: 2,
        title: 'Acheter des couches lavables',
        description: 'Un investissement mais un achat durable grâce à un bon entretien pour les fesses de bébés.',
        imgUrl: 'https://flolesmains.fr/wp-content/uploads/2017/06/couches-lavables-2.jpg',
        validGest: false,
        validDate:  new Date(),
        location:  'Wash'
        },
        {
          id: 3,
        title: 'Acheter des couches lavables',
        description: 'Un investissement mais un achat durable grâce à un bon entretien pour les fesses de bébés.',
        imgUrl: 'https://flolesmains.fr/wp-content/uploads/2017/06/couches-lavables-2.jpg',
        validGest:  false,
        validDate:  new Date(),
      }
    ];
  

  getAllGestures(): GestureEco[] {
    return this.gestEcos;
}
  gestureEcoById(gestureEcoId: number): GestureEco {
    const gestEco = this.gestEcos.find(gestEco => gestEco.id === gestureEcoId);
    if (!gestEco) {
      throw new Error ('FaceSnap not found');
  } else {
      return gestEco;
  }
  }

  addFaceSnap(formValue: { title: string, description: string, imgUrl: string, validGest: boolean, validDate: Date, location?: string }) {
    const gestEco: GestureEco = {
        ...formValue,
       
        validDate: new Date(),
        id: this.gestEcos[this.gestEcos.length - 1].id,
    };
    this.gestEcos.push(gestEco);
}
}