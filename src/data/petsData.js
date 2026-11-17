export const OFFICIAL_PHONE = '+91 88780 02071';
export const OFFICIAL_WHATSAPP_NUMBER = '918878002071';
export const OFFICIAL_INSTAGRAM = 'https://www.instagram.com/indore_pets_heaven?vrfl=N3p2Z2FrcDEwZDI=';
export const OFFICIAL_MAPS = 'https://maps.app.goo.gl/YAN4w9XHaynJMoKf8';
export const OFFICIAL_WEBSITE = 'https://pets-heaven-indore.vercel.app/';
export const OFFICIAL_LOGO = '/assets/logo/Vibrant Pets Heaven Logo.png';

export function getWhatsAppUrl(productName) {
  const message = `Hi Pet's Heaven Indore, I'm interested in ${productName}. Please share availability and details.`;
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Pets & Fish', count: 45 },
  { id: 'dogs', label: 'Dogs & Dog Breeds', count: 10, icon: '🐕' },
  { id: 'cats', label: 'Cats & Cat Breeds', count: 9, icon: '🐱' },
  { id: 'birds', label: 'Pet Birds', count: 7, icon: '🦜' },
  { id: 'hamsters', label: 'Hamsters', count: 3, icon: '🐹' },
  { id: 'mice', label: 'Pet Mice', count: 2, icon: '🐁' },
  { id: 'fish', label: 'Aquarium Fish', count: 14, icon: '🐠' },
];

