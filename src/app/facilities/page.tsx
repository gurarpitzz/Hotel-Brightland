export const metadata = {
  title: "Facilities | Brightland Hotel, Shimla",
  description: "Explore the premium facilities offered at Brightland Hotel, Shimla, including our multi-cuisine restaurant, terrace garden, and more.",
};

export default function FacilitiesPage() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-green-900 mb-8 text-center">
          Our Facilities
        </h1>
        <div className="bg-white rounded-2xl shadow-sm border border-brand-green-100 p-8">
          <p className="text-lg text-gray-600 mb-8 text-center">
            We offer a range of premium facilities to make your stay comfortable and memorable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-brand-green-800 mb-3">Multi-Cuisine Restaurant</h3>
              <p className="text-gray-600">Enjoy delicious local Himachali, Indian, Chinese, and Continental dishes prepared fresh by our expert chefs.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-brand-green-800 mb-3">Terrace Garden</h3>
              <p className="text-gray-600">Relax in our beautiful terrace garden with a cup of tea while enjoying the panoramic views of the Shimla mountains.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-brand-green-800 mb-3">Free Parking</h3>
              <p className="text-gray-600">Ample and safe parking space available for all our guests right at the hotel premises.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-brand-green-800 mb-3">24/7 Room Service</h3>
              <p className="text-gray-600">Round-the-clock room service to cater to all your needs, ensuring a hassle-free stay.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
