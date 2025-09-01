import React from "react";

// Small icon for progress indicator
const ProgressIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="h-5 w-5"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <path d="M7 15v-4M12 15V7M17 15v-2" strokeLinecap="round" />
  </svg>
);

const AddBusinessScreen = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="w-full bg-white py-4 px-6 md:px-10 flex items-center">
        {/* <span className="text-pink-600 font-semibold text-xl">panda</span> */}
        <span className="ml-2 bg-pink-600 text-white font-semibold px-2 py-1 text-sm rounded-md">
          partner
        </span>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center p-6 md:p-12">
        <div className="bg-white rounded-lg p-6 md:p-12 w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-12 shadow-lg">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-pink-600 font-semibold text-base">Step 1</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-1 leading-tight">
              Add your business
            </h1>
            <p className="text-gray-600 mt-4 text-lg max-w-md">
              Add your business information so we can create your contract and
              you can start earning more.
            </p>

            {/* What we need list */}
            <div className="mt-8 space-y-3">
              <h2 className="font-semibold text-lg text-gray-800">
                What do we need from you
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Details of your business</li>
                <li>Location of your business</li>
                <li>Legal and Sales Tax details</li>
                <li>Banking Details</li>
                <li>Choose the best plan for your business</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="https://i.imgur.com/gYfT8s2.png"
              alt="Person at computer illustration"
              className="max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 md:px-10 flex justify-between items-center">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm py-2 px-3 rounded-md">
          <ProgressIcon />
          <span>See Progress</span>
        </button>

        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
            Back
          </button>
          <button className="bg-pink-600 text-white font-semibold py-2 px-8 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-colors">
            Continue
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AddBusinessScreen;
