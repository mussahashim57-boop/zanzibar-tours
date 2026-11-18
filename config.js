// ============================================================
//  ÚNICO ARCHIVO QUE HAY QUE TOCAR
//  Datos del guía y de las excursiones. La web se monta sola.
// ============================================================

window.GUIDE = {
  brand: "Zanzibar Hashim Francophone",
  name: "Zanzibar Hashim Francophone",
  shortName: "Hashim",                    // cómo le saludan en el WhatsApp
  photo: "fotos/guide.jpg",
  whatsapp: "255622158497",               // número con 255 y sin +
  location: "Paje · Zanzibar",
  headline: "Welcome to Zanzibar!",
  intro: "Discover the beauty, culture, history, nature and hidden treasures of the Spice Island with a local guide who was born and raised here.",
  // Cada línea es un párrafo
  bio: [
    "I was born and raised in the beautiful Spice Island of Zanzibar, Tanzania.",
    "I am a passionate, friendly and professional local tour guide with 8 years of experience in the tourism industry. My mission is to give visitors unforgettable experiences by showing them the beauty, culture, history, nature and hidden treasures of Zanzibar and Tanzania.",
    "I speak English and French, so I can welcome visitors from all over the world. With my local knowledge, experience and passion for tourism, I make every excursion enjoyable, comfortable, safe and memorable.",
    "Whether you are travelling alone, as a couple, with family or in a group, I will organize wonderful adventures according to your interests."
  ],
  promises: [
    "8 years of experience",
    "English & French",
    "Pickup anywhere in Zanzibar",
    "Solo, couples, families & groups"
  ],
  pickup: "I pick up guests from anywhere in Zanzibar — hotels, resorts, villas, the airport and any other accommodation.",
  heroPhoto: "fotos/hero.jpg",
  instagram: ""
};

window.ACTIVITIES = [
  {
    id: "prison-island", name: "Prison Island", subtitle: "Changuu Island", photo: "fotos/prison-island.jpg",
    photos: ["fotos/prison-island.jpg", "fotos/prison-building.jpg", "fotos/prison-tortoise-1.jpg", "fotos/prison-tortoise-2.jpg", "fotos/prison-tortoise-3.jpg"], time: "Half day",
    copy: "A short boat ride from Stone Town to a tiny island with crystal water. Meet the giant Aldabra tortoises — some are over 100 years old.",
    see: ["Giant tortoises", "Old prison ruins", "Snorkeling"]
  },
  {
    id: "spice-farm", name: "Spice Farm", subtitle: "Why they call it the Spice Island", photo: "fotos/spice-farm.jpg", time: "Half day",
    copy: "Walk through the plantations and smell, touch and taste the spices that made Zanzibar famous. Finish with fresh tropical fruit.",
    see: ["Cloves & cinnamon", "Vanilla & nutmeg", "Fruit tasting"]
  },
  {
    id: "stone-town", name: "Stone Town", subtitle: "UNESCO World Heritage", photo: "fotos/stone-town.jpg", time: "Half or full day",
    copy: "Get lost in the narrow streets of the old town with someone who knows every corner. Carved wooden doors, markets, history and the sunset food market.",
    see: ["Carved doors", "Darajani market", "Forodhani gardens"]
  },
  {
    id: "mtende", name: "Mtende Beach", subtitle: "The hidden beach", photo: "fotos/mtende.jpg", time: "Half day",
    copy: "A secret cove of white sand between coral cliffs and turquoise water. Quiet, wild and one of the most beautiful spots on the island.",
    see: ["Coral cliffs", "Turquoise lagoon", "Few people"]
  },
  {
    id: "jozani", name: "Jozani Forest", subtitle: "National park", photo: "fotos/jozani.jpg", time: "2–3 hours",
    copy: "The only forest in the world where you can see the red colobus monkey up close. Walk the jungle trails and the mangrove boardwalk.",
    see: ["Red colobus monkeys", "Mangroves", "Tropical forest"]
  },
  {
    id: "turtles", name: "Sea Turtles", subtitle: "Kizimkazi", photo: "fotos/turtles.jpg", time: "Half day",
    copy: "Swim next to sea turtles in a natural lagoon in the south of the island. A gentle, unforgettable experience for all ages.",
    see: ["Swim with turtles", "Natural lagoon", "Kids friendly"]
  },
  {
    id: "fishing", name: "Game Fishing", subtitle: "Deep sea trip", photo: "fotos/fishing.jpg", time: "Half or full day",
    copy: "Head out to the deep blue on a fishing boat and try for your trophy: sailfish, tuna, kingfish and more. ",
    see: ["Open ocean", "Big fish", "Trophy photos"]
  },
  {
    id: "dhow", name: "Dhow Sailing", subtitle: "Sunset on the Indian Ocean", photo: "fotos/dhow.jpg", time: "2 hours",
    copy: "Sail on a traditional wooden dhow as the sun goes down over the ocean. The most relaxing way to end a day in Zanzibar.",
    see: ["Traditional boat", "Sunset", "Golden hour photos"]
  },
  {
    id: "kitesurf", name: "Kitesurfing Lesson", subtitle: "Paje, one of the best kite spots", photo: "fotos/kitesurf.jpg", time: "From 2 hours",
    copy: "Paje's shallow lagoon and steady wind make it perfect to learn. First lesson? No problem — start safely in flat, warm water.",
    see: ["Beginners welcome", "Shallow lagoon", "Steady wind"]
  },
  {
    id: "blue-safari", name: "Blue Safari", subtitle: "A full day at sea", photo: "fotos/blue-safari.jpg", time: "Full day",
    copy: "Sail through Menai Bay, snorkel among colourful fish, relax on a sandbank and enjoy a seafood lunch on a small island.",
    see: ["Snorkeling", "Sandbank", "Seafood lunch"]
  }
];

