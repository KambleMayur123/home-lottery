// components/UserForm.tsx
import { useState } from 'react';
import Button from './ui/button';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        mobile: '',
        address: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

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
        } else {
            alert(result.message || 'Failed to save user');
        }
    };

    return (<>
        <div className="mt-8 p-8">

            <div className='p-8 text-center'>
                <h2 className="text-[2.5rem] font-bold">Welcome to Lucky Dream Home!</h2>
                <span>Fill in the form with your details to receive updates and offers. </span>
            </div>
            <form onSubmit={handleSubmit} className="max-w-[50%] mx-auto p-8 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4 flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="dob">
                            Date of Birth:
                        </label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="w-1/2">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="mobile">
                            Mobile:
                        </label>
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
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
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className='mb-4'>
                    <span>We'll contact you on this number when you win.</span>
                </div>

                <Button
                    type="submit"
                    className="w-full py-2 bg-[#ED702E] text-white font-semibold rounded-lg hover:bg-[#f7b245] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </Button>
            </form>

        </div>
    </>
    );
};

export default UserForm;
