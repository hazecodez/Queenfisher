import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    state: "",
    city: "",
    email: "",
  });

  const indianStates = ["Goa", "Maharashtra"];
  const indianCities = ["Mumbai", "Pune","Goa"];

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateNumber = (number) => /^[0-9]{10}$/.test(number);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (!formData.name.trim()) return toast.error("Name is required.");
    if (!validateNumber(formData.number))
      return toast.error("Enter a valid 10-digit phone number.");
    if (!indianStates.includes(formData.state))
      return toast.error("Select a valid Indian state.");
    if (!indianCities.includes(formData.city)) return toast.error("City is required.");
    if (!validateEmail(formData.email))
      return toast.error("Enter a valid email address.");

    localStorage.setItem("formCompleted", "true");
    localStorage.setItem("userData", JSON.stringify(formData));

    navigate("/congrats", { state: formData });
  };

  return (
    <div className="bg-white mt-32 p-6 opacity-90 rounded-3xl shadow-lg w-80 mx-auto text-center">
      <h2 className="text-xl font-bold uppercase text-[#461072]">
        Tell us a little bit about about yourself
      </h2>
      <hr className="border-[#461072] w-32 mx-auto mt-2" />

      <div className="space-y-3 mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded-xl uppercase outline-none"
        />

        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          className="w-full p-2 rounded-xl uppercase outline-none"
        />

        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 rounded-xl uppercase outline-none"
        >
          <option value="">State</option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 rounded-xl uppercase outline-none"
        >
          <option value="">City</option>
          {indianCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        {/* <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 rounded-xl uppercase outline-none"
        /> */}

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded-xl uppercase outline-none"
        />

        <button
          onClick={handleNext}
          className="w-24 mt-4 rounded-md text-white uppercase font-bold bg-[#CC3C3C] hover:bg-[#a83232] transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Login;
