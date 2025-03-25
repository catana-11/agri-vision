// src/pages/_app.js
import { Chart, registerables } from 'chart.js';
import '../styles/styles.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Register all necessary components
Chart.register(...registerables);

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}