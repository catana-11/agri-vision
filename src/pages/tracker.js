import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

export default function Tracker() {
    const router = useRouter();

    // State variables to hold sensor data and user input
    const [farmSize, setFarmSize] = useState('');
    const [waterRequired, setWaterRequired] = useState(0);
    const [pesticideRequired, setPesticideRequired] = useState(0);
    const [insecticideRequired, setInsecticideRequired] = useState(0);
    const [fertilizerRequired, setFertilizerRequired] = useState(0);
    const [loading, setLoading] = useState(false);

    // Check if the user is logged in
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            router.push('/loginpage'); // Redirect to login if not logged in
        }
    }, [router]);

    // Handle form submission for calculating requirements
    const handleCalculate = () => {
        setLoading(true);

        // Show loading for 1 second
        setTimeout(() => {
            // Simple mock calculations (these can be replaced with actual sensor data/logic)
            const waterPerAcre = 50; // Liters per acre
            const pesticidePerAcre = 0.5; // Liters per acre
            const insecticidePerAcre = 0.3; // Liters per acre
            const fertilizerPerAcre = 40; // Kilograms per acre

            // Calculate based on farm size entered
            const totalWaterRequired = waterPerAcre * farmSize;
            const totalPesticideRequired = pesticidePerAcre * farmSize;
            const totalInsecticideRequired = insecticidePerAcre * farmSize;
            const totalFertilizerRequired = fertilizerPerAcre * farmSize;

            // Update state with calculated values
            setWaterRequired(totalWaterRequired);
            setPesticideRequired(totalPesticideRequired);
            setInsecticideRequired(totalInsecticideRequired);
            setFertilizerRequired(totalFertilizerRequired);

            // Stop loading after calculations
            setLoading(false);
        }, 1000); // Show loading for 1 second
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Hi, Farmer!</h2>

                <hr />

                <h3>Water, Pesticide, Insecticide & Fertilizer Usage Tracker</h3>

                {/* Input Form for Farm Size */}
                <div className='login-container'>
                    <label htmlFor="farmSize">Enter Farm Size (in acres):</label>
                    <input
                        type="number"
                        id="farmSize"
                        value={farmSize}
                        onChange={(e) => setFarmSize(e.target.value)}
                        min="1"
                        placeholder="Enter farm size in acres"
                    />
                    <button onClick={handleCalculate}>Calculate</button>
                </div>

                {/* Show results if available */}
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {farmSize && (
                            <div className="results">
                                <h4>According to current sensor data:</h4>
                                <ul className='video-box'>
                                    <li>Water Required: {waterRequired} Liters</li>
                                    <li>Pesticide Required: {pesticideRequired} Liters</li>
                                    <li>Insecticide Required: {insecticideRequired} Liters</li>
                                    <li>Fertilizer Required: {fertilizerRequired} Kilograms</li>
                                </ul>
                            </div>
                        )}
                    </>
                )}

                <hr />
            </div>
        </div>
    );
}
