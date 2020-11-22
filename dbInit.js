let mongo = require("mongodb").MongoClient;
let ObjectId = require('mongodb').ObjectId;
let config = require('./config');

mongo.connect(config.pool, function (err, database) {

    if (err) {
        console.error('Problem connecting to database');
    } else {
        let db = database.db('TVZShop');
        let counties = [
            {name: 'ZAGREBAČKA'},
            {name: 'KRAPINSKO-ZAGORSKA'},
            {name: 'SISAČKO-MOSLAVAČKA'},
            {name: 'KARLOVAČKA'},
            {name: 'VARAŽDINSKA'},
            {name: 'KOPRIVNIČKO-KRIŽEVAČKA'},
            {name: 'BJELOVARSKO-BILOGORSKA'},
            {name: 'PRIMORSKO-GORANSKA'},
            {name: 'LIČKO-SENJSKA'},
            {name: 'VIROVITIČKO-PODRAVSKA'},
            {name: 'POŽEŠKO-SLAVONSKA'},
            {name: 'BRODSKO-POSAVSKA'},
            {name: 'ZADARSKA'},
            {name: 'OSJEČKO-BARANJSKA'},
            {name: 'ŠIBENSKO-KNINSKA'},
            {name: 'VUKOVARSKO-SRIJEMSKA'},
            {name: 'SPLITSKO-DALMATINSKA'},
            {name: 'DUBROVAČKO-NERETVANSKA'},
            {name: 'MEĐIMURSKA'},
            {name: 'GRAD ZAGREB'}
        ];

        db.collection('county').insertMany(counties, function (err, data) {
            if (!err) {
                console.log("Zupanije uspješno inicijalizirane u bazu NJPOglasnikAppLoncaric pod kolekcijom zupanije\n");
            } else{
                console.log("Error: Zupanije nisu  inicijalizirane u bazu NJPOglasnikAppLoncaric pod kolekcijom zupanije\n");
            }
        });

        let cities = [
            {
                county: 'ZAGREBAČKA',
                name: 'DUGO SELO'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'IVANIĆ-GRAD'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'JASTREBARSKO'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'SAMOBOR'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'SVETA NEDELJA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'SVETI IVAN ZELINA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'VELIKA GORICA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'VRBOVEC'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'ZAPREŠIĆ'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'BEDENICA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'BISTRA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'BRCKOVLJANI'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'BRDOVEC'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'DUBRAVA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'DUBRAVICA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'FARKAŠEVAC'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'GRADEC'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'JAKOVLJE'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'KLINČA SELA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'KLOŠTAR IVANIĆ'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'KRAŠIĆ'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'KRAVARSKO'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'KRIŽ'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'LUKA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'MARIJA GORICA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'ORLE'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'PISAROVINA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'POKUPSKO'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'PRESEKA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'PUŠĆA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'RAKOVEC'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'RUGVICA'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'STUPNIK'
            },
            {
                county: 'ZAGREBAČKA',
                name: 'ŽUMBERAK'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'DONJA STUBICA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'KLANJEC'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'KRAPINA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'OROSLAVJE'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'PREGRADA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'ZABOK'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'ZLATAR'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'BEDEKOVČINA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'BUDINŠČINA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'DESINIĆ'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'ĐURMANEC'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'GORNJA STUBICA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'HRAŠĆINA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'HUM NA SUTLI'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'JESENJE'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'KONJŠČINA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'KRALJEVEC NA SUTLI'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'KRAPINSKE TOPLICE'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'KUMROVEC'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'LOBOR'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'MAČE'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'MARIJA BISTRICA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'MIHOVLJAN'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'NOVI GOLUBOVEC'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'PETROVSKO'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'RADOBOJ'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'STUBIČKE TOPLICE'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'SVETI KRIŽ ZAČRETJE'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'TUHELJ'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'VELIKO TRGOVIŠĆE'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'ZAGORSKA SELA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                name: 'ZLATAR-BISTRICA'
            },
            {
                county: 'KRAPINSKO-ZAGORSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'KRAPINSKO-ZAGORSKA'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'GLINA'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'HRVATSKA KOSTAJNICA'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'KUTINA'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'NOVSKA'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'PETRINJA'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'SISAK'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'DONJI KUKURUZARI'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'DVOR'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'GVOZD'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'HRVATSKA DUBICA'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'JASENOVAC'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'LEKENIK'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'LIPOVLJANI'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'MAJUR'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'MARTINSKA VES'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'POPOVAČA'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'SUNJA'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'TOPUSKO'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                name: 'VELIKA LUDINA'
            },
            {
                county: 'SISAČKO-MOSLAVAČKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'SISAČKO-MOSLAVAČKA'
            },
            {
                county: 'KARLOVAČKA',
                name: 'DUGA RESA'
            },
            {
                county: 'KARLOVAČKA',
                name: 'KARLOVAC'
            },
            {
                county: 'KARLOVAČKA',
                name: 'OGULIN'
            },
            {
                county: 'KARLOVAČKA',
                name: 'OZALJ'
            },
            {
                county: 'KARLOVAČKA',
                name: 'SLUNJ'
            },
            {
                county: 'KARLOVAČKA',
                name: 'BARILOVIĆ'
            },
            {
                county: 'KARLOVAČKA',
                name: 'BOSILJEVO'
            },
            {
                county: 'KARLOVAČKA',
                name: 'CETINGRAD'
            },
            {
                county: 'KARLOVAČKA',
                name: 'DRAGANIĆ'
            },
            {
                county: 'KARLOVAČKA',
                name: 'GENERALSKI STOL'
            },
            {
                county: 'KARLOVAČKA',
                name: 'JOSIPDOL'
            },
            {
                county: 'KARLOVAČKA',
                name: 'KAMANJE'
            },
            {
                county: 'KARLOVAČKA',
                name: 'KRNJAK'
            },
            {
                county: 'KARLOVAČKA',
                name: 'LASINJA'
            },
            {
                county: 'KARLOVAČKA',
                name: 'NETRETIĆ'
            },
            {
                county: 'KARLOVAČKA',
                name: 'PLAŠKI'
            },
            {
                county: 'KARLOVAČKA',
                name: 'RAKOVICA'
            },
            {
                county: 'KARLOVAČKA',
                name: 'RIBNIK'
            },
            {
                county: 'KARLOVAČKA',
                name: 'SABORSKO'
            },
            {
                county: 'KARLOVAČKA',
                name: 'TOUNJ'
            },
            {
                county: 'KARLOVAČKA',
                name: 'VOJNIĆ'
            },
            {
                county: 'KARLOVAČKA',
                name: 'ŽAKANJE'
            },
            {
                county: 'KARLOVAČKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'KARLOVAČKA'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'IVANEC'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'LEPOGLAVA'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'LUDBREG'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'NOVI MAROF'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'VARAŽDIN'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'VARAŽDINSKE TOPLICE'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'BEDNJA'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'BERETINEC'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'BREZNICA'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'BREZNIČKI HUM'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'CESTICA'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'DONJA VOĆA'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'GORNJI KNEGINEC'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'JALŽABET'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'KLENOVNIK'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'LJUBEŠĆICA'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'MALI BUKOVEC'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'MARTIJANEC'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'MARUŠEVEC'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'PETRIJANEC'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'SRAČINEC'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'SVETI ĐURĐ'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'SVETI ILIJA'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'TRNOVEC BARTOLOVEČKI'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'VELIKI BUKOVEC'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'VIDOVEC'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'VINICA'
            },
            {
                county: 'VARAŽDINSKA',
                name: 'VISOKO'
            },
            {
                county: 'VARAŽDINSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'VARAŽDINSKA'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'KOPRIVNICA'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'KRIŽEVCI'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'ĐURĐEVAC'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'DRNJE'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'ĐELEKOVEC'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'FERDINANDOVAC'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'GOLA'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'GORNJA RIJEKA'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'HLEBINE'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'KALINOVAC'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'KALNIK'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'KLOŠTAR PODRAVSKI'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'KOPRIVNIČKI BREGI'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'KOPRIVNIČKI IVANEC'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'LEGRAD'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'MOLVE'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'NOVIGRAD PODRAVSKI'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'NOVO VIRJE'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'PETERANEC'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'PODRAVSKE SESVETE'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'RASINJA'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'SOKOLOVAC'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'SVETI IVAN ŽABNO'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'SVETI PETAR OREHOVEC'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                name: 'VIRJE'
            },
            {
                county: 'KOPRIVNIČKO-KRIŽEVAČKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'KOPRIVNIČKO-KRIŽEVAČKA'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'BJELOVAR'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'ČAZMA'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'DARUVAR'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'GAREŠNICA'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'GRUBIŠNO POLJE'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'BEREK'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'DEŽANOVAC'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'ĐULOVAC'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'HERCEGOVAC'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'IVANSKA'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'KAPELA'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'KONČANICA'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'NOVA RAČA'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'ROVIŠĆE'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'SEVERIN'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'SIRAČ'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'ŠANDROVAC'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'ŠTEFANJE'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'VELIKA PISANICA'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'VELIKA TRNOVITICA'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'VELIKI GRĐEVAC'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'VELIKO TROJSTVO'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                name: 'ZRINSKI TOPOLOVAC'
            },
            {
                county: 'BJELOVARSKO-BILOGORSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'BJELOVARSKO-BILOGORSKA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'BAKAR'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'CRES'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'CRIKVENICA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'ČABAR'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'DELNICE'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'KASTAV'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'KRALJEVICA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'KRK'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'MALI LOŠINJ'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'NOVI VINODOLSKI'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'OPATIJA'
            },

            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'RAB'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'RIJEKA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'VRBOVSKO'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'BAŠKA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'BROD MORAVICE'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'ČAVLE'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'DOBRINJ'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'FUŽINE'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'JELENJE'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'KLANA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'KOSTRENA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'LOKVE'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'LOPAR'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'LOVRAN'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'MALINSKA-DUBAŠNICA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'MATULJI'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'MOŠĆENIČKA DRAGA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'MRKOPALJ'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'OMIŠALJ'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'PUNAT'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'RAVNA GORA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'SKRAD'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'VINODOLSKA'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'VIŠKOVO'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                name: 'VRBNIK'
            },
            {
                county: 'PRIMORSKO-GORANSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'PRIMORSKO-GORANSKA'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'GOSPIĆ'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'OTOČAC'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'NOVALJA'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'SENJ'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'BRINJE'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'DONJI LAPAC'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'KARLOBAG'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'LOVINAC'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'PERUŠIĆ'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'PLITVIČKA JEZERA'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'UDBINA'
            },
            {
                county: 'LIČKO-SENJSKA',
                name: 'VRHOVINE'
            },
            {
                county: 'LIČKO-SENJSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'LIČKO-SENJSKA'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'ORAHOVICA'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'SLATINA'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'VIROVITICA'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'CRNAC'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'ČAČINCI'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'ČAĐAVICA'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'GRADINA'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'LUKAČ'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'MIKLEUŠ'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'NOVA BUKOVICA'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'PITOMAČA'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'SOPJE'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'SUHOPOLJE'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'ŠPIŠIĆ BUKOVICA'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'VOĆIN'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                name: 'ZDENCI'
            },
            {
                county: 'VIROVITIČKO-PODRAVSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'VIROVITIČKO-PODRAVSKA'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                name: 'POŽEGA'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                name: 'PAKRAC'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                name: 'PLETERNICA'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                name: 'LIPIK'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                name: 'KUTJEVO'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                name: 'VELIKA'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                name: 'JAKŠIĆ'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                name: 'KAPTOL'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                name: 'BRESTOVAC'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                name: 'ČAGLIN'
            },
            {
                county: 'POŽEŠKO-SLAVONSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'POŽEŠKO-SLAVONSKA'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'NOVA GRADIŠKA'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'SLAVONSKI BROD'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'BEBRINA'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'BRODSKI STUPNIK'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'BUKOVLJE'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'CERNIK'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'DAVOR'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'DONJI ANDRIJEVCI'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'DRAGALIĆ'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'GARČIN'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'GORNJA VRBA'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'GORNJI BOGIĆEVCI'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'GUNDINCI'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'KLAKAR'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'NOVA KAPELA'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'OKUČANI'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'OPRISAVCI'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'ORIOVAC'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'PODCRKAVLJE'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'REŠETARI'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'SIBINJ'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'SIKIREVCI'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'SLAVONSKI ŠAMAC'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'STARA GRADIŠKA'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'STARO PETROVO SELO'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'VELIKA KOPANICA'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'VRBJE'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                name: 'VRPOLJE'
            },
            {
                county: 'BRODSKO-POSAVSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'BRODSKO-POSAVSKA'
            },
            {
                county: 'ZADARSKA',
                name: 'BENKOVAC'
            },
            {
                county: 'ZADARSKA',
                name: 'BIOGRAD N/M'
            },
            {
                county: 'ZADARSKA',
                name: 'OBROVAC'
            },
            {
                county: 'ZADARSKA',
                name: 'PAG'
            },
            {
                county: 'ZADARSKA',
                name: 'ZADAR'
            },
            {
                county: 'ZADARSKA',
                name: 'BIBINJE'
            },
            {
                county: 'ZADARSKA',
                name: 'GALOVAC'
            },
            {
                county: 'ZADARSKA',
                name: 'GRAČAC'
            },
            {
                county: 'ZADARSKA',
                name: 'JASENICE'
            },
            {
                county: 'ZADARSKA',
                name: 'KALI'
            },
            {
                county: 'ZADARSKA',
                name: 'KUKLJICA'
            },
            {
                county: 'ZADARSKA',
                name: 'KOLAN'
            },
            {
                county: 'ZADARSKA',
                name: 'LIŠANE OSTROVIČKE'
            },
            {
                county: 'ZADARSKA',
                name: 'NIN'
            },
            {
                county: 'ZADARSKA',
                name: 'NOVIGRAD'
            },
            {
                county: 'ZADARSKA',
                name: 'PAKOŠTANE'
            },
            {
                county: 'ZADARSKA',
                name: 'PAŠMAN'
            },
            {
                county: 'ZADARSKA',
                name: 'POSEDARJE'
            },
            {
                county: 'ZADARSKA',
                name: 'POVLJANA'
            },
            {
                county: 'ZADARSKA',
                name: 'POLAČA'
            },
            {
                county: 'ZADARSKA',
                name: 'POLIČNIK'
            },
            {
                county: 'ZADARSKA',
                name: 'PREKO'
            },
            {
                county: 'ZADARSKA',
                name: 'PRIVLAKA'
            },
            {
                county: 'ZADARSKA',
                name: 'RAŽANAC'
            },
            {
                county: 'ZADARSKA',
                name: 'SALI'
            },
            {
                county: 'ZADARSKA',
                name: 'STANKOVCI'
            },
            {
                county: 'ZADARSKA',
                name: 'STARIGRAD'
            },
            {
                county: 'ZADARSKA',
                name: 'SUKOŠAN'
            },
            {
                county: 'ZADARSKA',
                name: 'SVETI FILIP I JAKOV'
            },
            {
                county: 'ZADARSKA',
                name: 'ŠKABRNJA'
            },
            {
                county: 'ZADARSKA',
                name: 'TKON'
            },
            {
                county: 'ZADARSKA',
                name: 'VIR'
            },
            {
                county: 'ZADARSKA',
                name: 'VRSI'
            },
            {
                county: 'ZADARSKA',
                name: 'ZEMUNIK DONJI'
            },
            {
                county: 'ZADARSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'ZADARSKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BELI MANASTIR'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BELIŠĆE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DONJI MIHOLJAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ĐAKOVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'NAŠICE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'OSIJEK'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VALPOVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ANTUNOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BILJE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BIZOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ČEMINAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ČEPIN'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DARDA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DONJA MOTIČINA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DRAŽ'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DRENJE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ĐURĐENOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ERDUT'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ERNESTINOVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'FERIČANCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'GORJANI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'JAGODNJAK'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'KNEŽEVI VINOGRADI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'KOŠKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'LEVANJSKA VAROŠ'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'MAGADENOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'MARIJANCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PETLOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PETRIJEVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PODGORAČ'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PODRAVSKA MOSLAVINA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'POPOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PUNITOVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'SATNICA ĐAKOVAČKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'SEMELJCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'STRIZIVOJNA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ŠODOLOVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'TRNAVA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VILJEVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VIŠKOVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VLADISLAVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VUKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'OSJEČKO-BARANJSKA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'DRNIŠ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'KNIN'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'SKRADIN'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'ŠIBENIK'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'VODICE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'BILICE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'BISKUPIJA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'CIVLJANE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'ERVENIK'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'KIJEVO'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'KISTANJE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'MURTER-KORNATI'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'PIROVAC'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'PRIMOŠTEN'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'PROMINA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'ROGOZNICA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'RUŽIĆ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'UNEŠIĆ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'TISNO'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'TRIBUNJ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'ŠIBENSKO-KNINSKA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'ILOK'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'OTOK'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'VINKOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'VUKOVAR'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'ŽUPANJA'
            },
            {
                county: 'ZADARSKA',
                name: 'ZADAR'
            },
            {
                county: 'ZADARSKA',
                name: 'BIBINJE'
            },
            {
                county: 'ZADARSKA',
                name: 'GALOVAC'
            },
            {
                county: 'ZADARSKA',
                name: 'GRAČAC'
            },
            {
                county: 'ZADARSKA',
                name: 'JASENICE'
            },
            {
                county: 'ZADARSKA',
                name: 'KALI'
            },
            {
                county: 'ZADARSKA',
                name: 'KUKLJICA'
            },
            {
                county: 'ZADARSKA',
                name: 'KOLAN'
            },
            {
                county: 'ZADARSKA',
                name: 'LIŠANE OSTROVIČKE'
            },
            {
                county: 'ZADARSKA',
                name: 'NIN'
            },
            {
                county: 'ZADARSKA',
                name: 'NOVIGRAD'
            },
            {
                county: 'ZADARSKA',
                name: 'PAKOŠTANE'
            },
            {
                county: 'ZADARSKA',
                name: 'PAŠMAN'
            },
            {
                county: 'ZADARSKA',
                name: 'POSEDARJE'
            },
            {
                county: 'ZADARSKA',
                name: 'POVLJANA'
            },
            {
                county: 'ZADARSKA',
                name: 'POLAČA'
            },
            {
                county: 'ZADARSKA',
                name: 'POLIČNIK'
            },
            {
                county: 'ZADARSKA',
                name: 'PREKO'
            },
            {
                county: 'ZADARSKA',
                name: 'PRIVLAKA'
            },
            {
                county: 'ZADARSKA',
                name: 'RAŽANAC'
            },
            {
                county: 'ZADARSKA',
                name: 'SALI'
            },
            {
                county: 'ZADARSKA',
                name: 'STANKOVCI'
            },
            {
                county: 'ZADARSKA',
                name: 'STARIGRAD'
            },
            {
                county: 'ZADARSKA',
                name: 'SUKOŠAN'
            },
            {
                county: 'ZADARSKA',
                name: 'SVETI FILIP I JAKOV'
            },
            {
                county: 'ZADARSKA',
                name: 'ŠKABRNJA'
            },
            {
                county: 'ZADARSKA',
                name: 'TKON'
            },
            {
                county: 'ZADARSKA',
                name: 'VIR'
            },
            {
                county: 'ZADARSKA',
                name: 'VRSI'
            },
            {
                county: 'ZADARSKA',
                name: 'ZEMUNIK DONJI'
            },
            {
                county: 'ZADARSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'ZADARSKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BELI MANASTIR'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BELIŠĆE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DONJI MIHOLJAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ĐAKOVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'NAŠICE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'OSIJEK'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VALPOVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ANTUNOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BILJE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BIZOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ČEMINAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ČEPIN'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DARDA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DONJA MOTIČINA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DRAŽ'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DRENJE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ĐURĐENOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ERDUT'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ERNESTINOVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'FERIČANCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'GORJANI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'JAGODNJAK'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'KNEŽEVI VINOGRADI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'KOŠKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'LEVANJSKA VAROŠ'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'MAGADENOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'MARIJANCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PETLOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PETRIJEVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PODGORAČ'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PODRAVSKA MOSLAVINA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'POPOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PUNITOVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'SATNICA ĐAKOVAČKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'SEMELJCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'STRIZIVOJNA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ŠODOLOVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'TRNAVA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VILJEVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VIŠKOVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VLADISLAVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VUKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'OSJEČKO-BARANJSKA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'DRNIŠ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'KNIN'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'SKRADIN'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'ŠIBENIK'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'VODICE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'BILICE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'BISKUPIJA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'CIVLJANE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'ERVENIK'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'KIJEVO'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'KISTANJE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'MURTER-KORNATI'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'PIROVAC'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'PRIMOŠTEN'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'PROMINA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'ROGOZNICA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'RUŽIĆ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'UNEŠIĆ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'TISNO'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'TRIBUNJ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'ŠIBENSKO-KNINSKA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'ILOK'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'OTOK'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'VINKOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'VUKOVAR'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'ŽUPANJA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'ANDRIJAŠEVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'BABINA GREDA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'BOGDANOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'BOROVO'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'BOŠNJACI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'CERNA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'DRENOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'GRADIŠTE'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'GUNJA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'IVANKOVO'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'JARMINA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'LOVAS'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'MARKUŠICA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'NEGOSLAVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'NIJEMCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'NUŠTAR'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'PRIVLAKA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'STARI JANKOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'STARI MIKANOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'ŠTITAR'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'TOMPOJEVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'TORDINCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'TOVARNIK'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'TRPINJA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'VOĐINCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'VRBANJA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'VUKOVARSKO-SRIJEMSKA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SPLIT'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'HVAR'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'IMOTSKI'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'KAŠTELA(SJEDIŠTE KAŠTEL SUĆURAC)'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'KOMIŽA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'MAKARSKA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'OMIŠ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SINJ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SOLIN'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'STARI GRAD'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SUPETAR'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'TRILJ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'TROGIR'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'VIS'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'VRGORAC'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'VRLIKA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'BOL'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'BAŠKA VODA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'BRELA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'DICMO'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'DUGI RAT'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'DUGOPOLJE'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'GRADAC'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'HRVACE'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'JELSA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'KLIS'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'LEĆEVICA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'LOKVIČIĆI'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'LOVREĆ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'MARINA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'MILNA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'MUĆ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'NEREŽIŠĆA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'OKRUG'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'OTOK'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PODBABLJE'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PODGORA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PODSTRANA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'POSTIRA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PRGOMET'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PRIMORSKI DOLAC'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PROLOŽAC'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PUČIŠĆA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'RUNOVIĆI'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SEGET'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SELCA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SUĆURAJ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SUTIVAN'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'ŠESTANOVAC'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'ŠOLTA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'TUČEPI'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'ZADVARJE'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'ZAGVOZD'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'ZMIJAVCI'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'CISTA PROVO'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'SPLITSKO-DALMATINSKA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'BUJE-BUIE'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'BUZET'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'LABIN'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'NOVIGRAD-CITTANOVA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'PAZIN'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'POREČ-PARENZO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'PULA-POLA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'ROVINJ-ROVIGNO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'UMAG-UMAGO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'VODNJAN-DIGNANO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'BALE-VALLE'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'BARBAN'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'BRTONIGLA-VERTENEGLIO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'CEROVLJE'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'FAŽANA-FASANA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'FUNTANA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'GRAČIŠĆE'
            },
            {
                county: 'ZADARSKA',
                name: 'ZADAR'
            },
            {
                county: 'ZADARSKA',
                name: 'BIBINJE'
            },
            {
                county: 'ZADARSKA',
                name: 'GALOVAC'
            },
            {
                county: 'ZADARSKA',
                name: 'GRAČAC'
            },
            {
                county: 'ZADARSKA',
                name: 'JASENICE'
            },
            {
                county: 'ZADARSKA',
                name: 'KALI'
            },
            {
                county: 'ZADARSKA',
                name: 'KUKLJICA'
            },
            {
                county: 'ZADARSKA',
                name: 'KOLAN'
            },
            {
                county: 'ZADARSKA',
                name: 'LIŠANE OSTROVIČKE'
            },
            {
                county: 'ZADARSKA',
                name: 'NIN'
            },
            {
                county: 'ZADARSKA',
                name: 'NOVIGRAD'
            },
            {
                county: 'ZADARSKA',
                name: 'PAKOŠTANE'
            },
            {
                county: 'ZADARSKA',
                name: 'PAŠMAN'
            },
            {
                county: 'ZADARSKA',
                name: 'POSEDARJE'
            },
            {
                county: 'ZADARSKA',
                name: 'POVLJANA'
            },
            {
                county: 'ZADARSKA',
                name: 'POLAČA'
            },
            {
                county: 'ZADARSKA',
                name: 'POLIČNIK'
            },
            {
                county: 'ZADARSKA',
                name: 'PREKO'
            },
            {
                county: 'ZADARSKA',
                name: 'PRIVLAKA'
            },
            {
                county: 'ZADARSKA',
                name: 'RAŽANAC'
            },
            {
                county: 'ZADARSKA',
                name: 'SALI'
            },
            {
                county: 'ZADARSKA',
                name: 'STANKOVCI'
            },
            {
                county: 'ZADARSKA',
                name: 'STARIGRAD'
            },
            {
                county: 'ZADARSKA',
                name: 'SUKOŠAN'
            },
            {
                county: 'ZADARSKA',
                name: 'SVETI FILIP I JAKOV'
            },
            {
                county: 'ZADARSKA',
                name: 'ŠKABRNJA'
            },
            {
                county: 'ZADARSKA',
                name: 'TKON'
            },
            {
                county: 'ZADARSKA',
                name: 'VIR'
            },
            {
                county: 'ZADARSKA',
                name: 'VRSI'
            },
            {
                county: 'ZADARSKA',
                name: 'ZEMUNIK DONJI'
            },
            {
                county: 'ZADARSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'ZADARSKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BELI MANASTIR'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BELIŠĆE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DONJI MIHOLJAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ĐAKOVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'NAŠICE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'OSIJEK'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VALPOVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ANTUNOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BILJE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'BIZOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ČEMINAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ČEPIN'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DARDA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DONJA MOTIČINA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DRAŽ'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'DRENJE'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ĐURĐENOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ERDUT'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ERNESTINOVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'FERIČANCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'GORJANI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'JAGODNJAK'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'KNEŽEVI VINOGRADI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'KOŠKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'LEVANJSKA VAROŠ'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'MAGADENOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'MARIJANCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PETLOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PETRIJEVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PODGORAČ'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PODRAVSKA MOSLAVINA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'POPOVAC'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'PUNITOVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'SATNICA ĐAKOVAČKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'SEMELJCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'STRIZIVOJNA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'ŠODOLOVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'TRNAVA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VILJEVO'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VIŠKOVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VLADISLAVCI'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                name: 'VUKA'
            },
            {
                county: 'OSJEČKO-BARANJSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'OSJEČKO-BARANJSKA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'DRNIŠ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'KNIN'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'SKRADIN'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'ŠIBENIK'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'VODICE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'BILICE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'BISKUPIJA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'CIVLJANE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'ERVENIK'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'KIJEVO'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'KISTANJE'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'MURTER-KORNATI'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'PIROVAC'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'PRIMOŠTEN'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'PROMINA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'ROGOZNICA'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'RUŽIĆ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'UNEŠIĆ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'TISNO'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                name: 'TRIBUNJ'
            },
            {
                county: 'ŠIBENSKO-KNINSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'ŠIBENSKO-KNINSKA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'ILOK'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'OTOK'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'VINKOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'VUKOVAR'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'ŽUPANJA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'ANDRIJAŠEVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'BABINA GREDA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'BOGDANOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'BOROVO'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'BOŠNJACI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'CERNA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'DRENOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'GRADIŠTE'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'GUNJA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'IVANKOVO'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'JARMINA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'LOVAS'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'MARKUŠICA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'NEGOSLAVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'NIJEMCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'NUŠTAR'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'PRIVLAKA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'STARI JANKOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'STARI MIKANOVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'ŠTITAR'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'TOMPOJEVCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'TORDINCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'TOVARNIK'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'TRPINJA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'VOĐINCI'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                name: 'VRBANJA'
            },
            {
                county: 'VUKOVARSKO-SRIJEMSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'VUKOVARSKO-SRIJEMSKA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SPLIT'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'HVAR'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'IMOTSKI'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'KAŠTELA(SJEDIŠTE KAŠTEL SUĆURAC)'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'KOMIŽA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'MAKARSKA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'OMIŠ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SINJ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SOLIN'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'STARI GRAD'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SUPETAR'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'TRILJ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'TROGIR'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'VIS'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'VRGORAC'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'VRLIKA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'BOL'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'BAŠKA VODA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'BRELA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'DICMO'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'DUGI RAT'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'DUGOPOLJE'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'GRADAC'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'HRVACE'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'JELSA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'KLIS'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'LEĆEVICA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'LOKVIČIĆI'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'LOVREĆ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'MARINA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'MILNA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'MUĆ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'NEREŽIŠĆA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'OKRUG'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'OTOK'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PODBABLJE'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PODGORA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PODSTRANA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'POSTIRA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PRGOMET'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PRIMORSKI DOLAC'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PROLOŽAC'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'PUČIŠĆA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'RUNOVIĆI'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SEGET'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SELCA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SUĆURAJ'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'SUTIVAN'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'ŠESTANOVAC'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'ŠOLTA'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'TUČEPI'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'ZADVARJE'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'ZAGVOZD'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'ZMIJAVCI'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                name: 'CISTA PROVO'
            },
            {
                county: 'SPLITSKO-DALMATINSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'SPLITSKO-DALMATINSKA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'BUJE-BUIE'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'BUZET'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'LABIN'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'NOVIGRAD-CITTANOVA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'PAZIN'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'POREČ-PARENZO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'PULA-POLA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'ROVINJ-ROVIGNO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'UMAG-UMAGO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'VODNJAN-DIGNANO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'BALE-VALLE'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'BARBAN'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'BRTONIGLA-VERTENEGLIO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'CEROVLJE'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'FAŽANA-FASANA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'FUNTANA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'GRAČIŠĆE'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'GROŽNJAN-GRISIGNANA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'KANFANAR'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'KAROJBA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'KAŠTELIR-LABINCI-CASTELLIER-SANTA DOMENICA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'KRŠAN'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'LANIŠĆE'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'LIŽNJAN-LISIGNANO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'LUPOGLAV'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'MARČANA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'MEDULIN'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'MOTOVUN-MONTONA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'OPRTALJ-PORTOLE'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'PIĆAN'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'RAŠA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'SVETI LOVREČ'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'SVETA NEDELJA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'SVETI PETAR U ŠUMI'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'SVETVINČENAT'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'TAR-VABRIGA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'TINJAN'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'VIŠNJAN-VISIGNANO'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'VIŽINADA-VISINADA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'VRSAR-ORSERA'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                name: 'ŽMINJ'
            },
            {
                county: 'ISTARSKA ŽUPANIJA',
                tipJedinice: 'ŽUPANIJA',
                name: 'ISTARSKA'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'DUBROVNIK'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'KORČULA'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'PLOČE'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'METKOVIĆ'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'OPUZEN'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'BLATO'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'DUBROVAČKO PRIMORJE'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'JANJINA'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'KULA NORINSKA'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'KONAVLE'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'LASTOVO'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'LUMBARDA'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'MLJET'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'OREBIĆ'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'POJEZERJE'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'SLIVNO'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'SMOKVICA'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'STON'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'TRPANJ'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'VELA LUKA'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'ZAŽABLJE'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                name: 'ŽUPA DUBROVAČKA'
            },
            {
                county: 'DUBROVAČKO-NERETVANSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'DUBROVAČKO-NERETVANSKA'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'ČAKOVEC'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'MURSKO SREDIŠĆE'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'PRELOG'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'BELICA'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'DEKANOVEC'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'DOMAŠINEC'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'DONJA DUBRAVA'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'DONJI KRALJEVEC'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'DONJI VIDOVEC'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'GORIČAN'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'GORNJI MIHALJEVEC'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'KOTORIBA'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'MALA SUBOTICA'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'NEDELIŠĆE'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'OREHOVICA'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'PODTUREN'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'PRIBISLAVEC'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'SELNICA'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'ŠENKOVEC'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'STRAHONINEC'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'ŠTRIGOVA'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'SVETA MARIJA'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'SVETI JURAJ NA BREGU'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'SVETI MARTIN NA MURI'
            },
            {
                county: 'MEĐIMURSKA',
                name: 'VRATIŠINEC'
            },
            {
                county: 'MEĐIMURSKA',
                tipJedinice: 'ŽUPANIJA',
                name: 'MEĐIMURSKA'
            },
            {
                county: 'GRAD ZAGREB',
                name: 'ZAGREB'
            }
        ];

        db.collection('city').insertMany(cities, function (err, data) {
            if (!err) {
                console.log("Mjesta uspješno inicijalizirane u bazu NJPOglasnikAppLoncaric pod kolekcijom mjesta\n");
            } else
                console.log("Error: Mjesta nisu  inicijalizirane u bazu NJPOglasnikAppLoncaric pod kolekcijom mjesta\n");
        });

        let brands = [
            {name: 'Alfa Romeo', brandType: 'Automobili'},
            {name: 'Audi', brandType: 'Automobili'},
            {name: 'BMW', brandType: 'Automobili'},
            {name: 'Citroen', brandType: 'Automobili'},
            {name: 'Dacia', brandType: 'Automobili'},
            {name: 'Fiat', brandType: 'Automobili'},
            {name: 'Ford', brandType: 'Automobili'},
            {name: 'Honda', brandType: 'Automobili'},
            {name: 'Hyundai', brandType: 'Automobili'},
            {name: 'Jeep', brandType: 'Automobili'},
            {name: 'Lada', brandType: 'Automobili'},
            {name: 'Land Rover', brandType: 'Automobili'},
            {name: 'Mazda', brandType: 'Automobili'},
            {name: 'Kia', brandType: 'Automobili'},
            {name: 'Mercedes-Benz', brandType: 'Automobili'},
            {name: 'MINI', brandType: 'Automobili'},
            {name: 'Nissan', brandType: 'Automobili'},
            {name: 'Opel', brandType: 'Automobili'},
            {name: 'Peguet', brandType: 'Automobili'},
            {name: 'Renault', brandType: 'Automobili'},
            {name: 'Seat', brandType: 'Automobili'},
            {name: 'Suzuki', brandType: 'Automobili'},
            {name: 'Škoda', brandType: 'Automobili'},
            {name: 'Toyota', brandType: 'Automobili'},
            {name: 'Volvo', brandType: 'Automobili'},
            {name: 'VW', brandType: 'Automobili'},

            {name: 'Belarus', brandType: 'Traktori'},
            {name: 'Automobiliraro', brandType: 'Traktori'},
            {name: 'Case', brandType: 'Traktori'},
            {name: 'Class', brandType: 'Traktori'},
            {name: 'Deutz-Faht', brandType: 'Traktori'},
            {name: 'Fiat', brandType: 'Traktori'},
            {name: 'Fendt', brandType: 'Traktori'},
            {name: 'Goldini', brandType: 'Traktori'},
            {name: 'IMT', brandType: 'Traktori'},
            {name: 'JCB', brandType: 'Traktori'},
            {name: 'John Deere', brandType: 'Traktori'},
            {name: 'Kubta', brandType: 'Traktori'},
            {name: 'Lamborgini', brandType: 'Traktori'},
            {name: 'Landini', brandType: 'Traktori'},
            {name: 'Massey Ferguson', brandType: 'Traktori'},
            {name: 'New Holland', brandType: 'Traktori'},
            {name: 'Renault', brandType: 'Traktori'},
            {name: 'Same', brandType: 'Traktori'},
            {name: 'Steyr', brandType: 'Traktori'},
            {name: 'Tomo Vinković', brandType: 'Traktori'},
            {name: 'Torpedo', brandType: 'Traktori'},
            {name: 'Unirvesal', brandType: 'Traktori'},
            {name: 'Ursus', brandType: 'Traktori'},
            {name: 'Valtra', brandType: 'Traktori'},
            {name: 'Zetor', brandType: 'Traktori'},

            {name: 'Alcatel', brandType: 'Mobilni telefoni'},
            {name: 'Apple', brandType: 'Mobilni telefoni'},
            {name: 'Blackberry', brandType: 'Mobilni telefoni'},
            {name: 'Caterpillar', brandType: 'Mobilni telefoni'},
            {name: 'Cubot', brandType: 'Mobilni telefoni'},
            {name: 'Doogee', brandType: 'Mobilni telefoni'},
            {name: 'Google Pixel', brandType: 'Mobilni telefoni'},
            {name: 'HTC', brandType: 'Mobilni telefoni'},
            {name: 'Huawei', brandType: 'Mobilni telefoni'},
            {name: 'Lenovo', brandType: 'Mobilni telefoni'},
            {name: 'LG', brandType: 'Mobilni telefoni'},
            {name: 'Motorola', brandType: 'Mobilni telefoni'},
            {name: 'Noa', brandType: 'Mobilni telefoni'},
            {name: 'Nokia', brandType: 'Mobilni telefoni'},
            {name: 'One Plus', brandType: 'Mobilni telefoni'},
            {name: 'Oukitel', brandType: 'Mobilni telefoni'},
            {name: 'Prestigio', brandType: 'Mobilni telefoni'},
            {name: 'Samsung', brandType: 'Mobilni telefoni'},
            {name: 'Simens', brandType: 'Mobilni telefoni'},
            {name: 'Sony Ericsson', brandType: 'Mobilni telefoni'},
            {name: 'Sony', brandType: 'Mobilni telefoni'},
            {name: 'Vivax', brandType: 'Mobilni telefoni'},
            {name: 'Xiaomi', brandType: 'Mobilni telefoni'},
            {name: 'ZTE', brandType: 'Mobilni telefoni'},
            {name: 'Ostalo', brandType: 'Mobilni telefoni'},

            {name: 'Acer', brandType: 'Računala'},
            {name: 'Asus', brandType: 'Računala'},
            {name: 'Forcebook', brandType: 'Računala'},
            {name: 'Gericom', brandType: 'Računala'},
            {name: 'HP', brandType: 'Računala'},
            {name: 'IBM', brandType: 'Računala'},
            {name: 'Lenovo', brandType: 'Računala'},
            {name: 'Sony', brandType: 'Računala'},
            {name: 'Toshiba', brandType: 'Računala'},
            {name: 'Ostalo', brandType: 'Računala'}
        ];

        db.collection('brand').insertMany(brands, function (err, data) {
            if (!err) {
                console.log("Brandovi uspješno inicijalizirani u bazu NJPOglasnikAppLoncaric pod kolekcijom adveritisement\n");
            } else
                console.log("Error: Brandovi nisu  inicijalizirani u bazu NJPOglasnikAppLoncaric pod kolekcijom adveritisement\n");
        });



        let cars_model = [
            {brandName: 'Alfa Romeo', name: 'Alfa Romeo 147'},
            {brandName: 'Alfa Romeo', name: 'Alfa Romeo 156'},
            {brandName: 'Alfa Romeo', name: 'Alfa Romeo 159'},
            {brandName: 'Alfa Romeo', name: 'Alfa Romeo 166'},
            {brandName: 'Alfa Romeo', name: 'Alfa Romeo Giulia'},
            {brandName: 'Alfa Romeo', name: 'Alfa Romeo Giulietta'},
            {brandName: 'Alfa Romeo', name: 'Alfa Romeo GT'},
            {brandName: 'Alfa Romeo', name: 'Alfa Romeo Stelvio'},

            {brandName: 'Audi', name: 'Audi 80'},
            {brandName: 'Audi', name: 'Audi A1'},
            {brandName: 'Audi', name: 'Audi A2'},
            {brandName: 'Audi', name: 'Audi A3'},
            {brandName: 'Audi', name: 'Audi A4'},
            {brandName: 'Audi', name: 'Audi A5'},
            {brandName: 'Audi', name: 'Audi A6'},
            {brandName: 'Audi', name: 'Audi A7'},
            {brandName: 'Audi', name: 'Audi A8'},
            {brandName: 'Audi', name: 'Audi Q2'},
            {brandName: 'Audi', name: 'Audi Q3'},
            {brandName: 'Audi', name: 'Audi Q5'},
            {brandName: 'Audi', name: 'Audi Q7'},
            {brandName: 'Audi', name: 'Audi Q8'},
            {brandName: 'Audi', name: 'Audi R8'},
            {brandName: 'Audi', name: 'Audi RS3'},
            {brandName: 'Audi', name: 'Audi RS5'},
            {brandName: 'Audi', name: 'Audi RS6'},
            {brandName: 'Audi', name: 'Audi RS7'},
            {brandName: 'Audi', name: 'Audi TT'},


            {brandName: 'BMW', name: 'BMW i3'},
            {brandName: 'BMW', name: 'BMW i8'},
            {brandName: 'BMW', name: 'BMW M2'},
            {brandName: 'BMW', name: 'BMW M3'},
            {brandName: 'BMW', name: 'BMW M4'},
            {brandName: 'BMW', name: 'BMW M5'},
            {brandName: 'BMW', name: 'BMW M6'},
            {brandName: 'BMW', name: 'BMW serija 1'},
            {brandName: 'BMW', name: 'BMW serija 2'},
            {brandName: 'BMW', name: 'BMW serija 3'},
            {brandName: 'BMW', name: 'BMW serija 4'},
            {brandName: 'BMW', name: 'BMW serija 5'},
            {brandName: 'BMW', name: 'BMW serija 6'},
            {brandName: 'BMW', name: 'BMW serija 7'},
            {brandName: 'BMW', name: 'BMW serija 8'},
            {brandName: 'BMW', name: 'BMW X1'},
            {brandName: 'BMW', name: 'BMW X2'},
            {brandName: 'BMW', name: 'BMW X3'},
            {brandName: 'BMW', name: 'BMW X4'},
            {brandName: 'BMW', name: 'BMW X5'},
            {brandName: 'BMW', name: 'BMW X6'},

            {brandName: 'Citroen', name: 'Citroen C-Elysee'},
            {brandName: 'Citroen', name: 'Citroen C1'},
            {brandName: 'Citroen', name: 'Citroen C2'},
            {brandName: 'Citroen', name: 'Citroen C3'},
            {brandName: 'Citroen', name: 'Citroen C4'},
            {brandName: 'Citroen', name: 'Citroen C5'},
            {brandName: 'Citroen', name: 'Citroen C6'},
            {brandName: 'Citroen', name: 'Citroen C7'},
            {brandName: 'Citroen', name: 'Citroen C8'},
            {brandName: 'Citroen', name: 'Citroen DS3'},
            {brandName: 'Citroen', name: 'Citroen DS4'},
            {brandName: 'Citroen', name: 'Citroen DS5'},
            {brandName: 'Citroen', name: 'Citroen Jumper'},
            {brandName: 'Citroen', name: 'Citroen Saxo'},
            {brandName: 'Citroen', name: 'Citroen Xsara'},

            {brandName: 'Dacia', name: 'Dacia Dokker'},
            {brandName: 'Dacia', name: 'Dacia Duster'},
            {brandName: 'Dacia', name: 'Dacia Lodgy'},
            {brandName: 'Dacia', name: 'Dacia Logan'},
            {brandName: 'Dacia', name: 'Dacia Sandero'},
            {brandName: 'Dacia', name: 'Dacia Solenza'},

            {brandName: 'Fiat', name: 'Fiat 500'},
            {brandName: 'Fiat', name: 'Fiat Bravo'},
            {brandName: 'Fiat', name: 'Fiat Coupe'},
            {brandName: 'Fiat', name: 'Fiat Croma'},
            {brandName: 'Fiat', name: 'Fiat Doblo'},
            {brandName: 'Fiat', name: 'Fiat Ducato'},
            {brandName: 'Fiat', name: 'Fiat Grande Punto'},
            {brandName: 'Fiat', name: 'Fiat Idea'},
            {brandName: 'Fiat', name: 'Fiat Marea'},
            {brandName: 'Fiat', name: 'Fiat Multipa'},
            {brandName: 'Fiat', name: 'Fiat Panda'},
            {brandName: 'Fiat', name: 'Fiat Punto'},
            {brandName: 'Fiat', name: 'Fiat Stilo'},
            {brandName: 'Fiat', name: 'Fiat Tipo'},
            {brandName: 'Fiat', name: 'Fiat Uno'},

            {brandName: 'Ford', name: 'Ford B-Max'},
            {brandName: 'Ford', name: 'Ford C-Max'},
            {brandName: 'Ford', name: 'Ford Escort'},
            {brandName: 'Ford', name: 'Ford Fiesta'},
            {brandName: 'Ford', name: 'Ford Focus'},
            {brandName: 'Ford', name: 'Ford Galaxy'},
            {brandName: 'Ford', name: 'Ford Kuga'},
            {brandName: 'Ford', name: 'Ford Mondeo'},
            {brandName: 'Ford', name: 'Ford Mustang'},

            {brandName: 'Honda', name: 'Honda Accord'},
            {brandName: 'Honda', name: 'Honda Civic'},
            {brandName: 'Honda', name: 'Honda CR-V'},
            {brandName: 'Honda', name: 'Honda CRX'},
            {brandName: 'Honda', name: 'Honda CR-Z'},
            {brandName: 'Honda', name: 'Honda FR-V'},
            {brandName: 'Honda', name: 'Honda HR-V'},
            {brandName: 'Honda', name: 'Honda Jazz'},

            {brandName: 'Hyundai', name: 'Hyundai Accent'},
            {brandName: 'Hyundai', name: 'Hyundai Atos'},
            {brandName: 'Hyundai', name: 'Hyundai Coupe'},
            {brandName: 'Hyundai', name: 'Hyundai Elantra'},
            {brandName: 'Hyundai', name: 'Hyundai i10'},
            {brandName: 'Hyundai', name: 'Hyundai i20'},
            {brandName: 'Hyundai', name: 'Hyundai i30'},
            {brandName: 'Hyundai', name: 'Hyundai Kona'},
            {brandName: 'Hyundai', name: 'Hyundai Santa Fe'},
            {brandName: 'Hyundai', name: 'Hyundai Tucson'},

            {brandName: 'Jeep', name: 'Jeep Cherokee'},
            {brandName: 'Jeep', name: 'Jeep Compass'},
            {brandName: 'Jeep', name: 'Jeep Renegade'},

            {brandName: 'Lada', name: 'Lada Niva'},
            {brandName: 'Lada', name: 'Lada Samara'},

            {brandName: 'Land Rover', name: 'Land Rover Defender'},
            {brandName: 'Land Rover', name: 'Land Rover Discovery'},
            {brandName: 'Land Rover', name: 'Land Rover Freelander'},
            {brandName: 'Land Rover', name: 'Land Rover Range Rover'},

            {brandName: 'Mazda', name: 'Mazda 2'},
            {brandName: 'Mazda', name: 'Mazda 3'},
            {brandName: 'Mazda', name: 'Mazda 5'},
            {brandName: 'Mazda', name: 'Mazda 6'},
            {brandName: 'Mazda', name: 'Mazda 323'},
            {brandName: 'Mazda', name: 'Mazda 626'},
            {brandName: 'Mazda', name: 'Mazda CX-3'},
            {brandName: 'Mazda', name: 'Mazda CX-5'},
            {brandName: 'Mazda', name: 'Mazda CX-7'},
            {brandName: 'Mazda', name: 'Mazda CX-9'},
            {brandName: 'Mazda', name: 'Mazda MX-5'},
            {brandName: 'Mazda', name: 'Mazda RX-8'},

            {brandName: 'Kia', name: 'Kia Carens'},
            {brandName: 'Kia', name: 'Kia Ceed'},
            {brandName: 'Kia', name: 'Kia Sportswagon'},
            {brandName: 'Kia', name: 'Kia Optima'},
            {brandName: 'Kia', name: 'Kia Pride'},
            {brandName: 'Kia', name: 'Kia Rio'},
            {brandName: 'Kia', name: 'Kia Sorento'},
            {brandName: 'Kia', name: 'Kia Sportage'},

            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz 123'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz 124'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz 180'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz 126'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz A-klasa'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz AMG GT'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz B-klasa'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz Citan'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz C-klasa'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz CL'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz CLA-klasa'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz CLS-klasa'},
            {brandName: 'Mercedes-Benz', name: 'Mercedes-Benz Sprinter'},

            {brandName: 'MINI', name: 'MINI Cabrio'},
            {brandName: 'MINI', name: 'MINI Cooper'},
            {brandName: 'MINI', name: 'MINI One'},

            {brandName: 'Nissan', name: 'Nissan Almera'},
            {brandName: 'Nissan', name: 'Nissan Juke'},
            {brandName: 'Nissan', name: 'Nissan Micra'},
            {brandName: 'Nissan', name: 'Nissan Navara'},
            {brandName: 'Nissan', name: 'Nissan Note'},
            {brandName: 'Nissan', name: 'Nissan Patrol'},
            {brandName: 'Nissan', name: 'Nissan Qashqai'},

            {brandName: 'Opel', name: 'Opel Adam'},
            {brandName: 'Opel', name: 'Opel Astra'},
            {brandName: 'Opel', name: 'Opel Corsa'},
            {brandName: 'Opel', name: 'Opel Insignia'},
            {brandName: 'Opel', name: 'Opel Meriva'},
            {brandName: 'Opel', name: 'Opel Tigra'},
            {brandName: 'Opel', name: 'Opel Vectra'},
            {brandName: 'Opel', name: 'Opel Zafira'},

            {brandName: 'Peugeot', name: 'Peugeot 106'},
            {brandName: 'Peugeot', name: 'Peugeot 107'},
            {brandName: 'Peugeot', name: 'Peugeot 108'},
            {brandName: 'Peugeot', name: 'Peugeot 206'},
            {brandName: 'Peugeot', name: 'Peugeot 207'},
            {brandName: 'Peugeot', name: 'Peugeot 208'},
            {brandName: 'Peugeot', name: 'Peugeot 306'},
            {brandName: 'Peugeot', name: 'Peugeot 307'},
            {brandName: 'Peugeot', name: 'Peugeot 308'},
            {brandName: 'Peugeot', name: 'Peugeot 309'},
            {brandName: 'Peugeot', name: 'Peugeot 1007'},
            {brandName: 'Peugeot', name: 'Peugeot 2008'},
            {brandName: 'Peugeot', name: 'Peugeot 3008'},
            {brandName: 'Peugeot', name: 'Peugeot 4007'},
            {brandName: 'Peugeot', name: 'Peugeot 5008'},
            {brandName: 'Peugeot', name: 'Peugeot Boxer'},
            {brandName: 'Peugeot', name: 'Peugeot Partner'},

            {brandName: 'Renault', name: 'Renault Clio'},
            {brandName: 'Renault', name: 'Renault Captur'},
            {brandName: 'Renault', name: 'Renault Espace'},
            {brandName: 'Renault', name: 'Renault Scenic'},
            {brandName: 'Renault', name: 'Renault Kadjar'},
            {brandName: 'Renault', name: 'Renault Kangoo'},
            {brandName: 'Renault', name: 'Renault Laguna'},
            {brandName: 'Renault', name: 'Renault Megane'},
            {brandName: 'Renault', name: 'Renault Scenic'},
            {brandName: 'Renault', name: 'Renault Talisman'},
            {brandName: 'Renault', name: 'Renault Twingo'},

            {brandName: 'Seat', name: 'Seat Altea'},
            {brandName: 'Seat', name: 'Seat Arona'},
            {brandName: 'Seat', name: 'Seat Ateca'},
            {brandName: 'Seat', name: 'Seat Cordoba'},
            {brandName: 'Seat', name: 'Seat Ibiza'},
            {brandName: 'Seat', name: 'Seat Leon'},
            {brandName: 'Seat', name: 'Seat Toledo'},

            {brandName: 'Suzuki', name: 'Suzuki Alto'},
            {brandName: 'Suzuki', name: 'Suzuki Vitara'},
            {brandName: 'Suzuki', name: 'Suzuki SX4'},
            {brandName: 'Suzuki', name: 'Suzuki X-90'},

            {brandName: 'Škoda', name: 'Škoda Fabia'},
            {brandName: 'Škoda', name: 'Škoda Felicia'},
            {brandName: 'Škoda', name: 'Škoda Karoq'},
            {brandName: 'Škoda', name: 'Škoda Kodiaq'},
            {brandName: 'Škoda', name: 'Škoda Octavia'},
            {brandName: 'Škoda', name: 'Škoda Rapid'},
            {brandName: 'Škoda', name: 'Škoda Roomster'},
            {brandName: 'Škoda', name: 'Škoda Scala'},
            {brandName: 'Škoda', name: 'Škoda Superb'},
            {brandName: 'Škoda', name: 'Škoda Yeti'},

            {brandName: 'Toyota', name: 'Toyota Auris'},
            {brandName: 'Toyota', name: 'Toyota Aygo'},
            {brandName: 'Toyota', name: 'Toyota Corolla'},
            {brandName: 'Toyota', name: 'Toyota Land Cruiser'},
            {brandName: 'Toyota', name: 'Toyota Prius'},
            {brandName: 'Toyota', name: 'Toyota RAV4'},
            {brandName: 'Toyota', name: 'Toyota Yaris'},

            {brandName: 'Volvo', name: 'Volvo C30'},
            {brandName: 'Volvo', name: 'Volvo C70'},
            {brandName: 'Volvo', name: 'Volvo S40'},
            {brandName: 'Volvo', name: 'Volvo S70'},
            {brandName: 'Volvo', name: 'Volvo S80'},
            {brandName: 'Volvo', name: 'Volvo S90'},
            {brandName: 'Volvo', name: 'Volvo V40'},
            {brandName: 'Volvo', name: 'Volvo V50'},
            {brandName: 'Volvo', name: 'Volvo V60'},

            {brandName: 'VW', name: 'VW Amarok'},
            {brandName: 'VW', name: 'VW Arteon'},
            {brandName: 'VW', name: 'VW Bora'},
            {brandName: 'VW', name: 'VW Caddy'},
            {brandName: 'VW', name: 'VW Crafter'},
            {brandName: 'VW', name: 'VW CrossGolf'},
            {brandName: 'VW', name: 'VW Golf I'},
            {brandName: 'VW', name: 'VW Golf II'},
            {brandName: 'VW', name: 'VW Golf III'},
            {brandName: 'VW', name: 'VW Golf IV'},
            {brandName: 'VW', name: 'VW Golf V'},
            {brandName: 'VW', name: 'VW Golf VI'},
            {brandName: 'VW', name: 'VW Golf VII'},
            {brandName: 'VW', name: 'VW Golf Plus'},
            {brandName: 'VW', name: 'VW Golf Sportsvan'},
            {brandName: 'VW', name: 'VW Jetta'},
            {brandName: 'VW', name: 'VW Multivan'},
            {brandName: 'VW', name: 'VW Passat'},
            {brandName: 'VW', name: 'VW Polo'},
            {brandName: 'VW', name: 'VW Sharan'},
            {brandName: 'VW', name: 'VW T-Cross'},
            {brandName: 'VW', name: 'VW T-Roc'},
            {brandName: 'VW', name: 'VW Tiguan'},
            {brandName: 'VW', name: 'VW Touareg'},
            {brandName: 'VW', name: 'VW Touran'},
            {brandName: 'VW', name: 'VW Transporter'},
            {brandName: 'VW', name: 'VW Up!'}
        ];
        cars_model.forEach(u => {
            let si = u.brandName.length + 1;
            let se = u.name.length;
            u.name = u.name.substr(si, se);
        });

        db.collection('model').insertMany(cars_model, function (err, data) {
            if (!err) {
                console.log("Modeli uspješno inicijalizirani u bazu NJPOglasnikAppLoncaric pod kolekcijom adveritisement\n");
            } else
                console.log("Error: Modeli nisu  inicijalizirani u bazu NJPOglasnikAppLoncaric pod kolekcijom adveritisement\n");
        });

    }


});





