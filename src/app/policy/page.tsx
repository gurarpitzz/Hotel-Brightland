export const metadata = {
  title: "Hotel Policies | Brightland Hotel, Shimla",
  description: "Read the hotel policies, check-in/check-out timings, and rules for Brightland Hotel, Shimla.",
};

export default function PolicyPage() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-green-900 mb-8 text-center">
          Hotel Policies
        </h1>
        <div className="bg-white rounded-2xl shadow-sm border border-brand-green-100 p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-green-800 mb-4">Check-In & Check-Out</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li><strong>Check-in Time:</strong> 12:00 PM (Noon)</li>
                <li><strong>Check-out Time:</strong> 11:00 AM</li>
                <li>Early check-in and late check-out are subject to availability and may incur additional charges.</li>
                <li>Guests must present a valid original photo ID (Aadhar Card, Passport, Voter ID, or Driving License) at the time of check-in. PAN Cards are not accepted.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-brand-green-800 mb-4">Booking & Cancellation</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>A booking deposit is required to confirm reservations.</li>
                <li>Cancellations made 7 days prior to the arrival date will receive a full refund.</li>
                <li>Cancellations made within 7 days of arrival will be charged a one-night retention fee.</li>
                <li>No-shows will be charged the full booking amount.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-brand-green-800 mb-4">General Rules</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Unmarried couples must be at least 18 years old and provide valid ID.</li>
                <li>Loud music or parties are not allowed in the rooms.</li>
                <li>The hotel reserves the right of admission.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
