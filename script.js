window.addEventListener("DOMContentLoaded", () => {

    /* 🎵 Récupération des sons en premier */
    const music = document.getElementById("music");
    const click = document.getElementById("click");
    const magic = document.getElementById("magic");

    /* 🏰 Clic sur l'écran d'accueil */
    document.getElementById("startBtn").onclick = () => {
        music.volume = 0.3;
        music.play();
        
        // Cache l'écran d'accueil proprement avec la classe hidden
        document.getElementById("welcomeScreen").classList.add("hidden");
    };

    const roles = {
        "quentin yvé": "Nain joyeux",
        "clara douère": "Sorcière",
        "pierre sinoquet": "Villageois",
        "nicolas lamblin": "Garde Far Far Away",
        "chloé biarnes": "Petit cochon Nouf Nouf",
        "margot jacques": "Villageoise",
        "philippine dero": "Sorcière",
        "titia juif": "Fée Pâquerette",
        "clara fizet": "Sorcière",
        "maud reynes": "Fée Flora",
        "thibault maurice": "Nain Simplet",
        "hector joulin": "Nain Prof",
        "malik el hassiny": "Petit cochon Naf Naf",
        "alhou": "Villageois",
        "jade pavaut": "Petit cochon Nif Nif",
        "antoine renault": "Arthur",
        "yann walbrercq": "Hansel",
        "louise morisse": "Sorcière",
        "alizée breton": "Fée Pimprenelle",
        "gabin nicolas": "Mini Arthur",
        "eugénie molina": "Blanche Neige",
        "andréa": "Gretel",
        "gilles rivières": "Papatissier",
        "julien nicolas": "Nain Grincheux",
        "martin mésonier": "Nain Atchoum",
        "alexis boinet": "Grand Méchant Loup",
        "guillaume lamarche": "Doris",
        "ivan vicente": "Souris aveugle",
        "mathis breton": "Bourreau",
        "kévin martin": "Pinocchio",
        "morgane sanchez torres": "Petit Chaperon Rouge",
        "sébastien vicente": "Souris aveugle",
        "léa bailleul": "Marraine la Bonne Fée",
        "morgane breton": "Cendrillon",
        "bastien stéphan": "Villageois",
        "kévin arhel": "Lord Farquaad",
        "bérénice lebreton": "Dragonne",
        "antoine crevel": "Chat Potté",
        "hadrien grivart": "Grand Biscuit",
        "lancelot mésonier": "Robin des Bois",
        "pauline robin": "Belle au bois dormant",
        "arnaud mouilleron": "L’Âne",
        "justinne lannelongue": "Kitty",
        "antoine duval": "Petit Biscuit",
        "thomas stachowiak": "Souris aveugle",
        "amaury mésonier": "Shrek",
        "astrid barbant": "Raiponce",
        "pauline bennetot": "Reine Lilliane",
        "thomas jean": "Roi Harold",
        "martin lavi": "Tracassin",
        "jimmy lebled": "Charmant",
        "axelle breton": "Fiona",
        "anne-laure folliot": "Sorcière",
        "curtis gomis": "Miroir magique",
        "marie le goadec": "Merlin"
    };

    function normalize(str) {
        return str
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    /* 🤠 bouton découverte */
    document.getElementById("discover").onclick = () => {
        
        // La musique tourne déjà, on s'assure juste qu'elle joue bien
        music.volume = 0.3;
        music.play();

        // On lance le bruit de clic
        click.play();
        const name = normalize(document.getElementById("name").value);
        const role = roles[name];

        // Cache l'écran d'intro et affiche le livre avec les classes
        document.getElementById("intro").classList.add("hidden");
        document.getElementById("bookScreen").classList.remove("hidden");

        setTimeout(() => {
            magic.play();

            document.getElementById("role").innerText =
                role ? role : "Inconnu du royaume...";
        }, 800);
    };

});
