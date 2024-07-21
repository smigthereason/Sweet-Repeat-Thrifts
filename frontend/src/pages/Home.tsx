import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const Home: React.FC = () => {
  const carouselItems = [
    { src: "src/assets/new1.jpg", alt: "T-shirt Sale 1" },
    { src: "src/assets/new2.jpg", alt: "T-shirt Sale 2" },
    { src: "src/assets/new3.jpg", alt: "T-shirt Sale 3" },
  ];

  const newCarouselItems = [
    { src: "src/assets/new1.jpg", alt: "T-shirt Sale 1" },
    { src: "src/assets/new2.jpg", alt: "T-shirt Sale 2" },
    { src: "src/assets/new3.jpg", alt: "T-shirt Sale 3" },
  ];

  const saleCarouselItems = [
    { src: "src/assets/sale3.jpg", alt: "Wrap-Skirt Sale 1" },
    { src: "src/assets/sale2.jpg", alt: "Wrap-Skirt Sale 2" },
    { src: "src/assets/sale1.jpg", alt: "Wrap-Skirt Sale 3" },
  ];

  const renderCarousel = (items: any[], spanLabel: string, h3Label: string) => (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      transitionTime={1000} 
      className="w-96 h-auto"
    >
      {items.map((item, index) => (
        <div key={index} className="relative">
          <img src={item.src} alt={item.alt} className="w-96 h-auto object-cover" />
          <div className="absolute top-32 left-28 text-center">
            <span className="text-4xl font-bold text-red-600">{spanLabel}</span>
            <h3 className="text-xl font-semibold text-white">{h3Label}</h3>
          </div>
        </div>
      ))}
    </Carousel>
  );

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
          {renderCarousel(carouselItems, "30%", "Flash Sale")}
        </div>
        <div className="relative">
          {renderCarousel(newCarouselItems, "New Arrivals", "New Stock")}
        </div>
       
        <div className="relative">
          {renderCarousel(saleCarouselItems, "Hot", "Wrap-Skirt Sale")}
        </div>
      </div>
    </section>
  );
};

export default Home;
