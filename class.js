class Patients{
     constructor(nom,maladie,argent,poche,etat){
          this.nom = nom;
          this.maladie = maladie;
          this.argent = argent;
          this.poche = poche;
          this.etat = etat;
          this.seDeplacer = (lieu) =>{
               lieu.nbrClients.push(this.nom);
               console.log(`${this.nom} est arrivé.e à la ${lieu.nom}`);

          };
          this.prendreMedoc = (medicament, poche,lieu) =>{

               if (this.argent >= medicament.prix){
                    console.log(`${this.nom} peut acheter son traitement et le mettre dans sa poche`);
                    // déduire prix + console log argent
                    this.argent -= medicament.prix;
                    console.log(`Il ne reste plus que ${this.argent}€ à ${this.nom}`);
                    //push objet poche + console log poche
                    this.poche.push(medicament.nom)
                    console.log(`${this.nom} met ${medicament.nom} dans sa poche`);
                    // changer etat clg etat
                    
                    this.etat = "guérit";
                    console.log(`${this.nom} a changé son état en ${this.etat} et se sent mieux`);

               }else{
                    lieu.contenu.push(this.nom);
                    console.log(`Sorry, ${this.nom} n'a pas assez d'argent, tu vas crever, this is America.`);
                    console.log(`${this.nom} est actuellement au ${lieu.nom} <3 `);
                    console.log(`Il y a actuellement ${lieu.contenu.length} personne.s décédé.es`);
                    
               }
          };
          
     }
}


export {Patients, NomDiagnostiques};

class NomDiagnostiques{
     constructor(nom,prix){
          this.nom =nom;
          this.prix= prix;
     }
}

