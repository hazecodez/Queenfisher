import React from "react";

export default function sorry() {
  return (
    <div className="bg-white flex justify-center h-[250px] mt-18 opacity-80 pt-8 pb-8 pr-4 pl-6 rounded-4xl shadow-lg w-72 text-center">
      <div className="flex flex-col justify-center items-center">
        <p className="mt-2 uppercase font-bold text-md ">
          unfortunately, due to your age or location we cannot let you enter our
          site at this time
        </p>
      </div>
    </div>
  );
}
