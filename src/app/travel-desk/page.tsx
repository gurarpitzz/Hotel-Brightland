import TravelDeskViewer from "@/components/TravelDeskViewer";
import PageHeaderBanner from "@/components/PageHeaderBanner";

export const metadata = {
  title: "Travel Desk & Local Excursions | Brightland Hotel, Shimla",
  description: "Plan your Shimla sightseeing with the Brightland Hotel Travel Desk. Local itineraries, heritage walks, toy train journeys, and mountain excursions.",
};

export default function TravelDeskPage() {
  return (
    <div 
      className="bg-[#faf8f0] bg-cover bg-top bg-no-repeat min-h-screen pb-24"
      style={{ backgroundImage: "url('/assets/longbg.png')" }}
    >
      <PageHeaderBanner
        tagline="Explore Shimla"
        title="Travel Desk"
        description="With the help of Brightland Hotel’s exclusive Travel Desk, plan a local itinerary to ancient Hanuman mandir of Ramayan times, imposing Viceregal Lodge, Gothic styled churches, treks to Tara Devi or Kamana Devi temples, The Mall, etc. Take a Heritage Walk where each step of yours will tread upon areas of British Indian times. Pack a picnic basket to open at Naldehra, Sadhupul or just anywhere you fancy. Ride in a rail car or toy train that disappears into more than a hundred dark tunnels. Go for pony and yak rides, roller or ice-skating, shop for Himachali woolens, Kangra tea, honey, seasonal fresh or dry fruits or handicrafts-just anything you like. We also assist for car rentals to Kufri, Chail, Naldehra, Tattapani, Kulu-Manali, Sarahan, Narkanda, etc."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <TravelDeskViewer />
      </div>
    </div>
  );
}
