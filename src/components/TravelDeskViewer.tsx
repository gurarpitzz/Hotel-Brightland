"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { 
  MapPin, Clock, Calendar, Car, Shield, Navigation, 
  Map as MapIcon, Compass, Sunrise, Mountain, Train, Gamepad2, Info,
  Ruler, Landmark, ScrollText, Ticket, ChevronDown, ChevronUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const destinationImageMap: Record<string, string> = {
  "Christ Church": "/assets/traveldesk/Christ-Church-Shimla-scaled.jpg",
  "The Mall": "/assets/traveldesk/the_mall.jpg",
  "Lakkar Bazaar": "/assets/traveldesk/531957817Lakkar_Bazaar_Main.jpg",
  "The Ridge": "/assets/traveldesk/the_ridge_shima.jpeg",
  "Himachal State Museum": "/assets/traveldesk/himachal_state_musem.jpg",
  "Kali Bari": "/assets/traveldesk/kali-bari.jpg",
  "Prospect Hill & Kamna Devi Temple": "/assets/traveldesk/kamna_devi_temple.jpg",
  "Viceregal Lodge (IIAS)": "/assets/traveldesk/viceregal-lodge-turned.jpg",
  "Tara Devi Temple": "/assets/traveldesk/tara_devi_temple.jpg",
  "Jakhu Temple": "/assets/traveldesk/jakhu-mandir.jpg",
  "The Army Heritage Museum": "/assets/traveldesk/Army_Heritage_Museum_garden_in_Annadale,_Shimla.jpg",
  "Sri Sankat Mochan & Shiv Temple": "/assets/traveldesk/Sankat_Mochan_Temple_Main.jpg",
  "Mashobra": "/assets/traveldesk/mashobra.jpg",
  "Craignano": "/assets/traveldesk/craignano-nature-park-shimla-himachal-pradesh-2-attr-hero.jpg",
  "Naldehra": "/assets/traveldesk/naldehra-shimla-himachal-pradesh-3-attr-hero.jpg",
  "Tattapani & Sunni": "/assets/traveldesk/tattapani-hot-spring-bath.jpg",
  "Chini Bungalow / Indira Tourist Park": "/assets/traveldesk/chinibunglow.jpg",
  "The Toy Train Route": "/assets/traveldesk/toy-train.jpg",
  "The Stretch": "/assets/traveldesk/the_ridge_shima.jpeg",
  "Excursion Routing": "/assets/traveldesk/craignano-nature-park-shimla-himachal-pradesh-2-attr-hero.jpg",
  "City Activities": "/assets/traveldesk/the_mall.jpg",
};

const randomFallbackImages = [
  "/assets/traveldesk/craignano-nature-park-shimla-himachal-pradesh-2-attr-hero.jpg",
  "/assets/traveldesk/mashobra.jpg",
  "/assets/traveldesk/the_ridge_shima.jpeg",
  "/assets/traveldesk/naldehra-shimla-himachal-pradesh-3-attr-hero.jpg",
  "/assets/traveldesk/tattapani-hot-spring-bath.jpg",
  "/assets/traveldesk/the_mall.jpg",
];

const getDestinationImage = (name: string, index: number) => {
  if (destinationImageMap[name]) {
    return destinationImageMap[name];
  }
  return randomFallbackImages[index % randomFallbackImages.length];
};

const destinationObjectPosition: Record<string, string> = {
  "Jakhu Temple": "object-top",
  "Christ Church": "object-top",
  "Viceregal Lodge (IIAS)": "object-top",
  "Tara Devi Temple": "object-top",
};

const getDestinationObjectPosition = (name: string) => {
  return destinationObjectPosition[name] || "object-center";
};

