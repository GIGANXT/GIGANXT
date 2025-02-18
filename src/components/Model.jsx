import React from "react";

const Model = ({ isVisible, handleClose, data }) => {
  if (!isVisible || !data) return null; // Ensure data is available to display

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-[600px] flex flex-col bg-white p-4 rounded-2xl shadow-lg">
        {/* Close button */}
        <button
          className="text-black text-xl place-self-end hover:text-gray-600 transition-colors"
          onClick={handleClose}
        >
          ×
        </button>

        <div className="text-black px-6 pb-6">
          {/* Dynamically render the selected benefit data */}
          <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
          <p className="mb-4">{data.text}</p> {/* Displaying the benefit text */}

          {/* Render the process steps if available */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">{data.head_1}</h2>
            <ul className="list-disc pl-6">
              {data.process && data.process.map((step, index) => (
                <li key={index} className="mb-2">
                  <strong>{step.stage}:</strong> {step.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