// Para que una excursión pase varias fotos solas, añade photos: ["fotos/a.jpg", "fotos/b.jpg", ...]
// Créditos de fotos con licencia libre (se muestran al pie de la web)
// Reseñas. Ahora: resumen de lo que dicen sus clientes, SIN nombres (reviewsShowNames = false).
// Los nombres solo se activan cuando cada texto sea la reseña real de esa persona.
window.reviewsAreSamples = false;
// true = muestra nombres (SOLO con reseñas reales de cada cliente); false = tarjetas sin nombre
window.reviewsShowNames = false;
window.REVIEWS = [
  { name: "Lukas",    text: "Hashim is so friendly and full of energy. We felt like we were exploring Zanzibar with a friend, not a guide." },
  { name: "Camille",  text: "A magical day! Hashim showed us the island in a completely different way." },
  { name: "Oliver",   text: "Best excursion of our whole holiday. Great value for money — there's really no comparison." },
  { name: "Greta",    text: "Super organised, always on time and always smiling. The turtles in Kizimkazi were unforgettable." },
  { name: "Étienne",  text: "Such a kind and passionate guide. We saw places we would never have found on our own." },
  { name: "Harriet",  text: "Picked us up from our hotel in Paje and made the day so easy. Our kids loved him!" },
  { name: "Matthias", text: "Very active and very knowledgeable. Stone Town with Hashim was a completely different experience." },
  { name: "Ingrid",   text: "Friendly, relaxed and honest prices. We booked a second trip with him the next day." },
  { name: "Mads",     text: "He made us discover the real Zanzibar. Fun, safe and amazing value." },
  { name: "Freja",    text: "The sunset dhow trip was perfect. Hashim made us feel at home from the first minute." },
  { name: "Sigurd",   text: "Incredible day on the Blue Safari. Highly recommend Hashim to anyone visiting Zanzibar." }
];

window.CREDITS = [
  { title: "Prison Island building", author: "Diego Delso", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Prisi%C3%B3n,_isla_Changuu,_Tanzania,_2024-05-31,_DD_16.jpg" },
  { title: "Dhow sunset", author: "Rod Waddington", license: "CC BY-SA 2.0", url: "https://www.flickr.com/photos/64607715@N05/10164046475" },
  { title: "Prison Island", author: "Dmitry Sumin", license: "CC BY-ND 2.0", url: "https://www.flickr.com/photos/61051254@N00/5538791353" },
  { title: "Stone Town", author: "neiljs", license: "CC BY 2.0", url: "https://www.flickr.com/photos/59367690@N00/3247603605" },
  { title: "Beach", author: "Kyle Taylor", license: "CC BY 2.0", url: "https://www.flickr.com/photos/95672737@N00/5773863648" },
  { title: "Jozani Forest", author: "Olivier Lejade", license: "CC BY-SA 2.0", url: "https://www.flickr.com/photos/11767702@N06/2827763974" },
  { title: "Sailfish", author: "Phuketian.S", license: "CC BY 2.0", url: "https://www.flickr.com/photos/124790945@N06/32820113960" },
  { title: "Dhow at sunset", author: "D-Stanley", license: "CC BY 2.0", url: "https://www.flickr.com/photos/79721788@N00/34712161421" },
  { title: "Kitesurfing", author: "Konstantin Zamkov", license: "CC BY 2.0", url: "https://www.flickr.com/photos/34754535@N03/5365027678" },
  { title: "Blue Safari", author: "amanderson2", license: "CC BY 2.0", url: "https://www.flickr.com/photos/49399018@N00/4688083148" }
];
