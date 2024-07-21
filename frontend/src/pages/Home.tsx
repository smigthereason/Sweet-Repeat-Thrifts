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
      interval={3000}
      transitionTime={1000}
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
    <section className="container mx-auto px-4 mt-24">
      {/* Hero Banner */}
      <div
        className="absolute inset-0 bg-cover  "
        style={{ backgroundImage: "url('/src/assets/poster.jpeg')" }}
      ></div>
      <div className="relative left-2/4 top-10 z-10 flex flex-col justify-center items-start h-full  p-8 max-w-2xl ml-16">
        <h1 className="text-6xl font-bold text-pink-500 mb-4">New Fashion</h1>
        <p className="text-lg mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry the printing and typesetting industry.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full inline-flex items-center">
          SHOP NOW
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
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
      <div className="absolute left-8 bottom-16 z-20 flex items-center justify-center">
        <button className="bg-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute right-8 bottom-16 z-20 flex items-center justify-center">
        <button className="bg-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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

      {/* Product Categories */}
      <div className="grid grid-cols-3 gap-3 relative top-48">
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

      <section className="py-12 relative top-44">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

 </section>
  );
};

export default Home;
