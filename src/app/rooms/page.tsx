import { CheckCircle2, Bed, Maximize, Wifi, Coffee, Tv, Users } from "lucide-react";
import RoomCarousel from "@/components/RoomCarousel";
import { AnimatedFadeUp } from "@/components/AnimatedWrappers";

export const metadata = {
  title: "Rooms & Suites | Brightland Hotel, Shimla",
  description: "Explore our luxurious rooms at Brightland Hotel, Shimla. Choose from Corporate, Royal, Imperial, Presidential, or Regal Suites for your perfect mountain stay.",
};

const rooms = [
  {
    id: "imperial-non-valley",
    name: "Imperial Rooms (Non Valley View)",
    price: 3500,
    badgeText: "Budget Friendly",
    features: [
      "Queen Size Bed",
      "Attached Bathroom",
      "Room Heater (On Request)",
      "Daily Housekeeping",
      "Intercom Facility"
    ],
    amenities: [
      { icon: <Users size={18} />, label: "Up to 2 Guests" },
      { icon: <Wifi size={18} />, label: "Free WiFi" },
      { icon: <Tv size={18} />, label: "Smart TV" },
      { icon: <Coffee size={18} />, label: "Tea/Coffee Maker" },
    ],
    images: [
      "/assets/Imperial Rooms - non valley view/Imperial Rooms - non valley view (1).jpg",
      "/assets/Imperial Rooms - non valley view/Imperial Rooms - non valley view (2).jpg",
      "/assets/Imperial Rooms - non valley view/Imperial Rooms - non valley view (3).jpg",
      "/assets/Imperial Rooms - non valley view/Imperial Rooms - non valley view (4).jpg",
      "/assets/Imperial Rooms - non valley view/Imperial Rooms - non valley view (5).jpg",
      "/assets/Imperial Rooms - non valley view/Imperial Rooms - non valley view (6).jpg"
    ]
  },
  {
    id: "corporate",
    name: "Corporate Rooms",
    price: 4500,
    badgeText: "Business Ready",
    features: [
      "King Size Bed",
      "Work Desk & Chair",
      "Mountain Views",
      "Premium Toiletries",
      "Express Laundry"
    ],
    amenities: [
      { icon: <Users size={18} />, label: "Up to 2 Guests" },
      { icon: <Wifi size={18} />, label: "High-Speed WiFi" },
      { icon: <Tv size={18} />, label: "Smart TV" },
      { icon: <Coffee size={18} />, label: "Tea/Coffee Maker" },
    ],
    images: [
      "/assets/Corporate Rooms/Corporate Rooms (1).jpg",
      "/assets/Corporate Rooms/Corporate Rooms (2).jpg",
      "/assets/Corporate Rooms/Corporate Rooms (3).jpg",
      "/assets/Corporate Rooms/Corporate Rooms (4).jpg",
      "/assets/Corporate Rooms/Corporate Rooms (5).jpg",
      "/assets/Corporate Rooms/Corporate Rooms (6).jpg",
      "/assets/Corporate Rooms/Corporate Rooms (7).jpg",
      "/assets/Corporate Rooms/Corporate Rooms (8).jpg"
    ]
  },
  {
    id: "royal",
    name: "Royal Rooms",
    price: 5500,
    badgeText: "Popular",
    features: [
      "King Size Bed",
      "Panoramic Valley Views",
      "Plush Seating Area",
      "Mini Fridge",
      "Premium Linen"
    ],
    amenities: [
      { icon: <Users size={18} />, label: "Up to 2 Guests" },
      { icon: <Wifi size={18} />, label: "Free WiFi" },
      { icon: <Tv size={18} />, label: "Smart TV" },
      { icon: <Coffee size={18} />, label: "Tea/Coffee Maker" },
      { icon: <Maximize size={18} />, label: "Spacious Layout" },
    ],
    images: [
      "/assets/Royal Rooms/Royal Rooms (1).jpg",
      "/assets/Royal Rooms/Royal Rooms (2).jpg",
      "/assets/Royal Rooms/Royal Rooms (3).jpg",
      "/assets/Royal Rooms/Royal Rooms (4).jpg",
      "/assets/Royal Rooms/Royal Rooms (5).jpg",
      "/assets/Royal Rooms/Royal Rooms (6).jpg",
      "/assets/Royal Rooms/Royal Rooms (7).jpg"
    ]
  },
  {
    id: "presidential",
    name: "Presidential Rooms",
    price: 7500,
    badgeText: "Luxury",
    features: [
      "Super King Size Bed",
      "180° Mountain Views",
      "Private Balcony Access",
      "Luxury Bathtub",
      "Welcome Basket"
    ],
    amenities: [
      { icon: <Users size={18} />, label: "Up to 2 Guests" },
      { icon: <Wifi size={18} />, label: "Premium WiFi" },
      { icon: <Tv size={18} />, label: "55\" Smart TV" },
      { icon: <Coffee size={18} />, label: "Espresso Machine" },
      { icon: <Bed size={18} />, label: "Premium Bedding" },
    ],
    images: [
      "/assets/Presidential Rooms/Presidential Rooms (1).jpg",
      "/assets/Presidential Rooms/Presidential Rooms (2).jpg",
      "/assets/Presidential Rooms/Presidential Rooms (3).jpg",
      "/assets/Presidential Rooms/Presidential Rooms (4).jpg",
      "/assets/Presidential Rooms/Presidential Rooms (5).jpg",
      "/assets/Presidential Rooms/Presidential Rooms (6).jpg",
      "/assets/Presidential Rooms/Presidential Rooms (7).jpg",
      "/assets/Presidential Rooms/Presidential Rooms (8).jpg"
    ]
  },
  {
    id: "regal-suites",
    name: "Regal Suites",
    price: 9500,
    badgeText: "Family Suite",
    features: [
      "Two King Size Beds",
      "Separate Living Room",
      "Dining Area",
      "Two Bathrooms",
      "Mountain Views"
    ],
    amenities: [
      { icon: <Users size={18} />, label: "Up to 4 Guests" },
      { icon: <Wifi size={18} />, label: "Free WiFi" },
      { icon: <Tv size={18} />, label: "Two Smart TVs" },
      { icon: <Coffee size={18} />, label: "Tea/Coffee Maker" },
      { icon: <Maximize size={18} />, label: "Extra Large" },
    ],
    images: [
      "/assets/Regal Suites/Regal Suites (1).jpg",
      "/assets/Regal Suites/Regal Suites (2).jpg",
      "/assets/Regal Suites/Regal Suites (3).jpg",
      "/assets/Regal Suites/Regal Suites (4).jpg",
      "/assets/Regal Suites/Regal Suites (5).jpg"
    ]
  }
];

