
// Liste joueur

const joueurs = [
    {
        "nom": "Timothée aka \"Knurlnien\"",
        "region": "Occitanie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Thibault aka \"Chapelier\"",
        "region": "Aquitaine",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Vincent aka \"Beerserkr\"",
        "region": "Aquitaine",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Thierry aka \"El_chatardo\"",
        "region": "Occitanie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Adrien aka \"Pantoufle\"",
        "region": "Aquitaine",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Laurent aka \"BOSS\"",
        "region": "Occitanie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Rachid aka \"Le_Cul_de_Jatte\"",
        "region": "Aquitaine",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Olivier aka \"biak40\"",
        "region": "Aquitaine",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Michel aka \"Kutchuc\"",
        "region": "Occitanie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Stéphane aka \"EDAEPHNOS\"",
        "region": "Occitanie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Mathieu aka \"krypt\"",
        "region": "Aquitaine",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Benjamin aka \"Nabot\"",
        "region": "Occitanie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Luc aka \"Astrabell\"",
        "region": "Occitanie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Dominique aka \"MaSeDrIm\"",
        "region": "Occitanie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Nicolas aka \"Nayko_le_Rat\"",
        "region": "Est",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Paco aka \"Iblis\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Alban aka \"walach\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Olivier aka \"Orckel\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Vincent aka \"Julo62\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Samuel aka \"expunk\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Bruno aka \"BrG\"",
        "region": "Est",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Alex aka \"Alexlesec\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Jérémie aka \"Kenozan\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Kenzo aka \"KENZO\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Arthur aka \"Pattopesto\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Jean aka \"Twerk\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Duncan aka \"Dunk\"",
        "region": "Est",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Olivier aka \"Tenekha\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Claudio aka \"Kappa_Shop\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Steffen aka \"Garuses\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Danilo aka \"TheDoc\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Ivan aka \"Lebic\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Fabrizio aka \"Gv15_19_20\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Konrad aka \"DerHeldderWelt\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Sylvain aka \"Aldarion\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Jacky aka \"Thalantir\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Mario aka \"Marmiu\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Damien aka \"Dablama\"",
        "region": "Auvergne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Céleste aka \"Jarekson\"",
        "region": "Auvergne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Liam aka \"Siilence\"",
        "region": "Alpes",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Patrick aka \"AEnoriel\"",
        "region": "Alpes",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Xavier aka \"Dalendur\"",
        "region": "Alpes",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Quentin aka \"kentx\"",
        "region": "Bretagne-Normandie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Julien aka \"MyNicknameIsBetterThanYours\"",
        "region": "Loire",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Clément aka \"Leff\"",
        "region": "Bretagne-Normandie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Kenny aka \"Kintz\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Arthur aka \"AVL\"",
        "region": "Loire",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Kevin aka \"Ketep\"",
        "region": "Auvergne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Rodolphe aka \"LuciusForge\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Maxime aka \"Fao\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Julien aka \"Poliorcetic\"",
        "region": "Bretagne-Normandie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Mathieu aka \"Mamatt89\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Joris aka \"Jawjaw\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Morphée aka \"morphee_joker\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Kevin aka \"VargLeRedoutable\"",
        "region": "Est",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Maxime aka \"Maximork\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "James aka \"Sousou\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Willy aka \"wil_ly\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Eric aka \"eric\"",
        "region": "Aquitaine",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Maxime aka \"Khardaos\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "(anonyme)",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Sylvain aka \"Helvain\"",
        "region": "Occitanie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Argozs aka \"Argozs_Nai_Quasser\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Philippe aka \"kraspeck\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Sylvain aka \"magoran\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Denis aka \"Arkhaon\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Baptiste aka \"Thorgrimleouf\"",
        "region": "Alpes",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Lancelot aka \"Lancelot71\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Éric aka \"erwik\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Protéus aka \"Proteus\"",
        "region": "Ardenne-Bourgogne",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Pierre-Antoine aka \"CH1PS\"",
        "region": "Loire",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Mathieu aka \"Beji\"",
        "region": "Aquitaine",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Eric aka \"Garzak\"",
        "region": "Aquitaine",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Emmanuel aka \"Emariv\"",
        "region": "Aquitaine",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Sylvain aka \"Catchan\"",
        "region": "Est",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Gaëtan aka \"Zeeloy\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Jean-Luc aka \"pepestilence\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Kevin aka \"firegantelet\"",
        "region": "Loire",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Mathis aka \"Demo\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Bruno aka \"Leloup\"",
        "region": "Occitanie",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Nataël aka \"Rako\"",
        "region": "Alpes",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Pierre aka \"PinusDePrusse\"",
        "region": "Alpes",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Elias aka \"Morzaad\"",
        "region": "Alpes",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Ryan aka \"Wugga\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Antonio aka \"Theodrid\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Miguel Angel S.",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Oscar M.",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Impair aka \"Impair\"",
        "region": "",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Olivier aka \"ollv\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Eric aka \"Crom-_-\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Pierre aka \"meg\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    },
    {
        "nom": "Christophe aka \"galahad59\"",
        "region": "Nord",
        "classements": [],
        "pointTotal": 0
    }

];
window.mockPlayer = joueurs;