// src/components/MarketTracking.js
import fakeData from '../data/fakeData.json';

export default function MarketTracking() {
    return (
        <div>
            <h2>Farm-to-Market Tracking</h2>
            <p>Showcasing how farm produce moves from Farmer → Distributor → Retailer.</p>
            <div className='image-box'>
            <img src="qrcode.jpeg" alt="QR Code for traceability" className='qr-box' />
            </div>
            
            <h3>Recent Transactions</h3>
            <ul className='weather-box'>
                {fakeData.marketData.transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.date}: {transaction.quantity} kgs of {transaction.product} sold at ₹{transaction.price} per kg.
                    </li>
                ))}
            </ul>
        </div>
    );
}