import { Check, Info, AlertTriangle, Coffee, Utensils, Award, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Tariff | Brightland Hotel, Shimla",
  description: "View our current FIT tariffs approved by the H.P. Tourism Department for our various rooms and suites in Shimla.",
};

const roomRates = [
  { name: "Imperial Room", pax: "2 PAX", price: "3,800", popular: false },
  { name: "Royal Room", pax: "2 PAX", price: "4,600", popular: true },
  { name: "Corporate Room", pax: "2 PAX", price: "5,500", popular: false },
  { name: "Regular Suite", pax: "4 PAX", price: "5,500", popular: false },
  { name: "Regal Suite", pax: "2 PAX", price: "6,000", popular: true },
  { name: "Presidential Room", pax: "2 PAX", price: "6,000", popular: false },
];

export default function TariffPage() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-brand-green-100 text-brand-green-800 px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-sm">
            <Award size={16} />
            <span>Approved by H.P. Tourism Department</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-900 mb-4">
            Hotel Tariff
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FIT Tariff In Rupees Per Day. Enjoy our European Plan (E.P.) accommodation in the heart of Shimla.
          </p>
        </div>

        {/* Room Rates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {roomRates.map((room, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-3xl p-8 shadow-sm border ${
                room.popular ? "border-brand-green-500 ring-4 ring-brand-green-50" : "border-brand-green-100"
              }`}
            >
              {room.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-green-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-brand-green-900 mb-2">{room.name}</h3>
                <p className="text-gray-500 font-medium">Valid for {room.pax}</p>
              </div>
              <div className="text-center mb-8">
                <span className="text-4xl font-extrabold text-brand-green-700">₹{room.price}</span>
                <span className="text-gray-500 font-medium"> / day</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <Check size={18} className="text-brand-green-500 mr-2 shrink-0" />
                  European Plan (Room Only)
                </li>
                <li className="flex items-center text-gray-600">
                  <Check size={18} className="text-brand-green-500 mr-2 shrink-0" />
                  Free Wi-Fi (Reception/Restaurant)
                </li>
                <li className="flex items-center text-gray-600">
                  <Check size={18} className="text-brand-green-500 mr-2 shrink-0" />
                  Daily Housekeeping
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Extra Bed & Meal Rates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Meals Section */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-green-100">
            <h3 className="text-2xl font-bold text-brand-green-900 mb-6 flex items-center">
              <Utensils className="mr-3 text-brand-green-600" />
              Meal Rates (Fixed Menu)
            </h3>
            <p className="text-gray-500 mb-6 font-medium">Table D&apos; Hote per PAX (above 5 years) per day:</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-brand-yellow-50 rounded-xl border border-brand-yellow-100">
                <div className="flex items-center font-bold text-brand-green-900">
                  <Coffee className="mr-3 text-brand-yellow-600" size={20} />
                  Breakfast
                </div>
                <div className="font-extrabold text-xl text-brand-green-800">₹450</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-brand-yellow-50 rounded-xl border border-brand-yellow-100">
                <div className="flex items-center font-bold text-brand-green-900">
                  <Utensils className="mr-3 text-brand-yellow-600" size={20} />
                  Lunch / Dinner
                </div>
                <div className="font-extrabold text-xl text-brand-green-800">₹700</div>
              </div>
            </div>
          </div>

          {/* Add-ons & Discounts */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-green-100 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-brand-green-900 mb-6 flex items-center">
                <FileText className="mr-3 text-brand-green-600" />
                Additional Details
              </h3>
              
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700 font-medium">Extra PAX / Bed (Above 5 yrs)</span>
                  <span className="font-bold text-brand-green-800 text-lg">₹900 / day</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700 font-medium">Group Tariff</span>
                  <span className="font-bold text-brand-green-800">Available on request</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-700 font-medium">Taxes Applicable</span>
                  <span className="font-bold text-brand-green-800">GST extra on Room & F&B</span>
                </li>
                <li className="flex justify-between items-center pt-1">
                  <span className="text-gray-700 font-medium">Check-in / Check-out</span>
                  <span className="font-bold text-brand-green-800 bg-brand-yellow-100 px-3 py-1 rounded-lg">12:00 NOON</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Notes Alert */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8 mb-16 shadow-sm">
          <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <AlertTriangle className="mr-2" />
            Important Rules & Regulations
          </h3>
          <ul className="space-y-3 text-red-900/80 font-medium">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Stag entry is not allowed</strong> in our Hotel and such bookings will not be entertained.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>All rooms/suites are different in decoration and interiors. <strong>Some categories are not valley facing.</strong> Before booking please confirm from Hotel.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Tariff & Govt. taxes are subject to change without notice.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Wi-fi connection is limited to the Hotel Reception and Restaurant only.</span>
            </li>
          </ul>
        </div>

        {/* Accreditations Footer */}
        <div className="border-t border-brand-green-200 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl border border-brand-green-100 shadow-sm">
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Registered With</p>
              <h4 className="text-xl font-extrabold text-brand-green-900">H.P. Tourism Deptt.</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-green-100 shadow-sm">
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Member Of</p>
              <h4 className="text-xl font-extrabold text-brand-green-900">H.R.A.N.I.</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-green-100 shadow-sm">
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Member Of</p>
              <h4 className="text-xl font-extrabold text-brand-green-900">F.H.R.A.I.</h4>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl text-brand-green-800 font-medium mb-6">
              Off Season Discount: As applicable. <br className="md:hidden" />
              <span className="font-bold">Get best deals on direct booking!</span>
            </p>
            <button className="bg-brand-green-700 text-white px-8 py-3.5 rounded-full font-bold shadow-md hover:bg-brand-green-800 transition-colors text-lg">
              Book via WhatsApp (Save 15%)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
