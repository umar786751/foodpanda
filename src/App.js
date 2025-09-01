import React, { useState, useMemo, useRef } from "react";
import {
    Search,
    Menu,
    X,
    Bike,
    ShoppingBag,
    Store,
    Utensils,
    Star,
    BookOpen,
    Tag,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import BusinessDetial from './pages/BusinessDetail'
import BusinessLocation from "./pages/BusinessLocation";
import BusinessDocs from "./pages/BusinessDocs";
import RestaurantPagee from "./pages/RestrauntPagee"
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// --- MOCK DATA ---
// Increased the number of restaurants to over 60 as requested.
const allRestaurants = [
    { id: 1, name: "KFC - Gulberg", cuisine: "Fast Food", rating: 4.5, delivery: "Delivery", offers: ["Deals", "Free delivery"], img: "https://placehold.co/400x250/F5F5F5/333?text=KFC" },
    { id: 2, name: "Cheezious", cuisine: "Pizza", rating: 4.8, delivery: "Delivery", offers: ["Deals"], img: "https://placehold.co/400x250/F5F5F5/333?text=Cheezious" },
    { id: 3, name: "La Terrazza", cuisine: "Italian", rating: 4.6, delivery: "Delivery", offers: ["Accepts vouchers"], img: "https://placehold.co/400x250/F5F5F5/333?text=La+Terrazza" },
    { id: 4, name: "The Burger Shack", cuisine: "Burgers", rating: 4.3, delivery: "Pick-up", offers: [], img: "https://placehold.co/400x250/F5F5F5/333?text=Burger+Shack" },
    { id: 5, name: "Savour Foods", cuisine: "Pakistani", rating: 4.9, delivery: "Delivery", offers: ["Free delivery"], img: "https://placehold.co/400x250/F5F5F5/333?text=Savour+Foods" },
    { id: 6, name: "Hot 'n' Spicy", cuisine: "BBQ", rating: 4.2, delivery: "Delivery", offers: ["Deals"], img: "https://placehold.co/400x250/F5F5F5/333?text=Hot+n+Spicy" },
    { id: 7, name: "Jade Cafe", cuisine: "Chinese", rating: 4.7, delivery: "Caterers", offers: [], img: "https://placehold.co/400x250/F5F5F5/333?text=Jade+Cafe" },
    { id: 8, name: "Ice Curl", cuisine: "Ice Cream", rating: 4.5, delivery: "Shops", offers: ["Accepts vouchers"], img: "https://placehold.co/400x250/F5F5F5/333?text=Ice+Curl" },
    { id: 9, name: "Salt'n Pepper", cuisine: "Pakistani", rating: 4.6, delivery: "Delivery", offers: ["Deals", "Free delivery"], img: "https://placehold.co/400x250/F5F5F5/333?text=Salt'n+Pepper" },
    { id: 10, name: "Howdy", cuisine: "Burgers", rating: 4.4, delivery: "Pick-up", offers: ["Deals"], img: "https://placehold.co/400x250/F5F5F5/333?text=Howdy" },
    { id: 11, name: "Monal Restaurant", cuisine: "Pakistani", rating: 4.9, delivery: "Caterers", offers: ["Accepts vouchers"], img: "https://placehold.co/400x250/F5F5F5/333?text=Monal" },
    { id: 12, name: "Butt Karahi", cuisine: "Desi", rating: 4.8, delivery: "Delivery", offers: ["Free delivery"], img: "https://placehold.co/400x250/F5F5F5/333?text=Butt+Karahi" },
    { id: 13, name: "OPTP", cuisine: "Fast Food", rating: 4.1, delivery: "Delivery", offers: [], img: "https://placehold.co/400x250/F5F5F5/333?text=OPTP" },
    { id: 14, name: "Domino's Pizza", cuisine: "Pizza", rating: 4.3, delivery: "Delivery", offers: ["Deals"], img: "https://placehold.co/400x250/F5F5F5/333?text=Domino's" },
    { id: 15, name: "Subway", cuisine: "Sandwiches", rating: 4.2, delivery: "Pick-up", offers: ["Accepts vouchers"], img: "https://placehold.co/400x250/F5F5F5/333?text=Subway" },
    { id: 16, name: "Hardee's", cuisine: "Burgers", rating: 4.5, delivery: "Delivery", offers: ["Deals"], img: "https://placehold.co/400x250/F5F5F5/333?text=Hardee's" },
    { id: 17, name: "Chaaye Khana", cuisine: "Cafe", rating: 4.7, delivery: "Caterers", offers: [], img: "https://placehold.co/400x250/F5F5F5/333?text=Chaaye+Khana" },
    { id: 18, name: "Baskin Robbins", cuisine: "Ice Cream", rating: 4.8, delivery: "Shops", offers: ["Deals"], img: "https://placehold.co/400x250/F5F5F5/333?text=Baskin+Robbins" },
    { id: 19, name: "Marhaba Foods", cuisine: "Desi", rating: 4.0, delivery: "Caterers", offers: ["Accepts vouchers"], img: "https://placehold.co/400x250/F5F5F5/333?text=Marhaba+Foods" },
    { id: 20, name: "Golden Dragon", cuisine: "Chinese", rating: 4.6, delivery: "Delivery", offers: [], img: "https://placehold.co/400x250/F5F5F5/333?text=Golden+Dragon" },
    ...Array.from({ length: 45 }, (_, i) => ({
        id: 21 + i,
        name: `Restaurant #${i + 1}`,
        cuisine: ["Pizza", "Burgers", "Pakistani", "Chinese", "Italian", "BBQ", "Desi"][i % 7],
        rating: (3.8 + (i % 12) / 10).toFixed(1),
        delivery: ["Delivery", "Pick-up", "Caterers", "Shops"][(i % 4)],
        offers: [["Deals"], ["Free delivery"], ["Accepts vouchers"], []][i % 4],
        img: `https://placehold.co/400x250/F5F5F5/333?text=Restaurant+${i + 1}`
    })),
    { id: 66, name: "Quran Store", cuisine: "Religious Texts", rating: 5.0, delivery: "Islamic Books", offers: ["Free delivery"], img: "https://placehold.co/400x250/F5F5F5/333?text=Quran+Store" },
    { id: 67, name: "Hadith House", cuisine: "Scholarly Works", rating: 4.9, delivery: "Islamic Books", offers: [], img: "https://placehold.co/400x250/F5F5F5/333?text=Hadith+House" },
];

const deals = [
    { title: "Flat 50% Off", img: "https://placehold.co/300x200/ffe6f1/8a0047?text=50%25+OFF" },
    { title: "Buy 1 Get 1 Free", img: "https://placehold.co/300x200/ffd1e2/8a0047?text=BOGO" },
    { title: "Free Delivery", img: "https://placehold.co/300x200/ffe6f1/8a0047?text=Free+Delivery" },
    { title: "Family Deal", img: "https://placehold.co/300x200/ffd1e2/8a0047?text=Family+Deal" },
    { title: "Under Rs. 499", img: "https://placehold.co/300x200/ffe6f1/8a0047?text=Under+499" },
    { title: "Weekend Special", img: "https://placehold.co/300x200/ffd1e2/8a0047?text=Weekend+Special" },
    { title: "Combo Deals", img: "https://placehold.co/300x200/ffe6f1/8a0047?text=Combos" },
];

const cuisines = [
    "Pizza", "Pakistani", "Burgers", "Chinese", "Italian", "BBQ", "Desi",
    "Fast Food", "Ice Cream", "Sandwiches", "Cafe", "Seafood", "Sushi", "Wraps",
];

// --- COMPONENTS ---

const RestaurantPage = () => {
    const { id } = useParams();
    const restaurant = allRestaurants.find(r => r.id.toString() === id);

    if (!restaurant) {
        return (
             <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                 <div className="p-8 bg-white rounded-lg shadow-md text-center">
                     <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">Restaurant not found!</h1>
                     <Link to="/" className="px-6 py-2 bg-[#8a0047] text-white rounded-lg hover:bg-[#6a0036] transition">
                         Go back to Home
                     </Link>
                 </div>
             </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
             <header className="bg-white shadow-sm p-4 text-center">
                 <Link to='/'><h1 className="text-2xl md:text-3xl font-bold text-[#8a0047]">Go Halat Food</h1></Link>
            </header>
            <main className="p-4 md:p-8 max-w-4xl mx-auto">
                <img src={restaurant.img} alt={restaurant.name} className="w-full h-48 sm:h-64 object-cover rounded-xl mb-6 shadow-lg" />
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">{restaurant.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{restaurant.cuisine}</p>
                <div className="flex items-center gap-2 text-lg text-yellow-500 mb-6">
                    <Star className="fill-current" />
                    <span>{restaurant.rating}</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-2xl font-bold text-[#8a0047] mb-4">Menu</h2>
                    <p className="text-gray-500">Menu items would be displayed here.</p>
                </div>
            </main>
        </div>
    );
};

const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Delivery");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Relevance");
    const [filters, setFilters] = useState({ offers: [], cuisines: [] });
    const dealsContainerRef = useRef(null);

    const filteredRestaurants = useMemo(() => allRestaurants
        .filter((r) => r.delivery === activeTab)
        .filter(
            (r) =>
            r.name.toLowerCase().includes(search.toLowerCase()) ||
            r.cuisine.toLowerCase().includes(search.toLowerCase())
        )
        .filter((r) =>
            filters.offers.length ? filters.offers.some((f) => r.offers.includes(f)) : true
        )
        .filter((r) =>
            filters.cuisines.length ? filters.cuisines.includes(r.cuisine) : true
        )
        .sort((a, b) => {
            if (sort === "Top rated") return b.rating - a.rating;
            return a.id - b.id; // Default sort by ID for consistent sequence
        }), [activeTab, search, filters, sort]);

    const toggleFilter = (type, value) => {
        setFilters((prev) => {
            const updated = { ...prev };
            if (updated[type].includes(value)) {
                updated[type] = updated[type].filter((v) => v !== value);
            } else {
                updated[type] = [...updated[type], value];
            }
            return updated;
        });
    };
    
    const clearFilters = () => {
        setSort("Relevance");
        setFilters({ offers: [], cuisines: [] });
    };

    const scrollDeals = (direction) => {
        if (dealsContainerRef.current) {
            const scrollAmount = 300; // Adjust scroll amount as needed
            dealsContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
            {/* Injecting CSS to hide scrollbars */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>

            {/* Top Bar */}
            <div className="bg-[#ffd1e2] text-[#8a0047] flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-4 px-4 py-2 text-sm text-center">
                <Link to="/signup" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#8a0047] text-white hover:bg-opacity-90 transition shadow-md">
                        Restaurant partner
                    </button>
                </Link>
                <Link to="/signup" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-4 py-2 rounded-full border border-gray-400 bg-white text-[#8a0047] hover:bg-gray-50 transition shadow-md">
                        Business account
                    </button>
                </Link>
            </div>

            {/* Header */}
            <header className="flex items-center justify-between px-4 sm:px-6 py-4 shadow-lg sticky top-0 bg-white z-50">
                <Link to='/'><h1 className="text-2xl md:text-3xl font-extrabold text-[#8a0047]">Go Halal Food</h1></Link>
                <div className="relative flex-1 max-w-xl mx-4 sm:mx-8 hidden md:block">
                     <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for restaurants, cuisines..."
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8a0047] shadow-md transition-shadow"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <button className="md:hidden p-3 rounded-lg border bg-white shadow-sm" onClick={() => setSidebarOpen(true)}>
                    <Menu />
                </button>
            </header>

            {/* Categories Tabs */}
            <nav className="bg-white sticky top-[80px] z-40 shadow-sm">
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex justify-start md:justify-center gap-4 sm:gap-6 px-4 py-3 text-sm font-medium min-w-max">
                        {[
                            { name: "Delivery", icon: <Bike size={18} /> },
                            { name: "Pick-up", icon: <ShoppingBag size={18} /> },
                            { name: "Shops", icon: <Store size={18} /> },
                            { name: "Caterers", icon: <Utensils size={18} /> },
                            { name: "Islamic Books", icon: <BookOpen size={18} /> },
                        ].map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all whitespace-nowrap
                                ${
                                    activeTab === tab.name
                                        ? "bg-[#8a0047] text-white shadow-md scale-105"
                                        : "text-gray-600 hover:text-[#8a0047] hover:bg-gray-100"
                                }`}
                            >
                                {tab.icon} {tab.name}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            <div className="max-w-screen-2xl mx-auto flex gap-6 p-4 md:p-6">
                 {/* Sidebar Overlay (Mobile) */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-40 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}

                {/* Sidebar */}
                 <aside
                    className={`fixed md:sticky top-0 left-0 h-full w-72 bg-white rounded-xl shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out md:top-[160px] md:h-[calc(100vh-180px)] overflow-y-auto scrollbar-hide
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
                >
                    <div className="flex items-center justify-between mb-6">
                         <h2 className="font-bold text-xl text-[#8a0047]">All Filters</h2>
                         <button className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200" onClick={() => setSidebarOpen(false)}><X size={20} /></button>
                         <button onClick={clearFilters} className="text-sm text-[#8a0047] hover:underline">Clear all</button>
                    </div>

                    <div className="space-y-8">
                        {/* Sort by */}
                        <div>
                            <p className="text-lg font-semibold mb-3 border-b-2 pb-2 text-gray-700">Sort by</p>
                            <div className="flex flex-col gap-3 text-sm">
                                {["Relevance", "Top rated"].map((opt) => (
                                    <label key={opt} className="flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition">
                                        <input type="radio" name="sort" checked={sort === opt} onChange={() => setSort(opt)} className="accent-[#8a0047] w-4 h-4"/>
                                        {opt}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Offers */}
                        <div>
                            <p className="text-lg font-semibold mb-3 border-b-2 pb-2 text-gray-700">Offers</p>
                            <div className="flex flex-col gap-3 text-sm">
                                {["Free delivery", "Accepts vouchers", "Deals"].map((opt) => (
                                    <label key={opt} className="flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition">
                                        <input type="checkbox" checked={filters.offers.includes(opt)} onChange={() => toggleFilter("offers", opt)} className="accent-[#8a0047] w-4 h-4 rounded"/>
                                        {opt}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Cuisines */}
                        <div>
                            <p className="text-lg font-semibold mb-3 border-b-2 pb-2 text-gray-700">Cuisines</p>
                            <div className="flex flex-col gap-3 text-sm max-h-60 overflow-y-auto scrollbar-hide">
                                {cuisines.map((cuisine) => (
                                    <label key={cuisine} className="flex gap-2 items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition">
                                        <input type="checkbox" checked={filters.cuisines.includes(cuisine)} onChange={() => toggleFilter("cuisines", cuisine)} className="accent-[#8a0047] w-4 h-4 rounded"/>
                                        {cuisine}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0">
                    {/* Search Bar for Mobile */}
                     <div className="relative mb-6 md:hidden">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search restaurants..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8a0047] shadow-md"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Daily Deals Carousel */}
                    <div className="mb-8 relative bg-white p-6 rounded-xl shadow-md">
                         <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-[#8a0047]">Your daily deals</h3>
                            <div className="flex gap-2">
                                <button onClick={() => scrollDeals('left')} className="p-2 rounded-full bg-gray-100 shadow-md hover:bg-gray-200 transition"><ChevronLeft size={20} /></button>
                                <button onClick={() => scrollDeals('right')} className="p-2 rounded-full bg-gray-100 shadow-md hover:bg-gray-200 transition"><ChevronRight size={20} /></button>
                            </div>
                        </div>
                        <div ref={dealsContainerRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                            {deals.map((deal, index) => (
                                <div key={index} className="flex-shrink-0 w-56 sm:w-64 group cursor-pointer">
                                    <img src={deal.img} alt={deal.title} className="rounded-xl mb-2 w-full h-32 sm:h-36 object-cover transition-transform group-hover:scale-105 shadow-md"/>
                                    <p className="text-sm font-semibold">{deal.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Restaurants Grid */}
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{activeTab} Restaurants</h3>
                    {filteredRestaurants.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No restaurants match your filters.</p>
                            <p className="text-sm text-gray-400 mt-2">Try clearing some filters to see more results.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredRestaurants.map((r) => (
                                <Link to={`/restaurant/${r.id}`} key={r.id} className="bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="relative">
                                        <img src={r.img} alt={r.name} className="w-full h-40 object-cover"/>
                                        <div className="absolute top-2 left-2 bg-white text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
                                            <Star size={12} className="text-yellow-500 fill-current" /> {r.rating}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-bold text-lg truncate group-hover:text-[#8a0047]">{r.name}</h4>
                                        <p className="text-sm text-gray-500 truncate">{r.cuisine}</p>
                                        {r.offers.length > 0 && (
                                            <div className="mt-2 flex items-center gap-2 text-xs text-[#8a0047]">
                                                <Tag size={14} />
                                                <p className="font-semibold">{r.offers.join(', ')}</p>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant/:id" element={<RestaurantPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/stepone" element={<StepOne/>}/>
                <Route path="/businessdetail" element={<BusinessDetial/>} />
                <Route path="/businesslocation" element={<BusinessLocation/>} />
                <Route path="/businessdocs" element={<BusinessDocs/>} />
                <Route path="/restrauntpage" element={<RestaurantPagee/>} />
                {/* <Route path="/restaurant/:id" element={<RestaurantPagee />} /> */}
            </Routes>
        </Router>
    );
};

export default App;