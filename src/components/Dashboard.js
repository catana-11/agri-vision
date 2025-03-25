// src/components/Dashboard.js
import { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import fakeData from '../data/fakeData.json';

export default function Dashboard() {
    const [sensorData, setSensorData] = useState({});
    const [cropHealth, setCropHealth] = useState({});
    const [moistureTrends, setMoistureTrends] = useState({});
    const [marketData, setMarketData] = useState({});

    useEffect(() => {
        // Simulate fetching data
        setSensorData(fakeData.sensorData);
        setCropHealth(fakeData.cropHealth);
        setMoistureTrends(fakeData.moistureTrends);
        setMarketData(fakeData.marketData);
    }, []);

    return (
        <div>
            <h2>Farmer Dashboard</h2>
            <h3>Live Sensor Data</h3>
            <p className="box">Soil Moisture: {sensorData.moisture}%</p>
            <p className="box">Temperature: {sensorData.temperature}°C</p>
            <p className="box">pH Levels: {sensorData.ph}</p>
            <h3>Weather Forecast</h3>
            <ul className="box">
                {fakeData.weatherForecast && fakeData.weatherForecast.length > 0 ? (
                    fakeData.weatherForecast.map((forecast, index) => (
                        <li key={index}>{forecast}</li>
                    ))
                ) : (
                    <p>No weather data available.</p>
                )}
            </ul>
            <h3>Crop Health Monitoring</h3>
            <div className='image-box'>
                <h4>Health Status</h4>
                {cropHealth.labels && cropHealth.datasets ? (
                    <Pie data={cropHealth} />
                ) : (
                    <p>Loading crop health data...</p>
                )}
            </div>
            <h3>Graphical Insights</h3>
            {moistureTrends.labels && moistureTrends.datasets ? (
                <Line data={moistureTrends} className='image-box' />
            ) : (
                <p>Loading moisture trend data...</p>
            )}
            <h3>Market Trends</h3>
            <ul className="box">
                {marketData.transactions && marketData.transactions.length > 0 ? (
                    marketData.transactions.map((transaction, index) => (
                        <li key={index}>
                            {transaction.date}: {transaction.quantity} kg of {transaction.product} sold at ₹{transaction.price} per kg.
                        </li>
                    ))
                ) : (
                    <p>No market data available.</p>
                )}
            </ul>
        </div>
    );
}