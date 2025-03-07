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
    <div className="bg-white mt-10 flex flex-col justify-start h-auto max-h-[450px] overflow-y-auto opacity-80 p-6 rounded-4xl shadow-lg w-72 text-center">
      <div className="flex flex-col uppercase pb-6">
        {/* Title is now visible */}
        <h2 className="text-lg font-bold pb-4">Terms & Conditions</h2>
        <p className="pb-4 text-xs">
          Thank you for your interest in participating in the contest. United
          Breweries Limited (UBL) respects your privacy and in your interest
          informs you that it may process data about you that can be termed as
          your personal data.
        </p>
        <p className="pb-4 text-xs">
          We hereby notify you that through your participation in this contest,
          we will collect your full name and phone number. The personal data so
          collected will be used by us for the following purposes:
        </p>
        <ul className="text-left list-disc list-inside text-gray-600 text-xs mt-2">
          <li>Send a message confirming your entry.</li>
          <li>Authenticate your identity (only for winners).</li>
          <li>Communicate to you the result of your contest entry.</li>
          <li>Issue event tickets to the winners (where applicable).</li>
          <li>
            Provide you with an assured discount coupon for the KF.LIFE Online
            Merchandise Store.
          </li>
          <li>
            Inform you about Kingfisher Packaged Drinking Water sponsored events
            in the future.
          </li>
        </ul>
        <p className="pb-6 text-xs pt-6">
          If you wish for us to stop processing your personal data or in case of
          any complaints with respect to our processing of your personal data,
          you may reach out to us at privacyoffice@ubmail.com.
        </p>
        <p className="text-xs">
          By clicking the ‘I Agree’ box, you consent to the use of your personal
          data for the purpose described above.
        </p>
      </div>
  
      <div className="text-left font-bold uppercase">
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
            className="appearance-none w-6 h-3 bg-gray-300 cursor-pointer checked:bg-[#461072] transition-all"
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
