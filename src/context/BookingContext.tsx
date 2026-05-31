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
  children: number; // Represents children > 5 years
  guestName: string;
}

export interface CalculationResult {
  nights: number;
  roomsRequired: number;
  extraBeds: number;
  baseRatePerRoom: number;
  roomCharges: number;
  extraBedCharges: number;
  total: number;
}

interface BookingContextType {
  booking: BookingState;
  setBooking: React.Dispatch<React.SetStateAction<BookingState>>;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  calculateTotal: () => CalculationResult;
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
    guestName: "",
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  const calculateTotal = (): CalculationResult => {
    if (!booking.roomType || !booking.checkIn || !booking.checkOut || booking.adults < 1) {
      return { nights: 0, roomsRequired: 0, extraBeds: 0, baseRatePerRoom: 0, roomCharges: 0, extraBedCharges: 0, total: 0 };
    }
    
    // Ensure checkout is after checkin
    let nights = differenceInDays(booking.checkOut, booking.checkIn);
    if (nights <= 0) nights = 1; // Minimum 1 night
    
    const baseRatePerRoom = roomPricing[booking.roomType];
    const totalPax = booking.adults + booking.children;
    
    const baseCapacity = booking.roomType === "regular suite" ? 4 : 2;
    const maxCapacity = baseCapacity + 1; // 1 extra bed allowed per room

    const roomsRequired = Math.ceil(totalPax / maxCapacity) || 1;
    const baseSlotsInRooms = roomsRequired * baseCapacity;
    const extraBeds = Math.max(0, totalPax - baseSlotsInRooms);

    const roomChargesPerNight = roomsRequired * baseRatePerRoom;
    const extraBedChargesPerNight = extraBeds * 900;

    const roomCharges = roomChargesPerNight * nights;
    const extraBedCharges = extraBedChargesPerNight * nights;
    const total = roomCharges + extraBedCharges;
    
    return { nights, roomsRequired, extraBeds, baseRatePerRoom, roomCharges, extraBedCharges, total };
  };

  const generateWhatsAppLink = () => {
    const { nights, roomsRequired, extraBeds, roomCharges, extraBedCharges, total } = calculateTotal();
    const checkInStr = booking.checkIn ? format(booking.checkIn, "dd-MM-yyyy") : "TBD";
    const checkOutStr = booking.checkOut ? format(booking.checkOut, "dd-MM-yyyy") : "TBD";
    const roomStr = booking.roomType ? booking.roomType.charAt(0).toUpperCase() + booking.roomType.slice(1) : "TBD";

    const message = `Hello Brightland Hotel Shimla,

I would like to request a direct booking with the following details:

Guest Name: ${booking.guestName || "Not Provided"}
Room Type: ${roomStr}
Rooms Required: ${roomsRequired}
Extra Beds: ${extraBeds}

Check-In: ${checkInStr}
Check-Out: ${checkOutStr}
Total Nights: ${nights}

Guests:
${booking.adults} Adults
${booking.children} Child (5+ Years)

Estimated Charges:
Room Charges: ₹${roomCharges}
Extra Bed Charges: ₹${extraBedCharges}

Total Estimate: ₹${total}

Please verify availability and share the payment/deposit details for confirmation.

Thank you.`;

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
