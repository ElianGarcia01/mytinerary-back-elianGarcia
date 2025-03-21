import "dotenv/config.js";
import "../../config/database.js";
import City from "../City.js";

const cities = [
  {
    name_city: "Madrid",
    image: "madrid.jpg",
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
    image: "paris.jpg",
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
    image: "new_york.jpg",
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
    image: "tokyo.jpg",
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
    image: "sydney.jpg",
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
    image: "cairo.jpg",
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
    image: "rio.jpg",
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
    image: "toronto.jpg",
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
    image: "berlin.jpg",
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
    image: "moscow.jpg",
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
    image: "dubai.jpg",
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
    image: "buenos_aires.jpg",
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
    image: "rome.jpg",
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
    name_city: "Beijing",
    image: "beijing.jpg",
    country: "China",
    continent: "Asia",
    description:
      "Beijing is the capital of China, known for its modern architecture, historic sites like the Great Wall, and the Forbidden City.",
    currency: "CNY",
    time_zone: "CST",
    population: 21710000,
    tourist_places: [
      {
        name: "Great Wall of China",
        description:
          "A series of fortifications built to protect China from invasions.",
        image: "great_wall.jpg",
      },
      {
        name: "Forbidden City",
        description:
          "A historic imperial palace complex in the center of Beijing.",
        image: "forbidden_city.jpg",
      },
    ],
    main_language: "Mandarin",
  },
  {
    name_city: "Cape Town",
    image: "cape_town.jpg",
    country: "South Africa",
    continent: "Africa",
    description:
      "Cape Town is a port city in South Africa, known for its natural beauty, Table Mountain, and vibrant culture.",
    currency: "ZAR",
    time_zone: "SAST",
    population: 4336886,
    tourist_places: [
      {
        name: "Table Mountain",
        description:
          "A flat-topped mountain offering panoramic views of Cape Town.",
        image: "table_mountain.jpg",
      },
      {
        name: "Robben Island",
        description:
          "An island where Nelson Mandela was imprisoned, now a museum.",
        image: "robben_island.jpg",
      },
    ],
    main_language: "Afrikaans",
  },
  {
    name_city: "Bangkok",
    image: "bangkok.jpg",
    country: "Thailand",
    continent: "Asia",
    description:
      "Bangkok is the capital of Thailand, known for its ornate temples, vibrant street life, and bustling markets.",
    currency: "THB",
    time_zone: "ICT",
    population: 10539000,
    tourist_places: [
      {
        name: "Grand Palace",
        description:
          "A complex of buildings at the heart of Bangkok, including the Temple of the Emerald Buddha.",
        image: "grand_palace.jpg",
      },
      {
        name: "Chatuchak Market",
        description:
          "One of the world's largest weekend markets, with thousands of stalls.",
        image: "chatuchak_market.jpg",
      },
    ],
    main_language: "Thai",
  },
  {
    name_city: "Mexico City",
    image: "mexico_city.jpg",
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
    name_city: "Istanbul",
    image: "istanbul.jpg",
    country: "Turkey",
    continent: "Asia",
    description:
      "Istanbul is a major city in Turkey, straddling Europe and Asia, known for its historic sites like the Hagia Sophia and the Blue Mosque.",
    currency: "TRY",
    time_zone: "TRT",
    population: 15462452,
    tourist_places: [
      {
        name: "Hagia Sophia",
        description:
          "A historic mosque and former cathedral, known for its stunning architecture.",
        image: "hagia_sophia.jpg",
      },
      {
        name: "Blue Mosque",
        description: "A historic mosque known for its blue-tiled interior.",
        image: "blue_mosque.jpg",
      },
    ],
    main_language: "Turkish",
  },
  {
    name_city: "Amsterdam",
    image: "amsterdam.jpg",
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
  {
    name_city: "Seoul",
    image: "seoul.jpg",
    country: "South Korea",
    continent: "Asia",
    description:
      "Seoul is the capital of South Korea, known for its modern skyscrapers, historic palaces, and vibrant pop culture.",
    currency: "KRW",
    time_zone: "KST",
    population: 9776000,
    tourist_places: [
      {
        name: "Gyeongbokgung Palace",
        description:
          "A historic palace from the Joseon Dynasty, known for its traditional architecture.",
        image: "gyeongbokgung.jpg",
      },
      {
        name: "Myeongdong",
        description:
          "A bustling shopping district known for its street food and fashion.",
        image: "myeongdong.jpg",
      },
    ],
    main_language: "Korean",
  },
];

City.insertMany(cities)
