import React from "react";

// A simple SVG component for the eye icon.
const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const Welcome = () => {
  const steps = [
    { number: 1, title: "Add your business" },
    { number: 2, title: "Verify your business" },
    { number: 3, title: "Open your business" },
    { number: 4, title: "Open your business" },
  ];

  return (
    // Main container now has min-h-screen but no max-width, allowing full width for header/footer
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* ## Full-Width Header ## */}
      <header className="w-full bg-white shadow-sm py-4 px-6 md:px-10 flex items-center">
        <span className="bg-pink-600 text-white font-bold py-2 px-4 text-sm">
          
        </span>
        {/* The other header elements (Work, Relauch, etc.) from the screenshot are not in the main design,
            so I'm not including them here to keep the focus on the main content. 
            If you need them, they would go here. */}
      </header>

      {/* ## Main Content Area ## */}
      {/* The main content is centered and has a max-width, matching the screenshot's internal card */}
      <main className="  flex-grow flex items-center justify-center p-4 md:p-8">  
        <div className=" bg-white rounded-lg p-6 md:p-12 w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-12 shadow-lg">
          {/* ## Left Side: Text Content ## */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-pink-600 font-semibold text-base">Welcome</p>
            <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 mt-1 leading-tight">
              Thank you for signing up
            </h1>
            <p className="text-gray-600 mt-4 text-lg max-w-md">
              Congratulations! You have successfully registered with us. Below
              you will see the required details we need from you.
            </p>

            {/* ## Steps Section ## */}
            <div className="mt-10 space-y-7">
              {" "}
              {/* Adjusted spacing */}
              {steps.map((step) => (
                <div key={step.number}>
                  <p className="text-pink-600 text-sm font-bold uppercase tracking-wide">
                    Step {step.number}
                  </p>
                  <p className="text-gray-800 text-xl font-semibold mt-1">
                    {step.title}
                  </p>{" "}
                  {/* Larger step titles */}
                </div>
              ))}
            </div>
          </div>

          {/* ## Right Side: Illustration ## */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            {/* NOTE: This is a placeholder image. Replace the 'src' with your actual illustration. */}
            <img
              src="https://i.imgur.com/gYfT8s2.png"
              alt="Celebration illustration"
              className="max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </main>

      {/* ## Full-Width Footer ## */}
      <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 md:px-10 flex justify-between items-center">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm py-2 px-3 rounded-md">
          <EyeIcon />
          <span>See Progress</span>
        </button>
        <button className="bg-pink-600 text-white font-semibold py-3 px-10 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-colors">
          Continue
        </button>
      </footer>
    </div>
  );
};

export default Welcome;

// import React from 'react'

// const Welcome = () => {
//   return (
//     <>
//     <div className='w-full bg-gray-100'>

//     </div>
//     </>
//   )
// }

// export default Welcome
