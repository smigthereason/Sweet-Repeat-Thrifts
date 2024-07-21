import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      {/* Hero Banner */}
      <div className="relative overflow-hidden mb-8">
        <div className="flex items-center justify-between">
          <button className="absolute left-4 z-10 bg-white rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute right-4 z-10 bg-white rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex bg-green-100">
          <div className="w-1/2">
            <img src="placeholder-fashion-image.jpg" alt="Fashion model" className="object-cover h-full w-full" />
          </div>
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-pink-500 mb-4">New Fashion</h2>
            <p className="mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="bg-white text-black px-6 py-2 rounded-full inline-flex items-center w-max">
              SHOP NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="grid grid-cols-3 gap-3">
        <div className="relative">
          <img src="src/assets/sale1.jpg" alt="Flash Sale" className="w-96 h-auto object-cover" />
          <div className="absolute top-4 left-4">
            <span className="text-4xl font-bold text-red-500">30%</span>
            <h3 className="text-xl font-semibold">Flash Sale</h3>
          </div>
        </div>
        <div className="relative">
          <img src="src/assets/sale1.jpg" alt="New Arrivals" className="w-full h-64 object-cover" />
          <div className="absolute top-4 left-4">
            <span className="text-4xl font-bold text-red-500">New</span>
            <h3 className="text-xl font-semibold">Arivals Product</h3>
          </div>
        </div>
        <div className="relative">
          <img src="src/assets/sale1.jpg" alt="T-shirt Sale" className="w-full h-64 object-cover" />
          <div className="absolute top-4 left-4">
            <span className="text-4xl font-bold text-red-500">Hot</span>
            <h3 className="text-xl font-semibold">Tsrt Sale</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;