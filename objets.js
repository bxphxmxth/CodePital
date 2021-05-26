let docteur = {
     nom : "Riviera",
     argent: 50,
     cabinet: [],
     salleAttente: [],
     patientIn(){

     },
     patientOut(){

     },
     prixConsultation(){

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