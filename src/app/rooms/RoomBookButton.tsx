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
      className="bg-brand-green-900 hover:bg-brand-green-950 text-brand-yellow-50 hover:text-[#c9a227] px-7 py-3 rounded-md font-semibold text-xs uppercase tracking-[0.18em] transition-all shadow-sm border border-[#c9a227]/40 hover:border-[#c9a227] flex items-center justify-center gap-2 group"
    >
      <span>RESERVE THIS ROOM</span>
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
  );
}
