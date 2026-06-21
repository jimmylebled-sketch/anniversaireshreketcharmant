export default function handler(req, res) {

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

    const name = (req.query.name || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    const role = roles[name];

    if (!role) {
        return res.status(404).json({ role: "Inconnu du royaume..." });
    }

    return res.status(200).json({ role });
}