import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpImage from '../images/bd_hero_image.png'

export default function SignUp() {
    const [formData, setFormData] = useState({
        businessName: "",
        firstName: "",
        lastName: "",
        email: "",
        businessType: "",
        mobile: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you could call an API
    };

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-800">
            {/* Left Form Section */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
                <h2 className="text-3xl font-bold mb-2 text-[#FF006B    ]">
                    Register your Business with us!
                </h2>
                <p className="text-gray-600 mb-6 text-center">
                    Sign up easily, showcase your menu, and start reaching new customers
                </p>

                {/* Proper form element */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-4"
                >
                    <h3 className="text-xl font-semibold text-gray-700">
                        Ready to boost your sales?
                    </h3>

                    <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your Business Name *"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#cbf1c2] outline-none"
                    />
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Full Name *"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#cbf1c2] outline-none"
                        />
                        {/* <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name *"
                            className="w-1/2 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#cbf1c2] outline-none"
                        /> */}
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Business Email *"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#cbf1c2] outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Business Address *"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#cbf1c2] outline-none"
                    />

                    <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#cbf1c2] outline-none text-gray-500"
                    >
                        <option value="">Business type *</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Cafe&Bakery">Cafe</option>
                        <option value="Grocery Store">Shop</option>
                        <option value="Fast Food">Delivery</option>
                        <option value="Shops">Islamic Books</option>
                        {/* <option value="Caterers">Bakery</option> */}
                    </select>

                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#cbf1c2] outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#FF006B] text-white py-2 rounded-lg hover:bg-opacity-90 transition"
                    >
                        Get started
                    </button>

                    <p className="text-sm text-gray-600 mt-3 text-center">
                        Already have an account?{" "}
                        <Link to="/" className="text-[#21351a] hover:underline">
                            Login
                        </Link>{" "}
                        <br />
                        Do you want to be a foodpanda rider?{" "}
                        <Link to="/" className="text-[#21351a] hover:underline">
                            Click here
                        </Link>
                    </p>
                </form>
            </div>

            {/* Right Image Section */}
            <div
                className="hidden md:flex w-1/2 bg-cover bg-center rounded-l-3xl shadow-lg"
                style={{ backgroundImage: `url(${SignUpImage})` }}
            >
                {/* Empty div since background image is applied */}
            </div>
        </div>
    );
}
