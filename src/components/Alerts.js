// src/components/Alerts.js
import fakeData from '../data/fakeData.json';

export default function Alerts() {
    return (
        <div>
            <h2>Alerts & Notifications</h2>
            <ul className='weather-box'>
                {fakeData.alerts.map((alert, index) => (
                    <li key={index}>{alert}</li>
                ))}
            </ul>
        </div>
    );
}