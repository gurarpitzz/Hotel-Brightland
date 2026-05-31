import { CheckCircle2, Bed, Maximize, Wifi, Coffee, Tv } from "lucide-react";
import RoomCarousel from "@/components/RoomCarousel";

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
    description: "Comfortable and cozy rooms perfect for budget-conscious travelers who still want to experience the premium hospitality of Brightland Hotel. Featuring elegant wooden interiors and modern amenities.",
    features: [
      "Queen Size Bed",
      "Attached Bathroom",
      "Room Heater (On Request)",
      "Daily Housekeeping",
      "Intercom Facility"
    ],
    amenities: [
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
    description: "Designed for the modern business traveler. These rooms offer a perfect blend of comfort and functionality with a dedicated workspace, ensuring a productive yet relaxing stay.",
    features: [
      "King Size Bed",
      "Work Desk & Chair",
      "Mountain Views",
      "Premium Toiletries",
      "Express Laundry"
    ],
    amenities: [
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
    description: "Experience royal comfort in these spacious rooms featuring classic decor, stunning valley views, and premium furnishings. Perfect for couples and small families.",
    features: [
      "King Size Bed",
      "Panoramic Valley Views",
      "Plush Seating Area",
      "Mini Fridge",
      "Premium Linen"
    ],
    amenities: [
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
    description: "The epitome of luxury at Brightland Hotel. Indulge in expansive spaces, opulent interiors, and the finest panoramic views of the Shimla mountains from your private viewpoint.",
    features: [
      "Super King Size Bed",
      "180° Mountain Views",
      "Private Balcony Access",
      "Luxury Bathtub",
      "Welcome Basket"
    ],
    amenities: [
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
    description: "Ideal for families or groups, the Regal Suites offer separate living and sleeping areas, ensuring privacy and ample space for everyone to relax after a day of exploring Shimla.",
    features: [
      "Two King Size Beds",
      "Separate Living Room",
      "Dining Area",
      "Two Bathrooms",
      "Mountain Views"
    ],
    amenities: [
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
    <div className="bg-brand-yellow-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-900 mb-4">
            Our Rooms & Suites
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover comfort and elegance in the heart of Shimla. Every room is designed to provide a warm, relaxing atmosphere with beautiful views.
          </p>
        </div>

        <div className="space-y-16">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-sm border border-brand-green-100 overflow-hidden flex flex-col md:flex-row">
              {/* Carousel Section */}
              <div className="w-full md:w-1/2 md:max-w-md lg:max-w-lg p-2">
                <RoomCarousel images={room.images} badgeText={room.badgeText} />
              </div>
              
              {/* Details Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-brand-green-900 mb-3">{room.name}</h2>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">{room.description}</p>
                  
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
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
