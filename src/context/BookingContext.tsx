"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { format, differenceInDays, parseISO } from "date-fns";
import { roomPricing } from "@/config/pricing";

export type RoomCategory = keyof typeof roomPricing;

export const roomDisplayNames: Record<RoomCategory, string> = {
  imperial: "Imperial Room (Non Valley View)",
  royal: "Royal Room (Valley View)",
  corporate: "Corporate Room",
  "regular suite": "Regular Suite / Family Suite",
  regal: "Regal Suite (Valley View)",
  presidential: "Presidential Suite (3 Side Valley View)",
};

export interface CartItem {
  id: RoomCategory;
  roomType: RoomCategory;
  roomName: string;
  quantity: number;
  adults: number;
  children: number;
  baseRatePerRoom: number;
  baseCapacity: number;
}

export interface BookingState {
  checkIn: Date | null;
  checkOut: Date | null;
  guestName: string;
  items: CartItem[];
  // Legacy backward compatibility helper
  roomType?: RoomCategory | null;
  adults?: number;
  children?: number;
}

export interface ItemCalculation {
  item: CartItem;
  itemExtraBeds: number;
  itemRoomCharges: number;
  itemExtraBedCharges: number;
  itemTotal: number;
  isOverCapacity: boolean;
}

export interface CalculationResult {
  nights: number;
  totalRooms: number;
  totalAdults: number;
  totalChildren: number;
  totalExtraBeds: number;
  estimatedRoomCharges: number;
  estimatedExtraBedCharges: number;
  grandTotal: number;
  itemsBreakdown: ItemCalculation[];
}

