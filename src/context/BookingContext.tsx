"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { format, differenceInDays } from "date-fns";
import { roomPricing } from "@/config/pricing";

export type RoomCategory = keyof typeof roomPricing;

export interface BookingState {
  roomType: RoomCategory | null;
  checkIn: Date | null;
  checkOut: Date | null;
  adults: number;
  children: number;
}

interface BookingContextType {
  booking: BookingState;
  setBooking: React.Dispatch<React.SetStateAction<BookingState>>;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  calculateTotal: () => { nights: number; total: number; baseRate: number };
  generateWhatsAppLink: () => string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [booking, setBooking] = useState<BookingState>({
    roomType: null,
    checkIn: null,
    checkOut: null,
    adults: 2,
    children: 0,
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  const calculateTotal = () => {
    if (!booking.roomType || !booking.checkIn || !booking.checkOut) {
      return { nights: 0, total: 0, baseRate: 0 };
    }
    
    // Ensure checkout is after checkin
    let nights = differenceInDays(booking.checkOut, booking.checkIn);
    if (nights <= 0) nights = 1; // Minimum 1 night
    
    const baseRate = roomPricing[booking.roomType];
    const total = baseRate * nights;
    
    return { nights, total, baseRate };
  };

  const generateWhatsAppLink = () => {
    const { nights, total } = calculateTotal();
    const checkInStr = booking.checkIn ? format(booking.checkIn, "dd-MM-yyyy") : "TBD";
    const checkOutStr = booking.checkOut ? format(booking.checkOut, "dd-MM-yyyy") : "TBD";
    const roomStr = booking.roomType ? booking.roomType.charAt(0).toUpperCase() + booking.roomType.slice(1) : "TBD";

    const message = `Hello Brightland Hotel Shimla! 🌲
I would like to request a direct booking with the following details:

🛏️ Room Type: ${roomStr}
📅 Check-In: ${checkInStr}
📅 Check-Out: ${checkOutStr}
🌙 Total Nights: ${nights}
👥 Guests: ${booking.adults} Adults, ${booking.children} Children
💰 Quoted Rates Estimate: ₹${total}

Please verify availability and send over the bank deposit details for confirmation. Thank you!`;

    return `https://wa.me/918219200074?text=${encodeURIComponent(message)}`;
  };

  return (
    <BookingContext.Provider
      value={{
        booking,
        setBooking,
        isCartOpen,
        setIsCartOpen,
        calculateTotal,
        generateWhatsAppLink,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
