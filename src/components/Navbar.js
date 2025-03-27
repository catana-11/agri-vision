// src/components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/alerts">Alerts</Link></li>
        <li><Link href="/market-tracking">Market Tracking</Link></li>
        <li><Link href="/device">Device</Link></li> {/* New link */}
        <li><Link href="/grain">Grain</Link></li> {/* New link */}
        <li><Link href="/education">Education</Link></li> {/* New link */}
        <li><Link href="/market">Market</Link></li> {/* New link */}
        <li><Link href="/financial">Financials</Link></li> {/* New link */}
        <li><Link href="/tracker">Tracking</Link></li> {/* New link */}


      </ul>
    </nav>
  );
}