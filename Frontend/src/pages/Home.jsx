import React, { useEffect, useState } from "react";

const carouselSlides = [
  {
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    ],
    title: "Welcome to Rentora",
    content: (
      <div className="text-lg text-gray-600 space-y-4">
        <p>
          Your one-stop solution for rental services. We connect you with the
          best rental options for homes, offices, and more.
        </p>
        <div>
          <span className="font-semibold text-indigo-700">Why choose us?</span>
          <ul className="list-disc ml-6 mt-2">
            <li>Wide range of verified properties</li>
            <li>Easy and secure booking process</li>
            <li>Trusted by thousands of happy customers</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
        <p>
          Start your hassle-free rental journey with{" "}
          <span className="font-semibold text-indigo-700">Rentora</span> today!
        </p>
      </div>
    ),
  },
  {
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
    ],
    title: "Our Mission",
    content: (
      <div className="text-lg text-gray-600 space-y-4">
        <p>
          At <span className="font-semibold text-indigo-700">Rentora</span>, our
          mission is to simplify the rental process, making it transparent,
          efficient, and secure for everyone.
        </p>
        <p>
          We strive to provide a seamless experience for both renters and
          property owners, ensuring satisfaction and trust at every step.
        </p>
      </div>
    ),
  },
  {
    images: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    ],
    title: "Meet Our Team",
    content: (
      <div className="text-lg text-gray-600 space-y-4">
        <p>
          Our team is composed of passionate professionals with years of
          experience in real estate, technology, and customer service.
        </p>
        <p>
          We believe in building trust and long-term relationships with our
          clients, partners, and the community.
        </p>
      </div>
    ),
  },
];

const DashboardCard = ({ profile, onClick }) => (
  <div
    className="bg-white rounded shadow p-4 cursor-pointer hover:shadow-lg transition w-72"
    onClick={onClick}
  >
    <div className="flex flex-col items-center">
      {profile.profilePic ? (
        <img
          src={`http://localhost:5000/uploads/${profile.profilePic}`}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border mb-2"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2">
          <span className="text-gray-400">No Image</span>
        </div>
      )}
      <h3 className="text-xl font-bold">{profile.fullName}</h3>
      <p className="text-gray-600">{profile.email}</p>
      <p className="text-gray-500">{profile.profession}</p>
    </div>
  </div>
);

const ProfileModal = ({ profile, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    {/* Blurred and semi-transparent overlay */}
    <div
      className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    />
    <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md z-10">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
      >
        &times;
      </button>
      <div className="flex flex-col items-center mb-4">
        {profile.profilePic ? (
          <img
            src={`http://localhost:5000/uploads/${profile.profilePic}`}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border mb-2"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Full Name:</span> {profile.fullName}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Email:</span> {profile.email}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Phone:</span> {profile.phone}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Date of Birth:</span> {profile.dob}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Gender:</span> {profile.gender}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Address:</span> {profile.address}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Profession:</span> {profile.profession}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Experience:</span> {profile.experience}{" "}
        years
      </div>
    </div>
  </div>
);

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const res = await fetch("http://localhost:5000/api/v1/profile/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok && data.status === "success" && data.data) {
          setProfiles(data.data);
        }
      } catch (err) {
        // ignore
      }
    };
    fetchProfiles();
  }, []);

  const prevSlide = () =>
    setSlide((slide + carouselSlides.length - 1) % carouselSlides.length);
  const nextSlide = () => setSlide((slide + 1) % carouselSlides.length);

  return (
    <div>
      {/* Home Section with Carousel and outside buttons */}
      <section
        id="home"
        className="min-h-[60vh] flex flex-col items-center justify-center py-16 relative"
      >
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center z-20 hover:bg-indigo-700 transition"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        {/* Carousel */}
        <div className="flex flex-row w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
          {/* Images Left */}
          <div className="w-1/2 flex flex-col items-center justify-center bg-blue-100 p-6">
            <img
              src={carouselSlides[slide].images[0]}
              alt="Slide Img 1"
              className="w-48 h-48 object-cover rounded-lg mb-4 shadow"
            />
            <img
              src={carouselSlides[slide].images[1]}
              alt="Slide Img 2"
              className="w-32 h-32 object-cover rounded-lg shadow"
            />
          </div>
          {/* Info Right */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {carouselSlides[slide].title}
            </h1>
            {carouselSlides[slide].content}
          </div>
        </div>
        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center z-20 hover:bg-indigo-700 transition"
          aria-label="Next Slide"
        >
          &#8594;
        </button>
        {/* Carousel Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`w-3 h-3 rounded-full ${
                slide === idx ? "bg-indigo-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">OUR USERS</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <DashboardCard
                key={profile._id}
                profile={profile}
                onClick={() => setSelectedProfile(profile)}
              />
            ))
          ) : (
            <p className="text-gray-600">No profiles found.</p>
          )}
        </div>
        {selectedProfile && (
          <ProfileModal
            profile={selectedProfile}
            onClose={() => setSelectedProfile(null)}
          />
        )}
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-blue-50 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
          alt="Group of people in a formal manner"
          className="w-full max-w-xl rounded-lg shadow mb-6"
        />
        <p className="max-w-2xl text-gray-600 text-center mb-4">
          <span className="font-semibold text-indigo-700">Rentora</span> is a
          modern rental platform dedicated to connecting people with the best
          rental services for homes, offices, and more. Our mission is to
          simplify the rental process, making it transparent, efficient, and
          secure for everyone.
        </p>
        <p className="max-w-2xl text-gray-600 text-center mb-4">
          Our team is composed of passionate professionals with years of
          experience in real estate, technology, and customer service. We
          believe in building trust and long-term relationships with our
          clients, partners, and the community.
        </p>
        <p className="max-w-2xl text-gray-600 text-center">
          Whether you are looking to rent, lease, or manage properties,{" "}
          <span className="font-semibold text-indigo-700">Rentora</span> is your
          one-stop solution. Join us and experience a new era of hassle-free
          renting!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-10 mt-10 w-full">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-indigo-400">Rentora</span>
            <span className="ml-2 text-sm text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-indigo-400 transition">
              Home
            </a>
            <a href="#dashboard" className="hover:text-indigo-400 transition">
              Users
            </a>
            <a href="#about" className="hover:text-indigo-400 transition">
              About
            </a>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-indigo-400 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.098-.021-2.508-1.529-2.508-1.529 0-1.764 1.195-1.764 2.428v4.684h-3v-9h2.881v1.229h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v4.735z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:info@rentora.com"
              aria-label="Email"
              className="hover:text-indigo-400 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-indigo-400 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.733-.593-1.325-1.326-1.325z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
