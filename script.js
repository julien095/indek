// DARK MODE

const btn = document.getElementById("theme-btn");

btn.addEventListener("click", function () {
document.body.classList.toggle("dark");


if (document.body.classList.contains("dark")) {
    btn.innerText = "☀️";
} else {
    btn.innerText = "🌙";
}


});

// MENI HAMBURGER

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-links a");

menuIcon.addEventListener("click", function () {
navLinks.classList.toggle("active");
});

links.forEach(function (link) {
link.addEventListener("click", function () {
navLinks.classList.remove("active");
});
});

// pati lang lan


// pati lang lan

const langToggle = document.getElementById("langToggle");
const langMenu = document.querySelector(".menu");

const searchInput = document.getElementById("searchInput");
const tit = document.getElementById("tit");
const soustit = document.getElementById("soustit");

const title = document.getElementById("tite");
const soustite = document.getElementById("soustite"); 

const analyseTitre = document.getElementById("analyse-titre");
const analyseText = document.getElementById("analyse-text");

const galriTitre = document.getElementById("galri-titre");
const retounenBtn = document.getElementById("retounen-btn");
const suivanBtn = document.getElementById("suivan-btn");


const heroTit = document.getElementById("hero-tit");
const heroSoustit = document.getElementById("hero-soustit");
const heroBtn = document.getElementById("hero-btn");

const footerContact = document.getElementById("footer-contact");
const footerText = document.getElementById("footer-text");

//


langToggle.addEventListener("click", function (e) {
e.stopPropagation();
langMenu.classList.toggle("show");
});

document.addEventListener("click", function () {
langMenu.classList.remove("show");
});

// traduction

