import React from "react";

// Sample dress items
const dresses = [
  {
    name: "Floral Maxi Dress",
    price: 50,
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1542068829-1115a1f84f45?w=600",
  },
  {
    name: "Elegant Evening Gown",
    price: 75,
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600",
  },
  {
    name: "Casual Summer Dress",
    price: 40,
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600",
  },
  {
    name: "Boho Chic Dress",
    price: 45,
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1520975914272-5bcbde123a2a?w=600",
  },
  {
    name: "Cocktail Party Dress",
    price: 60,
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600",
  },
  {
    name: "Formal Ball Gown",
    price: 90,
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1520962916945-ffb4c3d6e13e?w=600",
  },
];

const Dresses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Dresses</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="px-4 py-2 border rounded-lg bg-white">Size</select>
        <select className="px-4 py-2 border rounded-lg bg-white">Color</select>
        <select className="px-4 py-2 border rounded-lg bg-white">Style</select>
        <select className="px-4 py-2 border rounded-lg bg-white">Occasion</select>
      </div>

      {/* Dress cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dresses.map((dress, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
          >
            <img
              src={dress.image}
              alt={dress.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{dress.name}</h2>
              <p className="text-gray-600">${dress.price} / {dress.duration}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        <button className="px-4 py-2 bg-gray-200 rounded-lg">{"<"}</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg">1</button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg">2</button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg">3</button>
        <span className="px-4 py-2">...</span>
        <button className="px-4 py-2 bg-gray-200 rounded-lg">10</button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg">{">"}</button>
      </div>
    </div>
  );
};

export default Dresses;
