import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Building2, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [, setIsSuccess] = useState(false); // Track if the message was sent successfully

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;

        if (name === 'phone' && value.length > 0 && !/^\d{10}$/.test(value)) {
            setError('Phone number must be exactly 10 digits');
        } else if (name === 'email' && value.length > 0 && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // Validate phone number is exactly 10 digits
        if (!/^\d{10}$/.test(formData.phone)) {
            alert('Phone number must be exactly 10 digits');
            return;
        }

        // Validate email address format
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        emailjs.send(
            'service_nwcn3jq',  // replace with your service ID
            'template_p892aas', // replace with your template ID
            {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            },
            'aJu5iuMz5ZA9cC1rA'  // replace with your actual public key
        )
            .then((response: { status: any; text: any }) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');

                // Reset form data after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });

                setIsSuccess(true); // Set success state to true
            })
            .catch((error: any) => {
                console.log('FAILED...', error);
                alert('Message failed to send.');
                setIsSuccess(false); // Set success state to false in case of failure
            });
    };

    return (
        <>
            <Navbar />

            <main className='bg-[#f1f5fa] mb-11 lg:p-24 p-3'>
                <h2 className="font-semibold pb-5 lg:text-4xl text-[22px]">Contact to Lucky Dream Home</h2>

                <div className="flex flex-col md:flex-row bg-white shadow-md">
                    <div className="md:w-1/2 p-8 md:p-16 bg-gray-200">
                        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
                        <p className="text-gray-600 mb-8">
                            Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Building2 className="text-gray-400" size={45}/>
                                <div>
                                    <span className='font-bold'>Building Address: </span>
                                    <p>2, Floor-GRD, Plot -336, Kazi Compound, Balashet Madurkar Marg, Elphistone RLY STN (W), Delisle Road Mumbai-400013</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="text-gray-400" />
                                <a
                                    href="tel:9076469351"
                                    className="relative inline-block border-b-2 border-transparent hover:border-primary transition duration-300"
                                >
                                    9076469351
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Mail className="text-gray-400" />
                                <a
                                    href="mailto:luckydreamh@gmail.com">
                                    luckydreamh@gmail.com
                                </a>
                            </div>
                            <div className="mt-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3772.276909451308!2d72.83339197497558!3d19.007515882182982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2%2C%20Floor-GRD%2C%20Plot%20-336%2C%20Kazi%20Compound%2C%20Balashet%20Madurkar%20Marg%2C%20Elphistone%20RLY%20STN%20(W)%2C%20Delisle%20Road%20Mumbai-400013!5e0!3m2!1sen!2sin!4v1733218392646!5m2!1sen!2sin"
                                    width="100%"
                                    className='shadow-md'
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-16">
                        <form className="space-y-6" onSubmit={sendEmail}>
                            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
                                <div className="flex-1">
                                    <label htmlFor="first-name" className="block text-sm font-bold text-gray-700 mb-1">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="last-name" className="block text-sm font-bold text-gray-700 mb-1">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {error && error.includes('email') && <p className="text-red-500 text-sm">{error}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {error && error.includes('Phone') && <p className="text-red-500 text-sm">{error}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-[#f7b245] hover:bg-[#fbc56f] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ContactForm;