export const PET_PRODUCTS = [
  // DOGS & DOG BREEDS (10)
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    category: 'dogs',
    categoryLabel: 'DOGS & DOG BREEDS',
    image: '/assets/pets/golden_retriever.jpg',
    tagline: 'Gentle, intelligent and devoted family companion',
    description: 'Golden Retrievers are renowned for their friendly, calm temperament and affectionate personality. They are eager to please, highly trainable, and wonderful with children and active households.',
    traits: ['Friendly & Patient', 'Active Family Dog', 'High Trainability'],
    care: 'Requires regular daily exercise, mental stimulation, and weekly grooming.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'labrador-retriever',
    name: 'Labrador Retriever',
    category: 'dogs',
    categoryLabel: 'DOGS & DOG BREEDS',
    image: '/assets/pets/labrador_retriever.jpg',
    tagline: 'Playful, loyal and athletic companion',
    description: 'Labradors are energetic, even-tempered water retrievers celebrated for their gentle disposition, steadfast loyalty, and enthusiasm for playtime and outdoor adventures.',
    traits: ['Outgoing & Eager', 'Great with Kids', 'Water Loving'],
    care: 'Benefits from daily walks, fetching activities, and a balanced nutritional diet.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'german-shepherd',
    name: 'German Shepherd',
    category: 'dogs',
    categoryLabel: 'DOGS & DOG BREEDS',
    image: '/assets/pets/german_shepherd.jpg',
    tagline: 'Confident, alert and noble working guardian',
    description: 'German Shepherds are highly intelligent working dogs known for their courage, steadfast loyalty, and keen protective instincts when raised in a loving home environment.',
    traits: ['Loyal & Protective', 'High Intelligence', 'Versatile Working Breed'],
    care: 'Needs dedicated early socialization, obedience training, and active exercise routines.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'pomeranian',
    name: 'Pomeranian',
    category: 'dogs',
    categoryLabel: 'DOGS & DOG BREEDS',
    image: '/assets/pets/pomeranian.jpg',
    tagline: 'Fluffy, spirited toy companion with huge personality',
    description: 'Pomeranians are compact, lively toy dogs with a glorious double coat and an inquisitive, cheerful demeanor. They make spirited and alert indoor companions.',
    traits: ['Playful & Vocal', 'Compact Apartment Size', 'Luxurious Double Coat'],
    care: 'Well-suited for indoor apartment living; needs routine coat brushing.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'shih-tzu',
    name: 'Shih Tzu',
    category: 'dogs',
    categoryLabel: 'DOGS & DOG BREEDS',
    image: '/assets/pets/shih_tzu.jpg',
    tagline: 'Affectionate, sweet-natured lap dog',
    description: 'Shih Tzus are cheerful, affectionate companions originally bred for royal lap companionship. They have a sweet-natured disposition and thrive on gentle indoor family companionship.',
    traits: ['Sweet & Gentle', 'Friendly to All', 'Low-Shed Silky Coat'],
    care: 'Requires gentle daily brushing and regular facial grooming.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'beagle',
    name: 'Beagle',
    category: 'dogs',
    categoryLabel: 'DOGS & DOG BREEDS',
    image: '/assets/pets/beagle.jpg',
    tagline: 'Merry, curious hound with keen scenting instincts',
    description: 'Beagles are cheerful, sturdy hounds known for their expressive eyes, friendly demeanor, and sharp sense of smell. They thrive in loving, interactive households.',
    traits: ['Curious & Amiable', 'Sturdy Medium Build', 'Active Explorer'],
    care: 'Needs leash walks to safely explore scents and positive reward-based guidance.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'siberian-husky',
    name: 'Siberian Husky',
    category: 'dogs',
    categoryLabel: 'DOGS & DOG BREEDS',
    image: '/assets/pets/siberian_husky.jpg',
    tagline: 'Striking, athletic sled dog with arctic endurance',
    description: 'Siberian Huskies are graceful, athletic working dogs with captivating facial markings and high endurance. They are outgoing, independent, and thrive in cool environments.',
    traits: ['Athletic & Energetic', 'Dignified & Striking', 'High Stamina'],
    care: 'Requires climate-controlled indoor living in hot weather and vigorous daily exercise.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'rottweiler',
    name: 'Rottweiler',
    category: 'dogs',
    categoryLabel: 'DOGS & DOG BREEDS',
    image: '/assets/pets/rottweiler.jpg',
    tagline: 'Robust, calm and deeply devoted guardian',
    description: 'Rottweilers are powerful, calm-natured working dogs with distinct rust markings and strong protective instincts. When given consistent guidance, they are devoted family partners.',
    traits: ['Calm & Confident', 'Devoted Guardian', 'Strong Muscular Build'],
    care: 'Requires early socialization, positive structured leadership, and daily exercise.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'pug',
    name: 'Pug',
    category: 'dogs',
    categoryLabel: 'DOGS & DOG BREEDS',
    image: '/assets/pets/pug.jpg',
    tagline: 'Comical, loving indoor companion with a wrinkled charm',
    description: 'Pugs are charming, even-tempered companion dogs famous for their wrinkled brow, curled tail, and loving disposition. They are delightful companions for families of all ages.',
    traits: ['Charming & Affectionate', 'Even-Tempered', 'Apartment Friendly'],
    care: 'Requires climate-controlled indoor spaces, facial wrinkle hygiene, and moderate strolls.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'dachshund',
    name: 'Dachshund',
    category: 'dogs',
    categoryLabel: 'DOGS & DOG BREEDS',
    image: '/assets/pets/dachshund.jpg',
    tagline: 'Bold, spunky hound with iconic silhouette',
    description: 'Dachshunds are brave, clever scent hounds characterized by their long silhouette and short legs. They are lively, affectionate, and brimming with spirited character.',
    traits: ['Spunky & Clever', 'Iconic Low-Rider Build', 'Alert Companion'],
    care: 'Careful handling recommended to support their back; benefits from moderate daily walks.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },

  // CATS & CAT BREEDS (9)
  {
    id: 'persian-cat',
    name: 'Persian Cat',
    category: 'cats',
    categoryLabel: 'CATS & CAT BREEDS',
    image: '/assets/pets/persian_cat.jpg',
    tagline: 'Graceful, quiet and luxurious long-haired feline',
    description: 'Persian cats are celebrated for their gentle, sweet temperament, calm indoor presence, and distinctive long flowing coat. They thrive in serene, loving homes.',
    traits: ['Gentle & Quiet', 'Calm Indoor Cat', 'Affectionate'],
    care: 'Requires daily gentle coat brushing, eye hygiene, and a calm indoor habitat.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'siamese-cat',
    name: 'Siamese Cat',
    category: 'cats',
    categoryLabel: 'CATS & CAT BREEDS',
    image: '/assets/pets/siamese_cat.jpg',
    tagline: 'Highly intelligent, vocal and affectionate companion',
    description: 'Siamese cats are famous for their vivid blue almond eyes, striking color points, and sociable nature. They love interacting with their families and chatting along.',
    traits: ['Vocal & Social', 'Striking Blue Eyes', 'Playful & Loving'],
    care: 'Needs daily social engagement, scratching posts, and interactive toys.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'maine-coon',
    name: 'Maine Coon',
    category: 'cats',
    categoryLabel: 'CATS & CAT BREEDS',
    image: '/assets/pets/maine_coon.jpg',
    tagline: 'Gentle giant with a loving and friendly personality',
    description: 'One of the largest domestic cat breeds, Maine Coons are patient, rugged, and dog-like in their loyalty, known for tufted ears and a lush bushy tail.',
    traits: ['Gentle Giant', 'Dog-like Loyalty', 'Robust & Patient'],
    care: 'Requires regular combing of their thick water-resistant coat and ample play space.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'bengal-cat',
    name: 'Bengal Cat',
    category: 'cats',
    categoryLabel: 'CATS & CAT BREEDS',
    image: '/assets/pets/bengal_cat.jpg',
    tagline: 'Athletic, curious cat with exotic leopard-like rosettes',
    description: 'Bengals boast wild-looking spotted or marbled coats paired with an energetic, curious, and confident domestic personality.',
    traits: ['Wild Leopard Look', 'High Energy', 'Acrobatic & Curious'],
    care: 'Needs vertical climbing trees, puzzle toys, and plenty of active play sessions.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'ragdoll-cat',
    name: 'Ragdoll Cat',
    category: 'cats',
    categoryLabel: 'CATS & CAT BREEDS',
    image: '/assets/pets/ragdoll_cat.jpg',
    tagline: 'Placid, puppy-like cat that relaxes in your arms',
    description: 'Ragdolls are large, semi-longhaired cats with captivating blue eyes, known for their tendency to go limp with contentment when held.',
    traits: ['Ultra Affectionate', 'Docile Temperament', 'Velvety Soft Coat'],
    care: 'Low-matting coat needs weekly brushing; prefers strictly indoor living.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'british-shorthair',
    name: 'British Shorthair',
    category: 'cats',
    categoryLabel: 'CATS & CAT BREEDS',
    image: '/assets/pets/british_shorthair.jpg',
    tagline: 'Dignified, sturdy feline with a round plush teddy-bear face',
    description: 'British Shorthairs are easygoing, quiet, and robust companions with dense plush coats, round amber eyes, and an undemanding, affectionate disposition.',
    traits: ['Easygoing & Calm', 'Sturdy & Balanced', 'Plush Coat'],
    care: 'Moderate grooming with weekly brushing and balanced diet to maintain healthy weight.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'himalayan-cat',
    name: 'Himalayan Cat',
    category: 'cats',
    categoryLabel: 'CATS & CAT BREEDS',
    image: '/assets/pets/himalayan_cat.jpg',
    tagline: 'Beautiful Persian body with striking Siamese colorpoints',
    description: 'Himalayans combine the luxurious long coat and gentle calmness of the Persian with the brilliant blue eyes and dark points of the Siamese.',
    traits: ['Colorpoint Beauty', 'Quiet & Sweet', 'Devoted Indoor Pet'],
    care: 'Daily coat brushing and facial cleaning to keep their long coat pristine.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'domestic-shorthair',
    name: 'Domestic Shorthair',
    category: 'cats',
    categoryLabel: 'CATS & CAT BREEDS',
    image: '/assets/pets/domestic_shorthair.jpg',
    tagline: 'Adaptable, hardy and loving everyday companion',
    description: 'The quintessential family feline, Domestic Shorthairs are celebrated for their strong genetic health, unique coat patterns, and friendly adaptability.',
    traits: ['Adaptable & Hardy', 'Low Maintenance', 'Friendly Nature'],
    care: 'Simple weekly brushing, fresh water, and balanced feline nutrition.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'indian-domestic-cat',
    name: 'Indian Domestic Cat',
    category: 'cats',
    categoryLabel: 'CATS & CAT BREEDS',
    image: '/assets/pets/indian_domestic_cat.jpg',
    tagline: 'Naturally climate-adapted, intelligent and active local feline',
    description: 'Indian Domestic Cats (Indi-cats / Billi) are naturally resilient, highly agile, and deeply affectionate when raised in loving homes. Perfectly acclimatized to local weather.',
    traits: ['High Immunity', 'Naturally Agile', 'Loyal & Quick Learners'],
    care: 'Minimal grooming required; thrives on wholesome home care and balanced meals.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },

  // PET BIRDS (7)
  {
    id: 'budgerigar',
    name: 'Budgerigar',
    category: 'birds',
    categoryLabel: 'PET BIRDS',
    image: '/assets/pets/budgerigar.jpg',
    tagline: 'Cheerful, colorful and social small parakeet',
    description: 'Budgerigars (budgies) are friendly Australian parakeets available in bright blues, greens, and yellows. They are known for pleasant chirping, playfulness, and high social interaction.',
    traits: ['Social & Cheerful', 'Small Flight Cage Size', 'Beginner Friendly'],
    care: 'Enjoys varied seeds, clean water, cuttlebone, and interactive mirrors/toys.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'cockatiel',
    name: 'Cockatiel',
    category: 'birds',
    categoryLabel: 'PET BIRDS',
    image: '/assets/pets/cockatiel.jpg',
    tagline: 'Gentle, whistling companion with iconic crest',
    description: 'Cockatiels are gentle, affectionate birds famous for their expressive erectile crest, orange cheek patches, and sweet whistling melodies. They form loving bonds with caretakers.',
    traits: ['Gentle & Musical', 'Whistles Melodies', 'Affectionate Companion'],
    care: 'Requires a spacious flight cage, daily out-of-cage interaction, and fresh greens.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'lovebirds',
    name: 'Lovebirds',
    category: 'birds',
    categoryLabel: 'PET BIRDS',
    image: '/assets/pets/lovebirds.jpg',
    tagline: 'Vibrant, devoted African parrots full of energy',
    description: 'Lovebirds are small, brightly colored African parrots celebrated for their deep loyalty and affectionate pair bonding. They are inquisitive, lively, and entertaining companions.',
    traits: ['Loyal & Playful', 'Vivid Feather Colors', 'Active & Curious'],
    care: 'Thrives in compatible pairs or with dedicated daily owner attention and toys.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'african-grey',
    name: 'African Grey',
    category: 'birds',
    categoryLabel: 'PET BIRDS',
    image: '/assets/pets/african_grey.jpg',
    tagline: 'Extraordinarily intelligent parrot with vocal mastery',
    description: 'African Grey parrots are celebrated worldwide for exceptional cognitive intelligence, complex problem solving, and remarkable speech mimicry. A truly noble pet companion.',
    traits: ['Remarkable Intelligence', 'Vocal Mimicry Mastery', 'Deep Social Bond'],
    care: 'Requires substantial daily mental enrichment, interactive foraging, and a spacious aviary.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'finch',
    name: 'Finch',
    category: 'birds',
    categoryLabel: 'PET BIRDS',
    image: '/assets/pets/finch.jpg',
    tagline: 'Charming, melodious flock birds for aviaries',
    description: 'Finches are small, graceful birds that fill living spaces with soft, cheerful beeps and flutter. They are peaceful, low-maintenance, and visually delightful in spacious flight setups.',
    traits: ['Peaceful Flock Nature', 'Pleasant Soft Beeps', 'Low Handling Stress'],
    care: 'Best housed in horizontal flight cages in pairs or small peaceful flocks.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'canary',
    name: 'Canary',
    category: 'birds',
    categoryLabel: 'PET BIRDS',
    image: '/assets/pets/canary.jpg',
    tagline: 'Historic songbird with sweet, melodious whistling',
    description: 'Canaries have been cherished for generations for their bright yellow plumage and captivating, melodic songs. They are gentle, independent companions that enjoy room to flutter.',
    traits: ['Melodic Songster', 'Vivid Yellow Color', 'Peaceful & Independent'],
    care: 'Prefers quiet placement, fresh seeds, and a roomy cage with natural perches.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'other-birds',
    name: 'Other Birds',
    category: 'birds',
    categoryLabel: 'PET BIRDS',
    image: '/assets/pets/other_birds.jpg',
    tagline: 'Exotic companion bird varieties and conures',
    description: 'We showcase diverse exotic companion bird varieties including colorful Conures and parakeets known for playful acrobatics, inquisitive nature, and engaging family bonds.',
    traits: ['Exotic Plumage', 'Engaging Antics', 'Friendly Hand-Raised Options'],
    care: 'Contact us directly on WhatsApp to learn about current seasonal bird arrivals.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },

  // HAMSTERS (3)
  {
    id: 'syrian-hamster',
    name: 'Syrian Hamster',
    category: 'hamsters',
    categoryLabel: 'HAMSTERS',
    image: '/assets/pets/syrian_hamster.jpg',
    tagline: 'Classic Golden / Teddy Bear hamster, gentle when handled',
    description: 'Syrian Hamsters are the largest and most popular pet hamster species. They have endearing chubby cheek pouches, a docile nature when gently handled, and solitary habits.',
    traits: ['Docile & Friendly', 'Nocturnal Companion', 'Solitary Housing Only'],
    care: 'Must be housed singly; requires a large solid running wheel (28cm+) and deep burrow bedding.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'dwarf-hamster',
    name: 'Dwarf Hamster',
    category: 'hamsters',
    categoryLabel: 'HAMSTERS',
    image: '/assets/pets/dwarf_hamster.jpg',
    tagline: 'Miniature, swift and playful pocket pet',
    description: 'Dwarf Hamsters are petite, energetic pocket pets with charming dorsal stripes and lively curiosity. They are fascinating to watch as they tunnel through bedding and forage.',
    traits: ['Tiny Compact Size', 'Energetic & Quick', 'Fascinating Forager'],
    care: 'Requires escape-proof housing with narrow bar spacing, sand baths, and seed mixes.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'roborovski-hamster',
    name: 'Roborovski Hamster',
    category: 'hamsters',
    categoryLabel: 'HAMSTERS',
    image: '/assets/pets/roborovski_hamster.jpg',
    tagline: 'The smallest and fastest hamster with cute white eyebrows',
    description: 'Roborovski hamsters are the tiniest domestic hamster breed, recognized by their sandy coat and distinctive white facial markings. They are quick, comical, and endlessly entertaining.',
    traits: ['Smallest Hamster Species', 'High Speed & Agility', 'Delightful to Observe'],
    care: 'Best suited as an observational pet in a secure glass or tank-style habitat with running wheels.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },

  // PET MICE (2)
  {
    id: 'fancy-mouse',
    name: 'Fancy Mouse',
    category: 'mice',
    categoryLabel: 'PET MICE',
    image: '/assets/pets/fancy_mouse.jpg',
    tagline: 'Clever, clean and highly social small pet',
    description: 'Fancy Mice are domesticated pet mice admired for their clean personal grooming habits, active climbing acrobatics, and intelligent curiosity. Female mice thrive in companion pairs.',
    traits: ['Clean & Groomed', 'Curious & Agile Climber', 'Social Nature'],
    care: 'Requires well-ventilated wire housing, safe climbing accessories, and clean wood-shaving bedding.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'other-mice',
    name: 'Other Pet Mouse Varieties',
    category: 'mice',
    categoryLabel: 'PET MICE',
    image: '/assets/pets/other_mice.jpg',
    tagline: 'Exotic coat patterns and specialty mouse varieties',
    description: 'Explore unique varieties of pet mice including satin-finish coats, spiny mice, and specialty colorations suited for attentive small mammal enthusiasts.',
    traits: ['Unique Coat Patterns', 'Quiet & Compact', 'Captivating Behavior'],
    care: 'Contact us via WhatsApp for habitat setup recommendations and current varieties.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },

  // AQUARIUM FISH (14) - Preserved from existing collection
  {
    id: 'angelfish',
    name: 'Angelfish',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__Angelfish.jpg',
    fallbackImage: '/assets/photos/fish/Angelfish.jpg',
    tagline: 'Elegant tall-fin freshwater centerpiece species',
    description: 'Angelfish are majestic freshwater cichlids with triangular bodies and flowing fins that glide gracefully among tall aquarium plants. Calm companions for planted tanks.',
    traits: ['Graceful Flowing Fins', 'Planted Tank Centerpiece', 'Semi-Aggressive Community'],
    care: 'Requires tall tanks (75L+), warm tropical water (26-28°C), and peaceful tank mates.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'arowana-fish',
    name: 'Arowana Fish',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__Arowana fish.jpg',
    fallbackImage: '/assets/photos/fish/Arowana fish.jpg',
    tagline: 'Majestic surface-swimming predator and prized show fish',
    description: 'Arowana are legendary prehistoric show fish revered for their serpentine swimming motion, large reflective scales, and dramatic presence in large luxury setups.',
    traits: ['Premium Show Fish', 'Surface Swimmer', 'Large Predator Tank (450L+)'],
    care: 'Requires large spacious aquarium (450L+), heavy filtration, and a very secure weighted lid.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'betta-fish',
    name: 'Betta Fish',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__betta fish.jpg',
    fallbackImage: '/assets/photos/fish/betta fish.jpg',
    tagline: 'Vibrant solo display fish with breathtaking flowing fins',
    description: 'Betta fish (Siamese Fighting Fish) are hardy labyrinth breathers known for stunning finnage and curious, interactive personalities. Perfect for dedicated nano desktop aquariums.',
    traits: ['Solo Display King', 'Labyrinth Breather', 'Vibrant Color Forms'],
    care: 'Thrives in heated tanks (24-28°C) with gentle filtration and silk or live plants.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'blue-half-moon',
    name: 'Blue Half-Moon',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__blue half-moon.jpg',
    fallbackImage: '/assets/photos/fish/blue half-moon.jpg',
    tagline: 'Vivid sapphire halfmoon betta with a full 180° caudal spread',
    description: 'The Blue Half-Moon Betta exhibits an immaculate 180-degree spread on its tail fin resembling a half-moon, bathed in brilliant sapphire and electric blue tones.',
    traits: ['180° Half-Moon Tail', 'Electric Sapphire Blue', 'Solo Nano Showpiece'],
    care: 'Requires calm water movement and soft plants to protect its delicate fin edges.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'cobra-guppy',
    name: 'Cobra Guppy',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__Cobra Guppy.jpg',
    fallbackImage: '/assets/photos/fish/Cobra Guppy.jpg',
    tagline: 'Intricate snakeskin pattern and vibrant active schooling',
    description: 'Cobra Guppies showcase mesmerizing snakeskin rosettes across their bodies and radiant fin spreads. Extremely active, peaceful, and hardy nano fish.',
    traits: ['Snakeskin Rosettes', 'Hardy & Active', 'Peaceful Group (6+)'],
    care: 'Enjoys clean community aquariums with moderate plant cover and flake food.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'discus-fish',
    name: 'Discus Fish',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__Discus Fish.jpg',
    fallbackImage: '/assets/photos/fish/Discus Fish.jpg',
    tagline: 'The King of the Freshwater Aquarium with regal disc silhouette',
    description: 'Discus are celebrated as the crown jewel of freshwater tanks. Their round disk silhouette and intricate striated colors bring unparalleled luxury to planted displays.',
    traits: ['Crown Jewel of Aquariums', 'Warm Soft Water Species', 'Regal Disc Shape'],
    care: 'Requires pristine warm water (28-30°C), soft parameters, and high-protein nutrition.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'fancy-goldfish',
    name: 'Fancy Goldfish',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__Fancy Goldfish.jpg',
    fallbackImage: '/assets/photos/fish/Fancy Goldfish.jpg',
    tagline: 'Charming, friendly family favorite with graceful double fins',
    description: 'Fancy Goldfish are beloved for their round bodies, playful waddling swimming motion, and gentle demeanor. A delightful companion for dedicated family coldwater aquariums.',
    traits: ['Double Fin Elegance', 'Gentle & Interactive', 'Family Coldwater Tank (75L+)'],
    care: 'Needs cool clean water (18-22°C), robust filtration, and sinking pellet foods.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'gold-fish',
    name: 'Gold Fish',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__gold fish.jpg',
    fallbackImage: '/assets/photos/fish/gold fish.jpg',
    tagline: 'Hardy classic companion fish cherished for centuries',
    description: 'The classic Goldfish is one of the hardiest and most enduring ornamental freshwater fish in history, bringing vibrant golden shimmer and peaceful activity to clean setups.',
    traits: ['Hardy Classic', 'Vibrant Golden Shimmer', 'Long-Lived Companion'],
    care: 'Requires good aeration, clean water cycles, and appropriate space to grow.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'golden-molly',
    name: 'Golden Molly',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__Golden Molly.jpg',
    fallbackImage: '/assets/photos/fish/Golden Molly.jpg',
    tagline: 'Hardy, bright golden livebearer for peaceful community tanks',
    description: 'Golden Mollies are cheerful, golden livebearing fish that actively graze on micro-algae and interact peacefully with all community tank inhabitants.',
    traits: ['Bright Golden Hue', 'Natural Algae Grazer', 'Hardy Livebearer'],
    care: 'Prefers slightly hard, clean water and thrives in planted community tanks.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'guppy-fish',
    name: 'Guppy Fish',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__guppy fish.jpg',
    fallbackImage: '/assets/photos/fish/guppy fish.png',
    tagline: 'Small, colorful community favorite with infinite fin patterns',
    description: 'Guppies are peaceful, vibrant livebearers ideal for beginners and experienced hobbyists alike. They bring nonstop movement and color to planted aquariums.',
    traits: ['Beginner Friendly', 'Infinite Fin Colors', 'Lively & Social'],
    care: 'Very adaptable to tropical community tanks with clean filtration and small foods.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'marble-angelfish',
    name: 'Marble Angelfish',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__Marble Angelfish.jpg',
    fallbackImage: '/assets/photos/fish/Marble Angelfish.jpg',
    tagline: 'High-contrast patterned centerpiece for tall planted tanks',
    description: 'Marble Angelfish feature striking patterns of jet-black and pearlescent white, creating a dramatic visual impact as they cruise among aquatic plants.',
    traits: ['Striking Marble Camouflage', 'Tall Planted Showpiece', 'Calm Schooling'],
    care: 'Best kept in tall aquariums with peaceful tankmates and gentle water flow.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'pearl-gourami',
    name: 'Pearl Gourami',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__Pearl Gourami.jpg',
    fallbackImage: '/assets/photos/fish/Pearl Gourami.jpg',
    tagline: 'Gentle, graceful fish covered in iridescent mother-of-pearl specks',
    description: 'Pearl Gouramis are among the most peaceful labyrinth fish, adorned with hundreds of delicate pearly spots and long sensory feelers. A tranquil jewel.',
    traits: ['Mother-of-Pearl Specks', 'Peaceful Temperament', 'Gentle Sensory Feelers'],
    care: 'Thrives in quiet, planted aquariums with floating plants and warm calm water.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'red-discus',
    name: 'Red Discus',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__Red Discus.jpg',
    fallbackImage: '/assets/photos/fish/Red Discus.jpg',
    tagline: 'Intense ruby coloration and royal posture in planted displays',
    description: 'Red Discus captivate aquarists with their rich, glowing crimson body tones and majestic, calm posture. Truly an elite showpiece fish.',
    traits: ['Intense Ruby Tone', 'Elite Planted Centerpiece', 'Stable Warm Water'],
    care: 'Demands stable warm temperature (28-30°C), soft water, and regular water care.',
    status: 'Catalog Listing · Inquire for live batch availability'
  },
  {
    id: 'silver-arowana',
    name: 'Silver Arowana',
    category: 'fish',
    categoryLabel: 'AQUARIUM FISH',
    image: '/assets/fast/photos__fish__silver arowana.jpg',
    fallbackImage: '/assets/photos/fish/silver arowana.jpg',
    tagline: 'Legendary predatory dragon fish with shimmering silver scales',
    description: 'The Silver Arowana is an ancient freshwater giant that glides right at the surface like a silver dragon. A breathtaking specimen for large show tanks.',
    traits: ['Prehistoric Dragon Fish', 'Shimmering Silver Scales', 'Requires 450L+ Tank'],
    care: 'Suitable for experienced hobbyists with massive aquariums and heavy lid coverage.',
    status: 'Catalog Listing · Inquire for live batch availability'
  }
];
