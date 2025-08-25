// src/App.jsx
import React, { useState } from "react";
import { Search, Star, Menu, X } from "lucide-react";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top Nav */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="text-2xl font-bold text-pink-600">foodpanda</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg border"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu />
        </button>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition">
            Log in
          </button>
          <button className="px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition">
            Sign up for free delivery
          </button>
        </div>
      </header>

      <main className="flex">
        {/* Sidebar Overlay (Mobile) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar Filters */}
        <aside
          className={`fixed md:static top-0 left-0 h-full md:h-auto bg-gray-50 border-r w-72 p-6 z-50 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          md:block md:sticky md:top-20`}
        >
          {/* Close Button on Mobile */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="font-semibold text-lg">Filters</h2>
            <button
              className="p-2 rounded-lg border"
              onClick={() => setSidebarOpen(false)}
            >
              <X />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-8">
            {/* Sort by */}
            <div>
              <p className="text-sm font-medium mb-2">Sort by</p>
              <div className="flex flex-col gap-2 text-sm">
                {["Relevance", "Fastest delivery", "Distance", "Top rated"].map(
                  (opt, i) => (
                    <label key={i} className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="sort"
                        defaultChecked={i === 0}
                        className="accent-pink-600"
                      />
                      {opt}
                    </label>
                  )
                )}
              </div>
            </div>

            <hr />

            {/* Quick filters */}
            <div>
              <p className="text-sm font-medium mb-2">Quick filters</p>
              <button className="px-3 py-1 border rounded-full text-xs flex items-center gap-1 hover:bg-pink-100 transition">
                <Star size={14} className="text-yellow-500" /> Ratings 4+
              </button>
            </div>

            <hr />

            {/* Offers */}
            <div>
              <p className="text-sm font-medium mb-2">Offers</p>
              <div className="flex flex-col gap-2 text-sm">
                {["Free delivery", "Accepts vouchers", "Deals"].map((opt, i) => (
                  <label key={i} className="flex gap-2 items-center">
                    <input type="checkbox" className="accent-pink-600" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <hr />

            {/* Cuisine Search */}
            <div>
              <p className="text-sm font-medium mb-2">Cuisines</p>
              <input
                type="text"
                placeholder="Search for cuisine"
                className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-pink-500"
              />
              <div className="flex flex-col gap-2 text-sm mt-3">
                {["American", "BBQ", "Chinese", "Pakistani", "Desserts"].map(
                  (cuisine, i) => (
                    <label key={i} className="flex gap-2 items-center">
                      <input type="checkbox" className="accent-pink-600" />
                      {cuisine}
                    </label>
                  )
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-6 md:ml-0 ml-0">
          {/* Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for restaurants, cuisines, and dishes"
              className="w-full px-4 py-3 border rounded-full focus:outline-pink-500 shadow-sm"
            />
            <Search className="absolute right-4 top-3 text-gray-500" />
          </div>

          {/* Banner */}
          <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between mb-8 shadow-md">
            <div>
              <h2 className="text-2xl font-bold text-pink-700">
                Sign up for free delivery on your first order
              </h2>
              <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
                Sign up
              </button>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png"
              alt="panda mascot"
              className="w-32 mt-4 md:mt-0 animate-bounce"
            />
          </div>

          {/* Daily Deals */}
          <h3 className="text-xl font-bold mb-4">Your daily deals</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {[299, 499, 799, 999, 1299, 1599].map((price, i) => (
              <div
                key={i}
                className="min-w-[200px] bg-white rounded-xl p-4 flex flex-col items-center shadow hover:shadow-lg hover:-translate-y-1 transition"
              >
                <img
                  src={`https://picsum.photos/200/150?random=${i}`}
                  alt={`Deal ${i}`}
                  className="rounded-lg mb-3"
                />
                <p className="text-sm font-semibold">Deal for Rs.{price}</p>
              </div>
            ))}
          </div>

          {/* Cuisines */}
          <h3 className="text-xl font-bold mb-4">Cuisines for you</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Pizza",
              "Biryani",
              "Burgers",
              "Ice Cream",
              "Desi",
              "BBQ",
              "Chinese",
              "Pasta",
              "Seafood",
              "Sushi",
              "Wraps",
              "Salads",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl shadow-sm p-4 flex flex-col items-center hover:shadow-md hover:-translate-y-1 transition"
              >
                <img
                  src={`https://picsum.photos/100/100?random=${idx + 20}`}
                  alt={item}
                  className="rounded-lg mb-2"
                />
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;