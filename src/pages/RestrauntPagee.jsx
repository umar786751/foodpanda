// RestaurantPagee.js
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams, Link } from "react-router-dom";
import "swiper/css";

// Category Data
const categories = [
  { id: "appetizers", name: "Appetizers", img: "/icons/appetizers.png" },
  { id: "flame-grill", name: "Flame Grill Burgers", img: "/icons/flame-grill.png" },
  { id: "veggie", name: "Veggie & Plant Based Burgers", img: "/icons/veggie.png" },
  { id: "sandwich", name: "Sandwich from the Grill", img: "/icons/sandwich.png" },
  { id: "hot-chicken", name: "Hot Chicken Entrees", img: "/icons/hot-chicken.png" },
  { id: "beef", name: "Beef Entrees", img: "/icons/beef.png" },
  { id: "seafood", name: "Seafood Entrees", img: "/icons/seafood.png" },
  { id: "salads", name: "House Special Salads", img: "/icons/salads.png" },
];

// Product Data
const products = [
  // Appetizers
  { id: 1, name: "Spring Rolls", price: 3.0, category: "appetizers", type: "veg", img: "/img/spring-rolls.jpg" },
  { id: 2, name: "Chicken Wings", price: 4.5, category: "appetizers", type: "non-veg", img: "/img/chicken-wings.jpg" },

  // Flame Grill Burgers
  { id: 3, name: "Classic Beef Burger", price: 5.0, category: "flame-grill", type: "non-veg", img: "/img/beef-burger.jpg" },
  { id: 4, name: "BBQ Chicken Burger", price: 4.8, category: "flame-grill", type: "non-veg", img: "/img/bbq-chicken-burger.jpg" },

  // Veggie Burgers
  { id: 5, name: "Grilled Veggie Burger", price: 4.0, category: "veggie", type: "veg", img: "/img/veggie-burger.jpg" },
  { id: 6, name: "Mushroom & Cheese Burger", price: 4.2, category: "veggie", type: "veg", img: "/img/mushroom-burger.jpg" },

  // Sandwich from the Grill
  { id: 7, name: "BBQ Chicken", price: 4.5, category: "sandwich", type: "non-veg", img: "/img/bbq-chicken.jpg" },
  { id: 8, name: "BBQ Pulled Pork", price: 4.5, category: "sandwich", type: "non-veg", img: "/img/bbq-pork.jpg" },
  { id: 9, name: "Chicken Mushroom", price: 3.5, category: "sandwich", type: "non-veg", img: "/img/chicken-mushroom.jpg" },
  { id: 10, name: "Plain Grilled Chicken", price: 4.0, category: "sandwich", type: "non-veg", img: "/img/plain-grilled.jpg" },
  { id: 11, name: "Steak Sandwich", price: 3.5, category: "sandwich", type: "non-veg", img: "/img/steak.jpg" },
  { id: 12, name: "Veg Sandwich", price: 3.0, category: "sandwich", type: "veg", img: "/img/veg-sandwich.jpg" },

  // Hot Chicken Entrees
  { id: 13, name: "Spicy Chicken Curry", price: 5.5, category: "hot-chicken", type: "non-veg", img: "/img/chicken-curry.jpg" },
  { id: 14, name: "Grilled Chicken Breast", price: 5.0, category: "hot-chicken", type: "non-veg", img: "/img/grilled-chicken.jpg" },

  // Beef Entrees
  { id: 15, name: "Beef Steak", price: 6.5, category: "beef", type: "non-veg", img: "/img/beef-steak.jpg" },
  { id: 16, name: "Beef Stir Fry", price: 6.0, category: "beef", type: "non-veg", img: "/img/beef-stirfry.jpg" },

  // Seafood Entrees
  { id: 17, name: "Grilled Salmon", price: 7.5, category: "seafood", type: "non-veg", img: "/img/salmon.jpg" },
  { id: 18, name: "Fried Shrimp", price: 6.8, category: "seafood", type: "non-veg", img: "/img/fried-shrimp.jpg" },

  // House Special Salads
  { id: 19, name: "Caesar Salad", price: 3.8, category: "salads", type: "veg", img: "/img/caesar-salad.jpg" },
  { id: 20, name: "Greek Salad", price: 3.5, category: "salads", type: "veg", img: "/img/greek-salad.jpg" },
];

export default function RestaurantPagee() {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("sandwich");
  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter(
    (p) =>
      p.category === selectedCategory &&
      (filter === "all" || p.type === filter)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-4 text-center">
        <Link to='/'>
          <h1 className="text-2xl md:text-3xl font-bold text-[#8a0047]">Go Halal Food</h1>
        </Link>
      </header>
      
      <div className="container mx-auto py-4 px-4">
        {/* Category Swiper */}
        <Swiper spaceBetween={15} slidesPerView={"auto"} className="mb-4">
          {categories.map((cat) => (
            <SwiperSlide
              key={cat.id}
              style={{ width: "auto" }}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <div
                className={`text-center p-2 cursor-pointer rounded-xl ${cat.id === selectedCategory ? "bg-pink-100" : "bg-transparent"}`}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-12 h-12 object-contain mx-auto"
                />
                <div className="text-xs mt-1 max-w-20">
                  {cat.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Veg / Non-Veg Filter */}
        <div className="mb-4">
          <button
            className={`me-2 px-3 py-1 rounded-full ${filter === "non-veg" ? "bg-red-600 text-white" : "border border-red-600 text-red-600"}`}
            onClick={() => setFilter(filter === "non-veg" ? "all" : "non-veg")}
          >
            Non-Veg
          </button>
          <button
            className={`px-3 py-1 rounded-full ${filter === "veg" ? "bg-green-600 text-white" : "border border-green-600 text-green-600"}`}
            onClick={() => setFilter(filter === "veg" ? "all" : "veg")}
          >
            Veg
          </button>
        </div>

        {/* Heading */}
        <h4 className="text-pink-500 font-bold mb-5">
          {categories.find(cat => cat.id === selectedCategory)?.name}
        </h4>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="h-full bg-white rounded-lg shadow-sm border-0 overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-medium mb-2">{product.name}</h3>
                <p className="font-bold mb-3">₹{product.price.toFixed(2)}</p>
                <button
                  className="bg-pink-500 text-white border-none rounded-full py-1 px-4"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}