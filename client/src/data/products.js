// Imports for all catalog images
import enchantedTentImg       from '../assets/images/catalog_images/enchanted-tents.png';
import nyxsTentImg            from '../assets/images/catalog_images/nyxs-tent.png';
import werewolfTentImg        from '../assets/images/catalog_images/werewolf-tent.png';
import krakensSleepbagImg     from '../assets/images/catalog_images/krakens-sleepingbag.png';
import phoenixSleepbagImg     from '../assets/images/catalog_images/phoenix-sleepingbag.png';
import willowispLanternImg    from '../assets/images/catalog_images/willowisp-lantern.png';
import cerberusFlashlightImg  from '../assets/images/catalog_images/cerberus-flashlight.png';
import selenesGlowStickImg    from '../assets/images/catalog_images/selenes-flashlight.png';
import yetisJacketImg         from '../assets/images/catalog_images/yetis-jacket.png';
import shadowJacketImg        from '../assets/images/catalog_images/shadow-jacket.png';
import campfireCookSetImg     from '../assets/images/catalog_images/mystic-campfire-cook-set1.png';
import babaYagaCauldronImg    from '../assets/images/catalog_images/baba-yaga-cookset.png';
import selkiesFirstAidImg     from '../assets/images/catalog_images/sea-firstaid-kit.png';
import nessieFirstAidImg      from '../assets/images/catalog_images/nessie-firstaid-kit.png';
import jormFirestarterImg     from '../assets/images/catalog_images/jorm-firestarter.png';
import mothFirestarterImg     from '../assets/images/catalog_images/moth-firestarter.png';
import mysticCampfireKitImg   from '../assets/images/catalog_images/mystic-campfire-kit1.png';
import mothmanRepelImg        from '../assets/images/catalog_images/moth-repel.png';
import chupacabraRepelImg     from '../assets/images/catalog_images/chup-repel.png';
import bansheeRepelImg        from '../assets/images/catalog_images/banshee-repel.png';

