"use client";

import { useBooking } from "@/context/BookingContext";
import { X, Calendar as CalendarIcon, Users, CreditCard, ChevronDown, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { format, parseISO } from "date-fns";
import React, { useState } from "react";
import Link from "next/link";

export default function BookingCart() {
  const { booking, setBooking, isCartOpen, setIsCartOpen, calculateTotal, generateWhatsAppLink } = useBooking();
  const { nights, roomsRequired, extraBeds, baseRatePerRoom, roomCharges, extraBedCharges, total } = calculateTotal();
  const [isTCOpen, setIsTCOpen] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? parseISO(e.target.value) : null;
    setBooking((prev) => ({ ...prev, checkIn: newDate }));
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? parseISO(e.target.value) : null;
    setBooking((prev) => ({ ...prev, checkOut: newDate }));
  };

  const isCheckoutDisabled = booking.adults < 1 || !booking.guestName?.trim();

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

                      {/* Guest Name */}
                      <div className="mb-6 border-b border-gray-100 pb-4 flex items-start space-x-3">
                        <Users className="text-brand-green-700 mt-1" size={20} />
                        <div className="w-full">
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Primary Guest</h3>
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                            <input 
                              type="text" 
                              required
                              placeholder="Enter your name"
                              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 focus:ring-brand-green-500 focus:border-brand-green-500"
                              value={booking.guestName || ""}
                              onChange={(e) => setBooking(prev => ({ ...prev, guestName: e.target.value }))}
                            />
                          </div>
                        </div>
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
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 focus:ring-brand-green-500 focus:border-brand-green-500"
                                value={booking.checkIn ? format(booking.checkIn, "yyyy-MM-dd") : ""}
                                onChange={handleCheckInChange}
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1">Check-out</label>
                              <input 
                                type="date" 
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 focus:ring-brand-green-500 focus:border-brand-green-500"
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
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 focus:ring-brand-green-500 focus:border-brand-green-500"
                                value={booking.adults}
                                onChange={(e) => setBooking(prev => ({ ...prev, adults: parseInt(e.target.value) || 0 }))}
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1">Children (5+ yrs)</label>
                              <input 
                                type="number" 
                                min="0"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 focus:ring-brand-green-500 focus:border-brand-green-500"
                                value={booking.children}
                                onChange={(e) => setBooking(prev => ({ ...prev, children: parseInt(e.target.value) || 0 }))}
                              />
                            </div>
                          </div>
                          <p className="text-[10px] text-gray-500 mt-2 italic">Children below 5 years stay free without an extra bed.</p>
                        </div>
                      </div>

                      {/* Pricing Breakdown */}
                      <div className="flex items-start space-x-3">
                        <CreditCard className="text-brand-green-700 mt-1" size={20} />
                        <div className="w-full">
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Estimated Charges</h3>
                          {booking.roomType && booking.adults >= 1 ? (
                            <div className="bg-gray-50 rounded-lg p-3 w-full border border-gray-100">
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Rooms Required</span>
                                <span className="font-medium text-gray-900">{roomsRequired}</span>
                              </div>
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Extra Beds Required</span>
                                <span className="font-medium text-gray-900">{extraBeds}</span>
                              </div>
                              <div className="my-2 border-t border-gray-200"></div>
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Room Charges</span>
                                <span>₹{roomCharges}</span>
                              </div>
                              {extraBedCharges > 0 && (
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                  <span>Extra Bed Charges</span>
                                  <span>₹{extraBedCharges}</span>
                                </div>
                              )}
                              <div className="flex justify-between text-lg font-bold text-brand-green-900 pt-2 border-t border-gray-200 mt-2">
                                <span>Total Estimate</span>
                                <span>₹{total}</span>
                              </div>
                            </div>
                          ) : (
                            <p className="text-sm text-red-500 italic">Please select a room and at least 1 adult to see pricing.</p>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Footer */}
              <div className="border-t border-brand-green-200 bg-white px-4 py-6 sm:px-6">
                           {/* Terms & Conditions Box with Direct Redirection */}
                <div className="mb-5 border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Booking Terms & Conditions
                    </span>
                    <Link
                      href="/terms"
                      target="_blank"
                      onClick={() => setIsCartOpen(false)}
                      className="text-xs font-bold text-brand-green-700 hover:text-brand-green-900 underline flex items-center gap-1"
                    >
                      <span>Read Full Terms</span>
                      <ExternalLink size={13} />
                    </Link>
                  </div>

                  <div className="text-xs text-gray-700 border border-gray-200 rounded-xl p-3.5 bg-gray-50 leading-relaxed space-y-2 shadow-inner">
                    <p><strong>1. Deposit:</strong> Advance deposit required to confirm booking.</p>
                    <p><strong>2. Check-In / Out:</strong> Check-in 1:00 PM | Check-out 11:00 AM.</p>
                    <p><strong>3. Cancellation:</strong> Full refund if cancelled 7+ days before arrival.</p>

                    <div className="pt-2 border-t border-gray-200">
                      <Link
                        href="/terms"
                        target="_blank"
                        onClick={() => setIsCartOpen(false)}
                        className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-brand-green-800 bg-brand-yellow-100 hover:bg-brand-yellow-200 py-2.5 px-3 rounded-lg transition-colors border border-brand-yellow-300"
                      >
                        <span>Click here to view full Terms & Conditions</span>
                        <ExternalLink size={14} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  {isCheckoutDisabled ? (
                    <div className="flex items-center justify-center rounded-xl border border-transparent bg-gray-300 px-4 py-4 text-sm font-bold text-gray-500 cursor-not-allowed text-center leading-snug">
                      {booking.adults < 1 ? "At least one adult is required to book" : "Please enter your full name"}
                    </div>
                  ) : (
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-xl border border-transparent bg-brand-green-700 px-4 py-4 text-sm font-bold text-white shadow-lg hover:bg-brand-green-800 transition-all transform hover:scale-[1.02] text-center leading-snug"
                    >
                      Continue to WhatsApp to Book Room &rarr;
                    </a>
                  )}
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
