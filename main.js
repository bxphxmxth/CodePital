// //# Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri.


// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 

import {Patients, NomDiagnostiques} from "./class.js";

// |nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|vide|malade
// |Optimus|unsave|200|vide|malade
// |Sangoku|404|80|vide|malade
// |DarthVader|azmatique|110|vide|malade
// |Semicolon|syntaxError|60|vide|malade

let marcus = new Patients("Marcus","mal indenté",100,[],"malade");
let optimus = new Patients("Optimus","unsave",200,[],"malade");
let sangoku = new Patients("Sangoku","404",80,"vide","malade");
let darthvader = new Patients("Darthvader","azmatique",110,[],"malade");
let semicolon = new Patients("Semicolon", "syntaxError", 60, [], "malade");

docteur.salleAttente.push(Patients.length);
// console.log(docteur.salleAttente);

console.log(`Dans la salle d'attente, il y a ${Patients.length} patients`);
docteur.patientIn(marcus.nom)


// console.log(docteur.salleAttente)

// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet.

// console.log(docteur.cabinet);

// Tout d'abord il les diagnostiques 


docteur.diagnostiques("Marcus","mal indenté");

let ctrlmajf = new NomDiagnostiques("ctrl+maj+f",60);

console.log(`Le traitement de ${marcus.nom} est ${ctrlmajf.nom}`);   


// puis se fait payer avant de préscrire un traitement.

docteur.prixConsultation(marcus, 50, docteur);


// Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant.

// console.log(docteur.cabinet);
docteur.patientOut("Marcus", "traitement");
// console.log(docteur.cabinet);
// console.log(docteur.salleAttente);
// console.log(marcus.etat);


// Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.

// chat.miauler();

// // // // ​
// |nom|argent|cabinet|diagnostique|patienTIn|patientOut
// |---|---|---|---|---|---|

// |Debugger|0|[chat]



import {docteur,chat,pharmacie,cimetiere} from "./objets.js";

// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|

let saveOnFocusChange = new NomDiagnostiques("saveOnFocusChange",100);
let CheckLinkRelation = new NomDiagnostiques("CheckLinkRelation",35);
let Ventoline = new NomDiagnostiques("Ventoline",40);
let f12doc = new NomDiagnostiques("f12+doc",20);


// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.

marcus.seDeplacer(pharmacie);
// console.log(pharmacie.nbrClients);


// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€
// ​
// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.