const categories = [
  {
    id: "walk-around",
    title: "Walk Around The Town",
    icon: <Navigation size={20} />,
    images: [
      "/assets/traveldesk/Christ-Church-Shimla-scaled.jpg",
      "/assets/traveldesk/the_mall.jpg",
      "/assets/traveldesk/the_ridge_shima.jpeg",
      "/assets/traveldesk/531957817Lakkar_Bazaar_Main.jpg"
    ],
    destinations: [
      {
        name: "Christ Church",
        summary: "Historic church located on the Ridge featuring renowned stained glass.",
        details: [
          { type: "location", text: "Located on the Ridge" },
          { type: "history", text: "Built in 1857 (North India's second-oldest)" },
          { type: "history", text: "Features stained glass and original chancel windows designed by Lockwood Kipling (Rudyard Kipling’s father)" }
        ]
      },
      {
        name: "The Mall",
        summary: "Shimla's central shopping and social hub connecting major bazaars.",
        details: [
          { type: "location", text: "Central shopping hub; accessible from Cart Road via a passenger lift" },
          { type: "location", text: "Connects to Tibetan Market, Lower Bazaar, and Ram Bazaar" },
          { type: "activity", text: "Contains clubs, theatres, restaurants, and bars" }
        ]
      },
      {
        name: "Lakkar Bazaar",
        summary: "Famous marketplace specialized strictly in wooden handicrafts.",
        details: [
          { type: "location", text: "Adjacent to the Ridge" },
          { type: "activity", text: "Specialized strictly in local wooden handicrafts and souvenirs" }
        ]
      },
      {
        name: "The Ridge",
        summary: "Large, open central space offering panoramic views of the Himalayas.",
        details: [
          { type: "location", text: "Large, open central space" },
          { type: "mythology", text: "Offering wide-angle panoramic views of the snowy Himalayan mountain ranges" }
        ]
      },
      {
        name: "Himachal State Museum",
        summary: "Repository of ancient historical artifacts and extensive literature.",
        details: [
          { type: "history", text: "Houses ancient historical sculptures, coins, paintings, and photographs" },
          { type: "mythology", text: "Includes an on-site library holding ~10,000 books, journals, and magazines" }
        ]
      },
      {
        name: "Kali Bari",
        summary: "Historic temple dedicated to Kali Mata, deeply tied to Shimla's origins.",
        details: [
          { type: "history", text: "Built in 1845; dedicated to Kali Mata" },
          { type: "mythology", text: "Historically tied to the legend of an ancient temple of 'Shamla' (a blue female form of Kali Devi) that originally stood near Rothney Castle on Jakhu hill" }
        ]
      }
    ]
  },
  {
    id: "dawn-to-dusk",
    title: "Shimla From Dawn-To-Dusk",
    icon: <Sunrise size={20} />,
    images: [
      "/assets/traveldesk/viceregal-lodge-turned.jpg",
      "/assets/traveldesk/jakhu-mandir.jpg",
      "/assets/traveldesk/kamna_devi_temple.jpg",
      "/assets/traveldesk/Army_Heritage_Museum_garden_in_Annadale,_Shimla.jpg"
    ],
    destinations: [
      {
        name: "Prospect Hill & Kamna Devi Temple",
        summary: "Vantage point offering simultaneous sunrise and moonrise views.",
        details: [
          { type: "location", text: "Features a steep forest trail leading to the summit" },
          { type: "mythology", text: "Unique vantage point where moonrise and sunset can be viewed simultaneously" },
          { type: "history", text: "The temple (Krera Devi Mandir) is dedicated to Durga Mata, built by the Rana of Junga" },
          { type: "location", text: "Overlooks Jutogh, Subathu, Tara Devi, and Choor Chandni Dhar" }
        ]
      },
      {
        name: "Viceregal Lodge (IIAS)",
        summary: "Magnificent architectural marvel atop Observatory Hill.",
        details: [
          { type: "location", text: "Located atop Observatory Hill" },
          { type: "history", text: "Built in 1888 by architect Henry Irwin during Lord Dufferin’s tenure" },
          { type: "history", text: "Constructed using Himalayan grey stone and Burmese teak wood" },
          { type: "mythology", text: "Former Viceroy's residence and Rashtrapati Niwas; donated by President Dr. S. Radhakrishnan for higher research" }
        ]
      },
      {
        name: "Tara Devi Temple",
        summary: "Ancient temple hosting weekly community feasts.",
        details: [
          { type: "history", text: "Built 200 years ago by Rana of Junga Bhupendra Sen" },
          { type: "mythology", text: "Named after holy man Taradinath who sculpted the deity" },
          { type: "location", text: "Sits next to an ancient Lord Shiva temple built by the Udasis sect" },
          { type: "activity", text: "Hosts a weekly community feast (bhandara)" }
        ]
      },
      {
        name: "Jakhu Temple",
        summary: "Historic site home to the world's tallest Hanuman statue.",
        details: [
          { type: "mythology", text: "Named after 'Yaku' (abode of Yakshas, Kinnars, Nagas, and Asuras)" },
          { type: "mythology", text: "Legend states Lord Hanuman’s landing flattened the hill and his sandals fell here" },
          { type: "history", text: "Features a 108-foot-high Lord Hanuman statue unveiled in 2010 (world's tallest of its kind)" }
        ]
      },
      {
        name: "The Army Heritage Museum",
        summary: "Drive-in museum in Annandale featuring rare historical artifacts.",
        details: [
          { type: "location", text: "Drive-in museum located in Annandale" },
          { type: "history", text: "Displays rare artifacts: 1857 execution order of Mangal Pandey, 1971 East Pakistan surrender document signed by Lt. Gen. Niazi, actual LoC fencing pieces" },
          { type: "mythology", text: "Includes a glasshouse with 400 varieties of cacti/succulents" }
        ]
      },
      {
        name: "Sri Sankat Mochan & Shiv Temple",
        summary: "Spiritual sanctuary featuring unique South Indian architecture.",
        details: [
          { type: "history", text: "Stone Hanuman temple built by Baba Neem Karori Maharaj in natural surroundings" },
          { type: "history", text: "Features a Dravidian-style Shodasa (Ganesh) temple and a Navgreh temple" },
          { type: "location", text: "Nearby Shiv temple features multi-colored statues and South Indian architecture" },
          { type: "activity", text: "Nearby Tibetan Monastery (Kasumpti) features 'Thanka' paintings, hosts masked dances annually (Sept 16-26), and runs a hand-knotted carpet weaving center" }
        ]
      }
    ]
  },
  {
    id: "river-valley",
    title: "River Valley",
    icon: <Compass size={20} />,
    images: [
      "/assets/traveldesk/mashobra.jpg",
      "/assets/traveldesk/naldehra-shimla-himachal-pradesh-3-attr-hero.jpg",
      "/assets/traveldesk/tattapani-hot-spring-bath.jpg",
      "/assets/traveldesk/craignano-nature-park-shimla-himachal-pradesh-2-attr-hero.jpg"
    ],
    destinations: [
      {
        name: "Mashobra",
        summary: "Summer retreat known for its Fruit Research Station and exotic trees.",
        details: [
          { type: "distance", text: "13 km away" },
          { type: "history", text: "Summer retreat of the former ruler of Faridkot" },
          { type: "location", text: "Features St. Crispin’s church, a Kali Mandir, and a Fruit Research Station specializing in exotic trees" }
        ]
      },
      {
        name: "Craignano",
        summary: "Italian-style villa with historical ties to Napoleon's graveyard.",
        details: [
          { type: "distance", text: "16 km away" },
          { type: "history", text: "29-acre Italian-style villa built in 1920 by Chevalier Peliti" },
          { type: "activity", text: "Hosts the annual Sipi Fair honoring Sepu Devta" },
          { type: "mythology", text: "Features historic Weeping Willows grown from cuttings taken from Napoleon’s graveyard in St. Helena" }
        ]
      },
      {
        name: "Naldehra",
        summary: "Home to India's oldest and highest golf course.",
        details: [
          { type: "distance", text: "22 km away" },
          { type: "history", text: "Historically called 'Nal Deo'; houses an ancient Mahunag temple" },
          { type: "activity", text: "Features India's oldest and highest golf course laid out by Lord Curzon" },
          { type: "mythology", text: "Lord Curzon named his daughter, Lady Alexandra Naldehra, after the site" }
        ]
      },
      {
        name: "Tattapani & Sunni",
        summary: "Famous for natural hot water sulphur springs along the Sutlej River.",
        details: [
          { type: "distance", text: "Tattapani (51 km) & Sunni (50 km)" },
          { type: "location", text: "Situated along the rocky Sutlej River; famous for natural hot water sulphur springs" },
          { type: "activity", text: "Features a 4.5 km trek to the Shiv goofa waterfall in Saroor khud" },
          { type: "location", text: "Has a hanging bridge leading to an ancient Sankat Mochan temple" }
        ]
      }
    ]
  },
  {
    id: "misty-meadows",
    title: "Misty Meadows",
    icon: <Mountain size={20} />,
    images: [
      "/assets/traveldesk/chinibunglow.jpg",
      "/assets/traveldesk/craignano-nature-park-shimla-himachal-pradesh-2-attr-hero.jpg",
      "/assets/traveldesk/mashobra.jpg"
    ],
    destinations: [
      {
        name: "Green Valley",
        summary: "Panoramic highway viewpoint overlooking Asia's thickest pine forest.",
        details: [
          { type: "distance", text: "11 km away" },
          { type: "location", text: "Panoramic highway viewpoint overlooking Asia's thickest pine forest canopy" },
          { type: "activity", text: "A major photography stop for tourists" }
        ]
      },
      {
        name: "Kalyani Helipad",
        summary: "Elevated vantage point featuring sweeping 3-sided views.",
        details: [
          { type: "distance", text: "14 km away" },
          { type: "distance", text: "Sits at an elevation of 8,000 feet near Chhrabra" },
          { type: "location", text: "Provides sweeping 3-sided views and features a seasonal flower nursery" }
        ]
      },
      {
        name: "Kufri",
        summary: "Historic ski destination featuring pony treks and rare Bhojpatra trees.",
        details: [
          { type: "distance", text: "16 km away" },
          { type: "location", text: "Views of Badrinath, Kedarnath, Pirpanjal, and Shiwalik ranges" },
          { type: "history", text: "Contains one of India's oldest ski slopes" },
          { type: "activity", text: "Offers pony treks to Fagu Valley/Mahasu Peak, a mini zoo" },
          { type: "mythology", text: "Features rare Bhojpatra trees (bark historically used to write the Ramayana)" }
        ]
      },
      {
        name: "Chini Bungalow / Indira Tourist Park",
        summary: "Notable tourist stop for Himalayan nurseries and local handicrafts.",
        details: [
          { type: "distance", text: "18 km away" },
          { type: "location", text: "Noted for nurseries selling Himalayan plants (e.g., gladioli)" },
          { type: "activity", text: "Offers local honey, pickles, and rabbit merino wool products (shawls)" }
        ]
      },
      {
        name: "Fagu",
        summary: "Unique vantage point of two distinct valleys.",
        details: [
          { type: "distance", text: "22 km away" },
          { type: "location", text: "Offers a unique vantage point of two distinct valleys facing opposite directions" },
          { type: "location", text: "Heavily cultivated with sprawling apple orchards" }
        ]
      },
      {
        name: "Narkanda",
        summary: "Historic winter ski destination on the Hindustan-Tibet road.",
        details: [
          { type: "distance", text: "64 km away" },
          { type: "distance", text: "Elevation: 2,708 meters on the Hindustan-Tibet road" },
          { type: "history", text: "One of India's oldest winter ski destinations" },
          { type: "location", text: "Showcases the mountain snow line, deep pine forests, and extensive apple orchards" }
        ]
      }
    ]
  },
  {
    id: "himalayan-heights",
    title: "Himalayan Heights",
    icon: <MapIcon size={20} />,
    images: [
      "/assets/traveldesk/viceregal-lodge-turned.jpg",
      "/assets/traveldesk/mashobra.jpg",
      "/assets/traveldesk/tattapani-hot-spring-bath.jpg"
    ],
    destinations: [
      {
        name: "Patiala Royal Heritage Route",
        summary: "Shares initial route with Misty Meadows but diverges to Patiala Royal Heritage sites.",
        details: [
          { type: "location", text: "Shares initial route layout with Misty Meadows (Green Valley, Kalyani Helipad, Kufri, Chini Bungalow) but diverges explicitly toward Patiala Royal Heritage sites." }
        ]
      },
      {
        name: "Chail",
        summary: "Home to the Chail Palace and the world's highest cricket pitch.",
        details: [
          { type: "distance", text: "43 km away" },
          { type: "history", text: "Centered around the Chail Palace heritage hotel (built in 1891 by Maharaja Bhupinder Singh of Patiala across 75 acres)" },
          { type: "history", text: "Features the world’s highest cricket pitch" },
          { type: "location", text: "Contains a wildlife sanctuary and Sidh Baba ka Mandir" },
          { type: "mythology", text: "Offers spectacular nighttime views of Shimla lights and Choor Chandni ('Mountain of the Silver Bangle')" }
        ]
      },
      {
        name: "Sadhupul & Dochi",
        summary: "Riverside picnic spots and forest trekking trails.",
        details: [
          { type: "location", text: "Located on the banks of the Ashwini River" },
          { type: "activity", text: "Known for riverside picnics and an old Durga Mata temple" },
          { type: "activity", text: "Offers forest trekking from the old Sadhupul bridge up to Dochi" }
        ]
      }
    ]
  },
  {
    id: "shimla-on-wheels",
    title: "Shimla-On-Wheels",
    icon: <Train size={20} />,
    images: [
      "/assets/traveldesk/toy-train.jpg",
      "/assets/traveldesk/the_ridge_shima.jpeg"
    ],
    destinations: [
      {
        name: "The Toy Train Route",
        summary: "A Guinness-listed 1904 engineering marvel.",
        details: [
          { type: "history", text: "Kalka-Shimla Toy Train: A 1904 engineering feat, Guinness-listed as 'India's smallest line'" },
          { type: "distance", text: "Zig-zags at angles up to 48 degrees across deep forest bridges and mountain tunnels" }
        ]
      },
      {
        name: "The Stretch",
        summary: "Heritage segment passing through 18 distinct tunnels.",
        details: [
          { type: "location", text: "Highlights the heritage segment running from Shimla via Summer Hill, Jutogh, Tara Devi, and Shoghi" },
          { type: "history", text: "Passes through 18 distinct tunnels (including Tunnel 103 and the long Tara Devi tunnel)" },
          { type: "mythology", text: "Historically utilizes manual red/green mechanical lanterns for signaling" }
        ]
      },
      {
        name: "Excursion Routing",
        summary: "Seamless train-to-road transfers for forest treks and temple visits.",
        details: [
          { type: "activity", text: "Coordinates train-to-road transfers" },
          { type: "location", text: "Example: Alighting at Shoghi for a cab to Tara Devi temple" },
          { type: "location", text: "Example: Dropping at Tara Devi station for a 4 km forest trek past the 'Homestead' picnic spot" }
        ]
      }
    ]
  },
  {
    id: "recreations",
    title: "Other Recreations",
    icon: <Gamepad2 size={20} />,
    images: [
      "/assets/traveldesk/the_mall.jpg",
      "/assets/traveldesk/531957817Lakkar_Bazaar_Main.jpg"
    ],
    destinations: [
      {
        name: "City Activities",
        summary: "Various entertainment options around town.",
        details: [
          { type: "activity", text: "Billiards, Pool, and Video games on The Mall" },
          { type: "activity", text: "Pony rides across the wide terrain of the Ridge" },
          { type: "activity", text: "Local Cinema Halls" },
          { type: "activity", text: "Seasonal Ice Skating rink below Lakkar Bazaar" },
          { type: "activity", text: "Roller skating rinks located inside Lakkar Bazaar" }
        ]
      }
    ]
  }
];

