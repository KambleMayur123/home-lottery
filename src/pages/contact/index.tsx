import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Building2, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import Button from '../../components/ui/button'
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e: { preventDefault: () => void }) => {
        e.preventDefault();

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
            })
            .catch((error: any) => {
                console.log('FAILED...', error);
                alert('Message failed to send.');
            });
    };

    return (<>
        <Navbar />
        <main className='bg-[#f1f5fa] lg:mt-11 mt-[80px] mb-11 lg:p-24 p-3'>
            <h2 className="font-semibold pb-5 lg:text-4xl text-[22px]">Send us an email</h2>

            <div className="flex flex-col md:flex-row bg-white shadow-md">
                <div className="md:w-1/2 p-8 md:p-16 bg-gray-200">
                    <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
                    <p className="text-gray-600 mb-8">
                        Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Building2 className="text-gray-400" />
                            <div>
                                <p>545 Mavis Island</p>
                                <p>Chicago, IL 99191</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Phone className="text-gray-400" />
                            <p>+1 (555) 234-5678</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="text-gray-400" />
                            <p>hello@example.com</p>
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
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </main>
        <Footer />
    </>
    )
}

export default ContactForm;