function chwaziLang(lang) {


langMenu.classList.remove("show");

chanjeTyped(lang);

if (lang === "fr") {



    if (tit) tit.innerText = "Bienvenue sur PowerMusic";

    if (soustit) {
        soustit.innerText = "La meilleure plateforme pour écouter vos titres préférés.";
    }

    if (searchInput) {
        searchInput.placeholder = "Chercher une musique...";
    }

    langToggle.innerText = "Langue";


    if (analyseTitre) {
        analyseTitre.innerText = "Analyser la playlist";
    }

    if (analyseText) {
        analyseText.innerText =
        "Découvrez des informations sur votre playlist, le nombre de titres, les genres musicaux et d'autres détails qui peuvent vous aider à mieux organiser votre musique.";
    }


    if (galriTitre) {
        galriTitre.innerText = "Galerie Power Music";
    }

    if (retounenBtn) {
        retounenBtn.innerHTML = "&#11013; Retour";
    }

    if (suivanBtn) {
        suivanBtn.innerHTML = "Suivant &#10145;";
    }


    if (heroSoustit) {
        heroSoustit.innerText = "le meilleur endroit pour vous";
    }

    if (heroBtn) {
        heroBtn.innerText = "Commencer";
    }


    if (footerContact) {
        footerContact.innerText = "Contact :";
    }

    if (footerText) {
        footerText.innerText =
        "@PowerMusic - La plateforme pour écouter les meilleures musiques";
    }

}


else if (lang === "en") {

    if (tit) tit.innerText = "Welcome to PowerMusic";

    if (soustit) {
        soustit.innerText = "The best platform to listen to your favorite tracks.";
    }

    if (searchInput) {
        searchInput.placeholder = "Search for a song...";
    }

    langToggle.innerText = "Language";


    if (analyseTitre) {
        analyseTitre.innerText = "Analyze Playlist";
    }

    if (analyseText) {
        analyseText.innerText =
        "Discover information about your playlist, track count, music genres, and other details to help you better organize your music.";
    }


    if (galriTitre) {
        galriTitre.innerText = "Power Music Gallery";
    }

    if (retounenBtn) {
        retounenBtn.innerHTML = "&#11013; Back";
    }

    if (suivanBtn) {
        suivanBtn.innerHTML = "Next &#10145;";
    }


    if (heroSoustit) {
        heroSoustit.innerText = "the best place for you";
    }

    if (heroBtn) {
        heroBtn.innerText = "Start";
    }


    if (footerContact) {
        footerContact.innerText = "Contact:";
    }

    if (footerText) {
        footerText.innerText =
        "@PowerMusic - The platform to listen to the best music";
    }

}


else if (lang === "pt") {

    if (tit) tit.innerText = "Bem-vindo ao PowerMusic";

    if (soustit) {
        soustit.innerText = "A melhor plataforma para ouvir suas músicas favoritas.";
    }

    if (searchInput) {
        searchInput.placeholder = "Pesquisar uma música...";
    }

    langToggle.innerText = "Idioma";


    if (analyseTitre) {
        analyseTitre.innerText = "Analisar Playlist";
    }

    if (analyseText) {
        analyseText.innerText =
        "Descubra informações sobre sua playlist, número de músicas, gêneros musicais e outros detalhes para ajudar a organizar melhor suas músicas.";
    }


    if (galriTitre) {
        galriTitre.innerText = "Galeria Power Music";
    }

    if (retounenBtn) {
        retounenBtn.innerHTML = "&#11013; Voltar";
    }

    if (suivanBtn) {
        suivanBtn.innerHTML = "Próximo &#10145;";
    }


    if (heroSoustit) {
        heroSoustit.innerText = "o melhor lugar para você";
    }

    if (heroBtn) {
        heroBtn.innerText = "Começar";
    }


    if (footerContact) {
        footerContact.innerText = "Contato:";
    }

    if (footerText) {
        footerText.innerText =
        "@PowerMusic - A plataforma para ouvir as melhores músicas";
    }

}


else if (lang === "es") {

    if (tit) tit.innerText = "Bienvenido a PowerMusic";

    if (soustit) {
        soustit.innerText = "La mejor plataforma para escuchar tus canciones favoritas.";
    }

    if (searchInput) {
        searchInput.placeholder = "Buscar una canción...";
    }

    langToggle.innerText = "Idioma";


    if (analyseTitre) {
        analyseTitre.innerText = "Analizar la Playlist";
    }

    if (analyseText) {
        analyseText.innerText =
        "Descubre información sobre tu playlist, cantidad de canciones, géneros musicales y otros detalles que te ayudarán a organizar mejor tu música.";
    }


    if (galriTitre) {
        galriTitre.innerText = "Galería Power Music";
    }

    if (retounenBtn) {
        retounenBtn.innerHTML = "&#11013; Volver";
    }

    if (suivanBtn) {
        suivanBtn.innerHTML = "Siguiente &#10145;";
    }


    if (heroSoustit) {
        heroSoustit.innerText = "el mejor lugar para ti";
    }

    if (heroBtn) {
        heroBtn.innerText = "Comenzar";
    }


    if (footerContact) {
        footerContact.innerText = "Contacto:";
    }

    if (footerText) {
        footerText.innerText =
        "@PowerMusic - La plataforma para escuchar la mejor música";
    }

}


else if (lang === "ht") {

    if (tit) tit.innerText = "Byenveni sou PowerMusic";

    if (soustit) {
        soustit.innerText = "Pi bon platfòm pou koute mizik ou renmen yo.";
    }

    if (searchInput) {
        searchInput.placeholder = "Chache yon mizik...";
    }

    langToggle.innerText = "Lang";


    if (analyseTitre) {
        analyseTitre.innerText = "Analize Playlist la";
    }

    if (analyseText) {
        analyseText.innerText =
        "Dekouvri enfòmasyon sou playlist ou a, kantite mizik, estil mizikal yo, ak lòt detay ki ka ede w pi byen òganize mizik ou yo.";
    }


    if (galriTitre) {
        galriTitre.innerText = "Galri Power Music";
    }

    if (retounenBtn) {
        retounenBtn.innerHTML = "&#11013; Retounen";
    }

    if (suivanBtn) {
        suivanBtn.innerHTML = "Suivan &#10145;";
    }


    if (heroSoustit) {
        heroSoustit.innerText = "ou pi bon kote a";
    }

    if (heroBtn) {
        heroBtn.innerText = "Koumanse";
    }


    if (footerContact) {
        footerContact.innerText = "Kontak:";
    }

    if (footerText) {
        footerText.innerText =
        "@PowerMusic - Platfòm pou w tande pi bon mizik yo";
    }

}

if (lang === "fr") {


heroTit.innerText = "Nous sommes :";
heroSoustit.innerText = "le meilleur endroit pour vous";
heroBtn.innerText = "Commencer";


}

else if (lang === "en") {


heroTit.innerText = "We are:";
heroSoustit.innerText = "the best place for you";
heroBtn.innerText = "Start";


}

else if (lang === "pt") {


heroTit.innerText = "Nós somos:";
heroSoustit.innerText = "o melhor lugar para você";
heroBtn.innerText = "Começar";


}

else if (lang === "es") {


heroTit.innerText = "Somos:";
heroSoustit.innerText = "el mejor lugar para ti";
heroBtn.innerText = "Comenzar";


}

else if (lang === "ht") {


heroTit.innerText = "Nou se:";
heroSoustit.innerText = "ou pi bon kote a";
heroBtn.innerText = "Koumanse";


}

if (lang === "fr") {

    if (tit) {
        tit.innerText = "Bienvenue sur PowerMusic";
    }

    if (soustit) {
        soustite.innerText = "La meilleure plateforme pour écouter vos titres préférés.";
    }

    langToggle.innerText = "Langue";
}


else if (lang === "en") {

    if (tit) {
        tit.innerText = "Welcome to PowerMusic";
    }

    if (soustit) {
        soustit.innerText = "The best platform to listen to your favorite tracks.";
    }

    langToggle.innerText = "Language";
}


else if (lang === "pt") {

    if (tit) {
        tit.innerText = "Bem-vindo ao PowerMusic";
    }

    if (soustit) {
        soustit.innerText = "A melhor plataforma para ouvir suas músicas favoritas.";
    }

    langToggle.innerText = "Idioma";
}


else if (lang === "es") {

    if (tit) {
        tit.innerText = "Bienvenido a PowerMusic";
    }

    if (soustit) {
        soustit.innerText = "La mejor plataforma para escuchar tus canciones favoritas.";
    }

    langToggle.innerText = "Idioma";
}


else if (lang === "ht") {

    if (tit) {
        tit.innerText = "Byenveni sou PowerMusic";
    }

    if (soustit) {
        soustit.innerText = "Pi bon platfòm pou koute mizik ou renmen yo.";
    }

    langToggle.innerText = "Lang";
}

}

