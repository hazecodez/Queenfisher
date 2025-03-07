import React from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function Error() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state || {};

  const handleRetry = () => {
    navigate("/login");
  };

  const handleResubmit = () => {
    navigate("/congrats", { state: formData });
  };

  return (
    <div className="bg-white mt-48 h-[550px] opacity-80 pt-8 pb-8 pr-4 pl-6 rounded-4xl shadow-lg w-72 text-center">
      <div className="flex flex-col justify-center items-center">
        <img src="/warning.png" className="w-40 mt-12" alt="Error" />
        <h2 className="custom-heading text-xl text-[#461072] font-bold uppercase pt-4 ">
          Oops, that's a miss.
        </h2>
        <hr className="w-32 text-[#461072] mt-2" />

        <p className="uppercase font-bold text-sm mt-4 mb-2">
          would you like to try again?
        </p>
        <button
          onClick={handleRetry}
          className="px-4  bg-[#CC3C3C] text-white uppercase font-bold rounded mb-4"
        >
          Retry
        </button>
        <p className="mt-2 uppercase font-bold text-sm mb-2">
          you can still submit your entry.
        </p>
        <button
          onClick={handleResubmit}
          className="px-4 bg-[#CC3C3C] text-white uppercase font-bold rounded"
        >
          Submit
        </button>
      </div>
      </div>
  );
}
