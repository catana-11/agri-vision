// src/pages/dashboard.js
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            router.push('/loginpage'); // Redirect to login if not logged in
        }
    }, [router]);
  return (
    <div>
      <Navbar />
      <div className="container">
      <Dashboard />
      </div>
    </div>
  );
}