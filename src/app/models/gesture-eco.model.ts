/* Constructeur avec arguments.
 * Permet de définir les paramètres de la classe GestureEco.
 */
export class GestureEco {
 
  constructor( 
    public id: Number,
    public title: String,
    public description: String,
    public imgUrl: String,
    public validGest: boolean,
    public validDate: Date,
    public location?: String, 
) {}
}