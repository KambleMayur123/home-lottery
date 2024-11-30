import { useState } from 'react';
import Button from './ui/button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserForm: React.FC = () => {

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    mobileNumber: "",
    address: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch("//index.php", { // Adjust path to your index.php file
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); // Parse JSON response from the server

      if (response.ok && result.success) {
        alert("Form submitted successfully!");
        setFormData({ name: "", dateOfBirth: "", mobileNumber: "", address: "" });
      } else {
        alert(result.error || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="lg:mt-0 mt-8 lg:p-8">
        <div className="lg:p-8 pt-8 pb-8 text-center">
          <h2 className="lg:text-[2.5rem] text-[22px] mb-2 font-bold">
            Welcome to Lucky Dream Home!
          </h2>
          <span>Fill in the form with your details to receive updates and offers. </span>
        </div>
        <form
          className="lg:max-w-[50%] w-full mx-auto lg:p-8 p-4 bg-white rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 lg:flex space-x-4">
            <div className="lg:w-1/2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="dob">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="lg:w-1/2 !m-0 lg:!ml-2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="mobile">
                Mobile:
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <span>We&apos;ll contact you on this number when you win.</span>
          </div>

          <Button
            type="submit"
            className="w-full py-2 bg-[#ED702E] text-white font-semibold rounded-lg hover:bg-[#f7b245] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </Button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default UserForm;
