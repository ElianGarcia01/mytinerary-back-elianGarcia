import "dotenv/config.js"
import "../../config/database.js"
import Itinerary from "../../models/Itinerary.js"

const itineraries = [
  {
    user: {
      name_user: "Carlos Gómez",
      photo: "https://c0.klipartz.com/pngpicture/178/595/gratis-png-perfil-de-usuario-iconos-de-computadora-inicio-de-sesion-avatares-de-usuario-thumbnail.png",
    },
    title: "Madrid Art & Tapas Tour",
    image:
    "https://images.ctfassets.net/qsacxguwrklb/4wgCaMsw2tMDUZbQwLpg67/2e1913902a39b2d41c2e24540682b171/Devour_Madrid_TTH_2024_1000.jpg?fm=webp&w=600&h=400&q=90&fit=pad&f=center&bg=rgb:000000",
    price: 4,
    duration: 3.5,
    hashtags: ["#Madrid", "#tapas", "#art", "#Spain", "#culinary"],
    city: "680ecf4a1bcb3b6903658a34"
  },
  {
    user: {
      name_user: "Amélie Dupont",
      photo: "https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4=",
    },
    title: "Romantic Seine River Walk",
    image:
    "https://images.stockcake.com/public/a/b/c/abcbf7f1-01fc-4fcc-8e60-ab564a04753b_large/romantic-paris-sunset-stockcake.jpg",
    price: 5,
    duration: 2,
    hashtags: ["#Paris", "#Seine", "#romance", "#France"],
    city: "680ecf4a1bcb3b6903658a37"
  },
  {
    user: {
      name_user: "Jake Thompson",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&s",
    },
    title: "Central Park & Street Food Tour",
    image:
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/99/d6/93.jpg",
    price: 3,
    duration: 4,
    hashtags: ["#NYC", "#CentralPark", "#foodie", "#BigApple"],
    city: "680ecf4a1bcb3b6903658a3a"
  },
  {
    user: {
      name_user: "Yuki Tanaka",
      photo: "https://media.licdn.com/dms/image/v2/D4E03AQHUCq87YrZn-Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695285349504?e=2147483647&v=beta&t=Z3_9c8Rmnsw0wN3L8WZ0acb8Aw-yoMHqhrYkj5nSy_8",
    },
    title: "Tokyo Nightlife & Sushi Trail",
    image:
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/64/18/01.jpg",
    price: 4,
    duration: 5,
    hashtags: ["#Tokyo", "#sushi", "#nightlife", "#Japan"],
    city: "680ecf4a1bcb3b6903658a3d"
  },
  {
    user: {
      name_user: "Liam O’Connor",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySn34VZ7r2Fld0CVVdzsITafVUYhnhMxUqg&s",
    },
    title: "Sydney Coastal Walk & Beach Picnic",
    image:
    "https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2021/06/hero_waverley_cemetery_bondi_sydney.jpg%20(2).renditionimage.900.600.jpg",
    price: 2,
    duration: 3,
    hashtags: ["#Sydney", "#beach", "#Australia", "#coast"],
    city: "680ecf4a1bcb3b6903658a40"
  },
  {
    user: {
      name_user: "Nadia El-Sayed",
      photo: "https://media.istockphoto.com/id/1127919042/es/foto/mujer-africana-joven-nerviosa.jpg?s=612x612&w=0&k=20&c=0nJCFh7G_Qh_rXbKjdUI8qXZdGq-9TmPGPRANvQvY8A=",
    },
    title: "Pyramids Adventure & Local Market Tour",
    image:
    "https://i0.wp.com/egypttimetravel.com/wp-content/uploads/2023/04/souvenir-market-pyramids-area.jpg?resize=800%2C500&ssl=1",
    price: 5,
    duration: 6,
    hashtags: ["#Cairo", "#Egypt", "#pyramids", "#souks"],
    city: "680ecf4a1bcb3b6903658a43"
  },
  {
    user: {
      name_user: "Bruno Silva",
      photo: "https://i0.wp.com/lamiradafotografia.es/wp-content/uploads/2014/07/foto-perfil-psicologo-180x180.jpg?resize=180%2C180",
    },
    title: "Copacabana Chill & Samba Night",
    image:
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/75/54/52/cabanna.jpg",
    price: 4,
    duration: 4,
    hashtags: ["#Rio", "#samba", "#Copacabana", "#Brazil"],
    city: "680ecf4a1bcb3b6903658a46"
  },
  {
    user: {
      name_user: "Ana Costa",
      photo: "https://c0.klipartz.com/pngpicture/178/595/gratis-png-perfil-de-usuario-iconos-de-computadora-inicio-de-sesion-avatares-de-usuario-thumbnail.png",
    },
    title: "Hike to Christ the Redeemer",
    image:
    "https://myturntotravel.com/wp-content/uploads/2017/07/cristo-redentor.jpg",
    price: 3,
    duration: 5,
    hashtags: ["#Rio", "#ChristTheRedeemer", "#hiking", "#views"],
    city: "680ecf4a1bcb3b6903658a46"
  },
  {
    user: {
      name_user: "Johann Richter",
      photo: "https://i1.rgstatic.net/ii/profile.image/1041236735582213-1625261591858_Q512/Johan-Richter-3.jpg",
    },
    title: "Berlin Wall & Underground Bunkers",
    image:
    "https://static.dw.com/image/15766808_6.jpg",
    price: 4,
    duration: 3,
    hashtags: ["#Berlin", "#history", "#WWII", "#Germany"],
    city: "680ecf4a1bcb3b6903658a4c"
  },
  {
    user: {
      name_user: "Olga Petrova",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTp1MX8JyFakPe49juAZraer1RoYTkVfOXw&s",
    },
    title: "Red Square & Metro Art Tour",
    image:
    "https://mos-radius.ru/wp-content/uploads/2024/12/kitajskie-kollegi-na-fone-znamenitogo-hrama-vasilija-blazhennogo-900x600.jpg",
    price: 2,
    duration: 3.5,
    hashtags: ["#Moscow", "#Russia", "#Metro", "#RedSquare"],
    city: "680ecf4a1bcb3b6903658a4f"
  },
  {
    user: {
      name_user: "Khalid Al-Mansoor",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwobaXW0PZZidkPJ224KHBrUE05ElZwdjG6Q&s",
    },
    title: "Dubai Desert Safari & Skyline Views",
    image:
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/99/99/87.jpg",
    price: 5,
    duration: 6,
    hashtags: ["#Dubai", "#desert", "#luxury", "#UAE"],
    city: "680ecf4a1bcb3b6903658a52"
  },
  {
    user: {
      name_user: "Lucía Fernández",
      photo: "https://s3.us-east-1.amazonaws.com/doctoralia.com.mx/doctor/b337f4/b337f4e33f536679104388f239c2e32f_large.jpg",
    },
    title: "Tango Night & Parrilla Tasting",
    image:
    "https://www.tangoaruba.com/storage/app/uploads/public/67d/43f/480/67d43f4801ed4945092119.png",
    price: 3,
    duration: 4,
    hashtags: ["#BuenosAires", "#tango", "#food", "#Argentina"],
    city: "680ecf4a1bcb3b6903658a55"
  },
  {
    user: {
      name_user: "Giovanni Rossi",
      photo: "https://img.a.transfermarkt.technology/portrait/big/84827-1544816993.jpg?lm=1",
    },
    title: "Ancient Rome & Gelato Walk",
    image:
    "https://images.ctfassets.net/206xpozje0ny/4p3D3IFsYwCaCwuyEQAYGU/61c7052d5a3cccddf9038597c759e513/rome-walking-tour-1.jpg?fm=webp&w=900&q=80&fit=fill&f=center",
    price: 2,
    duration: 3,
    hashtags: ["#Rome", "#Italy", "#Colosseum", "#gelato"],
    city: "680ecf4a1bcb3b6903658a58"
  },
  {
    user: {
      name_user: "Mariana López",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmftR5LnFFRp2plvjxhDK1dyZIOR_yjJBag&s",
    },
    title: "Teotihuacán Ruins & Tacos Tour",
    image:
    "https://powertraveller.com/wp-content/uploads/2024/08/1_teotihuacan-full-day-tour-from-mexico-city.jpg",
    price: 4,
    duration: 5,
    hashtags: ["#CDMX", "#Mexico", "#Teotihuacán", "#tacos"],
    city: "680ecf4a1bcb3b6903658a5b"
  },
  {
    user: {
      name_user: "Diego Ramírez",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HTWImkCpolr2I-7cyKh1X2EdEeNz4TihLA&s",
    },
    title: "Frida Kahlo Museum & Coyoacán Walk",
    image:
    "https://images.robertharding.com/zoom/RM/RH/HORIZONTAL/1113-12577.jpg",
    price: 3,
    duration: 3,
    hashtags: ["#CDMX", "#Frida", "#Coyoacán", "#culture"],
    city: "680ecf4a1bcb3b6903658a5b"
  },
  {
    user: {
      name_user: "Sanne Jansen",
      photo: "https://c0.klipartz.com/pngpicture/178/595/gratis-png-perfil-de-usuario-iconos-de-computadora-inicio-de-sesion-avatares-de-usuario-thumbnail.png",
    },
    title: "Canal Cruise & Dutch Cheese Tasting",
    image:
    "https://powertraveller.com/wp-content/uploads/2024/08/1_amsterdam-cheese-and-wine-canal-cruise.jpg",
    price: 2,
    duration: 2.5,
    hashtags: ["#Amsterdam", "#Netherlands", "#canals", "#cheese"],
    city: "680ecf4a1bcb3b6903658a5e"
  },
]

Itinerary.insertMany(itineraries)

