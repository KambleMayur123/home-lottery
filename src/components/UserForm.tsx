import { useState } from 'react';
import Button from './ui/button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface UserFormProps {
  onFormSubmit: () => void; // Accepting the callback as a prop
}

const UserForm: React.FC<UserFormProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    mobile: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    dob: '',
    mobile: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error for the field on change
  };

  const validate = () => {
    const newErrors: typeof errors = { name: '', dob: '', mobile: '', address: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required.';
    }
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits.';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required.';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const response = await fetch('/api/saveUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      onFormSubmit(); // Trigger the callback to indicate form submission
    } else {
      alert(result.message || 'Failed to save user');
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
          onSubmit={handleSubmit}
          className="lg:max-w-[50%] w-full mx-auto lg:p-8 p-4 bg-white rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4 lg:flex space-x-4">
            <div className="lg:w-1/2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="dob">
                Date of Birth:
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
            </div>

            <div className="lg:w-1/2 !m-0 lg:!ml-2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="mobile">
                Mobile:
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
              Address:
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <span>We'll contact you on this number when you win.</span>
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
