let docteur = {
     nom : "Riviera",
     argent: 50,
     cabinet: [],
     salleAttente: [],
     patientIn(nom){
          docteur.cabinet.push(nom);
          console.log(`${nom} est entré dans le cabinet`);
          // docteur.salleAttente.splice(docteur.salleAttente.indexOf(0,1));
          


     },
     patientOut(){

     },
     prixConsultation(patient,prix,docteur){
          patient.argent -= prix;
          docteur.argent += prix;
          console.log(`${patient.nom} a payé le docteur ${docteur.nom}`);
          console.log(`Il ne reste plus que ${patient.argent}€ à ${patient.nom}`);
          console.log(`Le docteur ${docteur.nom} a maintenant ${docteur.argent}€ dans sa caisse`);

     },
     diagnostiques(nom,maladie){
          if(maladie == "mal indenté" && nom == "Marcus"){
          console.log(`La maladie de ${nom} est ${maladie}`);
          
          }else if (maladie == "unsave" && nom == "Optimus"){
               console.log(`La maladie de ${nom} est ${maladie}`); 
                      
          }else if (maladie == 404 && nom == "Sangoku"){
               console.log(`La maladie de ${nom} est ${maladie}`);            

          }else if(maladie == "azmatique" && nom == "Dartvader"){
               console.log(`La maladie de ${nom} est ${maladie}`);
          }else if(maladie == "syntaxError" && nom == "Semicolon"){
               console.log(`La maladie de ${nom} est ${maladie}`);
          } else{
               console.log("T ki?");
          }
     }

}

let chat = {
     nom: "Edgar",
     miauler(){
          //timemachin
     },
}

export {docteur,chat,cimetiere}

let pharmacie = {
     nom: "pharmacie",
     caisse: 20,
     assezArgent(){
          
     },
     pasDargent(){
          cimetiere.push();
          Patients.etat == "mort";
     },
}


let cimetiere = {
     nom: "cimetière",
     contenu: [],
}