const getIconForType = (type: string) => {
  switch (type) {
    case "location":
      return <MapPin size={16} className="text-blue-500 mt-1 shrink-0" />;
    case "distance":
      return <Ruler size={16} className="text-orange-500 mt-1 shrink-0" />;
    case "history":
      return <Landmark size={16} className="text-amber-700 mt-1 shrink-0" />;
    case "mythology":
      return <ScrollText size={16} className="text-purple-600 mt-1 shrink-0" />;
    case "activity":
      return <Ticket size={16} className="text-green-600 mt-1 shrink-0" />;
    default:
      return <MapPin size={16} className="text-brand-green-600 mt-1 shrink-0" />;
  }
};

export default function TravelDeskViewer() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false })
  ]);

  const toggleCard = (destName: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [destName]: !prev[destName]
    }));
  };

  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row gap-8 pb-16">
      {/* Sidebar Navigation */}
      <div className="w-full lg:w-1/3 xl:w-1/4 shrink-0 z-10">
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-brand-green-100 lg:sticky lg:top-24">
          <h2 className="text-xl font-bold text-brand-green-900 mb-4 px-4 pt-2">Tour Categories</h2>
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-2 lg:space-x-0 lg:space-y-2 pb-2 lg:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setExpandedCards({}); // Reset expansions on tab change
                }}
                className={`flex items-center whitespace-nowrap lg:whitespace-normal text-left px-4 py-3 rounded-xl transition-all duration-200 shrink-0 ${
                  activeTab === category.id
                    ? "bg-brand-green-700 text-white shadow-md font-medium"
                    : "text-gray-600 hover:bg-brand-yellow-50 hover:text-brand-green-800"
                }`}
              >
                <span className={`mr-3 ${activeTab === category.id ? "text-brand-yellow-200" : "text-brand-green-600"}`}>
                  {category.icon}
                </span>
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Auto-playing Image Carousel */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-green-100 mb-8">
              <div className="relative h-64 md:h-80 w-full overflow-hidden" ref={emblaRef}>
                <div className="flex h-full">
                  {activeCategory.images.map((src, idx) => (
                    <div key={idx} className="relative flex-[0_0_100%] min-w-0 h-full">
                      <img
                        src={src}
                        alt={`${activeCategory.title} scenery`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                {/* Overlay Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                  <h2 className="text-3xl md:text-5xl font-bold text-white p-8 font-serif">
                    {activeCategory.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Destinations Accordion List */}
            <div className="space-y-6">
              {activeCategory.destinations.map((dest, i) => {
                const isExpanded = expandedCards[dest.name];
                const destImg = getDestinationImage(dest.name, i);
                
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden group ${
                      isExpanded ? "border-brand-green-400 ring-2 ring-brand-green-100" : "border-brand-green-100 hover:border-brand-green-300"
                    }`}
                  >
                    {/* Card Header Flex with Photo */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
                      {/* Destination Image Thumbnail */}
                      <div className="relative w-full sm:w-48 md:w-52 h-44 sm:h-36 md:h-40 shrink-0 overflow-hidden bg-gray-100">
                        <img 
                          src={destImg} 
                          alt={dest.name} 
                          className={`w-full h-full object-cover ${getDestinationObjectPosition(dest.name)} transition-transform duration-500 group-hover:scale-105`} 
                        />
                        <div className="absolute inset-0 bg-black/5 sm:hidden" />
                      </div>

                      {/* Accordion Button / Content */}
                      <button 
                        onClick={() => toggleCard(dest.name)}
                        className="flex-1 text-left p-5 md:p-6 flex items-start justify-between bg-white hover:bg-gray-50/60 transition-colors"
                      >
                        <div className="pr-3">
                          <h3 className="text-xl font-bold text-brand-green-900 mb-2 group-hover:text-brand-green-700 transition-colors">
                            {dest.name}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                            {dest.summary}
                          </p>
                        </div>
                        <div className="shrink-0 mt-1 bg-brand-yellow-50 p-2 rounded-full text-brand-green-700">
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>
                    </div>

                    {/* Accordion Body (Deep Lore & Data) */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-3 border-t border-gray-100 bg-gray-50/50">
                            <ul className="space-y-3.5 mt-2">
                              {dest.details.map((detail, j) => (
                                <li key={j} className="flex items-start text-gray-700 text-sm leading-relaxed">
                                  {getIconForType(detail.type)}
                                  <span className="ml-3 font-medium text-gray-800">
                                    {detail.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Disclaimer / Booking Footer */}
            <div className="mt-10 bg-brand-yellow-50 rounded-2xl p-8 border border-brand-yellow-200 text-center">
              <Info className="w-10 h-10 text-brand-green-700 mx-auto mb-4" />
              <p className="text-gray-800 font-medium mb-6 text-lg max-w-xl mx-auto">
                Let our travel experts structure your custom <span className="font-bold text-brand-green-900">{activeCategory.title}</span> itinerary. We handle all the logistics, cabs, and guides.
              </p>
              <button className="bg-brand-green-700 text-white px-8 py-3.5 rounded-full font-bold shadow-md hover:bg-brand-green-800 transition-colors text-lg">
                Inquire With Travel Desk
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
