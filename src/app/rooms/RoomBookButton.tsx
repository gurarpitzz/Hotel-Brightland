"use client";

import { useBooking, RoomCategory } from "@/context/BookingContext";

interface RoomBookButtonProps {
  roomType: string;
  baseRate: number;
}

export default function RoomBookButton({ roomType, baseRate }: RoomBookButtonProps) {
  const { addToCart } = useBooking();

  const handleBookNow = () => {
    let mappedType: RoomCategory = "imperial";
    if (roomType.toLowerCase().includes("royal")) mappedType = "royal";
    else if (roomType.toLowerCase().includes("corporate")) mappedType = "corporate";
    else if (roomType.toLowerCase().includes("presidential")) mappedType = "presidential";
    else if (roomType.toLowerCase().includes("regal")) mappedType = "regal";
    else if (roomType.toLowerCase().includes("imperial")) mappedType = "imperial";
    
    addToCart(mappedType, roomType, 1);

    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      
      const ecommerceItem = {
        item_id: mappedType,
        item_name: roomType,
        item_category: "Hotel Room",
        price: baseRate,
        quantity: 1,
      };

      (window as any).dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
          currency: "INR",
          value: baseRate,
          items: [ecommerceItem],
        },
        room_type: roomType,
        price: baseRate,
      });

      if (typeof (window as any).fbq === "function") {
        (window as any).fbq("track", "AddToCart", {
          content_name: roomType,
          content_category: "Hotel Room",
          content_ids: [mappedType],
          value: baseRate,
          currency: "INR",
        });
      }
    }
  };

  return (
    <button 
      onClick={handleBookNow}
      data-analytics-event="add_to_cart"
      data-room-type={roomType}
      className="bg-brand-green-900 hover:bg-brand-green-950 text-brand-yellow-50 hover:text-[#c9a227] px-7 py-3 rounded-md font-semibold text-xs uppercase tracking-[0.18em] transition-all shadow-sm border border-[#c9a227]/40 hover:border-[#c9a227] flex items-center justify-center gap-2 group"
    >
      <span>RESERVE THIS ROOM</span>
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
  );
}
