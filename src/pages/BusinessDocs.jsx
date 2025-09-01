// import React from 'react'

// const BusinessDocs = () => {
//   return (
//     <>
    
//     </>
//   )
// }

// export default BusinessDocs


import React from "react";

const BusinessDocs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="w-full bg-white py-4 px-6 md:px-10 flex items-center">
        {/* <span className="text-pink-600 font-semibold text-xl">panda</span> */}
        <span className="ml-2 bg-pink-600 text-white font-semibold px-2 py-1 text-sm rounded-md">
          partner
        </span>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-start justify-center p-6 md:p-12">
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Upload Business Owner ID (Front and Back)
          </h1>
          <p className="text-gray-600 mt-2 mb-6 text-sm md:text-base">
            We need to verify your identity. Please upload front and back of your ID card.{' '}
            <a href="#" className="text-pink-600 font-medium hover:underline">
              See example
            </a>
          </p>

          {/* Radio Buttons */}
          <div className="mb-6">
            <p className="font-medium text-gray-800">
              Does your restaurant have Sales Tax Registration Number (SNTN)?{' '}
              <span className="text-pink-600">*</span>
            </p>
            <div className="mt-3 flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sntn"
                  defaultChecked
                  className="text-pink-600 focus:ring-pink-500"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sntn"
                  className="text-pink-600 focus:ring-pink-500"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* ID Proof Dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Select the ID proof type <span className="text-pink-600">*</span>
            </label>
            <select className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-pink-500 focus:border-pink-500 bg-white">
              <option>Select the ID proof type</option>
            </select>
          </div>

          {/* File Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828L18 9.828M7 7h.01M7 7a4 4 0 014-4h2a4 4 0 014 4v0a4 4 0 01-4 4H7z"
              />
            </svg>
            <p className="mt-4 text-gray-600 text-sm">
              <span className="font-medium">Drag your file</span>
              <br />
              accepted formats .jpg, .png, .jpeg, .pdf, .tiff, .docx, .xlsx with a maximum size of 4MB
            </p>
            <button
              type="button"
              className="mt-4 text-pink-600 font-medium hover:underline"
            >
              Upload from your device
            </button>
          </div>
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

export default BusinessDocs;
