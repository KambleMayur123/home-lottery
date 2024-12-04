// pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaUserLarge } from "react-icons/fa6";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        try {
            const response = await fetch('//localhost/login.php', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                router.push('/dashboard'); // Redirect to dashboard on success
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong');
        }
    };

    return (<>
        <div className="flex justify-center items-center h-screen bg-[#013567]">
            <div className="bg-white rounded-lg shadow-lg w-96 max-w-full">
                <div className="bg-[#008cc9]">
                    <h2 className="font-semibold text-center text-white mb-6 text-xl p-3">Admin Login</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-[#e3e3e3] flex justify-center items-center rounded-[25px] h-[90px] w-[90px]'>
                        <FaUserLarge  size={40} color="#919191" />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                    <div className="mb-5">
                        <label className="block text-lg font-medium text-gray-700 mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-lg font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
                    <button
                        type="submit"
                        className="w-full bg-[#002f47] text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    </>

    );
};

export default Login;
