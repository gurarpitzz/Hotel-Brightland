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
import PageHeaderBanner from "@/components/PageHeaderBanner";

export default function RoomsPage() {
  return (
    <div 
      className="bg-[#faf8f0] bg-repeat min-h-screen pb-24"
      style={{ backgroundImage: "url('/assets/homebg.png')" }}
    >
      
      <PageHeaderBanner
        tagline="Our Collection"
        title="Rooms & Suites"
        description="Discover comfort and elegance in the heart of Shimla. Every room is designed to provide a warm, relaxing atmosphere with beautiful views."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-16 lg:space-y-24">
          {rooms.map((room, index) => {
            const isEven = index % 2 === 0;

            // Separate main room title from subtitle bracket if present
            const nameParts = room.name.split(" (");
            const mainTitle = nameParts[0];
            const subTitle = nameParts[1] ? nameParts[1].replace(")", "") : null;

            return (
              <AnimatedFadeUp 
                key={room.id} 
                delay={index * 0.1} 
                className={`bg-[#faf8f0]/95 backdrop-blur-md rounded-md shadow-md border border-[#c9a227]/25 overflow-hidden flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } transition-all duration-300 hover:border-[#c9a227]/50`}
              >
                {/* Carousel Section (45% Width) */}
                <div className="w-full lg:w-[45%] p-3 lg:p-4 flex flex-col justify-center">
                  <RoomCarousel images={room.images} badgeText={room.badgeText} />
                </div>
                
                {/* Details Section (55% Width) */}
                <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Eyebrow Label */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#c9a227]">
                        THE BRIGHTLAND COLLECTION
                      </span>
                    </div>

                    {/* Room Title & Subtitle Hierarchy */}
                    <div className="mb-4">
                      <h2 className="text-3xl sm:text-4xl font-serif text-brand-green-900 font-normal tracking-tight">
                        {mainTitle}
                      </h2>
                      {subTitle && (
                        <p className="text-sm font-serif italic text-brand-green-800/80 mt-0.5">
                          {subTitle}
                        </p>
                      )}
                    </div>

                    {/* Thin Antique Brass Accent Line */}
                    <div className="w-16 h-[1px] bg-[#c9a227]/50 mb-6" />

                    {/* ROOM FEATURES Section Header */}
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2d4a3e] mb-4">
                      ROOM FEATURES
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 mb-6">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-sm text-[#3a4a40] font-medium">
                          <CheckCircle2 size={15} className="text-[#c9a227] mr-2 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Secondary Amenities Pill Row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3 border-t border-b border-[#c9a227]/15 mb-6 text-[11px] uppercase tracking-wider text-brand-green-800 font-semibold">
                      {room.amenities.map((amenity, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <span className="text-[#c9a227]">{amenity.icon}</span>
                          <span>{amenity.label}</span>
                          {idx < room.amenities.length - 1 && <span className="text-[#c9a227]/40 ml-2">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Booking Button Area */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 gap-4">
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-0.5">From</p>
                      <p className="text-3xl font-serif font-bold text-brand-green-950 tracking-tight">
                        ₹{room.price.toLocaleString('en-IN')} <span className="text-xs font-sans font-normal text-gray-500">/ night</span>
                      </p>
                    </div>
                    <RoomBookButton roomType={room.name} baseRate={room.price} />
                  </div>
                </div>
              </AnimatedFadeUp>
            );
          })}
        </div>

      </div>
    </div>
  );
}
