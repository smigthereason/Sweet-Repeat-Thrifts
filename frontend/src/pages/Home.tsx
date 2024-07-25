import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

  const services = [
    {
      title: "PHOTOGRAPHY",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      title: "DIGITAL MARKETING",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      title: "WEB DEVELOPMENT",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      title: "GRAPHIC DESIGN",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      title: "WEB DEVELOPMENT",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      title: "PHOTOGRAPHY",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
  ];

  const renderCarousel = (items: any[], spanLabel: string, h3Label: string) => (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
      transitionTime={2000}
      className="w-96 h-auto"
    >
      {items.map((item, index) => (
        <div key={index} className="relative">
          <img
            src={item.src}
            alt={item.alt}
            className="w-96 h-auto object-cover"
          />
          <div className="absolute top-32 left-28 text-center">
            <span className="text-4xl font-bold text-red-600">{spanLabel}</span>
            <h3 className="text-xl font-semibold text-white">{h3Label}</h3>
          </div>
        </div>
      ))}
    </Carousel>
  );

  return (
    
    <section className="container mx-auto px-2 relative">
      {/* Hero Banner */}
      {/* <div
        className="absolute inset-4 bg-cover bg-center h-52"
        
      ><img
      src="/src/assets/poster.jpeg"
      alt="Hero Banner"
      className="absolute inset-0 object-cover object-center w-full h-52
    "
    /></div>
      <div className="relative z-10 flex flex-col justify-center items-start h-screen p-4 sm:p-6 md:p-8 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-500 mb-2 sm:mb-3 md:mb-4">
          New Fashion
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6">
          Revive your style, not your spending.
        </p>
        <button className="bg-white text-black px-4 sm:px-5 md:px-6 py-2 rounded-full inline-flex items-center text-sm sm:text-base">
          SHOP NOW
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
       */}
      
      

      {/* Product Categories */}
      
      <div className="grid grid-cols-1  top-0 p-2 sm:grid-cols-1 md:grid-cols-3 gap-10  sm:mt-4 md:mt-2 ">
        <div className="relative">
          {renderCarousel(carouselItems, "30%", "Flash Sale")}
        </div>
        <div className="relative mt-4 sm:mt-0">
          {renderCarousel(newCarouselItems, "New Arrivals", "New Stock")}
        </div>
        <div className="relative mt-4 md:mt-0">
          {renderCarousel(saleCarouselItems, "Hot", "Wrap-Skirt Sale")}
        </div>
      </div>

      <section className=" py-8 sm:py-10 md:py-12 mt-8 sm:mt-12 md:mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            OUR SERVICES
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
