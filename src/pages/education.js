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
                <h2>Educational Resources</h2>
                <div className="education-resources">
                    <div className="resource">
                        <h3>Education Planning and Home Science</h3>
                        <div className="video-box"><img src="farmer1.avif" alt="Video" /></div>
                    </div>
                    <div className="resource">
                        <h3>Warehouse Maintenance</h3>
                        <div className="video-box"><img src="farmer2.jpg" alt="Video" /></div>
                    </div>
                    <div className="resource">
                        <h3>Crop Rotation Techniques</h3>
                        <div className="video-box"><img src="farmer3.jpg" alt="Crop Rotation" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}