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
            <div className="wheat-box"><img src="wheat.jpg" alt="Weather" /></div>
                <h2>Grain Report: Wheat</h2>
                <p className='weather-box'>Rating: ★★★★☆</p>
                <h3>Grain Condition</h3>
                <p className='weather-box'>The wheat is in good condition with a shelf life of approximately 34 days.</p>
                <h3>Recommendations</h3>
                <p className='weather-box'>One of the primary concerns in wheat storage is moisture control. Wheat is highly susceptible to spoilage when exposed to high humidity levels. Excess moisture can lead to the growth of mold and fungi, which not only degrade the quality of the grain but can also produce mycotoxins harmful to human health. Therefore, maintaining optimal moisture levels—typically around 12-14%—is vital for preserving the integrity of the grain. This can be achieved through the use of moisture meters and proper ventilation in storage facilities.

Temperature is another critical factor influencing the storage of wheat. High temperatures can accelerate the deterioration of wheat quality, leading to a decrease in nutritional value and an increase in the likelihood of pest infestations. Ideal storage temperatures range between 10°C to 15°C (50°F to 59°F), which can significantly extend the shelf life of wheat. Implementing temperature control measures, such as air conditioning or refrigeration, can help maintain these optimal conditions, especially in warmer climates.

Pest management is also a significant aspect of wheat storage. Insects such as weevils and grain moths can cause substantial damage to stored wheat, leading to significant economic losses. Effective pest control strategies, including regular inspections, the use of insect traps, and the application of safe pesticides, are essential to protect stored wheat from infestations. Additionally, maintaining clean storage environments and using airtight containers can help minimize the risk of pest entry.</p>
            </div>
        </div>
    );
}