//
var typed = new Typed(".auto-type", {


strings: [
    "Pwograme",
    "Devlope",
    "Responsab Power Music"
],

typeSpeed: 150,
backSpeed: 150,
loop: true


});

/* TRADIKSYON TÈKS KI REPETE NAN HERO */

function chanjeTyped(lang) {


if (lang === "fr") {

    typed.destroy();

    typed = new Typed(".auto-type", {
        strings: [
            "Programmer",
            "Développer",
            "Responsable de Power Music"
        ],

        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

}

else if (lang === "en") {

    typed.destroy();

    typed = new Typed(".auto-type", {
        strings: [
            "Programmer",
            "Developer",
            "Power Music Manager"
        ],

        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

}

else if (lang === "pt") {

    typed.destroy();

    typed = new Typed(".auto-type", {
        strings: [
            "Programador",
            "Desenvolvedor",
            "Responsável pela Power Music"
        ],

        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

}

else if (lang === "es") {

    typed.destroy();

    typed = new Typed(".auto-type", {
        strings: [
            "Programador",
            "Desarrollador",
            "Responsable de Power Music"
        ],

        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

}

else if (lang === "ht") {

    typed.destroy();

    typed = new Typed(".auto-type", {
        strings: [
            "Pwograme",
            "Devlope",
            "Responsab Power Music"
        ],

        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

}

}


// CHANGEMENT IMAGE HERO

let hero = document.querySelector(".hero");

let images = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6v5Ov_N0nWiyOe5q3P_QbxPDIXKjkkCEBc6z-ZRcPg&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYF1KuuYD6a5HR9zWOimR2RyxgzH5zDOHAvmuLSpTSw&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatE-pm-gqnsj7LN61_cRly112KW9fakccmKUzxBnc2Q&s=10"
];

let index = 0;

if (hero) {


setInterval(function () {

    index++;

    if(index >= images.length){
        index = 0;
    }

    hero.style.backgroundImage = `url(${images[index]})`;

}, 3000);


}

// RECHÈCH MUSIC

const searchBtn = document.getElementById("searchBtn");

function searchMusic() {


const value = searchInput.value.toLowerCase().trim();

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    const title = card.querySelector("h3").innerText.toLowerCase();

    const artist = card.querySelector("p").innerText.toLowerCase();

    if (title.includes(value) || artist.includes(value)) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }

});


}

searchBtn.addEventListener("click", searchMusic);

searchInput.addEventListener("keyup", function(event){


if(event.key === "Enter"){
    searchMusic();
}


});

// GALRI

const imajyo = [
"image music 1.jfif",
"images (3).jfif",
"images musi.jfif",
"images music).jfif",
"images (2).jfif"
];

let pozisyon = 0;

const imaj = document.getElementById("imaj");
const boutonSuivan = document.querySelector(".suivan");
const boutonRetounen = document.querySelector(".retounen");
const pwenYo = document.querySelectorAll(".pwen");

function montreImaj(index){
pozisyon = index;
imaj.src = imajyo[pozisyon];
verifyeBoutonYo();
aktivePwen();
}

function suivanImaj(){
if(pozisyon < imajyo.length - 1){
pozisyon++;
montreImaj(pozisyon);
}
}

function retounenImaj(){
if(pozisyon > 0){
pozisyon--;
montreImaj(pozisyon);
}
}

function verifyeBoutonYo() {
     boutonRetounen.disabled = pozisyon === 0; boutonSuivan.disabled = pozisyon === imajyo.length - 1; 
    } 
     function aktivePwen() { pwenYo.forEach(pwen => { pwen.classList.remove("aktif"); 

     }); 
     pwenYo[pozisyon].classList.add("aktif"); 
    } 
montreImaj(0);

const bouton = document.getElementById("whatsapp")

bouton.addEventListener("click", function(){
    const numero = "50947269168"
    const message = "Mwen vle plis enfomasyon sou sit sa"
    const link =
    "https://wa.me/"
    + numero
    + "?text="
    + encodeURIComponent(message)

    window.open(link, "blank");
});

 const kesyon = document.querySelectorAll(".kesyon");

kesyon.forEach(function(kesyonAn) {

    kesyonAn.addEventListener("click", function() {

        const repons = kesyonAn.nextElementSibling;
        const siy = kesyonAn.querySelector(".siy");

        repons.classList.toggle("actif");

        if (repons.classList.contains("actif")) {
            siy.textContent = "-";
        } else {
            siy.textContent = "+";
        }

    });

});

function aleDezyem() {
    if (siyati.value === "" || non.value === "" || imel.value === "") {
        mesaj.textContent = "Ranpli tout chan yo";
    } else {
        mesaj.textContent = "";
        premye.style.display = "none";
        dezyem.style.display = "block";
    }
}

function aleTwayem() {
    if (itilizate.value === "" || modpas.value === "" || konfimasyon.value === "") {
        mesaj.textContent = "Ranpli tout chan yo";
    } else if (modpas.value !== konfimasyon.value) {
        mesaj.textContent = "Modpas yo dwe menm, tanpri";
    } else {
        mesaj.textContent = "";
        dezyem.style.display = "none";
        twazyem.style.display = "block";
    }
}

function tounenPremye() {
    mesaj.textContent = "";
    premye.style.display = "block";
    dezyem.style.display = "none";
}

function tounenDezyem() {
    mesaj.textContent = "";
    dezyem.style.display = "block";
    twazyem.style.display = "none";
}

function enskri() {
    if (telefon.value === "" || vil.value === "" || peyi.value === "") {
        mesaj.textContent = "Ranpli tout chan yo";
    } else {
        mesaj.textContent = "";
        reyisi.textContent = "Enskripsyon fet avek sikse";

        setTimeout(function() {
            fomEnskripsyon.submit();
        }, 3000);
    }
}