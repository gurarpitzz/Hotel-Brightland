"use client";

import { useBooking } from "@/context/BookingContext";
import { X, Calendar as CalendarIcon, Users, CreditCard } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { format } from "date-fns";

export default function BookingCart() {
  const { booking, isCartOpen, setIsCartOpen, calculateTotal, generateWhatsAppLink } = useBooking();
  const { nights, total, baseRate } = calculateTotal();

  if (!isCartOpen) return null;

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

                      {/* Dates */}
                      <div className="mb-6 border-b border-gray-100 pb-4 flex items-start space-x-3">
                        <CalendarIcon className="text-brand-green-700 mt-1" size={20} />
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Stay Dates</h3>
                          <p className="text-base text-gray-900">
                            <span className="font-semibold">Check-in:</span> {booking.checkIn ? format(booking.checkIn, "MMM dd, yyyy") : "Select Date"}
                          </p>
                          <p className="text-base text-gray-900">
                            <span className="font-semibold">Check-out:</span> {booking.checkOut ? format(booking.checkOut, "MMM dd, yyyy") : "Select Date"}
                          </p>
                          {nights > 0 && (
                            <p className="text-sm text-brand-green-700 mt-1 font-medium bg-brand-green-50 inline-block px-2 py-0.5 rounded">
                              {nights} Night{nights > 1 ? 's' : ''} Stay
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Guests */}
                      <div className="mb-6 border-b border-gray-100 pb-4 flex items-start space-x-3">
                        <Users className="text-brand-green-700 mt-1" size={20} />
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Guests</h3>
                          <p className="text-base text-gray-900">
                            {booking.adults} Adults, {booking.children} Children
                          </p>
                        </div>
                      </div>

                      {/* Pricing Breakdown */}
                      <div className="flex items-start space-x-3">
                        <CreditCard className="text-brand-green-700 mt-1" size={20} />
                        <div className="w-full">
                          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Pricing Estimate</h3>
                          {booking.roomType ? (
                            <div className="bg-gray-50 rounded-lg p-3 w-full">
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Base Rate (per night)</span>
                                <span>₹{baseRate}</span>
                              </div>
                              <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Nights</span>
                                <span>x {nights}</span>
                              </div>
                              <div className="flex justify-between text-lg font-bold text-brand-green-900 pt-2 border-t border-gray-200">
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
                <p className="text-xs text-center text-gray-500 mb-4">
                  By proceeding, you will be redirected to WhatsApp to confirm your dates and process the booking deposit directly with our staff.
                </p>
                <div className="mt-6">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl border border-transparent bg-brand-green-700 px-6 py-4 text-base font-bold text-white shadow-lg hover:bg-brand-green-800 transition-all transform hover:scale-[1.02]"
                  >
                    Confirm & Chat to Book
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
