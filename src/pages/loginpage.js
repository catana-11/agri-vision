import { useState } from 'react';
import Link from 'next/link';
import fakeData from '../data/fakeData.json';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Check credentials against fakeData
        if (username === fakeData.credentials.username && password === fakeData.credentials.password) {
            alert('Login successful!');
            // Store login state in localStorage
            localStorage.setItem('isLoggedIn', 'true');
            router.push('/'); // Redirect to homepage after successful login
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <Link href="/">Back to Home</Link>
        </div>
    );
}