interface BookingContextType {
  booking: BookingState;
  setBooking: React.Dispatch<React.SetStateAction<BookingState>>;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (roomType: RoomCategory, roomName?: string, quantity?: number) => void;
  updateQuantity: (roomId: RoomCategory, newQty: number) => void;
  removeFromCart: (roomId: RoomCategory) => void;
  updateItemGuests: (roomId: RoomCategory, adults: number, children: number) => void;
  clearCart: () => void;
  calculateTotal: () => CalculationResult;
  generateWhatsAppLink: () => string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "brightland_hotel_booking_cart_v2";

export function BookingProvider({ children }: { children: ReactNode }) {
  const [booking, setBooking] = useState<BookingState>({
    checkIn: null,
    checkOut: null,
    guestName: "",
    items: [],
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setBooking({
          checkIn: parsed.checkIn ? parseISO(parsed.checkIn) : null,
          checkOut: parsed.checkOut ? parseISO(parsed.checkOut) : null,
          guestName: parsed.guestName || "",
          items: parsed.items || [],
        });
      }
    } catch {
      // Ignore parsing errors
    }
    setIsInitialized(true);
  }, []);

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return;
    try {
      const payload = {
        checkIn: booking.checkIn ? booking.checkIn.toISOString() : null,
        checkOut: booking.checkOut ? booking.checkOut.toISOString() : null,
        guestName: booking.guestName,
        items: booking.items,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage errors
    }
  }, [booking, isInitialized]);

  const addToCart = (roomType: RoomCategory, roomName?: string, quantity = 1) => {
    const displayName = roomName || roomDisplayNames[roomType] || roomType;
    const baseRate = roomPricing[roomType] || 4000;
    const baseCap = roomType === "regular suite" ? 4 : 2;

    setBooking((prev) => {
      const existingIndex = prev.items.findIndex((i) => i.id === roomType);
      let updatedItems: CartItem[];

      if (existingIndex >= 0) {
        updatedItems = [...prev.items];
        const existing = updatedItems[existingIndex];
        const newQty = existing.quantity + quantity;
        updatedItems[existingIndex] = {
          ...existing,
          quantity: newQty,
          adults: Math.max(existing.adults, newQty * baseCap),
        };
      } else {
        const newItem: CartItem = {
          id: roomType,
          roomType,
          roomName: displayName,
          quantity,
          adults: quantity * baseCap,
          children: 0,
          baseRatePerRoom: baseRate,
          baseCapacity: baseCap,
        };
        updatedItems = [...prev.items, newItem];
      }

      return {
        ...prev,
        items: updatedItems,
      };
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (roomId: RoomCategory, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(roomId);
      return;
    }

    setBooking((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === roomId) {
          const defaultAdults = newQty * item.baseCapacity;
          return {
            ...item,
            quantity: newQty,
            adults: Math.max(item.adults, defaultAdults),
          };
        }
        return item;
      }),
    }));
  };

  const removeFromCart = (roomId: RoomCategory) => {
    setBooking((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== roomId),
    }));
  };

  const updateItemGuests = (roomId: RoomCategory, adults: number, children: number) => {
    setBooking((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === roomId) {
          return {
            ...item,
            adults: Math.max(1, adults),
            children: Math.max(0, children),
          };
        }
        return item;
      }),
    }));
  };

  const clearCart = () => {
    setBooking((prev) => ({
      ...prev,
      items: [],
    }));
  };

  const calculateTotal = (): CalculationResult => {
    if (!booking.checkIn || !booking.checkOut || booking.items.length === 0) {
      return {
        nights: 0,
        totalRooms: 0,
        totalAdults: 0,
        totalChildren: 0,
        totalExtraBeds: 0,
        estimatedRoomCharges: 0,
        estimatedExtraBedCharges: 0,
        grandTotal: 0,
        itemsBreakdown: [],
      };
    }

    let nights = differenceInDays(booking.checkOut, booking.checkIn);
    if (nights <= 0) nights = 1;

    let totalRooms = 0;
    let totalAdults = 0;
    let totalChildren = 0;
    let totalExtraBeds = 0;
    let estimatedRoomCharges = 0;
    let estimatedExtraBedCharges = 0;

    const itemsBreakdown: ItemCalculation[] = booking.items.map((item) => {
      totalRooms += item.quantity;
      totalAdults += item.adults;
      totalChildren += item.children;

      const totalPax = item.adults + item.children;
      const baseSlots = item.quantity * item.baseCapacity;
      const maxSlots = item.quantity * (item.baseCapacity + 1); // 1 extra bed per room max

      const itemExtraBeds = Math.max(0, totalPax - baseSlots);
      const isOverCapacity = totalPax > maxSlots;

      totalExtraBeds += itemExtraBeds;

      const itemRoomCharges = item.quantity * item.baseRatePerRoom * nights;
      const itemExtraBedCharges = itemExtraBeds * 900 * nights;
      const itemTotal = itemRoomCharges + itemExtraBedCharges;

      estimatedRoomCharges += itemRoomCharges;
      estimatedExtraBedCharges += itemExtraBedCharges;

      return {
        item,
        itemExtraBeds,
        itemRoomCharges,
        itemExtraBedCharges,
        itemTotal,
        isOverCapacity,
      };
    });

    const grandTotal = estimatedRoomCharges + estimatedExtraBedCharges;

    return {
      nights,
      totalRooms,
      totalAdults,
      totalChildren,
      totalExtraBeds,
      estimatedRoomCharges,
      estimatedExtraBedCharges,
      grandTotal,
      itemsBreakdown,
    };
  };

  const generateWhatsAppLink = () => {
    const calc = calculateTotal();
    const checkInStr = booking.checkIn ? format(booking.checkIn, "dd-MM-yyyy") : "TBD";
    const checkOutStr = booking.checkOut ? format(booking.checkOut, "dd-MM-yyyy") : "TBD";

    const roomLines = calc.itemsBreakdown
      .map(
        ({ item }) =>
          `• ${item.quantity} × ${item.roomName} (₹${item.baseRatePerRoom.toLocaleString("en-IN")}/night)`
      )
      .join("\n");

    const message = `Hello Brightland Hotel Shimla,

I would like to request a direct booking with the following details:

Guest Name: ${booking.guestName || "Not Provided"}

Stay Dates:
Check-In: ${checkInStr}
Check-Out: ${checkOutStr}
Total Nights: ${calc.nights}

Rooms Selected:
${roomLines || "No rooms selected"}

Total Guests:
${calc.totalAdults} Adults${calc.totalChildren > 0 ? `, ${calc.totalChildren} Child (5+ Years)` : ""}

Estimated Charges:
Room Charges: ₹${calc.estimatedRoomCharges.toLocaleString("en-IN")}${
      calc.estimatedExtraBedCharges > 0
        ? `\nExtra Bed Charges (${calc.totalExtraBeds} Beds × ₹900 × ${calc.nights} Nights): ₹${calc.estimatedExtraBedCharges.toLocaleString("en-IN")}`
        : ""
    }

Total Estimate: ₹${calc.grandTotal.toLocaleString("en-IN")}

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
        addToCart,
        updateQuantity,
        removeFromCart,
        updateItemGuests,
        clearCart,
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
