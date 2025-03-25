import fakeData from '../data/fakeData.json';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Line } from 'react-chartjs-2';

export default function DevicePage() {
    const router = useRouter();
    const [deviceStatus, setDeviceStatus] = useState({ connected: false, battery: 0 });

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            router.push('/login'); // Redirect to login if not logged in
        } else {
            // Simulate fetching device status
            setDeviceStatus({ connected: true, battery: 75 }); // Example data
        }
    }, [router]);

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Device Status</h2>
                <div className="device-status">
                    <p>Device Status: {deviceStatus.connected ? 'Connected' : 'Disconnected'}</p>
                    <p>Battery: {deviceStatus.battery}%</p>
                </div>
                <h3>Sensor Status</h3>
                <div className="sensor-status">
                    <div className="sensor-box">
                        <h4>Temperature Sensor</h4>
                        <Line data={fakeData.temperatureTrends} />
                    </div>
                    <div className="sensor-box">
                        <h4>Humidity Sensor</h4>
                        <Line data={fakeData.humidityTrends} />
                    </div>
                    <div className="sensor-box">
                        <h4>CO2 Sensor</h4>
                        <Line data={fakeData.co2Trends} />
                    </div>
                </div>
            </div>
        </div>
    );
}