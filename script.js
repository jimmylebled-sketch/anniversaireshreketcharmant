window.addEventListener("DOMContentLoaded", () => {

    // 🧠 Création du contexte audio ultra-rapide (Web Audio API)
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    // Dictionnaire pour stocker les fichiers décodés en mémoire vive
    const soundBuffers = {};

    // Fonction pour charger un son directement dans la RAM
    async function loadSound(name, url) {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            soundBuffers[name] = await audioCtx.decodeAudioData(arrayBuffer);
        } catch (e) {
            console.error("Erreur de chargement du son : " + name, e);
        }
    }

    // On lance le chargement immédiat des bruitages en tâche de fond
    loadSound("click", "click.mp3");
    loadSound("magic", "magic.mp3");

    // Fonction pour jouer un bruitage instantanément sans AUCUNE latence
    function playInstantSound(name) {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const buffer = soundBuffers[name];
        if (buffer) {
            const soundSource = audioCtx.createBufferSource();
            soundSource.buffer = buffer;
            soundSource.connect(audioCtx.destination);
            soundSource.start(0); // Lancement à la micro-seconde près
        }
    }

    /* 🎵 La musique de fond reste sur l'ancienne méthode car elle est longue, 
       mais on la récupère ici */
    const music = document.getElementById("music");
    music.volume = 0.3;

    /* 🏰 Clic sur l'écran d'accueil */
    document.getElementById("startBtn").onclick = () => {
        // Active le contexte audio (requis par les navigateurs mobiles)
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        // ⚡ Bruit de clic instantané depuis la RAM
        playInstantSound("click");

        // Lancement immédiat de la musique de fond
        music.play();
        
        // Cache l'écran d'accueil
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
        // On s'assure que la musique tourne toujours bien
        music.play();

        // ⚡ Bruit de clic instantané depuis la RAM
        playInstantSound("click");

        const name = normalize(document.getElementById("name").value);
        const role = roles[name];

        // Cache l'écran d'intro et affiche le livre
        document.getElementById("intro").classList.add("hidden");
        document.getElementById("bookScreen").classList.remove("hidden");

        setTimeout(() => {
            // ⚡ Son magique instantané depuis la RAM
            playInstantSound("magic");

            document.getElementById("role").innerText =
                role ? role : "Inconnu du royaume...";
        }, 800);
    };

});
