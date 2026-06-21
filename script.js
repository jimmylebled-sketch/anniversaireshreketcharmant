window.addEventListener("DOMContentLoaded", () => {

    /* 🎵 Récupération de tes 3 nouveaux sons */
    const music = document.getElementById("music");
    const click = document.getElementById("click");
    const magic = document.getElementById("magic");

    // On pré-règle le volume de la musique de fond
    music.volume = 0.3;

    /* 🏰 Clic sur l'écran d'accueil */
    document.getElementById("startBtn").onclick = () => {
        click.currentTime = 0;
        click.play();
        music.play();
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

    // Nettoie l'écriture (accents, majuscules, espaces superflus)
    function normalize(str) {
        return str
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, " "); // Remplace les espaces multiples par un seul
    }

    // ✨ NOUVEAU : On crée une liste de rôles entièrement "nettoyée" pour la recherche
    const cleanRoles = {};
    for (let key in roles) {
        cleanRoles[normalize(key)] = roles[key];
    }

    /* 🤠 bouton découverte */
    document.getElementById("discover").onclick = () => {
        music.play();
        click.currentTime = 0;
        click.play();

        // 1. On récupère et nettoie ce que l'invité a tapé
        const userInput = normalize(document.getElementById("name").value);
        
        // 2. Recherche intelligente dans la liste nettoyée (Prénom Nom)
        let role = cleanRoles[userInput];

        if (!role) {
            // Si on ne trouve pas directement, on tente d'inverser les deux mots
            const words = userInput.split(" ");
            if (words.length === 2) {
                const invertedInput = `${words[1]} ${words[0]}`; // Devient "nom prénom"
                role = cleanRoles[invertedInput];
            }
        }

        // 3. Affichage de l'écran du livre
        document.getElementById("intro").classList.add("hidden");
        document.getElementById("bookScreen").classList.remove("hidden");

        setTimeout(() => {
            magic.currentTime = 0;
            magic.play();

            document.getElementById("role").innerText =
                role ? role : "Inconnu du royaume...";
        }, 800);
    };

});
