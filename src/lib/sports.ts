import type { Sport, SportSummary } from "@/lib/types";

export const extraTexts: { sportSlug: string; text: string }[] = [
  {
    sportSlug: "strassenradsport",
    text: "Straßenradsport fördert sowohl Teamwork in der Gruppe als auch die Fähigkeit, in Wettkämpfen eigenständig Entscheidungen zu treffen. Das Julius-Spiegelberg-Gymnasium setzt sich dafür ein, dass seine Schüler:innen individuell gefördert und ihre Potenziale entfaltet werden.",
  },
  {
    sportSlug: "bahnradsport",
    text: "Bahnradsport verbindet Eigenständigkeit und Teamwork. Fahrer:innen müssen selbstständig handeln und gleichzeitig aber auf Geschwindigkeit und Position anderer achten. Gegenseitige Rücksichtnahme aber auch Eigenständigkeit sind wichtige Werte, die auch am Julius-Spiegelberg-Gymnasium gefördert werden.",
  },
  {
    sportSlug: "bmx",
    text: "BMX bietet viel Raum für Kreativität; beim Erlernen neuer Tricks wie auch beim gemeinsamen Training. Vielfalt, Respekt und gegenseitige Rücksichtnahme spielen dabei eine große Rolle und sind auch am Julius-Spiegelberg-Gymnasium wichtige Werte.",
  },
  {
    sportSlug: "mountainbike",
    text: "Mountainbiking fördert die Selbstständigkeit und Entscheidungsfähigkeit. Das Gelände, die Hindernisse und das eigene Können müssen dabei ständig eingeschätzt werden. Dabei wird die individuelle Entwicklung durch unterschiedliche Strecken und Schwierigkeitsgrade gefördert. Das Julius-Spiegelberg-Gymnasium fördert die Selbständigkeit, individuelle Förderung und Potenzialentfaltung.",
  },
];

