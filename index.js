const contenantchoixordinateur = document.getElementById('choix-ordinateur') ;
const contenantchoixutilisatuer = document.getElementById('choix-utilisateur') ;
const contenantresultat = document.getElementById('resultat') ;

const choixpossibles = document.querySelectorAll('button') ;
let choixutilisateur
let resultat
let choixordinateur 

//Evenement 'Click sur les buttons'
choixpossibles.forEach(choixpossible => choixpossible.addEventListener('click' ,(e)=>{
    //récuparation de l'ID des button cliqué
  choixutilisateur =  e.target.id ;
  //on ajoute l'image qui correspond le choix du'utilisatuer
  if(choixutilisateur == "ciseaux") {
    contenantchoixutilisatuer.innerHTML = '<img src="ciseaux.jpg" >' ;
  } else if (choixutilisateur == "papier") {
    contenantchoixutilisatuer.innerHTML = '<img src="papier.png" >' ;

  } else {
    contenantchoixutilisatuer.innerHTML = '<img src="pierre.webp" >' ;
  }
  generer_choix_ordinateur() ;
  verification();


}))

//Fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur() {
    random = Math.floor(Math.random()*3) +1 //Générer des nombres compris entre 1 et 3 
    if(random === 1) { //si random à 1 :
        choixordinateur = "pierre" ;
    }
    if(random === 2) { //si random à 2 :
        choixordinateur = "papier" ;
    }
    if(random === 3) { //si random à 3 :
        choixordinateur = "ciseaux" ;
    }
     //on ajoute l'image qui correspond le choix du'utilisatuer
  if(choixordinateur == "ciseaux") {
    contenantchoixordinateur.innerHTML = '<img src="ciseaux.jpg" >' ;
  } else if (choixordinateur == "papier") {
    contenantchoixordinateur.innerHTML = '<img src="papier.png" >' ;

  } else {
    contenantchoixordinateur.innerHTML = '<img src="pierre.webp" >' ;
  }

}

//Fonction pour verifier si le joueur a gagné ou pas 
function verification() {

    if(choixutilisateur == choixordinateur) {
        resultat = "Egalité !" ;

    }
    //Les cas ou le joueur perd
    if(choixutilisateur == "pierre" && choixordinateur == "papier") {
        resultat = "Perdu !" ;

    }
    if(choixutilisateur == "papier" && choixordinateur == "ciseaux") {
        resultat = "Perdu !" ;

    }
    if(choixutilisateur == "ciseaux" && choixordinateur == "pierre") {
        resultat = "Perdu !" ;

    }
    //Les cas ou le joueur gagne
    if(choixutilisateur == "pierre" && choixordinateur == "ciseaux") {
        resultat = "Gagné !" ;

    }
    if(choixutilisateur == "ciseaux" && choixordinateur == "papier") {
        resultat = "Gagné !" ;

    }
    if(choixutilisateur == "papier" && choixordinateur == "pierre") {
        resultat = "Gagné !" ;

    }
    contenantresultat.innerHTML = resultat ;
    

}