"use client";

import { useBooking } from "@/context/BookingContext";
import { X, Calendar as CalendarIcon, Users, CreditCard } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { format, parseISO } from "date-fns";
import React from "react";

export default function BookingCart() {
  const { booking, setBooking, isCartOpen, setIsCartOpen, calculateTotal, generateWhatsAppLink } = useBooking();
  const { nights, total, baseRate } = calculateTotal();

  if (!isCartOpen) return null;

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? parseISO(e.target.value) : null;
    setBooking((prev) => ({ ...prev, checkIn: newDate }));
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? parseISO(e.target.value) : null;
    setBooking((prev) => ({ ...prev, checkOut: newDate }));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-brand-green-900/60 backdrop-blur-sm transition-opacity"
        />

        {/* Slide-over panel */}
        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-screen max-w-md"
          >
            <div className="flex h-full flex-col overflow-y-scroll bg-brand-yellow-50 shadow-xl border-l-4 border-brand-green-700">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-bold text-brand-green-900 font-cursive tracking-wider">
                    Your Booking
                  </h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="relative -m-2 p-2 text-brand-green-800 hover:text-brand-green-900"
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close panel</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <div className="rounded-xl border border-brand-green-200 bg-white p-6 shadow-sm">
                      {/* Room Type */}
                      <div className="mb-6 border-b border-gray-100 pb-4">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Room Selected</h3>
                        <p className="text-xl font-bold text-brand-green-800 capitalize">
                          {booking.roomType ? `${booking.roomType} Room` : "No Room Selected"}
                        </p>
                      </div>

                      {/* Dates with Inputs */}
                      <div className="mb-6 border-b border-gray-100 pb-4 flex items-start space-x-3">
                        <CalendarIcon className="text-brand-green-700 mt-1" size={20} />
                        <div className="w-full">
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Stay Dates</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1">Check-in</label>
                              <input 
                                type="date" 
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-brand-green-500 focus:border-brand-green-500"
                                value={booking.checkIn ? format(booking.checkIn, "yyyy-MM-dd") : ""}
                                onChange={handleCheckInChange}
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1">Check-out</label>
                              <input 
                                type="date" 
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-brand-green-500 focus:border-brand-green-500"
                                value={booking.checkOut ? format(booking.checkOut, "yyyy-MM-dd") : ""}
                                onChange={handleCheckOutChange}
                              />
                            </div>
                          </div>
                          {nights > 0 && (
                            <p className="text-sm text-brand-green-700 mt-3 font-medium bg-brand-green-50 inline-block px-2 py-0.5 rounded">
                              {nights} Night{nights > 1 ? 's' : ''} Stay
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Guests with Inputs */}
                      <div className="mb-6 border-b border-gray-100 pb-4 flex items-start space-x-3">
                        <Users className="text-brand-green-700 mt-1" size={20} />
                        <div className="w-full">
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Guests</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1">Adults</label>
                              <input 
                                type="number" 
                                min="1"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-brand-green-500 focus:border-brand-green-500"
                                value={booking.adults}
                                onChange={(e) => setBooking(prev => ({ ...prev, adults: parseInt(e.target.value) || 1 }))}
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1">Children</label>
                              <input 
                                type="number" 
                                min="0"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-brand-green-500 focus:border-brand-green-500"
                                value={booking.children}
                                onChange={(e) => setBooking(prev => ({ ...prev, children: parseInt(e.target.value) || 0 }))}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pricing Breakdown */}
                      <div className="flex items-start space-x-3">
                        <CreditCard className="text-brand-green-700 mt-1" size={20} />
                        <div className="w-full">
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Pricing Estimate</h3>
                          {booking.roomType ? (
                            <div className="bg-gray-50 rounded-lg p-3 w-full border border-gray-100">
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Base Rate (per night)</span>
                                <span>₹{baseRate}</span>
                              </div>
                              <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Nights</span>
                                <span>x {nights}</span>
                              </div>
                              <div className="flex justify-between text-lg font-bold text-brand-green-900 pt-2 border-t border-gray-200 mt-2">
                                <span>Total Estimate</span>
                                <span>₹{total}</span>
                              </div>
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500 italic">Select a room to see pricing.</p>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Footer */}
              <div className="border-t border-brand-green-200 bg-white px-4 py-6 sm:px-6">
                
                {/* Scrollable Terms & Conditions Box */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wider">Terms & Conditions</h4>
                  <div className="h-28 overflow-y-auto text-[11px] text-gray-600 border border-gray-200 rounded-lg p-3 bg-gray-50 leading-relaxed shadow-inner">
                    <p className="mb-2"><strong>1. Booking & Deposit:</strong> A minimum advance deposit is required to confirm your booking. The remaining balance must be paid upon check-in.</p>
                    <p className="mb-2"><strong>2. Check-In & Check-Out:</strong> Standard check-in time is 1:00 PM and check-out is 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional charges.</p>
                    <p className="mb-2"><strong>3. Cancellation Policy:</strong> Cancellations made 7 days prior to arrival will receive a full refund. Cancellations made within 7 days are non-refundable.</p>
                    <p className="mb-2"><strong>4. Identification:</strong> All guests (including children) must present a valid government-issued ID upon arrival.</p>
                    <p><strong>5. Damages:</strong> Any damages to hotel property caused by the guest will be billed directly to the guest's account.</p>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl border border-transparent bg-brand-green-700 px-4 py-4 text-sm font-bold text-white shadow-lg hover:bg-brand-green-800 transition-all transform hover:scale-[1.02] text-center leading-snug"
                  >
                    Read all terms and conditions continue to chat to Book Room
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="font-medium text-brand-green-700 hover:text-brand-green-600"
                    >
                      Continue Browsing
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