export const sports: Sport[] = [
  {
    slug: "strassenradsport",
    name: "Straßenradsport",
    heroImage:
      "https://radsport-hh.de/wp-content/uploads/2023/09/RVH_Strassenrennsport_Contentbild04_1440.webp",
    description:
      "Der Straßenradsport entstand in der zweiten Hälfte des 19. Jahrhunderts in Frankreich.",
    speeds: "40-43km/h",
    terrain: "Asphaltierte Straßen",
    equipment: ["Leichtes Rennrad", "Schmale Reifen", "Hoher Luftdruck"],
    bikeDescription: "",
    bikes: [
      {
        name: "Colnago Y1Rs",
        image:
          "https://res.cloudinary.com/delius-klasing-eu/image/upload/v1749727651/tour/fotoweb/49722.jpg",
      },
      {
        name: "S-Works Tarmac SL9 LTD",
        image:
          "https://granfondo-cycling.com/wp-content/uploads/sites/3/2026/06/Specialized_S-Works_Tarmac_SL9_2026_Test_Review_WEB-.jpg",
      },
    ],
    celebrities: [
      {
        name: "Eddy Merckx",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Eddy_Merckx_%28PANINI_%22Sprint_71%22_cover%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        age: 81,
        achievements: 11,
        victoryFieldName: "Grand-Tour-Siege",
        country: "BEL",
        wikipediaLink: "https://de.wikipedia.org/wiki/Eddy_Merckx",
      },
      {
        name: "Bernard Hinault",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxDIPdG1iW0qqwMt48RrU4bM-d5GN9A_LRa_DF0IIriTfX4feNShT1tcz1-bUYJZ_pQZR6Gc40IAi-cX-0bD3LbiYb99dp8GGkQ8aPRw&s=10",
        age: 71,
        achievements: 10,
        victoryFieldName: "Grand-Tour-Siege",
        country: "FRA",
        wikipediaLink: "https://en.wikipedia.org/wiki/Bernard_Hinault",
      },
      {
        name: "Miguel Induráin",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Miguel_Indurain.jpg/250px-Miguel_Indurain.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        age: 62,
        achievements: 7,
        victoryFieldName: "Grand-Tour-Siege",
        country: "ESP",
        wikipediaLink: "https://en.wikipedia.org/wiki/Miguel_Indur%C3%A1in",
      },
    ],
  },
  {
    slug: "bahnradsport",
    name: "Bahnradsport",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Velodrome_racing.jpg?utm_source=de.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    description:
      "Der Bahnradsport entstand im 19. Jahrhundert in Frankreich und England.",
    speeds: "65km/h",
    terrain: "133-500m Bahn",
    equipment: ["Keine Bremsen", "Keine Gangschaltung", "Geringes Gewicht"],
    bikeDescription: "",
    bikes: [
      {
        name: "Canyon Speedmax CFR AXS",
        image:
          "https://bikeexplorer.de/wp-content/uploads/2026/03/das-canyon-speedmax-cfr-1by-axs-im-fokus-image-1.webp",
      },
      {
        name: "Canyon Speedmax CF 7 Di2 Race",
        image:
          "https://www.rennrad-news.de/news/wp-content/uploads/2022/09/canyon-speedmax-cf-7-disc-2-1024x683.jpg",
      },
    ],
    celebrities: [
      {
        name: "Harrie Lavreysen",
        image:
          "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/olz0aebbdrwcyxst6btk",
        age: 29,
        achievements: 20,
        victoryFieldName: "Weltmeistertitel",
        country: "NLD",
        wikipediaLink: "https://en.wikipedia.org/wiki/Harrie_Lavreysen",
      },
      {
        name: "Jason Kenny",
        image:
          "https://images.ctfassets.net/v8zaoys2pgzt/7tdFuSgpJXNmksphRk7u6G/e2f80a63a7432fd2e659c22d01412085/GettyImages-1332271285.jpg",
        age: 38,
        achievements: 3,
        victoryFieldName: "Weltmeistertitel",
        country: "GBR",
        wikipediaLink: "https://en.wikipedia.org/wiki/Jason_Kenny",
      },
      {
        name: "Chris Hoy",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chris%20Hoy%202012.jpg",
        age: 50,
        achievements: 11,
        victoryFieldName: "Weltmeistertitel",
        country: "GBR",
        wikipediaLink: "https://en.wikipedia.org/wiki/Chris_Hoy",
      },
    ],
  },
  {
    slug: "bmx",
    name: "BMX",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/BMX_racing_action_photo.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    description: "BMX begann in den frühen 1970ern in den USA.",
    speeds: "24-32km/h",
    terrain: "Skateparks, BMX-Rennstrecken, Dirt-Parks, Pumptracks",
    equipment: [
      "Keine Federung",
      "Dafür sehr dicke Reifen",
      "Sehr klein & niedrig",
      "Sehr starke & belastbare Felgen",
      "Keine Gangschaltung",
      "Street- & Dirtbereich: viele ohne Bremse",
    ],
    bikeDescription: "",
    bikes: [
      {
        name: "Sunday Soundwave (Allround / Street & Park)",
        image:
          "https://sundaybikes.com/wp-content/uploads/2017/05/SUNDAY-2018-Soundwave-Black-Young-Retro-Drool-9887-Web.jpg",
      },
      {
        name: "Chase Element Pro (Wettkampf)",
        image:
          "https://chasebicycles.com/wp-content/uploads/2024/05/chase-element-propluscr-dust.jpg",
      },
    ],
    celebrities: [
      {
        name: "Hannah Roberts",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c0/BMX_Chengdu_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        age: 25,
        achievements: 6,
        victoryFieldName: "Weltmeistertitel (BMX Freestyle Park)",
        country: "USA",
        wikipediaLink:
          "https://en.wikipedia.org/wiki/Hannah_Roberts_(BMX_cyclist)",
      },
      {
        name: "Beth Shriever",
        image:
          "https://c.files.bbci.co.uk/D7FE/production/_119749255_microsoftteams-image-2.png",
        age: 27,
        achievements: 4,
        victoryFieldName: "Elite-Weltmeistertitel (BMX Racing)",
        country: "GBR",
        wikipediaLink: "https://en.wikipedia.org/wiki/Beth_Shriever",
      },
      {
        name: "Joris Daudet",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Joris%20Daudet%20%28FRA%29%20Rio2016.jpg",
        age: 35,
        achievements: 3,
        victoryFieldName: "Elite-Weltmeistertitel (BMX Racing)",
        country: "FRA",
        wikipediaLink: "https://en.wikipedia.org/wiki/Joris_Daudet",
      },
    ],
  },
  {
    slug: "mountainbike",
    name: "Mountainbikes (MTB)",
    heroImage:
      "https://www.albstadt-tourismus.de/_Resources/Persistent/cab31487f1f02dfb6929037d2fea59408d547bc1/Startseite%20_%20Ausschnitt%20fliegender%20Biker-2500x1407.jpg",
    description:
      "Stammt aus den späten 1960er- und 1970er-Jahren in Nordkalifornien.",
    speeds: "12-20km/h",
    terrain: "Unbefestigte Wege, Waldpfade, Bikeparks",
    equipment: [
      "Sehr breite Reifen",
      "Gute Federung",
      "Robuster Rahmen",
      "Starke Bremsen",
      "Viele / leichte Gänge",
    ],
    bikeDescription: "",
    bikes: [
      {
        name: "Cube Reaction",
        image:
          "https://www.ebike-24.com/media/catalog/product/thumbnail/093c46e53e235e62a74e7db403fdb6700a5d3e3bb13c63b044b99968/image/0/900x547/111/95/1/1/1110321C_f7e7.jpg",
      },
      {
        name: "Specialized Rockhopper",
        image:
          "https://www.ihrfahrradprofi.de/cdn/shop/files/91826-33_ROCKHOPPER-EXPERT-QTZMET-WHT_HERO-PDP.webp?v=1764667785",
      },
    ],
    celebrities: [
      {
        name: "Rachel Atherton",
        image:
          "https://www.athertonbikes.com/media/WC1_Lenzerheide_Finals-536.jpg",
        age: 38,
        achievements: 5,
        victoryFieldName: "Elite-Weltmeistertitel (Downhill)",
        country: "GBR",
        wikipediaLink: "https://en.wikipedia.org/wiki/Rachel_Atherton",
      },
      {
        name: "Nino Schurter",
        image:
          "https://res.cloudinary.com/delius-klasing-eu/image/upload/v1691402425/bike/bike-20230801-202309-new-img-82-1-img_12e4bc77dbe64ac8c469c5b6ce2ec53a.jpg",
        age: 40,
        achievements: 10,
        victoryFieldName: "Elite-Weltmeistertitel (Cross-Country)",
        country: "CHE" /* Schweiz; "Confoederatio Helvetica" */,
        wikipediaLink: "https://en.wikipedia.org/wiki/Nino_Schurter",
      },
      {
        name: "Julien Absalon",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a1/Julien_Absalon_La_Bresse_2012_03.JPG",
        age: 46,
        achievements: 5,
        victoryFieldName: "Elite-Weltmeistertitel (Cross-Country)",
        country: "FRA",
        wikipediaLink: "https://en.wikipedia.org/wiki/Julien_Absalon",
      },
    ],
  },
];

export const sportSummaries: SportSummary[] = sports.map((sport) => ({
  slug: sport.slug,
  name: sport.name,
  heroImage: sport.heroImage,
  description: sport.description,
  bikeCount: sport.bikes.length,
  celebrityCount: sport.celebrities.length,
}));

export function getSportBySlug(slug: string) {
  return sports.find((sport) => sport.slug === slug) ?? null;
}
