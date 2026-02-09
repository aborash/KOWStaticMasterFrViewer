// Liste joueur

const joueurs = [
    {
        "nom": "Timothée aka \"Knurlnien\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Thibault aka \"Chapelier\"",
        "region": "Orange",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1989"
    },
    {
        "nom": "Vincent aka \"Beerserkr\"",
        "region": "Orange",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Thierry aka \"El_chatardo\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1970"
    },
    {
        "nom": "Adrien aka \"Pantoufle\"",
        "region": "Orange",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Laurent aka \"BOSS\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1973"
    },
    {
        "nom": "Rachid aka \"Le_Cul_de_Jatte\"",
        "region": "Orange",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Olivier aka \"biak40\"",
        "region": "Orange",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1980"
    },
    {
        "nom": "Michel aka \"Kutchuc\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1964"
    },
    {
        "nom": "Stéphane aka \"EDAEPHNOS\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Mathieu aka \"krypt\"",
        "region": "Orange",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Benjamin aka \"Nabot\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1991"
    },
    {
        "nom": "Luc aka \"Astrabell\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Dominique aka \"MaSeDrIm\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1967"
    },
    {
        "nom": "Nicolas aka \"Nayko_le_Rat\"",
        "region": "Cyan",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/2000"
    },
    {
        "nom": "Paco aka \"Iblis\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1983"
    },
    {
        "nom": "Alban aka \"walach\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "20/12/1987"
    },
    {
        "nom": "Olivier aka \"Orckel\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1972"
    },
    {
        "nom": "Vincent aka \"Julo62\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1979"
    },
    {
        "nom": "Samuel aka \"expunk\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1980"
    },
    {
        "nom": "Bruno aka \"BrG\"",
        "region": "Cyan",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Alex aka \"Alexlesec\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1982"
    },
    {
        "nom": "Jérémie aka \"Kenozan\"",
        "region": "Marron",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1987"
    },
    {
        "nom": "Kenzo aka \"KENZO\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/2016"
    },
    {
        "nom": "Arthur aka \"Pattopesto\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Jean aka \"Twerk\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1992"
    },
    {
        "nom": "Duncan aka \"Dunk\"",
        "region": "Cyan",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1987"
    },
    {
        "nom": "Olivier aka \"Tenekha\"",
        "region": "Cyan",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Claudio aka \"Kappa_Shop\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Steffen aka \"Garuses\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Danilo aka \"TheDoc\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Ivan aka \"Lebic\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Fabrizio aka \"Gv15_19_20\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Konrad aka \"DerHeldderWelt\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Sylvain aka \"Aldarion\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Jacky aka \"Thalantir\"",
        "region": "Cyan",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1981"
    },
    {
        "nom": "Mario aka \"Marmiu\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Damien aka \"Dablama\"",
        "region": "Jaune",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Céleste aka \"Jarekson\"",
        "region": "Vert Clair",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/2000"
    },
    {
        "nom": "Liam aka \"Siilence\"",
        "region": "Vert Clair",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Patrick aka \"AEnoriel\"",
        "region": "Vert Clair",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Xavier aka \"Dalendur\"",
        "region": "Vert Clair",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Quentin aka \"kentx\"",
        "region": "Marron",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1985"
    },
    {
        "nom": "Julien aka \"MyNicknameIsBetterThanYours\"",
        "region": "Jaune",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Clément aka \"Leff\"",
        "region": "Marron",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Kenny aka \"Kintz\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Arthur aka \"AVL\"",
        "region": "Jaune",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1990"
    },
    {
        "nom": "Kevin aka \"Ketep\"",
        "region": "Jaune",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Rodolphe aka \"LuciusForge\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1984"
    },
    {
        "nom": "Maxime aka \"Fao\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Julien aka \"Poliorcetic\"",
        "region": "Marron",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Mathieu aka \"Mamatt89\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Joris aka \"Jawjaw\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/2000"
    },
    {
        "nom": "Morphée aka \"morphee_joker\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Kevin aka \"VargLeRedoutable\"",
        "region": "Cyan",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1990"
    },
    {
        "nom": "Maxime aka \"Maximork\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "James aka \"Sousou\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Willy aka \"wil_ly\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Eric aka \"eric\"",
        "region": "Orange",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Maxime aka \"Khardaos\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "(anonyme)",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Sylvain aka \"Helvain\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1973"
    },
    {
        "nom": "Argozs aka \"Argozs_Nai_Quasser\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Philippe aka \"kraspeck\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Sylvain aka \"magoran\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Denis aka \"Arkhaon\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Baptiste aka \"Thorgrimleouf\"",
        "region": "Vert Clair",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Lancelot aka \"Lancelot71\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Éric aka \"erwik\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Protéus aka \"Proteus\"",
        "region": "Violet",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Pierre-Antoine aka \"CH1PS\"",
        "region": "Jaune",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1992"
    },
    {
        "nom": "Mathieu aka \"Beji\"",
        "region": "Orange",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Eric aka \"Garzak\"",
        "region": "Orange",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Emmanuel aka \"Emariv\"",
        "region": "Orange",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Sylvain aka \"Catchan\"",
        "region": "Cyan",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Gaëtan aka \"Zeeloy\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Jean-Luc aka \"pepestilence\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Kevin aka \"firegantelet\"",
        "region": "Jaune",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Mathis aka \"Demo\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Bruno aka \"Leloup\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Nataël aka \"Rako\"",
        "region": "Vert Clair",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Pierre aka \"PinusDePrusse\"",
        "region": "Vert Clair",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Elias aka \"Morzaad\"",
        "region": "Vert Clair",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/2008"
    },
    {
        "nom": "Ryan aka \"Wugga\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Antonio aka \"Theodrid\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Miguel Angel S.",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Oscar M.",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Impair aka \"Impair\"",
        "region": "",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Olivier aka \"ollv\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Eric aka \"Crom-_-\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Pierre aka \"meg\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Christophe aka \"galahad59\"",
        "region": "Vert",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Vincent aka \"vince3310\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "Sebastien aka \"Ysardul\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1968"
    },
    {
        "nom": "Guilhem aka \"Lauzerg974\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/2008"
    },
    {
        "nom": "Nicolas aka \"Taybard\"",
        "region": "Rouge",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
    {
        "nom": "albin aka \"Lyhnnae\"",
        "classement": 7,
        "region": "Jaune",
        "listeClassements": [],
        "pointTotal": 0,
        "DateNaissance": "01/01/1900"
    },
	

];
window.mockPlayer = joueurs;