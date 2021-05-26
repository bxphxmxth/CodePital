

let docteur = {
     nom : "Riviera",
     argent: 50,
     cabinet: [],
     salleAttente: [],
     patientIn(nom){
          docteur.cabinet.push(nom);
          console.log(`${nom} est entré dans le cabinet`);
          
          // while(chat ==)
          

          

          let nbrPatients = docteur.salleAttente[0] -= 1;
          

          console.log(`Il ne reste plus que ${nbrPatients} patients dans la salle d'attente.`);




     },
     patientOut(nom){
          
          docteur.cabinet.pop();
          console.log(`${nom} est sorti du cabinet`);
        
         
          
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

          }else if(maladie == "azmatique" && nom == "Darthvader"){
               console.log(`La maladie de ${nom} est ${maladie}`);
          }else if(maladie == "syntaxError" && nom == "Semicolon"){
               console.log(`La maladie de ${nom} est ${maladie}`);
          } else{
               console.log("T ki?");
          }
     }

}



export {docteur,chat,cimetiere,pharmacie}

let pharmacie = {
     nom: "pharmacie",
     caisse: 20,
     nbrClients:[],
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

// console.log(`Sorry, ${this.nom} n'a pas assez d'argent, tu vas crever, this is america.`);


let chat = {
     nom: "Edgar le chat",
     miauler(){
          setInterval(()=>{
              
               console.log(` ${this.nom} le chat chantonne "Ichi, ni, san, nya !"`)
           },2000)
     },

}

