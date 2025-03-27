import fakeData from '../data/fakeData.json';

export default function MarketTracking() {
    return (
        <div>
            <h2>Farm-to-Market Tracking</h2>
            <br></br>
            <h4>Showcasing how farm produce moves from Farmer → Distributor → Retailer.</h4>
            <div className='image-box'>
                <img src="qrcode.jpeg" alt="QR Code for traceability" className='qr-box' />
            </div>
            
            <div>
                <h3>Recent Transactions</h3>
                <ul className='weather-box'>
                    {fakeData.marketData.transactions.map((transaction, index) => (
                        <li key={index}>
                            {transaction.date}: {transaction.quantity} kgs of {transaction.product} sold at ₹{transaction.price} per kg.
                        </li>
                    ))}
                </ul>
            </div>
            
            <br></br>
            <hr color="black"></hr>

            <div className="container">
                <h2>Average rates at nearest markets</h2>
                <div className="grid">
                    <div className="box">Tomato: ₹20 per kg</div>
                    <div className="box">Carrots: ₹80 per kg</div>
                    <div className="box">Wheat: ₹70 per kg </div>
                    <div className="box">Sugarcane: ₹5000 per tonne</div>
                </div>
            </div> {/* Missing div closing tag added here */}
        </div>
    );
}
