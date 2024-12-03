// pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

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

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded mt-1"
                            required
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
