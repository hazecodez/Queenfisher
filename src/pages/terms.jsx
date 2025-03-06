import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Terms() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("agreedTerms") === "true") {
      navigate("/login");
    }
  }, [navigate]);

  const handleNext = () => {
    if (isChecked1 && isChecked2) {
      localStorage.setItem("agreedTerms", "true");
      navigate("/login");
    }
  };

  return (
    <div className="bg-white flex flex-col justify-center opacity-80 h-[250px] pt-8 pb-8 pr-4 pl-6 rounded-4xl shadow-lg w-72 text-center">
      <div className="mt-4 text-left font-bold uppercase">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={(e) => setIsChecked1(e.target.checked)}
            className="appearance-none w-5 h-3 bg-gray-300 cursor-pointer checked:bg-[#461072] transition-all"
          />
          <span className="text-xs text-gray-600">
            I accept the terms & conditions, privacy & cookie policy
          </span>
        </label>

        <label className="flex items-start space-x-2 mt-3">
          <input
            type="checkbox"
            checked={isChecked2}
            onChange={(e) => setIsChecked2(e.target.checked)}
            className="appearance-none  w-6 h-3 bg-gray-300 cursor-pointer checked:bg-[#461072] transition-all"
          />
          <span className="text-xs text-gray-600">
            I agree that I am above the legal drinking age applicable in my state
          </span>
        </label>
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={handleNext}
          disabled={!(isChecked1 && isChecked2)}
          className={`mt-6 px-4 rounded text-white uppercase font-bold w-24 ${
            isChecked1 && isChecked2
              ? "bg-[#CC3C3C]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Terms;
