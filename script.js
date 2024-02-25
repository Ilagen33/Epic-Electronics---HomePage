//ESERCIZI IN JS

// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro:

//creo una funzione cambiaTestoH1
function cambiaTestoH1() {

    //definisco un titoloH1, ricavato dall'Id 'titolo' in HTML 
    const titoloH1 = document.getElementById('titolo');

    //modifico il titolo
    titoloH1.innerHTML = 'Epic Electronics';

    //stampa in console l'azione compiuta
    console.log("Titolo Modificato!!");
};

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina:

//creo una funzione changeBackgroundColor
function changeBackgroundColor() {

    //definisco bodyColor prendendo il body dell'HTML
    const bodyColor = document.body;

    //scelgo un colore casuale
    const coloreCasuale = "#9C27B0";

    //cambio lo style del body, cambiando colore allo sfondo
    bodyColor.style.backgroundColor = coloreCasuale;

    //stampo l 'azione compiuta
    console.log("Colore dello sfondo modificato!!");
};

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio:

//creo una funzione cambiaIndirizzo
function cambiaIndirizzo() {

    //definisco indirizzoNuovo, ricavando l'elemento dalla classe 'indirizzo'
    const indirizzoNuovo = document.getElementsByClassName('indirizzo');

    //Dato che posso inserire la classe a più elementi, identifico quale elemento con tag 'indirizzo' prendere (inidirizzoNuovo[0])
    //una volta preso lo modifico con .innerHTML
    indirizzoNuovo[0].innerHTML = 'Via Luogo Sconosciuto, 000, Bho';

    //Stampo l'azione compiuta
    console.log("Indirizzo modificato");
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella:

//creo una funzione classeLink
function classeLink(){

    //definisco linkClasse, ricavando l'elemento dei tag 'a'
    const linkClasse = document.getElementsByTagName('a');

    //per ogni elemento 'a', con il toggle aggiungo/elimino la classe 'nuovaClasse'
    for (i = 0; i<linkClasse.length; i++){
        linkClasse[i].classList.toggle('nuovaClasse');
    }

    //stampo l'azione compiuta
    console.log("Classe aggiunta agli a");
};

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella;
//questa classe deve modificare la visibilità/invisibilità dell'immagine:

//creo la funzione appariScompari
function appariScompari(){

    //definisco tendina come l'elemento dei tag img
    const tendina = document.getElementsByTagName('img');

    //ad ognunno di questi con toggle applico il display 'none' quando in origine gli elementi sono in display 'block'
    //viceversa, quando gli elementi sono display 'none' applico il display 'block' 
    for (i = 0; i<tendina.length; i++){
        if (tendina[i].style.display === 'none'){
            tendina[i].style.display = 'block';
        } else {
            tendina[i].style.display = 'none';
        }
    }

    //stampo l'azione compiuta
    console.log("Nascoste o mostrate le immagini dei prodotti");
};

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata:

//creo la funzione cambiaColorePrezzi
function cambiaColorePrezzi() {

    //definisco prezzi come gli elementi CSS con la classe 'prezzo'
    const prezzi = document.querySelectorAll('.prezzo');

    //Ad ognuno di questi applico un colore casuale
    for (let i = 0; i < prezzi.length; i++) {
        const coloreCasuale = '#' + Math.floor(Math.random()*16777215).toString(16);
        prezzi[i].style.color = coloreCasuale;
    }

    //stampo l'azione compiuta
    console.log("Applicati colori casuali ad ognuno dei prezzi");
};