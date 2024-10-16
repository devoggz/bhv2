const subcounties = [
  {
    name: [
      "Baringo central",
      "Baringo north",
      "Baringo south",
      "Eldama ravine",
      "Mogotio",
      "Tiaty",
      "Bomet central",
      "Bomet east",
      "Chepalungu",
      "Konoin",
      "Sotik",
      "Bumula",
      "Kabuchai",
      "Kanduyi",
      "Kimilil",
      "Mt Elgon",
      "Sirisia",
      "Tongaren",
      "Webuye east",
      "Webuye west",
      "Budalangi",
      "Butula",
      "Funyula",
      "Nambele",
      "Teso North",
      "Teso South",
      "Keiyo north",
      "Keiyo south",
      "Marakwet east",
      "Marakwet west",
      "Manyatta",
      "Mbeere north",
      "Mbeere south",
      "Runyenjes",
      "Daadab",
      "Fafi",
      "Garissa",
      "Hulugho",
      "Ijara",
      "Lagdera balambala",
      "Homabay town",
      "Kabondo",
      "Karachwonyo",
      "Kasipul",
      "Mbita",
      "Ndhiwa",
      "Rangwe",
      "Suba",
      "Central",
      "Garba tula",
      "Kina",
      "Merit",
      "Oldonyiro",
      "Sericho",
      "Isinya.",
      "Kajiado Central.",
      "Kajiado North.",
      "Loitokitok.",
      "Mashuuru.",
      "Butere",
      "Kakamega central",
      "Kakamega east",
      "Kakamega north",
      "Kakamega south",
      "Khwisero",
      "Lugari",
      "Lukuyani",
      "Lurambi",
      "Matete",
      "Mumias",
      "Mutungu",
      "Navakholo",
      "Ainamoi",
      "Belgut",
      "Bureti",
      "Kipkelion east",
      "Kipkelion west",
      "Soin sigowet",
      "Gatundu north",
      "Gatundu south",
      "Githunguri",
      "Juja",
      "Kabete",
      "Kiambaa",
      "Kiambu",
      "Kikuyu",
      "Limuru",
      "Ruiru",
      "Thika town",
      "lari",
      "Genzw",
      "Kaloleni",
      "Kilifi north",
      "Kilifi south",
      "Magarini",
      "Malindi",
      "Rabai",
      "Kirinyaga central",
      "Kirinyaga east",
      "Kirinyaga west",
      "Mwea east",
      "Mwea west",
      "Kisumu central",
      "Kisumu east ",
      "Kisumu west",
      "Mohoroni",
      "Nyakach",
      "Nyando",
      "Seme",
      "Ikutha",
      "Katulani",
      "Kisasi",
      "Kitui central",
      "Kitui west ",
      "Lower yatta",
      "Matiyani",
      "Migwani",
      "Mutitu",
      "Mutomo",
      "Muumonikyusu",
      "Mwingi central",
      "Mwingi east",
      "Nzambani",
      "Tseikuru",
      "Laikipia central",
      "Laikipia east",
      "Laikipia north",
      "Laikipia west ",
      "Nyahururu",
      "Laikipia central",
      "Laikipia east",
      "Laikipia north",
      "Laikipia west ",
      "Nyahururu",
      "Lamu East",
      "Lamu West",
      "Kathiani",
      "Machakos town",
      "Masinga",
      "Matungulu",
      "Mavoko",
      "Mwala",
      "Yatta",
      "Kaiti",
      "Kibwei west",
      "Kibwezi east",
      "Kilome",
      "Makueni",
      "Mbooni",
      "Banissa",
      "Lafey",
      "Mandera East",
      "Mandera North",
      "Mandera South",
      "Mandera West",
      "Laisamis",
      "Moyale",
      "North hor",
      "Saku",
      "Buuri",
      "Igembe central",
      "Igembe north",
      "Igembe south",
      "Imenti central",
      "Imenti north",
      "Imenti south",
      "Tigania east",
      "Tigania west",
      "Awendo",
      "Kuria east",
      "Kuria west",
      "Mabera",
      "Ntimaru",
      "Rongo",
      "Suna east",
      "Suna west",
      "Uriri",
      "Changamwe",
      "Jomvu",
      "Kisauni",
      "Likoni",
      "Mvita",
      "Nyali",
      "Gatanga",
      "Kahuro",
      "Kandara",
      "Kangema",
      "Kigumo",
      "Kiharu",
      "Mathioya",
      "Murang’a south",
      "Dagoretti North Sub County",
      "Dagoretti South Sub County ",
      "Embakasi Central Sub Count",
      "Embakasi East Sub County",
      "Embakasi North Sub County ",
      "Embakasi South Sub County",
      "Embakasi West Sub County",
      "Kamukunji Sub County",
      "Kasarani Sub County ",
      "Kibra Sub County ",
      "Lang'ata Sub County ",
      "Makadara Sub County",
      "Mathare Sub County ",
      "Roysambu Sub County ",
      "Ruaraka Sub County ",
      "Starehe Sub County ",
      "Westlands Sub County ",
      "Bahati",
      "Gilgil",
      "Kuresoi north",
      "Kuresoi south",
      "Molo",
      "Naivasha",
      "Nakuru town east",
      "Nakuru town west",
      "Njoro",
      "Rongai",
      "Subukia",
      "Aldai",
      "Chesumei",
      "Emgwen",
      "Mosop",
      "Namdi hills",
      "Tindiret",
      "Narok east",
      "Narok north",
      "Narok south",
      "Narok west",
      "Transmara east",
      "Transmara west",
      "Borabu",
      "Manga",
      "Masaba north",
      "Nyamira north",
      "Nyamira south",
      "Kinangop",
      "Kipipiri",
      "Ndaragwa",
      "Ol Kalou",
      "Ol joro orok",
      "Kieni east",
      "Kieni west",
      "Mathira east",
      "Mathira west",
      "Mkurweni",
      "Nyeri town",
      "Othaya",
      "Tetu",
      "Samburu east",
      "Samburu north",
      "Samburu west",
      "Alego usonga",
      "Bondo",
      "Gem",
      "Rarieda",
      "Ugenya",
      "Unguja",
      "Mwatate",
      "Taveta",
      "Voi",
      "Wundanyi",
      "Bura",
      "Galole",
      "Garsen",
      "Chuka",
      "Igambangobe",
      "Maara",
      "Muthambi",
      "Tharak north",
      "Tharaka south",
      "Cherangany",
      "Endebess",
      "Kiminini",
      "Kwanza",
      "Saboti",
      "Loima",
      "Turkana central",
      "Turkana east",
      "Turkana north",
      "Turkana south",
      "Ainabkoi",
      "Kapseret",
      "Kesses",
      "Moiben",
      "Soy",
      "Turbo",
      "Emuhaya",
      "Hamisi",
      "Luanda",
      "Sabatia",
      "vihiga",
      "Eldas",
      "Tarbaj",
      "Wajir East",
      "Wajir North",
      "Wajir South",
      "Wajir West",
      "Central Pokot",
      "North Pokot",
      "Pokot South",
      "West Pokot",
    ],
  },
];

export default subcounties;