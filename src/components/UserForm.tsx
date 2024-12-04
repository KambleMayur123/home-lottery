import { useState } from 'react';
import Button from './ui/button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './ui/spinner';


interface UserFormProps {
  onSubmitSuccess: () => void; // Callback for successful submission
}

const UserForm: React.FC<UserFormProps> = ({ onSubmitSuccess }) => {
  const [error, setError] = useState(''); // Error state

  const [isSubmitting, setIsSubmitting] = useState(false); // Manage the loading state
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    mobileNumber: '',
    address: '',
    annualIncome: '',
    ownHouse: false,
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'annualIncome' && parseInt(e.target.value) > 800000) {
      setError('Annual income cannot exceed ₹800,000.');
    } else {
      setError(''); // Clear error when income is valid
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (parseInt(formData.annualIncome) > 800000) {
      setError('Annual income cannot exceed ₹800,000.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("//localhost/index.php", { // Adjust path to your index.php file
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); // Parse JSON response from the server

      if (response.ok && result.success) {
        alert("Form submitted successfully!");
        setFormData({ name: "", dateOfBirth: "", mobileNumber: "", address: "", annualIncome: "", ownHouse: false });
        onSubmitSuccess(); // Notify parent of successful submission

      } else {
        alert(result.error || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
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
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="annualIncome">
              Annual Income (Rs.):
            </label>
            <input
              type="number"
              id="annualIncome"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>} {/* Error message */}

          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="ownHouse"
                checked={formData.ownHouse}
                onChange={handleChange}
                required
                className="mr-2"
              />
              I do not own a house anywhere in my name
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="agreesToTerms"
                className="mr-2"
                required
              />
              <span>
                I agree to the following terms and conditions:
                <ul className="text-sm mt-2 text-gray-600 list-disc">
                  <li>Only those who do not own a house anywhere in their name and whose income is less than Rs. 8 lakhs will be eligible.</li>
                  <li>The lottery holder can withdraw at any time before the draw and get a refund.</li>
                  <li>The lottery cannot be withdrawn after the draw.</li>
                </ul>
              </span>
            </label>
          </div>

          <div className="mb-4">
            <span>We&apos;ll contact you on this number when you win.</span>
          </div>

          <Button
            type="submit"
            className="w-full py-2 bg-[#ED702E] text-white font-semibold rounded-lg hover:bg-[#f7b245] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isSubmitting ? (
              <Spinner size="sm" className="text-white mx-auto" />
            ) : (
              'Submit'
            )}
          </Button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default UserForm;
