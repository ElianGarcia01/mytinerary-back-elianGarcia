import "dotenv/config.js"
import "../../config/database.js"
import Itinerary from "../../models/Itinerary.js"

const itineraries = [
  {
    user: {
      name_user: "Carlos Gómez",
      photo: "https://example.com/photos/madrid-user.jpg",
    },
    title: "Madrid Art & Tapas Tour",
    price: 4,
    duration: 3.5,
    hashtags: ["#Madrid", "#tapas", "#art", "#Spain", "#culinary"],
    city: "6808357e7a6d1e678bc24fc7"
  },
  {
    user: {
      name_user: "Amélie Dupont",
      photo: "https://example.com/photos/paris-user.jpg",
    },
    title: "Romantic Seine River Walk",
    price: 5,
    duration: 2,
    hashtags: ["#Paris", "#Seine", "#romance", "#France"],
    city: "6808357e7a6d1e678bc24fca"
  },
  {
    user: {
      name_user: "Jake Thompson",
      photo: "https://example.com/photos/nyc-user.jpg",
    },
    title: "Central Park & Street Food Tour",
    price: 3,
    duration: 4,
    hashtags: ["#NYC", "#CentralPark", "#foodie", "#BigApple"],
    city: "6808357e7a6d1e678bc24fcd"
  },
  {
    user: {
      name_user: "Yuki Tanaka",
      photo: "https://example.com/photos/tokyo-user.jpg",
    },
    title: "Tokyo Nightlife & Sushi Trail",
    price: 4,
    duration: 5,
    hashtags: ["#Tokyo", "#sushi", "#nightlife", "#Japan"],
    city: "6808357e7a6d1e678bc24fd0"
  },
  {
    user: {
      name_user: "Liam O’Connor",
      photo: "https://example.com/photos/sydney-user.jpg",
    },
    title: "Sydney Coastal Walk & Beach Picnic",
    price: 2,
    duration: 3,
    hashtags: ["#Sydney", "#beach", "#Australia", "#coast"],
    city: "6808357e7a6d1e678bc24fd3"
  },
  {
    user: {
      name_user: "Nadia El-Sayed",
      photo: "https://example.com/photos/cairo-user.jpg",
    },
    title: "Pyramids Adventure & Local Market Tour",
    price: 5,
    duration: 6,
    hashtags: ["#Cairo", "#Egypt", "#pyramids", "#souks"],
    city: "6808357e7a6d1e678bc24fd6"
  },
  {
    user: {
      name_user: "Bruno Silva",
      photo: "https://example.com/photos/rio1.jpg",
    },
    title: "Copacabana Chill & Samba Night",
    price: 4,
    duration: 4,
    hashtags: ["#Rio", "#samba", "#Copacabana", "#Brazil"],
    city: "6808357e7a6d1e678bc24fd9"
  },
  {
    user: {
      name_user: "Ana Costa",
      photo: "https://example.com/photos/rio2.jpg",
    },
    title: "Hike to Christ the Redeemer",
    price: 3,
    duration: 5,
    hashtags: ["#Rio", "#ChristTheRedeemer", "#hiking", "#views"],
    city: "6808357e7a6d1e678bc24fd9"
  },
  {
    user: {
      name_user: "Sophie Brown",
      photo: "https://example.com/photos/toronto-user.jpg",
    },
    title: "Toronto Downtown & Distillery Tour",
    price: 3,
    duration: 2.5,
    hashtags: ["#Toronto", "#Canada", "#distillery", "#urbanwalk"],
    city: "6808357e7a6d1e678bc24fdc"
  },
  {
    user: {
      name_user: "Johann Richter",
      photo: "https://example.com/photos/berlin-user.jpg",
    },
    title: "Berlin Wall & Underground Bunkers",
    price: 4,
    duration: 3,
    hashtags: ["#Berlin", "#history", "#WWII", "#Germany"],
    city: "6808357e7a6d1e678bc24fdf"
  },
  {
    user: {
      name_user: "Olga Petrova",
      photo: "https://example.com/photos/moscow-user.jpg",
    },
    title: "Red Square & Metro Art Tour",
    price: 2,
    duration: 3.5,
    hashtags: ["#Moscow", "#Russia", "#Metro", "#RedSquare"],
    city: "6808357e7a6d1e678bc24fe2"
  },
  {
    user: {
      name_user: "Khalid Al-Mansoor",
      photo: "https://example.com/photos/dubai-user.jpg",
    },
    title: "Dubai Desert Safari & Skyline Views",
    price: 5,
    duration: 6,
    hashtags: ["#Dubai", "#desert", "#luxury", "#UAE"],
    city: "6808357e7a6d1e678bc24fe5"
  },
  {
    user: {
      name_user: "Lucía Fernández",
      photo: "https://example.com/photos/baires-user.jpg",
    },
    title: "Tango Night & Parrilla Tasting",
    price: 3,
    duration: 4,
    hashtags: ["#BuenosAires", "#tango", "#food", "#Argentina"],
    city: "6808357e7a6d1e678bc24fe8"
  },
  {
    user: {
      name_user: "Giovanni Rossi",
      photo: "https://example.com/photos/rome-user.jpg",
    },
    title: "Ancient Rome & Gelato Walk",
    price: 2,
    duration: 3,
    hashtags: ["#Rome", "#Italy", "#Colosseum", "#gelato"],
    city: "6808357e7a6d1e678bc24feb"
  },
  {
    user: {
      name_user: "Mariana López",
      photo: "https://example.com/photos/mexico1.jpg",
    },
    title: "Teotihuacán Ruins & Tacos Tour",
    price: 4,
    duration: 5,
    hashtags: ["#CDMX", "#Mexico", "#Teotihuacán", "#tacos"],
    city: "6808357e7a6d1e678bc24fee"
  },
  {
    user: {
      name_user: "Diego Ramírez",
      photo: "https://example.com/photos/mexico2.jpg",
    },
    title: "Frida Kahlo Museum & Coyoacán Walk",
    price: 3,
    duration: 3,
    hashtags: ["#CDMX", "#Frida", "#Coyoacán", "#culture"],
    city: "6808357e7a6d1e678bc24fee"
  },
  {
    user: {
      name_user: "Sanne Jansen",
      photo: "https://example.com/photos/amsterdam-user.jpg",
    },
    title: "Canal Cruise & Dutch Cheese Tasting",
    price: 2,
    duration: 2.5,
    hashtags: ["#Amsterdam", "#Netherlands", "#canals", "#cheese"],
    city: "6808357e7a6d1e678bc24ff1"
  },
];


Itinerary.insertMany(itineraries)

