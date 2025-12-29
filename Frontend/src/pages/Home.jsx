import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Dresses",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
    sub: ["Men’s Wear", "Women’s Wear"],
    page: "/dresses",
  },
  {
    title: "Furniture",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
    sub: ["Sofa", "Bed", "Table"],
    page: "/furniture",
  },
  {
    title: "Electronics",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
    sub: ["Laptop", "Camera", "Speakers"],
    page: "/electronics",
  },
  {
    title: "Sports Gear",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600",
    sub: ["Cricket", "Gym Equipment"],
    page: "/sports",
  },
  {
    title: "Vehicles",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600",
    sub: ["Car", "Bike"],
    page: "/vehicle",
  },
  {
    title: "Baby & Kids Items",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600",
    sub: ["Baby Stroller", "Cradle", "Baby Car Seat"],
    page: "/babym",
  },
  {
    title: "Tools & Equipment",
    image:
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=600",
    sub: ["Power Drill", "Ladder", "Tool Kit", "Pressure Washer"],
    page: "/tool",
  },
  {
    title: "Event & Party Items",
    image:
      "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=600",
    sub: ["Sound System", "Stage Lights", "Chairs & Tables", "Decoration Items"],
    page: "/event",
  },
];

// Text-only About Us slides
const aboutSlides = [
  {
    title: "Our Mission",
    description:
      "We aim to connect renters and owners seamlessly, making renting easy and reliable for everyone.",
  },
  {
    title: "Our Vision",
    description:
      "To become the most trusted platform for renting items across categories, anywhere and anytime.",
  },
  {
    title: "Our Process",
    description:
      "From listing items to booking and final payment, we make renting smooth, transparent, and hassle-free.",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? aboutSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === aboutSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-24">
      {/* ================= HERO SECTION ================= */}
      <section id="Home" className="max-w-7xl mx-auto px-4">
        <div
          className="relative rounded-2xl overflow-hidden h-[420px] flex items-center justify-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Rent Anything, Anywhere
            </h1>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              Find the perfect item for your needs, from fashion to sports to
              home essentials. Rentora connects you with a vast network of
              renters.
            </p>

            <div className="flex items-center bg-white rounded-full max-w-xl mx-auto overflow-hidden">
              <input
                type="text"
                placeholder="Search for items"
                className="flex-1 px-5 py-3 text-black outline-none"
              />
              <button className="bg-yellow-400 px-6 py-3 font-semibold hover:bg-yellow-500">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section id="featured-categories" className="max-w-7xl mx-auto px-4 mt-16">
  <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {categories.map((cat, index) => (
      <Link
        key={index}
        to={cat.page} // Navigate to the respective category page
        className="rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white"
      >
        <img
          src={cat.image}
          alt={cat.title}
          className="h-40 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>

          <ul className="text-sm text-gray-600 space-y-1">
            {cat.sub.map((item, idx) => (
              <li key={idx} className="hover:text-black">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* ================= HOW IT WORKS ================= */}
      <section id= "how-it-works" className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-2xl font-semibold text-left mb-12">
          How Rentora Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow hover:-translate-y-2 transition">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-semibold text-lg mb-2">Owner Lists Item</h3>
            <p className="text-gray-600 text-sm">
              Owners upload rental items with details and pricing.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow hover:-translate-y-2 transition">
            <div className="text-4xl mb-4">🕒</div>
            <h3 className="font-semibold text-lg mb-2">
              User Books & Pays Advance
            </h3>
            <p className="text-gray-600 text-sm">
              Users select duration and confirm booking with advance payment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow hover:-translate-y-2 transition">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-semibold text-lg mb-2">
              Return & Final Payment
            </h3>
            <p className="text-gray-600 text-sm">
              Item is returned and remaining payment is completed.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US / TEXT CAROUSEL ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-2xl font-semibold text-left mb-12">About Us</h2>

        <div className="relative bg-yellow-50 p-8 rounded-xl shadow-lg flex items-center justify-between">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl font-bold text-yellow-500 hover:text-yellow-600 transition px-4"
          >
            ❮
          </button>

          {/* Slide Content */}
          <div className="flex-1 text-center transition-all duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 animate-fadeIn">
              {aboutSlides[currentSlide].title}
            </h3>
            <p className="text-gray-700 text-lg animate-fadeIn">
              {aboutSlides[currentSlide].description}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl font-bold text-yellow-500 hover:text-yellow-600 transition px-4"
          >
            ❯
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {aboutSlides.map((_, idx) => (
            <span
              key={idx}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                idx === currentSlide ? "bg-yellow-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(idx)}
            ></span>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-20 py-10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Rentora. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
