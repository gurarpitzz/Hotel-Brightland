"use client";

import { useBooking, RoomCategory } from "@/context/BookingContext";
import { X, Calendar as CalendarIcon, Users, CreditCard, ChevronDown, AlertCircle, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { format, parseISO } from "date-fns";
import React, { useState } from "react";
import Link from "next/link";

const termsAndConditions = [
  "Check-in / checkout time is 12:00 noon. Early Check in: Check in before 6:00 A.M. will be charged for 01 additional day. Check in after 6:00 A.M. will be charged 50% of room tariff (subject to availability). Late checkout: Check out after 6:00 P.M. will be charged for 01 additional day. Checkout between 12:00 noon and 6:00 P.M. will be charged 50% of room tariff. (subject to availability).",
  "Stag entry is not allowed in our Hotel and such bookings will not be entertained.",
  "All Indian nationals must carry their aadhaar card / passport / driving licence in original as ID Proof. All foreign nationals must carry passport, visa and other travel documents in original as per govt. rules. Without valid ID proof accommodation will be refused.",
  "All reservations from Brightland Hotel are confirmed irrevocably for the period specified and guests are liable for entire period irrespective of late arrival, early departure or ‘No Show’. Accommodation will be booked on ‘first come first reserved’ basis.",
  "In case of ‘No Show’, payment received will not be refunded / adjusted under any circumstances what so ever and the payment received will be treated as Reservation Fee / Retention Charges as the case may deem fit.",
  "Please note that allotted room on arrival day may differ in colour of curtains, shape of headrest, ambiance and décor of room as shown in the images on our website as it is difficult to upload the image of each and every room of each category. All our rooms are different in décor and ambiance. Room category and facilities will be same as booked. Kindly note that location and floor is not committed at the time of booking, it is strictly subject to availability at the time of arrival.",
  "Electric kettle and complementary packaged drinking water bottles are not provided in the rooms. Drinking water from water filter is provided in the rooms by our room service.",
  "Room heater/blower is provided in the rooms during winter months at an extra charge.",
  "The car parking facility within hotel premises is subject to availability and is provided on ‘first come first reserved’ basis. Allotment and booking of accommodation doesn’t confirm that parking facility will be provided within hotel premises. Parking of hotel guests vehicles is at owners risk. After parking, guest may please ensure that the vehicle is properly locked. Please do not leave any valuables like cash, ornaments, mobiles, documents, etc. in parked vehicle. The management is not responsible for any loss, theft or damage caused to your vehicle by any reason what so ever. The car key is to be deposited at the reception otherwise parking will not be allowed. After checkout parking will not be allowed. Other Govt. car parking lots are nearby.",
  "Hot water is supplied to the rooms from 7:00 a.m. to 11:00 a.m. and 6:00 p.m. to 10:00 p.m. only.",
  "The hotel does not have electricity backup / generator as power cuts in Shimla are very rare and brief.",
  "Smoking of ‘Hookah’ and consumption of illegal substance / drugs is strictly banned within hotel premises. Accommodation will be refused in case guest is adamant to deposit ‘hookah’ at the reception.",
  "Food and beverages brought from outside is strictly not allowed within hotel premises. Such food will not be heated; cutlery and crockery will not be provided.",
  "All the guests who have booking on C.P. (room + breakfast) / M.A.P. (room + breakfast + choice of lunch or dinner), meals as per our fixed menu will be provided. The guests who have their reservation on M.A.P. are requested to place their order before 9:45 P.M. After 9:45 P.M. no order for dinner will be accepted. Our kitchen and room service closes at 10:30 P.M. Guests arriving late in the night after 9:45 P.M. can take their dinner on the way. Hotel will provide lunch on next day in lieu of dinner. Buffet layout in the restaurant is subject to occupancy of rooms in the hotel and meals will be served as per fixed menu decided by the Management.",
  "For extra PAX (adults/children), we do not provide extra bed. Only extra bedding is provided on the floor with one mattress along with one bed sheet, pillow, quilt or blanket. Cots are not available.",
  "No discount is applicable on extra PAX (adults/children) throughout the year. Child above five years will be treated as extra PAX and will be charged extra.",
  "Accommodation booked will be strictly provided as per the bed capacity fixed by H.P. Tourism Department. If the number of PAX (adults/children) exceeds the bed capacity fixed by H.P. Tourism Department, extra PAX will be accommodated in separate accommodation on full room tariff, only possible if the accommodation is available at that time.",
  "Hotel is located on restricted road just next to Military area i.e. Army Training Command. As per the advisory issued by HP Tourism Department and Police, for security purpose guests are requested to deposit the room keys at the reception before going out. The keys may also be required by hotel’s housekeeping staff for cleaning or in emergency like short circuit, etc. Guests are advised in their own interest to lock their luggage before leaving the room.",
  "No responsibility whatsoever is accepted for any loss, theft, pilferage, damage to goods, cash, property, etc. of the guests brought to the hotel. Guests are advised in their own interest to deposit their cash and valuables with the G.M. and obtain a proper receipt from him.",
  "The guests are not permitted to do cooking / heating in their rooms or use their own electrical appliances such as press/iron, room heater/blower, music system, induction cooker, etc. A penalty of Rs. 2500.00 will be charged directly from the guest in case of any violation.",
  "Every guest is supposed to have checked up the furniture, T.V., linen, bedding and other fittings and fixtures in the room and bathroom prior to occupying the room. All fittings and fixtures are provided brand new in every room and before leaving hotel premises, it is essential that every guest should leave every article in the same condition to the satisfaction of the hotel management. For any damage done to any article by the guest or their visitors due to negligence or otherwise, the guest is responsible to replace or make the payment of its value (when new) including labour charges.",
  "All bedding provided in hotel rooms is purely meant for sleeping & rest and not for eating food and any other purpose. For any stains or dirt marks put on sofa, curtains, mattress, etc. the guest is liable to pay dry cleaning charges for them. For any cigarette burn marks on blankets, mica, sofa, etc., writing on wooden paneling, furniture, walls, etc., stains of paan and shoe polish on curtains, towels, walls, etc., any other kind of disfigurement, full cost of damaged item (when new) will be recovered including labour charges.",
  "Guests are requested not to invite outside visitors in the room during their stay. They can use common areas to meet their visitors. All visitors and unregistered guests not staying in the hotel have to leave the hotel premises positively by 10:00 p.m.",
  "Management will not be answerable/responsible in any case what so ever against inconvenience caused beyond their control if sudden failure of electricity, elevator, cable T.V. network, intercom, geyser, water supply, labour unrest, etc. takes place. No discounts or concessions will be given on room charges and food bill under such circumstances.",
  "The guest shall not do or cause to be done any act or activities of illegal, nefarious, immoral, unsocial nature in the hotel premises and the guest will be solely and fully responsible for the same. The guest will not create any nuisance in the hotel premises in any matter what so ever and there should be no disturbance to other guests residing in the hotel.",
  "Guests are requested to observe the prevalent Govt. rules and regulations in respect of registration, alcoholic drinks, fire arms, narcotic drugs, all banned items, smoking areas, etc.",
  "Cloak room facility is available till 9:00 p.m. only for those guests who have checked out the same day. The luggage will be stored in the cloak room without any extra charge, at the guest’s sole risk as to loss or damage from any cause including misplacement. Luggage will not be allowed to be stored beyond 9:00 p.m. on the day of checkout.",
  "Rights of admission are reserved. The management will take action against the guest if it is noticed that there is any business conducted in the hotel which is doubtful in nature. Occupancy of accommodation and entry into the hotel will be on full understanding that the guests/visitors have agreed to abide by the mentioned rules, regulations and traditions of Brightland Hotel.",
  "The management reserves to itself the absolute right of admission to any person in the hotel premises, the stay in the hotel permits only accommodation which may be ended and refused at any time by the management without previous notice and without assigning any reason whatsoever and without giving any refund. The guest shall be bound to vacate when requested to do so. In case of default the management will be entitled to make him vacate the room and to remove the luggage and belongings of the visitor from the room occupied by the guest and lock the room.",
  "The management will have a right to lock the main gate and detain the luggage, belongings and other personal assets of the guests if the payment of bills is not made before leaving the hotel.",
  "WIFI connectivity is limited to hotel reception lobby and restaurant area. WIFI is not available in the rooms.",
  "Guests are requested to switch off all the lights and other electrical gadgets before leaving the room otherwise Rs. 7.00 per point will be charged extra. Also ensure that all taps are properly closed.",
  "Guests servants/drivers, etc. are not permitted to take bedding, etc. from the rooms for their personal use anywhere else.",
  "Pet animals are strictly not allowed inside the hotel. Please be careful of stray monkeys in and around Shimla. Please keep your windows closed and do not feed or tease the monkeys as they can bite you and even enter the room and damage the hotel’s property and can take away your goods also. The liability will be of the guest if the monkeys damage the hotel’s property.",
  "Washing of clothes is not permitted, due to acute water shortage in Shimla. Water supply to the room shall be disconnected and Rs. 100.00 per cloth will be charged as penalty if the clothes are washed. Please do not hang string /rope inside the room in any case and do not lay wet clothes on the furniture.",
  "Luggage is strictly not allowed in the elevator.",
  "All disputes will be settled in Shimla Courts only, whether by legal action or otherwise.",
  "The management reserves to itself the right to alter, amend, add or delete any of the above rules, regulations and terms and conditions at any time without prior notice and the guest is bound to abide by them.",
  "Reservation of accommodation is done strictly on the above mentioned terms and conditions only. By making a booking the guest is unconditionally deemed to accept all our hotel rules and regulations and agrees to abide by them."
];

export default function BookingCart() {
  const {
    booking,
    setBooking,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    updateItemGuests,
    calculateTotal,
    generateWhatsAppLink,
  } = useBooking();

  const calc = calculateTotal();
  const [isTCOpen, setIsTCOpen] = useState(false);
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? parseISO(e.target.value) : null;
    setBooking((prev) => ({ ...prev, checkIn: newDate }));
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? parseISO(e.target.value) : null;
    setBooking((prev) => ({ ...prev, checkOut: newDate }));
  };

  const hasItems = booking.items.length > 0;
  const hasDates = !!booking.checkIn && !!booking.checkOut;
  const hasGuestName = !!booking.guestName?.trim();

  const isCheckoutDisabled =
    !hasItems || !hasDates || !hasGuestName || !isAgreedToTerms;

  const getCheckoutDisabledMessage = () => {
    if (!hasItems) return "Your reservation cart is empty";
    if (!hasDates) return "Please select Check-in and Check-out dates";
    if (!hasGuestName) return "Please enter your full name";
    if (!isAgreedToTerms) return "Please accept Hotel Rules & Terms below";
    return "Please complete all required fields";
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 overflow-hidden"
        data-analytics-event="begin_checkout"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-brand-green-950/60 backdrop-blur-sm transition-opacity"
        />

        {/* Slide-over panel */}
        <div className="fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-10">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-screen max-w-lg"
          >
            <div className="flex h-full flex-col bg-[#faf8f0] shadow-2xl border-l-4 border-brand-green-700">
              {/* Drawer Header */}
              <div className="px-5 py-5 sm:px-6 bg-white border-b border-brand-green-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-green-50 border border-brand-green-200 flex items-center justify-center text-brand-green-800">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-brand-green-950 font-serif tracking-wide">
                      Your Reservation Cart
                    </h2>
                    <p className="text-xs text-gray-500">
                      {calc.totalRooms > 0
                        ? `${calc.totalRooms} Room${calc.totalRooms > 1 ? "s" : ""} Selected`
                        : "No rooms added yet"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-gray-500 hover:text-brand-green-900 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Main Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 space-y-6">
                {/* Section 1: Guest Info & Stay Dates */}
                <div className="rounded-2xl border border-brand-green-200/80 bg-white p-5 shadow-sm space-y-4">
                  {/* Primary Guest Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-green-950 mb-1.5 flex items-center gap-1.5">
                      <Users size={14} className="text-[#c9a227]" />
                      Primary Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-brand-green-600 focus:border-brand-green-600 outline-none"
                      value={booking.guestName || ""}
                      onChange={(e) =>
                        setBooking((prev) => ({ ...prev, guestName: e.target.value }))
                      }
                    />
                  </div>

                  {/* Dates Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-green-950 mb-1.5 flex items-center gap-1.5">
                      <CalendarIcon size={14} className="text-[#c9a227]" />
                      Stay Dates *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="block text-[11px] font-semibold text-gray-600 mb-1">
                          Check-in
                        </span>
                        <input
                          type="date"
                          className="w-full border border-gray-300 rounded-lg p-2 text-xs text-gray-900 focus:ring-2 focus:ring-brand-green-600 outline-none"
                          value={
                            booking.checkIn ? format(booking.checkIn, "yyyy-MM-dd") : ""
                          }
                          onChange={handleCheckInChange}
                        />
                      </div>
                      <div>
                        <span className="block text-[11px] font-semibold text-gray-600 mb-1">
                          Check-out
                        </span>
                        <input
                          type="date"
                          className="w-full border border-gray-300 rounded-lg p-2 text-xs text-gray-900 focus:ring-2 focus:ring-brand-green-600 outline-none"
                          value={
                            booking.checkOut ? format(booking.checkOut, "yyyy-MM-dd") : ""
                          }
                          onChange={handleCheckOutChange}
                        />
                      </div>
                    </div>
                    {calc.nights > 0 && (
                      <p className="text-xs text-brand-green-800 font-semibold bg-brand-green-50/80 border border-brand-green-200 mt-2 px-3 py-1 rounded-md inline-block">
                        {calc.nights} Night{calc.nights > 1 ? "s" : ""} Stay
                      </p>
                    )}
                  </div>
                </div>

                {/* Section 2: Selected Rooms (Cart Items) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-green-950">
                      Selected Rooms ({booking.items.length})
                    </h3>
                    <Link
                      href="/rooms"
                      onClick={() => setIsCartOpen(false)}
                      className="text-xs font-bold text-[#9e7c15] hover:underline flex items-center gap-1"
                    >
                      + Add Another Room
                    </Link>
                  </div>

                  {!hasItems ? (
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center space-y-3">
                      <ShoppingBag className="mx-auto h-10 w-10 text-gray-300" />
                      <p className="text-sm font-semibold text-gray-600">
                        Your reservation cart is currently empty.
                      </p>
                      <Link
                        href="/rooms"
                        onClick={() => setIsCartOpen(false)}
                        className="inline-block bg-brand-green-900 text-brand-yellow-50 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-brand-green-950 transition-colors shadow-sm"
                      >
                        Explore Rooms & Suites
                      </Link>
                    </div>
                  ) : (
                    calc.itemsBreakdown.map(
                      ({
                        item,
                        itemExtraBeds,
                        itemRoomCharges,
                        itemExtraBedCharges,
                        itemTotal,
                        isOverCapacity,
                      }) => (
                        <div
                          key={item.id}
                          className="rounded-2xl border border-brand-green-200/80 bg-white p-4 shadow-sm space-y-3 relative overflow-hidden"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-brand-green-950 text-sm sm:text-base font-serif">
                                {item.roomName}
                              </h4>
                              <p className="text-xs text-gray-600">
                                ₹{item.baseRatePerRoom.toLocaleString("en-IN")} / night
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remove ${item.roomName} from reservation`}
                              className="text-gray-400 hover:text-red-600 transition-colors p-1 rounded-md hover:bg-red-50"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          {/* Room Quantity Controls */}
                          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                            <span className="text-xs font-semibold text-gray-700">
                              Number of Rooms:
                            </span>
                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                aria-label={`Decrease ${item.roomName} quantity`}
                                className="p-1.5 text-gray-600 hover:text-brand-green-900 hover:bg-gray-200 transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="px-3 text-xs font-bold text-brand-green-950">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                aria-label={`Increase ${item.roomName} quantity`}
                                className="p-1.5 text-gray-600 hover:text-brand-green-900 hover:bg-gray-200 transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>

                          {/* Guest Capacity for this room item */}
                          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                            <div>
                              <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                                Adults
                              </label>
                              <input
                                type="number"
                                min="1"
                                className="w-full border border-gray-300 rounded-md p-1.5 text-xs text-gray-900 focus:ring-brand-green-500 focus:border-brand-green-500"
                                value={item.adults}
                                onChange={(e) =>
                                  updateItemGuests(
                                    item.id,
                                    parseInt(e.target.value) || 1,
                                    item.children
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                                Children (5+ yrs)
                              </label>
                              <input
                                type="number"
                                min="0"
                                className="w-full border border-gray-300 rounded-md p-1.5 text-xs text-gray-900 focus:ring-brand-green-500 focus:border-brand-green-500"
                                value={item.children}
                                onChange={(e) =>
                                  updateItemGuests(
                                    item.id,
                                    item.adults,
                                    parseInt(e.target.value) || 0
                                  )
                                }
                              />
                            </div>
                          </div>

                          {/* Item Capacity Warning & Extra Bed calculation */}
                          {isOverCapacity ? (
                            <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 text-[11px] text-red-800">
                              <AlertCircle size={15} className="shrink-0 mt-0.5" />
                              <span>
                                Guest count ({item.adults + item.children}) exceeds max capacity for {item.quantity} {item.roomName}. Please add another room.
                              </span>
                            </div>
                          ) : itemExtraBeds > 0 ? (
                            <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200">
                              Requires <strong>{itemExtraBeds} Extra Bed</strong> (@ ₹900/night).
                            </p>
                          ) : null}

                          {/* Item Subtotal Calculation */}
                          <div className="flex justify-between items-center text-xs font-bold text-brand-green-950 pt-2 border-t border-gray-100">
                            <span>Item Subtotal ({calc.nights || 1} Night{calc.nights > 1 ? "s" : ""})</span>
                            <span>₹{itemTotal.toLocaleString("en-IN")}</span>
                          </div>
                        </div>
                      )
                    )
                  )}
                </div>

                {/* Section 3: Summary Pricing Breakdown */}
                {hasItems && (
                  <div className="rounded-2xl border border-brand-green-200/80 bg-white p-5 shadow-sm space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-green-950 flex items-center gap-1.5">
                      <CreditCard size={14} className="text-[#c9a227]" />
                      Estimated Summary Charges
                    </h3>
                    <div className="space-y-2 text-xs text-gray-700">
                      <div className="flex justify-between">
                        <span>Total Rooms</span>
                        <span className="font-semibold text-gray-900">{calc.totalRooms}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Guests</span>
                        <span className="font-semibold text-gray-900">
                          {calc.totalAdults} Adults
                          {calc.totalChildren > 0 ? `, ${calc.totalChildren} Child (5+)` : ""}
                        </span>
                      </div>
                      {calc.totalExtraBeds > 0 && (
                        <div className="flex justify-between">
                          <span>Total Extra Beds</span>
                          <span className="font-semibold text-amber-800">
                            {calc.totalExtraBeds} Bed{calc.totalExtraBeds > 1 ? "s" : ""}
                          </span>
                        </div>
                      )}
                      <div className="border-t border-gray-100 pt-2 flex justify-between">
                        <span>Room Charges</span>
                        <span className="font-semibold">
                          ₹{calc.estimatedRoomCharges.toLocaleString("en-IN")}
                        </span>
                      </div>
                      {calc.estimatedExtraBedCharges > 0 && (
                        <div className="flex justify-between text-amber-800">
                          <span>Extra Bed Charges</span>
                          <span className="font-semibold">
                            ₹{calc.estimatedExtraBedCharges.toLocaleString("en-IN")}
                          </span>
                        </div>
                      )}
                      <div className="border-t border-gray-200 pt-2 flex justify-between text-base font-bold text-brand-green-950">
                        <span>Grand Estimated Total</span>
                        <span className="text-brand-green-800">
                          ₹{calc.grandTotal.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 4: Terms Accordion & Mandatory Checkbox */}
                {hasItems && (
                  <div className="rounded-2xl border border-brand-green-200/80 bg-white p-5 shadow-sm">
                    <button
                      type="button"
                      onClick={() => setIsTCOpen(!isTCOpen)}
                      className="flex items-center justify-between w-full text-left text-xs font-bold text-gray-800 uppercase tracking-wider hover:text-brand-green-800 transition-colors"
                    >
                      <span>Hotel Rules & Terms & Conditions</span>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          isTCOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isTCOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 text-xs text-gray-700 border border-gray-300 rounded-xl p-3.5 bg-gray-50 leading-relaxed max-h-56 overflow-y-auto space-y-3 shadow-inner">
                            <p className="font-semibold text-brand-green-900 text-xs border-b border-gray-200 pb-2">
                              Please scroll through and review all hotel rules and regulations:
                            </p>
                            <ol className="list-decimal pl-4 space-y-2.5">
                              {termsAndConditions.map((term, index) => (
                                <li
                                  key={index}
                                  className="pl-1 text-[11px] text-gray-700 leading-normal"
                                >
                                  {term}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mandatory Checkbox */}
                    <label className="flex items-start gap-3 mt-4 p-3.5 bg-amber-50 border border-amber-200 rounded-xl cursor-pointer select-none hover:bg-amber-100/80 transition-colors">
                      <input
                        type="checkbox"
                        checked={isAgreedToTerms}
                        onChange={(e) => setIsAgreedToTerms(e.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-gray-400 text-brand-green-700 focus:ring-brand-green-500 cursor-pointer shrink-0"
                      />
                      <span className="text-xs font-semibold text-gray-900 leading-snug">
                        I have read, understood, and accept all{" "}
                        <strong className="font-bold text-brand-green-900">
                          Hotel Rules & Terms and Conditions
                        </strong>
                        .
                      </span>
                    </label>
                  </div>
                )}

                {/* Section 5: WhatsApp Action Button */}
                <div className="pb-6">
                  {isCheckoutDisabled ? (
                    <div className="flex items-center justify-center rounded-xl border border-red-700 bg-red-600 px-4 py-4 text-xs font-bold text-white cursor-not-allowed text-center leading-snug shadow-md">
                      <AlertCircle className="w-4 h-4 mr-2 shrink-0 inline-block text-white" />
                      <span>{getCheckoutDisabledMessage()}</span>
                    </div>
                  ) : (
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-event="whatsapp_booking_click"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          (window as any).dataLayer = (window as any).dataLayer || [];
                          (window as any).dataLayer.push({
                            event: "whatsapp_booking_click",
                          });
                        }
                      }}
                      className="flex items-center justify-center rounded-xl border border-transparent bg-brand-green-800 px-4 py-4 text-sm font-bold text-white shadow-lg hover:bg-brand-green-900 transition-all transform hover:scale-[1.02] text-center leading-snug"
                    >
                      Continue to WhatsApp to Book Room &rarr;
                    </a>
                  )}

                  <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="font-medium text-brand-green-700 hover:text-brand-green-600"
                    >
                      Continue Browsing &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
