"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  FileText, 
  Search, 
  Clock, 
  ShieldAlert, 
  Car, 
  Droplets, 
  Utensils, 
  Bed, 
  AlertTriangle, 
  Ban, 
  Wifi, 
  Scale, 
  HelpCircle 
} from "lucide-react";

const termsAndConditions = [
  {
    id: 1,
    category: "Check-in / Checkout Time",
    icon: <Clock className="w-5 h-5 text-[#c9a227]" />,
    text: "Check-in / checkout time is 12:00 noon. Early Check in: Check in before 6:00 A.M. will be charged for 01 additional day. Check in after 6:00 A.M. will be charged 50% of room tariff (subject to availability). Late checkout: Check out after 6:00 P.M. will be charged for 01 additional day. Checkout between 12:00 noon and 6:00 P.M. will be charged 50% of room tariff (subject to availability)."
  },
  {
    id: 2,
    category: "Guest Eligibility",
    icon: <ShieldAlert className="w-5 h-5 text-[#c9a227]" />,
    text: "Stags entry is not allowed in our Hotel and such bookings will not be entertained."
  },
  {
    id: 3,
    category: "ID Proof",
    icon: <ShieldAlert className="w-5 h-5 text-[#c9a227]" />,
    text: "All Indian nationals must carry their aadhaar card / passport / driving licence in original as ID Proof. All foreign nationals must carry passport, visa and other travel documents in original as per govt. rules. Without valid ID proof accommodation will be refused."
  },
  {
    id: 4,
    category: "Reservations & Payments",
    icon: <FileText className="w-5 h-5 text-[#c9a227]" />,
    text: "All reservations from Brightland Hotel are confirmed irrevocably for the period specified and guests are liable for entire period irrespective of late arrival, early departure or ‘No Show’. Accommodation will be booked on ‘first come first reserved’ basis."
  },
  {
    id: 5,
    category: "Reservations & Payments",
    icon: <FileText className="w-5 h-5 text-[#c9a227]" />,
    text: "In case of ‘No Show’, payment received will not be refunded / adjusted under any circumstances what so ever and the payment received will be treated as Reservation Fee / Retention Charges as the case may deem fit."
  },
  {
    id: 6,
    category: "Room Ambiance & Allotment",
    icon: <Bed className="w-5 h-5 text-[#c9a227]" />,
    text: "Please note that allotted room on arrival day may differ in colour of curtains, shape of headrest, ambiance and décor of room as shown in the images on our website as it is difficult to upload the image of each and every room of each category. All our rooms are different in décor and ambiance. Room category and facilities will be same as booked. Kindly note that location and floor is not committed at the time of booking, it is strictly subject to availability at the time of arrival."
  },
  {
    id: 7,
    category: "Amenities & Services",
    icon: <Droplets className="w-5 h-5 text-[#c9a227]" />,
    text: "Electric kettle and complementary packaged drinking water bottles are not provided in the rooms. Drinking water from water filter is provided in the rooms by our room service."
  },
  {
    id: 8,
    category: "Amenities & Services",
    icon: <Clock className="w-5 h-5 text-[#c9a227]" />,
    text: "Room heater/blower is provided in the rooms during winter months at an extra charge."
  },
  {
    id: 9,
    category: "Parking Policy",
    icon: <Car className="w-5 h-5 text-[#c9a227]" />,
    text: "The car parking facility within hotel premises is subject to availability and is provided on ‘first come first reserved’ basis. Allotment and booking of accommodation doesn’t confirm that parking facility will be provided within hotel premises. Parking of hotel guests vehicles is at owners risk. After parking, guest may please ensure that the vehicle is properly locked. Please do not leave any valuables like cash, ornaments, mobiles, documents, etc. in parked vehicle. The management is not responsible for any loss, theft or damage caused to your vehicle by any reason what so ever. The car key is to be deposited at the reception otherwise parking will not be allowed. After checkout parking will not be allowed. Other Govt. car parking lots are nearby."
  },
  {
    id: 10,
    category: "Water & Utilities",
    icon: <Droplets className="w-5 h-5 text-[#c9a227]" />,
    text: "Hot water is supplied to the rooms from 7:00 a.m. to 11:00 a.m. and 6:00 p.m. to 10:00 p.m. only."
  },
  {
    id: 11,
    category: "Power Backup",
    icon: <Clock className="w-5 h-5 text-[#c9a227]" />,
    text: "The hotel does not have electricity backup / generator as power cuts in Shimla are very rare and brief."
  },
  {
    id: 12,
    category: "Prohibitions & Restrictions",
    icon: <Ban className="w-5 h-5 text-[#c9a227]" />,
    text: "Smoking of ‘Hookah’ and consumption of illegal substance / drugs is strictly banned within hotel premises. Accommodation will be refused in case guest is adamant to deposit ‘hookah’ at the reception."
  },
  {
    id: 13,
    category: "Dining & Kitchen Rules",
    icon: <Utensils className="w-5 h-5 text-[#c9a227]" />,
    text: "Food and beverages brought from outside is strictly not allowed within hotel premises. Such food will not be heated; cutlery and crockery will not be provided."
  },
  {
    id: 14,
    category: "Dining & Kitchen Rules",
    icon: <Utensils className="w-5 h-5 text-[#c9a227]" />,
    text: "A La Carte Indian cuisine is available from 7:30 A.M. to 10.30 P.M. After 9:45 P.M. no order for dinner will be accepted. Our kitchen and room service closes at 10:30 P.M."
  },
  {
    id: 15,
    category: "Extra Bedding & Capacity",
    icon: <Bed className="w-5 h-5 text-[#c9a227]" />,
    text: "For extra PAX (adults/children), we do not provide extra bed. Only extra bedding is provided on the floor with one mattress along with one bed sheet, pillow, quilt or blanket. Cots are not available."
  },
  {
    id: 16,
    category: "Extra Bedding & Capacity",
    icon: <Bed className="w-5 h-5 text-[#c9a227]" />,
    text: "No discount is applicable on extra PAX (adults/children) throughout the year. Child above five years will be treated as extra PAX and will be charged extra."
  },
  {
    id: 17,
    category: "Extra Bedding & Capacity",
    icon: <Bed className="w-5 h-5 text-[#c9a227]" />,
    text: "Accommodation booked will be strictly provided as per the bed capacity fixed by H.P. Tourism Department. If the number of PAX (adults/children) exceeds the bed capacity fixed by H.P. Tourism Department, extra PAX will be accommodated in separate accommodation on full room tariff, only possible if the accommodation is available at that time."
  },
  {
    id: 18,
    category: "Mandatory Room Key Deposit",
    icon: <ShieldAlert className="w-5 h-5 text-[#c9a227]" />,
    text: "Hotel is located on restricted road just next to Military area i.e. Army Training Command. As per the advisory issued by HP Tourism Department and Police, for security purpose guests are requested to deposit the room keys at the reception before going out. The keys may also be required by hotel’s housekeeping staff for cleaning or in emergency like short circuit, etc. Guests are advised in their own interest to lock their luggage before leaving the room."
  },
  {
    id: 19,
    category: "Guest Valuables & Loss",
    icon: <ShieldAlert className="w-5 h-5 text-[#c9a227]" />,
    text: "No responsibility whatsoever is accepted for any loss, theft, pilferage, damage to goods, cash, property, etc. of the guests brought to the hotel. Guests are advised in their own interest to deposit their cash and valuables with the G.M. and obtain a proper receipt from him."
  },
  {
    id: 20,
    category: "Electrical Appliances Penalty",
    icon: <AlertTriangle className="w-5 h-5 text-[#c9a227]" />,
    text: "The guests are not permitted to do cooking / heating in their rooms or use their own electrical appliances such as press/iron, room heater/blower, music system, induction cooker, etc. A penalty of Rs. 2500 will be charged directly from the guest in case of any violation."
  },
  {
    id: 21,
    category: "Property Damage",
    icon: <AlertTriangle className="w-5 h-5 text-[#c9a227]" />,
    text: "Every guest is supposed to have checked up the furniture, T.V., linen, bedding and other fittings and fixtures in the room and bathroom prior to occupying the room. All fittings and fixtures are provided brand new in every room and before leaving hotel premises, it is essential that every guest should leave every article in the same condition to the satisfaction of the hotel management. For any damage done to any article by the guest or their visitors due to negligence or otherwise, the guest is responsible to replace or make the payment of its value (when new) including labour charges."
  },
  {
    id: 22,
    category: "Property Damage",
    icon: <AlertTriangle className="w-5 h-5 text-[#c9a227]" />,
    text: "All bedding provided in hotel rooms is purely meant for sleeping & rest and not for eating food and any other purpose. For any stains or dirt marks put on sofa, curtains, mattress, etc. the guest is liable to pay dry cleaning charges for them. For any cigarette burn marks on blankets, mica, sofa, etc., writing on wooden paneling, furniture, walls, etc., stains of paan and shoe polish on curtains, towels, walls, etc., any other kind of disfigurement, full cost of damaged item (when new) will be recovered including labour charges."
  },
  {
    id: 23,
    category: "Visitors Policy",
    icon: <ShieldAlert className="w-5 h-5 text-[#c9a227]" />,
    text: "Guests are requested not to invite outside visitors in the room during their stay. They can use common areas to meet their visitors. All visitors and unregistered guests not staying in the hotel have to leave the hotel premises positively by 10:00 p.m."
  },
  {
    id: 24,
    category: "Service Disruptions",
    icon: <HelpCircle className="w-5 h-5 text-[#c9a227]" />,
    text: "Management will not be answerable/responsible in any case what so ever against inconvenience caused beyond their control if sudden failure of electricity, elevator, cable T.V. network, WiFi, intercom, geyser, water supply, labour unrest, etc. takes place. No discounts or concessions will be given on room charges and food bill under such circumstances."
  },
  {
    id: 25,
    category: "Conduct & Decorum",
    icon: <Ban className="w-5 h-5 text-[#c9a227]" />,
    text: "The guest shall not do or cause to be done any act or activities of illegal, nefarious, immoral, unsocial nature in the hotel premises and the guest will be solely and fully responsible for the same. The guest will not create any nuisance in the hotel premises in any matter what so ever and there should be no disturbance to other guests residing in the hotel."
  },
  {
    id: 26,
    category: "Prohibitions & Restrictions",
    icon: <Ban className="w-5 h-5 text-[#c9a227]" />,
    text: "Guests are requested to observe the prevalent Govt. rules and regulations in respect of registration, alcoholic drinks, fire arms, narcotic drugs, all banned items, smoking areas, etc."
  },
  {
    id: 27,
    category: "Cloak Room",
    icon: <Clock className="w-5 h-5 text-[#c9a227]" />,
    text: "Cloak room facility is available till 9:00 p.m. only for those guests who have checked out the same day. The luggage will be stored in the cloak room without any extra charge, at the guest’s sole risk as to loss or damage from any cause including misplacement. Luggage will not be allowed to be stored beyond 9:00 p.m. on the day of checkout."
  },
  {
    id: 28,
    category: "Rights of Admission",
    icon: <Scale className="w-5 h-5 text-[#c9a227]" />,
    text: "Rights of admission are reserved. The management will take action against the guest if it is noticed that there is any business conducted in the hotel which is doubtful in nature. Occupancy of accommodation and entry into the hotel will be on full understanding that the guests/visitors have agreed to abide by the mentioned rules, regulations and traditions of Brightland Hotel."
  },
  {
    id: 29,
    category: "Rights of Admission",
    icon: <Scale className="w-5 h-5 text-[#c9a227]" />,
    text: "The management reserves to itself the absolute right of admission to any person in the hotel premises, the stay in the hotel permits only accommodation which may be ended and refused at any time by the management without previous notice and without assigning any reason whatsoever and without giving any refund. The guest shall be bound to vacate when requested to do so. In case of default the management will be entitled to make him vacate the room and to remove the luggage and belongings of the visitor from the room occupied by the guest and lock the room."
  },
  {
    id: 30,
    category: "Non-Payment & Assets",
    icon: <Scale className="w-5 h-5 text-[#c9a227]" />,
    text: "The management will have a right to lock the main gate and detain the luggage, belongings and other personal assets of the guests if the payment of bills is not made before leaving the hotel."
  },
  {
    id: 32,
    category: "Energy Conservation",
    icon: <AlertTriangle className="w-5 h-5 text-[#c9a227]" />,
    text: "Guests are requested to switch off all the lights and other electrical gadgets before leaving the room otherwise Rs. 7.00 per point will be charged extra. Also ensure that all taps are properly closed."
  },
  {
    id: 33,
    category: "Drivers & Servants Policy",
    icon: <ShieldAlert className="w-5 h-5 text-[#c9a227]" />,
    text: "Guests servants/drivers, etc. are not permitted to take bedding, etc. from the rooms for their personal use anywhere else."
  },
  {
    id: 34,
    category: "Pets & Wildlife Advisory",
    icon: <Ban className="w-5 h-5 text-[#c9a227]" />,
    text: "Pet animals are strictly not allowed inside the hotel. Please be careful of stray monkeys in and around Shimla. Please keep your windows closed and do not feed or tease the monkeys as they can bite you and even enter the room and damage the hotel’s property and can take away your goods also. The liability will be of the guest if the monkeys damage the hotel’s property."
  },
  {
    id: 35,
    category: "Washing of Clothes Penalty",
    icon: <AlertTriangle className="w-5 h-5 text-[#c9a227]" />,
    text: "Washing of clothes is not permitted, due to acute water shortage in Shimla. Water supply to the room shall be disconnected and Rs. 100.00 per cloth will be charged as penalty if the clothes are washed. Please do not hang string /rope inside the room in any case and do not lay wet clothes on the furniture."
  },
  {
    id: 36,
    category: "Elevator Rules",
    icon: <Ban className="w-5 h-5 text-[#c9a227]" />,
    text: "Luggage is strictly not allowed in the elevator."
  },
  {
    id: 37,
    category: "Legal Jurisdiction",
    icon: <Scale className="w-5 h-5 text-[#c9a227]" />,
    text: "All disputes will be settled in Shimla Courts only, whether by legal action or otherwise."
  },
  {
    id: 38,
    category: "Amendments & Modifications",
    icon: <FileText className="w-5 h-5 text-[#c9a227]" />,
    text: "The management reserves to itself the right to alter, amend, add or delete any of the above rules, regulations and terms and conditions at any time without prior notice and the guest is bound to abide by them."
  },
  {
    id: 39,
    category: "Unconditional Acceptance",
    icon: <FileText className="w-5 h-5 text-[#c9a227]" />,
    text: "Reservation of accommodation is done strictly on the above mentioned terms and conditions only. By making a booking the guest is unconditionally deemed to accept all our hotel rules and regulations and agrees to abide by them."
  }
];

