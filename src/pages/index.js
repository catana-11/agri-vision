//src/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

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
                <h2>Hi, Farmer!</h2>
                <div className="grid">
                    <div className="box">Temperature: 22°C</div>
                    <div className="box">Humidity: 45%</div>
                    <div className="box">CO2 Level: 400 ppm</div>
                    <div className="box">Detected: No pests</div>
                </div>
                <div className="message-box">Your grains are safe!</div>
                <div className="message-box">Predicted shelf life: 34 days</div>
                <div className="weather-box">
                    Today's weather: Sunny with a few clouds.
                    <div className="weather-box"><img src="sunny-cloud-pic.png" alt="Weather" /></div>
                </div>
                <br></br>
                <hr></hr>
                <h3>Agricultural News</h3>
                <ul>
                    <li><u>New pest control methods show promise.</u></li>
                    <li><u>Farmers report increased yields with new techniques.</u></li>
                    <li><u>Weather patterns changing: What it means for crops.</u></li>
                    
                </ul>
            </div>
        </div>
    );
}