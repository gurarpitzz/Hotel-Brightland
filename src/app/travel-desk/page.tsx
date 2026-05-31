import { MapPin, Calendar, Clock, Car } from "lucide-react";
import Link from "next/link";
import TravelDeskViewer from "@/components/TravelDeskViewer";

export const metadata = {
  title: "Travel Desk & Local Tours | Brightland Hotel, Shimla",
  description: "Plan your Shimla sightseeing with the Brightland Hotel Travel Desk. We arrange local tours to Kufri, Naldehra, Jakhu Temple, and provide pickup/drop services.",
};

export default function TravelDeskPage() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-900 mb-4">
            Travel Desk
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let us help you explore the beauty of Shimla. Our dedicated travel desk offers customized tour packages, sightseeing taxis, and pickup/drop services.
          </p>
        </div>

        <div className="mb-16">
          <TravelDeskViewer />
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
