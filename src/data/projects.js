export const projects = [
  {
    id: 'nestaway',
    title: 'NestAway',
    category: 'Full-stack platform',
    description:
      'An Airbnb-style rental platform for searching properties and booking stays, with a separate admin experience for tracking the business.',
    highlights: [
      'Property search with availability-aware booking',
      'JWT-secured, role-based access for users and admins',
      'Razorpay for secure payments, Cloudinary for image uploads',
      'Admin analytics dashboard with server-side aggregated revenue, booking trends and city-wise listing insights',
    ],
    stack: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Spring Boot', 'REST APIs', 'JWT'] },
      { label: 'Database', items: ['PostgreSQL'] },
      { label: 'Integrations', items: ['Razorpay', 'Cloudinary'] },
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/MohseenAttar/NestAway-App',
  },
  {
    id: 'cryptotrack',
    title: 'CryptoTrack',
    category: 'Frontend application',
    description:
      'A production-grade cryptocurrency tracker for following the live market and managing a personal portfolio.',
    highlights: [
      'Real-time price updates from the CoinGecko API',
      'Personal watchlist for the coins you follow',
      'Portfolio management with live profit and loss calculations',
      'Fully responsive across screen sizes',
    ],
    stack: [
      { label: 'Frontend', items: ['React.js', 'JavaScript', 'Tailwind CSS'] },
      { label: 'Data source', items: ['CoinGecko API'] },
    ],
    liveUrl: 'https://crypto-prices-tracker.vercel.app/',
    githubUrl: 'https://github.com/MohseenAttar/Crypto-Tracker',
  },
];
