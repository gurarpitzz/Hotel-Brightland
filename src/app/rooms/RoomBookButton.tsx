"use client";

import { useBooking } from "@/context/BookingContext";

interface RoomBookButtonProps {
  roomType: string;
  baseRate: number;
}

export default function RoomBookButton({ roomType, baseRate }: RoomBookButtonProps) {
  const { setBooking, setIsCartOpen } = useBooking();

  const handleBookNow = () => {
    setBooking((prev) => ({
      ...prev,
      roomType: roomType,
    }));
    setIsCartOpen(true);
  };

  return (
    <button 
      onClick={handleBookNow}
      className="bg-brand-green-700 hover:bg-brand-green-800 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md transform hover:scale-105 active:scale-95"
    >
      Book this Room
    </button>
  );
}
