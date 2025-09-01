import React from "react";

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    className="h-5 w-5 text-pink-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 16h-1v-4h-1m1-4h.01M12 18a6 6 0 100-12 6 6 0 000 12z"
    />
  </svg>
);

const AddBusinessDetails = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="w-full bg-white py-4 px-6 md:px-10 flex items-center">
        {/* <span className="text-pink-600 font-semibold text-xl">panda</span> */}
        {/* <span className="ml-2 bg-pink-600 text-white font-semibold px-2 py-1 text-sm rounded-md">
          partner
        </span> */}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-start justify-center p-6 md:p-12">
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            What does your business do?
          </h1>
          <p className="text-gray-600 mt-2 mb-8 text-sm md:text-base">
            Customers will be able to see this information in the foodpanda app in case they need to contact you about an order.
          </p>

          <form className="space-y-5">
            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Business name <span className="text-pink-600">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Business type <span className="text-pink-600">*</span>
              </label>
              <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-pink-500 focus:border-pink-500 bg-white">
                <option></option>
                <option>Restaurant</option>
                <option>Shop</option>
              </select>
            </div>

            {/* Business Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Business category <span className="text-pink-600">*</span>
              </label>
              <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-pink-500 focus:border-pink-500 bg-white">
                <option></option>
                <option>Restraunt</option>
                <option>Home Based</option>
              </select>
            </div>

            {/* Business Cuisine */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Business cuisine <span className="text-pink-600">*</span>
              </label>
              <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-pink-500 focus:border-pink-500 bg-white">
                <option></option>
                <option>Pakistani</option>
                <option>Asian</option>
                <option>American</option>
              </select>
            </div>

            {/* Number of Branches */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of branches <span className="text-pink-600">*</span>
              </label>
              <div className="relative mt-1">
                <input
                  type="number"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-pink-500 focus:border-pink-500"
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                </div>
              </div>
            </div>

            {/* Mobile Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile phone number <span className="text-pink-600">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                id="same-phone"
                type="checkbox"
                className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
              />
              <label htmlFor="same-phone" className="ml-2 block text-sm text-gray-800">
                My Business Phone is the same as my Mobile Number
              </label>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 md:px-10 flex justify-between items-center">
        <button className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
          Back
        </button>
        <div className="flex items-center gap-2 text-pink-600 font-medium text-sm cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M4 4h16v16H4z" fill="none" />
            <path d="M7 15v-4M12 15V7M17 15v-2" strokeLinecap="round" />
          </svg>
          See Progress
        </div>
        <button className="bg-pink-600 text-white font-semibold py-2 px-8 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-colors">
          Continue
        </button>
      </footer>
    </div>
  );
};

export default AddBusinessDetails;
