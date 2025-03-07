import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Congrats() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {};
  const [loading, setLoading] = useState(false);

  const handleExportToGoogleSheets = async () => {
    setLoading(true);
    console.log("Form Data:", formData);

    const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors", // Disables CORS
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      navigate("/thanks"); // Go to success page
    } catch (error) {
      console.error("Error:", error);
      navigate("/error"); // Go to error page
    }
  };

  return (
    <div className="flex mt-40 flex-col bg-white h-[450px] opacity-80 pt-8 pb-8 pr-4 pl-6 rounded-4xl shadow-lg w-72 text-center">
      <div className="flex flex-col justify-center items-center pt-8">
        <img src="/congrats.png" className="w-48" alt="" />
        <hr className="w-32 text-[#461072]" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className="custom-heading text-2xl font-bold uppercase pt-4">
          Congratulations!
        </h2>
        <p className="mt-1 uppercase font-bold text-sm">
          That's quite the vibe check.
        </p>
        {loading ? (
          <button className="mt-6 px-4 w-40 text-white uppercase font-bold rounded bg-gray-400 cursor-not-allowed">
            Submitting...
          </button>
        ) : (
          <button
            onClick={handleExportToGoogleSheets}
            className="mt-6 px-4 w-24 text-white uppercase font-bold rounded bg-[#CC3C3C]"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