const categories = [
  "All Categories",
  ...Array.from(new Set(termsAndConditions.map((item) => item.category)))
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

import PageHeaderBanner from "@/components/PageHeaderBanner";

export default function PolicyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredTerms = termsAndConditions.filter((item) => {
    const matchesSearch = 
      item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `rule ${item.id}`.includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All Categories" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div 
      className="bg-[#faf8f0] bg-cover bg-top bg-no-repeat min-h-screen pb-24"
      style={{ backgroundImage: "url('/assets/longbg.png')" }}
    >
      
      <PageHeaderBanner
        tagline="Official Guidelines"
        title="Hotel Policy & Terms"
        description="All official rules, regulations, and guest policies of Brightland Hotel Shimla. Please review carefully for a seamless stay."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Search & Filter Controls Container */}
        <div className="bg-[#faf8f0] rounded-md p-4 md:p-6 shadow-lg border border-[#c9a227]/35 mb-10 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#c9a227]" />
            <input
              type="text"
              placeholder="Search by keyword, rule #, or policy (e.g. check-in, parking, hookah)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#faf8f0] border border-[#c9a227]/30 rounded-md text-sm text-brand-green-950 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] transition-all font-medium"
            />
          </div>

          <div className="w-full md:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-[#faf8f0] border border-[#c9a227]/30 rounded-md text-sm font-semibold text-brand-green-900 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] transition-all cursor-pointer"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Policy Count Badge */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs sm:text-sm font-semibold text-brand-green-900 uppercase tracking-wider">
            Showing <span className="text-[#c9a227] font-bold">{filteredTerms.length}</span> of {termsAndConditions.length} Official Terms
          </p>
          {(searchQuery || selectedCategory !== "All Categories") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}
              className="text-xs text-[#c9a227] font-bold uppercase tracking-wider hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Terms Grid List - Formatted with Rooms Page Card System */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredTerms.map((term) => (
            <motion.div 
              key={term.id}
              variants={cardVariants}
              className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-6 sm:p-7 shadow-md border border-[#c9a227]/25 hover:border-[#c9a227]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-[#c9a227]/20 pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-brand-green-950/90 border border-[#c9a227]/40 flex items-center justify-center shadow-sm">
                      {term.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a227]">
                      {term.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 bg-brand-green-950 text-[#c9a227] border border-[#c9a227]/40 rounded-sm uppercase tracking-wider shadow-sm">
                    Rule #{term.id}
                  </span>
                </div>

                <p className="text-[#3a4a40] text-xs sm:text-sm leading-relaxed font-medium">
                  {term.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredTerms.length === 0 && (
          <div className="bg-[#faf8f0] rounded-md p-12 text-center border border-[#c9a227]/35 my-8 shadow-lg">
            <HelpCircle className="w-12 h-12 text-[#c9a227] mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-brand-green-900 mb-1">No matching terms found</h3>
            <p className="text-sm text-[#3a4a40] mb-6">Try searching with a different term or reset your category filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}
              className="bg-brand-green-900 hover:bg-brand-green-950 text-brand-yellow-50 hover:text-[#c9a227] text-xs font-semibold px-6 py-3 rounded-md uppercase tracking-widest border border-[#c9a227]/40 hover:border-[#c9a227] transition-all shadow-md"
            >
              Show All Official Terms
            </button>
          </div>
        )}

        {/* Management Footer Sign-off */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-brand-green-950 text-white rounded-md p-8 sm:p-10 text-center border border-[#c9a227]/40 shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-serif text-[#c9a227] mb-2 tracking-tight">
            Brightland Hotel Management
          </h3>
          <p className="text-xs sm:text-sm text-brand-yellow-50/90 max-w-2xl mx-auto leading-relaxed font-medium">
            By making a reservation at Brightland Hotel Shimla, all guests agree unconditionally to adhere to the above rules and regulations.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
