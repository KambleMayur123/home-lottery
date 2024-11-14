// components/UserForm.tsx
import { useState } from 'react';

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
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                </div>
                <div>
                    <label>Mobile:</label>
                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address:</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <button type="submit">Save User</button>
            </form>
        </main>
    </>

    );
};

export default UserForm;