import RoomBookButton from "./RoomBookButton";

export default function RoomsPage() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen pb-16">
      
      {/* Full-Height Hero Header Banner Section */}
      <section 
        className="relative w-full min-h-[calc(100vh-80px)] flex items-end pb-12 sm:pb-16 md:pb-20 bg-cover bg-right sm:bg-center bg-no-repeat mb-16 shadow-lg overflow-hidden border-b-2 border-[#c9a227]/40"
        style={{ backgroundImage: "url('/assets/headbanner.png')" }}
      >
        {/* Deep Forest Green Gradient Overlay on Left for clear text readability without covering right hotel building */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071c13]/95 via-[#0a2318]/85 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2318]/70 via-transparent to-black/30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full text-white">
          <div className="max-w-md md:max-w-xl text-left">
            <AnimatedFadeUp>
              {/* Handwritten Elegant Tagline */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-10 h-[1.5px] bg-[#c9a227]" />
                <span className="text-[#c9a227] text-2xl sm:text-3xl font-serif italic font-normal tracking-wide drop-shadow">
                  Our Collection
                </span>
                <div className="w-8 h-[1px] bg-[#c9a227]/40" />
              </div>

              {/* Increased Size Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-serif font-normal text-brand-yellow-50 tracking-tight mb-6 drop-shadow-lg leading-[1.08]">
                Rooms &amp; Suites
              </h1>

              {/* Antique Gold Line & Motif */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-[1.5px] bg-[#c9a227]/80" />
                <div className="text-[#c9a227] text-sm">❖ ❖ ❖</div>
                <div className="w-24 h-[1px] bg-[#c9a227]/30" />
              </div>

              {/* Description Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-brand-yellow-100/90 font-light leading-relaxed drop-shadow-md mb-8 max-w-lg">
                Discover comfort and elegance in the heart of Shimla. Every room is designed to provide a warm, relaxing atmosphere with beautiful views.
              </p>

              {/* Scroll Down Guide */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#c9a227] font-semibold drop-shadow">
                <span>Scroll to explore rooms</span>
                <span className="animate-bounce text-base sm:text-lg">↓</span>
              </div>
            </AnimatedFadeUp>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-16">
          {rooms.map((room, index) => (
            <AnimatedFadeUp key={room.id} delay={index * 0.1} className="bg-white rounded-2xl shadow-sm border border-brand-green-100 overflow-hidden flex flex-col md:flex-row">
              {/* Carousel Section */}
              <div className="w-full md:w-1/2 md:max-w-md lg:max-w-lg p-2">
                <RoomCarousel images={room.images} badgeText={room.badgeText} />
              </div>
              
              {/* Details Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-brand-green-900 mb-6">{room.name}</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm text-brand-green-800">
                        <CheckCircle2 size={18} className="text-brand-green-700 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md">
                        <span className="text-brand-green-700">{amenity.icon}</span>
                        <span>{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-100 pt-6">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Starting from</p>
                    <p className="text-3xl font-bold text-brand-green-900">
                      ₹{room.price} <span className="text-base font-normal text-gray-500">/ night</span>
                    </p>
                  </div>
                  <RoomBookButton roomType={room.name} baseRate={room.price} />
                </div>
              </div>
            </AnimatedFadeUp>
          ))}
        </div>

      </div>
    </div>
  );
}
