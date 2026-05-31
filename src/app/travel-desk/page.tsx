import { MapPin, Calendar, Clock, Car } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Travel Desk & Local Tours | Brightland Hotel, Shimla",
  description: "Plan your Shimla sightseeing with the Brightland Hotel Travel Desk. We arrange local tours to Kufri, Naldehra, Jakhu Temple, and provide pickup/drop services.",
};

export default function TravelDeskPage() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-900 mb-4">
            Travel Desk
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let us help you explore the beauty of Shimla. Our dedicated travel desk offers customized tour packages, sightseeing taxis, and pickup/drop services.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-green-900 mb-10 text-center">
            Unforgettable Local Experiences
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Kufri Tour */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-brand-green-100 group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=1000"
                  alt="Kufri Snow Peaks"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-green-800 shadow-sm flex items-center">
                  <Clock size={14} className="mr-1" /> Half Day
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-green-900 mb-3">Kufri & Fagu Valley</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Immerse yourself in a winter wonderland. Ride horseback through dense cedar forests to Mahasu Peak, experience the adrenaline of skiing on fresh snow, and lose yourself in the breathtaking, panoramic vistas of the Himalayan ranges at Fagu Valley. An absolute must for nature and adventure lovers.
                </p>
                <button className="w-full bg-brand-green-50 text-brand-green-800 hover:bg-brand-green-700 hover:text-white py-3 rounded-xl font-bold transition-colors">
                  Inquire Now
                </button>
              </div>
            </div>

            {/* Naldehra Tour */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-brand-green-100 group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601334460492-c4e207908b98?auto=format&fit=crop&q=80&w=1000"
                  alt="Naldehra Forests"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-green-800 shadow-sm flex items-center">
                  <Clock size={14} className="mr-1" /> Full Day
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-green-900 mb-3">Naldehra & Mashobra</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Step into serene tranquility. Wander through the world-famous 18-hole golf course perched amidst towering deodar trees. Later, breathe in the crisp mountain air as you stroll through the aromatic, sun-drenched apple orchards of Mashobra. A perfect escape for absolute peace of mind.
                </p>
                <button className="w-full bg-brand-green-50 text-brand-green-800 hover:bg-brand-green-700 hover:text-white py-3 rounded-xl font-bold transition-colors">
                  Inquire Now
                </button>
              </div>
            </div>

            {/* Shimla Sightseeing */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-brand-green-100 group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526391456885-3b918b959d28?auto=format&fit=crop&q=80&w=1000"
                  alt="Shimla Mall Road"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-green-800 shadow-sm flex items-center">
                  <Clock size={14} className="mr-1" /> Half Day
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-green-900 mb-3">Heritage Sightseeing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Travel back in time through Shimla's rich colonial heritage. Marvel at the majestic architecture of the Vice Regal Lodge, seek blessings at the towering Jakhu Temple, and end your evening with a vibrant, bustling walk down the iconic Mall Road as the sun sets over the valley.
                </p>
                <button className="w-full bg-brand-green-50 text-brand-green-800 hover:bg-brand-green-700 hover:text-white py-3 rounded-xl font-bold transition-colors">
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-brand-green-100 p-8 text-center">
            <Car className="w-12 h-12 text-brand-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-brand-green-900 mb-3">Taxi Services</h3>
            <p className="text-gray-600 mb-6">We provide reliable taxi services for Railway Station/Airport pickup and drops, as well as intercity travel.</p>
            <Link href="/" className="inline-block bg-brand-green-700 hover:bg-brand-green-800 text-white px-6 py-2 rounded-full font-bold transition-colors">
              Request a Cab
            </Link>
          </div>
          
          <div className="bg-brand-green-900 rounded-2xl shadow-sm border border-brand-green-800 p-8 text-center text-white">
            <Calendar className="w-12 h-12 text-brand-yellow-100 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Custom Packages</h3>
            <p className="text-gray-300 mb-6">Want a tailored itinerary? Talk to our travel experts to customize your Shimla holiday package.</p>
            <Link href="/" className="inline-block bg-brand-yellow-100 hover:bg-white text-brand-green-900 px-6 py-2 rounded-full font-bold transition-colors">
              Contact Travel Desk
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
