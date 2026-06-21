window.addEventListener("DOMContentLoaded", () => {

    /* 🎵 Récupération de tes 3 sons */
    const music = document.getElementById("music");
    const click = document.getElementById("click");
    const magic = document.getElementById("magic");

    // Réglage initial du volume
    if (music) music.volume = 0.3;

    /* 🏰 Clic sur l'écran d'accueil */
    document.getElementById("startBtn").onclick = () => {
        // ✨ L'ASTUCE MOBILE : On force le décodage et la lecture immédiate des 3 sons
        // au premier clic physique pour les autoriser sur smartphone.
        try {
            if (click) {
                click.currentTime = 0;
                click.play().catch(e => console.log("Clic init"));
            }
            if (music) {
                music.play().catch(e => console.log("Musique init"));
            }
            if (magic) {
                // On "lance" un micro-instant de magie muet pour débloquer le son sur iPhone
                magic.play().then(() => {
                    magic.pause();
                    magic.currentTime = 0;
                }).catch(e => console.log("Magic init"));
            }
        } catch (error) {
            console.log("Erreur d'initialisation audio ignorée");
        }
        
        // On cache l'écran d'accueil
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
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, " ");
    }

    const cleanRoles = {};
    for (let key in roles) {
        cleanRoles[normalize(key)] = roles[key];
    }

    /* 🤠 bouton découverte */
    document.getElementById("discover").onclick = () => {
        try {
            if (click) {
                click.currentTime = 0;
                click.play().catch(e => {});
            }
        } catch (e) {}

        const userInput = normalize(document.getElementById("name").value);
        let role = cleanRoles[userInput];

        if (!role) {
            const words = userInput.split(" ");
            if (words.length === 2) {
                const invertedInput = `${words[1]} ${words[0]}`;
                role = cleanRoles[invertedInput];
            }
        }

        document.getElementById("intro").classList.add("hidden");
        document.getElementById("bookScreen").classList.remove("hidden");

        setTimeout(() => {
            try {
                if (magic) {
                    magic.currentTime = 0;
                    magic.play().catch(e => {});
                }
            } catch (e) {}

            document.getElementById("role").innerText =
                role ? role : "Inconnu du royaume...";
        }, 800);
    };

});
