class Patients{
     constructor(nom,maladie,argent,poche,etat){
          this.nom = nom;
          this.maladie = maladie;
          this.argent = argent;
          this.poche = poche;
          this.etat = etat;
          this.seDeplacer = (depart,arrivee) =>{

          };
          this.prendreMedoc = (medicament, poche) =>{

          };
          this.payer = (vendeur,objet) =>{

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