
// Liste joueur

const joueurs = [
    {
        "nom": "Timothée aka \"Knurlnien\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Thibault aka \"Chapelier\"",
        "region": "Aquitaine",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Vincent aka \"Beerserkr\"",
        "region": "Aquitaine",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Thierry aka \"El_chatardo\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Adrien aka \"Pantoufle\"",
        "region": "Aquitaine",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Laurent aka \"BOSS\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Rachid aka \"Le_Cul_de_Jatte\"",
        "region": "Aquitaine",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Olivier aka \"biak40\"",
        "region": "Aquitaine",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Michel aka \"Kutchuc\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Stéphane aka \"EDAEPHNOS\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Mathieu aka \"krypt\"",
        "region": "Aquitaine",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Benjamin aka \"Nabot\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Luc aka \"Astrabell\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Dominique aka \"MaSeDrIm\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Nicolas aka \"Nayko_le_Rat\"",
        "region": "Est",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Paco aka \"Iblis\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Alban aka \"walach\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Olivier aka \"Orckel\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Vincent aka \"Julo62\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Samuel aka \"expunk\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Bruno aka \"BrG\"",
        "region": "Est",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Alex aka \"Alexlesec\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Jérémie aka \"Kenozan\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Kenzo aka \"KENZO\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Arthur aka \"Pattopesto\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Jean aka \"Twerk\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Duncan aka \"Dunk\"",
        "region": "Est",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Olivier aka \"Tenekha\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Claudio aka \"Kappa_Shop\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Steffen aka \"Garuses\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Danilo aka \"TheDoc\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Ivan aka \"Lebic\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Fabrizio aka \"Gv15_19_20\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Konrad aka \"DerHeldderWelt\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Sylvain aka \"Aldarion\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Jacky aka \"Thalantir\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Mario aka \"Marmiu\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Damien aka \"Dablama\"",
        "region": "Auvergne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Céleste aka \"Jarekson\"",
        "region": "Alpes",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Liam aka \"Siilence\"",
        "region": "Alpes",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Patrick aka \"AEnoriel\"",
        "region": "Alpes",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Xavier aka \"Dalendur\"",
        "region": "Alpes",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Quentin aka \"kentx\"",
        "region": "Bretagne-Normandie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Julien aka \"MyNicknameIsBetterThanYours\"",
        "region": "Loire",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Clément aka \"Leff\"",
        "region": "Bretagne-Normandie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Kenny aka \"Kintz\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Arthur aka \"AVL\"",
        "region": "Loire",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Kevin aka \"Ketep\"",
        "region": "Auvergne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Rodolphe aka \"LuciusForge\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Maxime aka \"Fao\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Julien aka \"Poliorcetic\"",
        "region": "Bretagne-Normandie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Mathieu aka \"Mamatt89\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Joris aka \"Jawjaw\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Morphée aka \"morphee_joker\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Kevin aka \"VargLeRedoutable\"",
        "region": "Est",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Maxime aka \"Maximork\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "James aka \"Sousou\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Willy aka \"wil_ly\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Eric aka \"eric\"",
        "region": "Aquitaine",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Maxime aka \"Khardaos\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "(anonyme)",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Sylvain aka \"Helvain\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Argozs aka \"Argozs_Nai_Quasser\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Philippe aka \"kraspeck\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Sylvain aka \"magoran\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Denis aka \"Arkhaon\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Baptiste aka \"Thorgrimleouf\"",
        "region": "Alpes",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Lancelot aka \"Lancelot71\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Éric aka \"erwik\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Protéus aka \"Proteus\"",
        "region": "Ardenne-Bourgogne",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Pierre-Antoine aka \"CH1PS\"",
        "region": "Loire",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Mathieu aka \"Beji\"",
        "region": "Aquitaine",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Eric aka \"Garzak\"",
        "region": "Aquitaine",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Emmanuel aka \"Emariv\"",
        "region": "Aquitaine",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Sylvain aka \"Catchan\"",
        "region": "Est",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Gaëtan aka \"Zeeloy\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Jean-Luc aka \"pepestilence\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Kevin aka \"firegantelet\"",
        "region": "Loire",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Mathis aka \"Demo\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Bruno aka \"Leloup\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Nataël aka \"Rako\"",
        "region": "Alpes",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Pierre aka \"PinusDePrusse\"",
        "region": "Alpes",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Elias aka \"Morzaad\"",
        "region": "Alpes",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Ryan aka \"Wugga\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Antonio aka \"Theodrid\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Miguel Angel S.",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Oscar M.",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Impair aka \"Impair\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Olivier aka \"ollv\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Eric aka \"Crom-_-\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Pierre aka \"meg\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Christophe aka \"galahad59\"",
        "region": "Nord",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Vincent aka \"vince3310\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Sebastien aka \"Ysardul\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    },
    {
        "nom": "Guilhem aka \"Lauzerg974\"",
        "region": "Occitanie",
        "listeClassements": [],
        "pointTotal": 0
    }

	

];
window.mockPlayer = joueurs;