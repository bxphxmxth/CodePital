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
          this.prendreMedoc = (medicament, poche) =>{

          };
          // this.payer = (vendeur,objet) =>{

          // };
     }
}


export {Patients, NomDiagnostiques};

class NomDiagnostiques{
     constructor(nom,prix){
          this.nom =nom;
          this.prix= prix;
     }
}