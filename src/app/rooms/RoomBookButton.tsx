"use client";

import { useBooking, RoomCategory } from "@/context/BookingContext";

interface RoomBookButtonProps {
  roomType: string;
  baseRate: number;
}

export default function RoomBookButton({ roomType, baseRate }: RoomBookButtonProps) {
  const { setBooking, setIsCartOpen } = useBooking();

  const handleBookNow = () => {
    // Map full names to keys if needed, but since it's just a TS error, we can cast it.
    let mappedType = "imperial";
    if (roomType.toLowerCase().includes("royal")) mappedType = "royal";
    else if (roomType.toLowerCase().includes("corporate")) mappedType = "corporate";
    else if (roomType.toLowerCase().includes("presidential")) mappedType = "presidential";
    else if (roomType.toLowerCase().includes("regal")) mappedType = "regal";
    else if (roomType.toLowerCase().includes("imperial")) mappedType = "imperial";
    
    setBooking((prev) => ({
      ...prev,
      roomType: mappedType as RoomCategory,
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
