import "dotenv/config.js";
import "../../config/database.js";
import City from "../City.js";

const cities = [
  {
    name_city: "Madrid",
    image:
      "https://images.unsplash.com/photo-1570698473651-b2de99bae12f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFkcmlkfGVufDB8fDB8fHww",
    country: "Spain",
    continent: "Europe",
    description:
      "Madrid is the capital of Spain, known for its rich history, art, and vibrant nightlife.",
    currency: "EUR",
    time_zone: "CET",
    population: 3266126,
    tourist_places: [
      {
        name: "Prado Museum",
        description:
          "One of the world's premier art museums, featuring works by Goya, Velázquez, and El Greco.",
        image: "prado_museum.jpg",
      },
      {
        name: "Retiro Park",
        description:
          "A large and beautiful park in the heart of Madrid, perfect for a stroll or a boat ride.",
        image: "retiro_park.jpg",
      },
    ],
    main_language: "Spanish",
  },
  {
    name_city: "Paris",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFyaXN8ZW58MHx8MHx8fDA%3D",
    country: "France",
    continent: "Europe",
    description:
      "Paris, France's capital, is a major European city and a global center for art, fashion, and culture.",
    currency: "EUR",
    time_zone: "CET",
    population: 2140526,
    tourist_places: [
      {
        name: "Eiffel Tower",
        description: "Iconic tower offering panoramic views of the city.",
        image: "eiffel_tower.jpg",
      },
      {
        name: "Louvre Museum",
        description: "World's largest art museum and a historic monument.",
        image: "louvre_museum.jpg",
      },
    ],
    main_language: "French",
  },
  {
    name_city: "New York",
    image:
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV3JTIwWW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    country: "USA",
    continent: "North America",
    description:
      "New York City is the most populous city in the United States, known for its significant impact on commerce, finance, media, art, fashion, research, technology, education, and entertainment.",
    currency: "USD",
    time_zone: "EST",
    population: 8419600,
    tourist_places: [
      {
        name: "Statue of Liberty",
        description:
          "A colossal neoclassical sculpture on Liberty Island in New York Harbor.",
        image: "statue_liberty.jpg",
      },
      {
        name: "Central Park",
        description:
          "An urban park in Manhattan, New York City, comprising 843 acres.",
        image: "central_park.jpg",
      },
    ],
    main_language: "English",
  },
  {
    name_city: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9reW98ZW58MHx8MHx8fDA%3D",
    country: "Japan",
    continent: "Asia",
    description:
      "Tokyo is the capital of Japan, known for its modern architecture, vibrant pop culture, and historic temples.",
    currency: "JPY",
    time_zone: "JST",
    population: 13929286,
    tourist_places: [
      {
        name: "Shibuya Crossing",
        description:
          "The world's busiest pedestrian crossing, a symbol of Tokyo's bustling energy.",
        image: "shibuya_crossing.jpg",
      },
      {
        name: "Tokyo Tower",
        description:
          "A communications and observation tower inspired by the Eiffel Tower.",
        image: "tokyo_tower.jpg",
      },
    ],
    main_language: "Japanese",
  },
  {
    name_city: "Sydney",
    image:
      "https://images.unsplash.com/photo-1590716209211-ea74d5f63573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFN5ZG5leXxlbnwwfHwwfHx8MA%3D%3D",
    country: "Australia",
    continent: "Oceania",
    description:
      "Sydney is Australia's largest city, famous for its harbor, iconic Opera House, and stunning beaches.",
    currency: "AUD",
    time_zone: "AEST",
    population: 5312163,
    tourist_places: [
      {
        name: "Sydney Opera House",
        description:
          "A multi-venue performing arts center and an architectural masterpiece.",
        image: "sydney_opera.jpg",
      },
      {
        name: "Bondi Beach",
        description:
          "One of the most famous beaches in the world, perfect for surfing and sunbathing.",
        image: "bondi_beach.jpg",
      },
    ],
    main_language: "English",
  },
  {
    name_city: "Cairo",
    image:
      "https://images.unsplash.com/photo-1595979904086-471704dc0e81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2Fpcm98ZW58MHx8MHx8fDA%3D",
    country: "Egypt",
    continent: "Africa",
    description:
      "Cairo is the capital of Egypt, known for its ancient history, the Pyramids of Giza, and the Nile River.",
    currency: "EGP",
    time_zone: "EET",
    population: 10230350,
    tourist_places: [
      {
        name: "Pyramids of Giza",
        description:
          "Ancient pyramids and one of the Seven Wonders of the Ancient World.",
        image: "pyramids_giza.jpg",
      },
      {
        name: "Egyptian Museum",
        description:
          "Home to an extensive collection of ancient Egyptian antiquities.",
        image: "egyptian_museum.jpg",
      },
    ],
    main_language: "Arabic",
  },
  {
    name_city: "Rio de Janeiro",
    image:
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Brazil",
    continent: "South America",
    description:
      "Rio de Janeiro is a vibrant city known for its Carnival, samba music, and stunning beaches like Copacabana and Ipanema.",
    currency: "BRL",
    time_zone: "BRT",
    population: 6747815,
    tourist_places: [
      {
        name: "Christ the Redeemer",
        description:
          "A colossal statue of Jesus Christ atop Corcovado Mountain.",
        image: "christ_redeemer.jpg",
      },
      {
        name: "Sugarloaf Mountain",
        description:
          "A peak with a cable car offering panoramic views of the city.",
        image: "sugarloaf_mountain.jpg",
      },
    ],
    main_language: "Portuguese",
  },
  {
    name_city: "Toronto",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9yb250b3xlbnwwfHwwfHx8MA%3D%3D",
    country: "Canada",
    continent: "North America",
    description:
      "Toronto is Canada's largest city, known for its multiculturalism, the CN Tower, and vibrant arts scene.",
    currency: "CAD",
    time_zone: "EST",
    population: 2930000,
    tourist_places: [
      {
        name: "CN Tower",
        description:
          "A iconic communications and observation tower with stunning views.",
        image: "cn_tower.jpg",
      },
      {
        name: "Royal Ontario Museum",
        description: "A museum of art, world culture, and natural history.",
        image: "royal_ontario_museum.jpg",
      },
    ],
    main_language: "English",
  },
  {
    name_city: "Berlin",
    image:
      "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVybGlufGVufDB8fDB8fHww",
    country: "Germany",
    continent: "Europe",
    description:
      "Berlin is the capital of Germany, known for its history, vibrant art scene, and modern architecture.",
    currency: "EUR",
    time_zone: "CET",
    population: 3664088,
    tourist_places: [
      {
        name: "Brandenburg Gate",
        description:
          "An 18th-century neoclassical monument and symbol of German unity.",
        image: "brandenburg_gate.jpg",
      },
      {
        name: "Berlin Wall Memorial",
        description:
          "A memorial and museum documenting the history of the Berlin Wall.",
        image: "berlin_wall.jpg",
      },
    ],
    main_language: "German",
  },
  {
    name_city: "Moscow",
    image:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9zY293fGVufDB8fDB8fHww",
    country: "Russia",
    continent: "Europe",
    description:
      "Moscow is the capital of Russia, known for its historic architecture, Red Square, and the Kremlin.",
    currency: "RUB",
    time_zone: "MSK",
    population: 12655050,
    tourist_places: [
      {
        name: "Red Square",
        description:
          "A historic square in the heart of Moscow, surrounded by landmarks.",
        image: "red_square.jpg",
      },
      {
        name: "Saint Basil's Cathedral",
        description: "A colorful and iconic cathedral in Red Square.",
        image: "saint_basils.jpg",
      },
    ],
    main_language: "Russian",
  },
  {
    name_city: "Dubai",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHViYWl8ZW58MHx8MHx8fDA%3D",
    country: "UAE",
    continent: "Asia",
    description:
      "Dubai is a city in the United Arab Emirates, known for its luxury shopping, ultramodern architecture, and lively nightlife.",
    currency: "AED",
    time_zone: "GST",
    population: 3331420,
    tourist_places: [
      {
        name: "Burj Khalifa",
        description:
          "The tallest building in the world, offering stunning views from its observation deck.",
        image: "burj_khalifa.jpg",
      },
      {
        name: "Dubai Mall",
        description:
          "One of the world's largest shopping malls, with hundreds of stores and attractions.",
        image: "dubai_mall.jpg",
      },
    ],
    main_language: "Arabic",
  },
  {
    name_city: "Buenos Aires",
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnVlbm9zJTIwQWlyZXN8ZW58MHx8MHx8fDA%3D",
    country: "Argentina",
    continent: "South America",
    description:
      "Buenos Aires is the capital of Argentina, known for its European architecture, tango music, and vibrant culture.",
    currency: "ARS",
    time_zone: "ART",
    population: 2891082,
    tourist_places: [
      {
        name: "La Boca",
        description:
          "A colorful neighborhood known for its tango culture and street art.",
        image: "la_boca.jpg",
      },
      {
        name: "Recoleta Cemetery",
        description:
          "A historic cemetery with elaborate mausoleums and statues.",
        image: "recoleta_cemetery.jpg",
      },
    ],
    main_language: "Spanish",
  },
  {
    name_city: "Rome",
    image:
      "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Um9tZXxlbnwwfHwwfHx8MA%3D%3D",
    country: "Italy",
    continent: "Europe",
    description:
      "Rome is the capital of Italy, known for its ancient history, the Colosseum, and Vatican City.",
    currency: "EUR",
    time_zone: "CET",
    population: 2870500,
    tourist_places: [
      {
        name: "Colosseum",
        description:
          "An ancient amphitheater and one of the most iconic landmarks of Rome.",
        image: "colosseum.jpg",
      },
      {
        name: "Vatican City",
        description:
          "The smallest independent state in the world, home to St. Peter's Basilica and the Sistine Chapel.",
        image: "vatican_city.jpg",
      },
    ],
    main_language: "Italian",
  },
  {
    name_city: "Mexico City",
    image:
      "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFuZ2VsJTIwZGUlMjBsYSUyMGluZGVwZW5kZW5jaWElMjBNZXhpY298ZW58MHx8MHx8fDA%3D",
    country: "Mexico",
    continent: "North America",
    description:
      "Mexico City is the capital of Mexico, known for its historic center, Aztec ruins, and vibrant culture.",
    currency: "MXN",
    time_zone: "CST",
    population: 9209944,
    tourist_places: [
      {
        name: "Zócalo",
        description:
          "The main square in Mexico City, surrounded by historic buildings.",
        image: "zocalo.jpg",
      },
      {
        name: "National Museum of Anthropology",
        description: "A museum showcasing Mexico's pre-Columbian heritage.",
        image: "anthropology_museum.jpg",
      },
    ],
    main_language: "Spanish",
  },
  {
    name_city: "Amsterdam",
    image:
      "https://images.unsplash.com/photo-1580996378027-23040f16f157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QW1zdGVyZGFufGVufDB8fDB8fHww",
    country: "Netherlands",
    continent: "Europe",
    description:
      "Amsterdam is the capital of the Netherlands, known for its canals, historic houses, and vibrant art scene.",
    currency: "EUR",
    time_zone: "CET",
    population: 821752,
    tourist_places: [
      {
        name: "Van Gogh Museum",
        description: "A museum dedicated to the works of Vincent van Gogh.",
        image: "van_gogh_museum.jpg",
      },
      {
        name: "Anne Frank House",
        description:
          "A museum dedicated to the life of Anne Frank and her diary.",
        image: "anne_frank_house.jpg",
      },
    ],
    main_language: "Dutch",
  },
];

City.insertMany(cities)