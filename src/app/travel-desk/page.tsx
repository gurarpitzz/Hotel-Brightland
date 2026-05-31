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

        <div className="bg-white rounded-2xl shadow-sm border border-brand-green-100 overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-brand-green-900 mb-6 border-b border-gray-100 pb-4">
              Popular Local Tours
            </h2>
            
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-brand-yellow-100/50 p-4 rounded-xl flex items-center justify-center shrink-0 w-24 h-24">
                  <MapPin className="text-brand-green-700 w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-800 mb-2">Kufri & Fagu Valley Tour</h3>
                  <p className="text-gray-600 mb-2">Experience the snow-capped peaks, horse riding, and the Himalayan Nature Park at Kufri. Enjoy the scenic beauty of Fagu Valley.</p>
                  <p className="text-sm font-medium text-brand-green-700 flex items-center"><Clock size={16} className="mr-1" /> Duration: Half Day</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-brand-yellow-100/50 p-4 rounded-xl flex items-center justify-center shrink-0 w-24 h-24">
                  <MapPin className="text-brand-green-700 w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-800 mb-2">Naldehra & Mashobra Tour</h3>
                  <p className="text-gray-600 mb-2">Visit the famous 18-hole golf course at Naldehra surrounded by cedar forests, and explore the apple orchards of Mashobra.</p>
                  <p className="text-sm font-medium text-brand-green-700 flex items-center"><Clock size={16} className="mr-1" /> Duration: Full Day</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-brand-yellow-100/50 p-4 rounded-xl flex items-center justify-center shrink-0 w-24 h-24">
                  <MapPin className="text-brand-green-700 w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-800 mb-2">Shimla Local Sightseeing</h3>
                  <p className="text-gray-600 mb-2">Explore the Vice Regal Lodge (Indian Institute of Advanced Study), Jakhu Temple, State Museum, and the famous Mall Road.</p>
                  <p className="text-sm font-medium text-brand-green-700 flex items-center"><Clock size={16} className="mr-1" /> Duration: Half Day</p>
                </div>
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
