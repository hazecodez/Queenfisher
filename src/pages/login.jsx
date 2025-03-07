import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    state: "",
    city: "",
    email: "",
  });
  const [error, setError] = useState({
    name: false,
    number: false,
    state: false,
    city: false,
    email: false,
  });

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateNumber = (number) => {
    return /^[0-9]{10}$/.test(number);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError((prev) => ({
      ...prev,
      [name]:
        name === "email" ? !validateEmail(value) :
        name === "number" ? !validateNumber(value) :
        name === "state" ? !indianStates.includes(value) :
        value.trim() === "",
    }));
  };

  const isFormValid =
    formData.name &&
    formData.number &&
    formData.state &&
    formData.city &&
    formData.email &&
    !error.name &&
    !error.number &&
    !error.state &&
    !error.city &&
    !error.email;

    const handleNext = () => {
      if (!isFormValid) return;
    
      // Save form data to localStorage
      localStorage.setItem("formCompleted", "true");
      localStorage.setItem("userData", JSON.stringify(formData));
    
      // Navigate to Congrats page
      navigate("/congrats", { state: formData });
    };
    

  return (
    <div className="bg-white mt-40 h-[550px] opacity-80 pt-8 pb-8 pr-4 pl-6 rounded-4xl shadow-lg w-72 text-center">
      <h2 className="custom-heading text-xl font-bold uppercase text-[#461072] mt-12">Tell us a little bit about yourself</h2>
      <div className="flex justify-center">
      <hr className="text-[#461072] w-32 mt-2"/>
      </div>
      
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="mt-3 w-full p-2 bg-white rounded-xl uppercase outline-none"
      />
      {error.name && <p className="text-[#CC3C3C] text-sm">Name is required.</p>}

      <input
        type="number"
        name="number"
        placeholder="Phone Number"
        value={formData.number}
        onChange={handleChange}
        className="mt-3 w-full p-2 rounded-xl uppercase outline-none"
      />
      {error.number && <p className="text-[#CC3C3C] text-sm">Enter a valid 10-digit phone number.</p>}

      <select
        name="state"
        value={formData.state}
        onChange={handleChange}
        className="mt-3 w-full p-2 bg-white rounded-xl uppercase outline-none"
      >
        <option value="">State</option>
        {indianStates.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      {error.state && <p className="text-[#CC3C3C] text-sm">Select a valid Indian state.</p>}

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="mt-3 w-full p-2 bg-white rounded-xl uppercase outline-none"
      />
      {error.city && <p className="text-[#CC3C3C] text-sm">City is required.</p>}

      <input
        type="email"
        name="email"
        placeholder="Email ID"
        value={formData.email}
        onChange={handleChange}
        className="mt-3 w-full p-2 bg-white rounded-xl uppercase outline-none"
      />
      {error.email && <p className="text-[#CC3C3C] text-sm">Enter a valid email address.</p>}

      <button
        onClick={handleNext}
        className={`mt-6 px-6 py-1  rounded text-white uppercase font-bold ${isFormValid ? "bg-[#CC3C3C]" : "bg-gray-400 cursor-not-allowed"}`}
        disabled={!isFormValid}
      >
        Next
      </button>
      </div>
  );
}

export default Login;
