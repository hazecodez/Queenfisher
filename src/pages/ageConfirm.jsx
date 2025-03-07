import { useNavigate } from "react-router-dom";

export default function ageConfirm() {
  const navigate = useNavigate();
  function confirmAge() {
    localStorage.setItem("legallyAged", "true");
    navigate("/terms");
  }
  function ifNo() {
    navigate("/sorry");
  }
  return (
    <div className="bg-white flex justify-center h-[250px] mt-18 opacity-80 pt-8 pb-8 pr-4 pl-6 rounded-4xl shadow-lg w-72 text-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="custom-heading text-md font-bold uppercase pt-4">
          are you above the legal age of drinking in your state ?
        </h2>

        <div className="flex gap-10">
          <button
            onClick={confirmAge}
            className="mt-6 px-4 w-20 text-white uppercase font-bold rounded bg-[#CC3C3C] cursor-not-allowed"
          >
            yes
          </button>
          <button
            onClick={ifNo}
            className="mt-6 px-4 w-20 text-white uppercase font-bold rounded bg-[#CC3C3C] cursor-not-allowed"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