// ————————————————————————
// Catalog of all products
export const products = [
  /* ---- Tents ---- */
  {
    id: 'tent01',
    name: 'Enchanted Tent',
    price: 209.99,
    category: 'tents',
    image: enchantedTentImg,
    description: 'Campfire tent made with durable materials and design that turns your ambience into an extraordinary and mesmerizing world you’ve never seen before.',
    includes: [
      'Tents with built-in LED lights',
      'Compact carrying case',
      'Designed to fit up to 4 people'
    ]
  },
  {
    id: 'tent02',
    name: 'Nyx’s Veil Stargazer Tent',
    price: 199.99,
    category: 'tents',
    image: nyxsTentImg,
    description: 'Immerse yourself in the celestial mysteries of the night with Nyx’s Veil Stargazer Tent…',
    includes: [
      'Ultralight yet durable weather-resistant fabric',
      'Two-person capacity with a quick-setup frame',
      'Cosmic star map lining the inner canopy for celestial alignment',
      'UV-protective rainfly with an iridescent sheen',
      'Glow-in-the-dark zippers and celestial rune markings',
      'Compact carrying pouch with Nyx’s sigil'
    ]
  },
  {
    id: 'tent03',
    name: 'Werewolf’s Whisper Shelter',
    price: 249.99,
    category: 'tents',
    image: werewolfTentImg,
    description: 'Dare to sleep under the eerie glow of the wilderness with the Werewolf’s Whisper Shelter…',
    includes: [
      'Heavy-duty waterproof, windproof, and insulated fabric for all seasons',
      'Two-person capacity with a reinforced aluminum frame',
      'Glow-in-the-dark Werewolf claw marks on the rainfly',
      'Reflective guide ropes for added visibility',
      'Mesh panels for ventilation and stargazing',
      'Custom carrying bag with Werewolf emblem'
    ]
  },

  /* ---- Sleeping Bags ---- */
  {
    id: 'sleepbag01',
    name: 'Kraken’s Abyss Sleeping Bag',
    price: 169.99,
    category: 'sleepingbags',
    image: krakensSleepbagImg,
    description: 'Descend into the depths of comfort with the Kraken’s Abyss Sleeping Bag…',
    includes: [
      'Rated for extreme temperatures as low as -20°F (-29°C)',
      'Water-resistant and windproof outer shell with tentacle stitching',
      'Glow-in-the-dark bioluminescent lining',
      'Adjustable hood for full head and neck warmth',
      'Compression sack with Kraken emblem'
    ]
  },
  {
    id: 'sleepbag02',
    name: 'Phoenix Ember Recharge Sleeping Bag',
    price: 129.99,
    category: 'sleepingbags',
    image: phoenixSleepbagImg,
    description: 'Rise from the ashes of exhaustion with the Phoenix Ember Recharge Sleeping Bag…',
    includes: [
      'Heat-reflective lining that redistributes warmth',
      'Rated for temperatures as low as 0°F (-18°C)',
      'Lightweight and compact for backpacking',
      'Fire-inspired color gradient with glowing ember accents',
      'Adjustable draft collar and footbox',
      'Compression sack with Phoenix sigil'
    ]
  },

  /* ---- Lighting ---- */
  {
    id: 'light01',
    name: 'Will-o’-Wisp Phantom Lantern',
    price: 49.99,
    category: 'lighting',
    image: willowispLanternImg,
    description: 'Step into the realm of the supernatural with the Will-o’-Wisp Phantom Lantern…',
    includes: [
      'Adjustable brightness with flickering wisp mode',
      'Soft blue glow for an eerie atmosphere',
      'USB-rechargeable battery with up to 24h light',
      'Water-resistant and impact-resistant design',
      'Hanging hook and foldable handle'
    ]
  },
  {
    id: 'light02',
    name: 'Cerberus Tri-Flame Tactical Flashlight',
    price: 59.99,
    category: 'lighting',
    image: cerberusFlashlightImg,
    description: 'Unleash the power of the underworld with the Cerberus Tri-Flame Tactical Flashlight…',
    includes: [
      'Three adjustable LED heads',
      '2000-lumen maximum brightness',
      'Red night vision mode',
      'Rechargeable lithium-ion battery',
      'Durable aluminum alloy body'
    ]
  },
  {
    id: 'light03',
    name: 'Selene’s Moonbeam Glow Stick',
    price: 34.99,
    category: 'lighting',
    image: selenesGlowStickImg,
    description: 'Channel the goddess of the moon with Selene’s Moonbeam Glow Stick…',
    includes: [
      'Three lighting modes: soft white, silver-blue, moon-phase',
      'Rechargeable via USB with 18h battery life',
      'Waterproof and impact-resistant',
      'Lightweight clip-on design',
      'Magnetic base for hands-free use'
    ]
  },

  /* ---- Jackets ---- */
  {
    id: 'jacket01',
    name: 'Yeti’s Frostbound Expedition Jacket',
    price: 229.99,
    category: 'jackets',
    image: yetisJacketImg,
    description: 'Brave the cold with the Yeti’s Frostbound Expedition Jacket…',
    includes: [
      'Thermal-insulated shell rated for -40°F',
      'Water-resistant and windproof design',
      'Faux yeti-fur-lined hood',
      'Hidden zippered pockets',
      'Adjustable cuffs and hem',
      'Reflective frost patterns'
    ]
  },
  {
    id: 'jacket02',
    name: 'Shadow Stalker Wraith Cloak',
    price: 199.99,
    category: 'jackets',
    image: shadowJacketImg,
    description: 'Move unseen through the night with the Shadow Stalker Wraith Cloak…',
    includes: [
      'Lightweight, water-resistant ripstop fabric',
      'High-collar hood with drawstring',
      'Glow-in-the-dark rune patterns',
      'Internal utility pockets',
      'Breathable mesh lining'
    ]
  },

  /* ---- Cookware ---- */
  {
    id: 'cookware01',
    name: 'Mystic Campfire Cooking Set',
    price: 87.99,
    category: 'cookware',
    image: campfireCookSetImg,
    description: 'Bring a new experience to cooking—enjoy your meal with a touch of mystery…',
    includes: [
      'Pots and grill',
      'Cooking tools',
      'Eating utensils set',
      '4 plates',
      'Recipe book',
      'Logo'
    ]
  },
  {
    id: 'cookware02',
    name: 'Baba Yaga’s Iron Cauldron Cookware Set',
    price: 89.99,
    category: 'cookware',
    image: babaYagaCauldronImg,
    description: 'Summon the magic of ancient hearths with Baba Yaga’s Iron Cauldron…',
    includes: [
      '2.5-quart cast-iron cauldron',
      'Foldable tripod stand',
      'Heat-resistant leather handle',
      'Fire-resistant storage bag',
      'Wooden spoon with owl insignia'
    ]
  },

  /* ---- First Aid Kits ---- */
  {
    id: 'firstaid01',
    name: 'Selkie’s Seaside First Aid Kit',
    price: 39.99,
    category: 'firstaid',
    image: selkiesFirstAidImg,
    description: 'Inspired by the mythical selkies of the sea, this waterproof kit…',
    includes: [
      'Waterproof carrying case',
      'Waterproof bandages & antiseptic wipes',
      'Burn gel & blister treatments',
      'Medical shears & tweezers',
      'Electrolyte tablets',
      'Compact whistle'
    ]
  },
  {
    id: 'firstaid02',
    name: 'Nessie’s Guardian First Aid Kit',
    price: 42.99,
    category: 'firstaid',
    image: nessieFirstAidImg,
    description: 'Inspired by the Loch Ness Monster, this first aid kit…',
    includes: [
      'Floating, impact-resistant case',
      'Holographic first aid cross',
      'Blister pads & anti-chafing balm',
      'Waterproof bandages & wipes',
      'Sting & bite relief gel',
      'Emergency whistle'
    ]
  },

  /* ---- Fire Starters ---- */
  {
    id: 'fire01',
    name: 'Jörmungandr’s Ember Coil',
    price: 14.99,
    category: 'firestarters',
    image: jormFirestarterImg,
    description: 'Unleash the ancient fire of the Midgard Serpent…',
    includes: [
      '6-ft wax-infused fire rope',
      'Ferrocerium striker',
      'Waterproof storage tin',
      'Rune charm'
    ]
  },
  {
    id: 'fire02',
    name: 'Mothman’s Shadow Spark',
    price: 15.99,
    category: 'firestarters',
    image: mothFirestarterImg,
    description: 'Harness the eerie glow of Mothman’s Shadow Spark…',
    includes: [
      'Glow-in-the-dark ferro rod',
      'Steel striker etched with wingspan',
      'Charcoal fire pucks (x3)',
      'Reflective pouch'
    ]
  },
  {
    id: 'fire03',
    name: 'Mystic Campfire Kit',
    price: 55.99,
    category: 'firestarters',
    image: mysticCampfireKitImg,
    description: 'A campfire kit that will transform an ordinary campfire…',
    includes: [
      'Color-Changing Flame Packets',
      'Storytelling Cards',
      'Fire Safety Gloves',
      'Enchanting Matches'
    ]
  },

  /* ---- Repellents ---- */
  {
    id: 'repel01',
    name: 'Mothman’s Nocturnal Guard Bug Spray',
    price: 12.99,
    category: 'repellent',
    image: mothmanRepelImg,
    description: 'Stay bite-free in the dark with Mothman’s Nocturnal Guard Bug Spray…',
    includes: [
      'All-natural DEET-free formula',
      'Glow-in-the-dark branding',
      '12-hour protection',
      'Water-resistant & sweat-proof',
      'Recyclable spray bottle'
    ]
  },
  {
    id: 'repel02',
    name: 'Chupacabra Venom Mosquito Repellent Balm',
    price: 9.99,
    category: 'repellent',
    image: chupacabraRepelImg,
    description: 'Harness the power of legend with Chupacabra Venom Mosquito Repellent Balm…',
    includes: [
      'Compact solid balm',
      'Lemongrass, cedarwood & neem oils',
      'Sweat-resistant formula',
      'Fang-etched tin',
      'Skin-friendly & eco-friendly'
    ]
  },
  {
    id: 'repel03',
    name: 'Banshee’s Wail Ultrasonic Pest Repeller',
    price: 24.99,
    category: 'repellent',
    image: bansheeRepelImg,
    description: 'Drive bugs away with Banshee’s Wail Ultrasonic Pest Repeller…',
    includes: [
      'USB-rechargeable design',
      'Ultrasonic frequency tech',
      'Soft glowing spectral wisp',
      'Clips onto gear',
      '20-hour battery life'
    ]
  }
];

export default products;