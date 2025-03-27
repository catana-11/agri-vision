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
                <h2>Surrounding market place</h2>
                <div className="education-resources">
                    <div className="resource">
                        <h3><u>Tracktor for sale </u></h3>
                        <div className="video-box"><img src="tracktor.webp" alt="Video" /></div>
                    </div>
                    <div className="resource">
                        <h3><u>Battery operated pesticide sprayer </u></h3>
                        <div className="video-box"><img src="spray.jpg" alt="Video" /></div>
                    </div>
                    <div className="resource">
                        <h3><u>Organic Seeds</u></h3>
                        <div className="video-box"><img src="organic.jpg" alt="Crop Rotation" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}