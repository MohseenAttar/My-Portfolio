import { TrophyIcon, UsersIcon, ZapIcon } from '../components/icons.jsx';

// Most recent first. Certificate images live in public/certificates/.
export const activities = [
  {
    id: 'techverse-2k25',
    kind: 'Technical event',
    title: 'TechVerse 2K25',
    organizer: 'D. Y. Patil Agriculture & Technical University, Talsande',
    date: '5 Apr 2025',
    description:
      'Participated in ByteBattles at an ISTE-approved, national-level technical event held at the university.',
    outcome: null,
    certificate: {
      src: '/certificates/techverse-2k25.jpg',
      alt: 'Certificate of participation in TechVerse 2K25, an ISTE-approved national-level technical event at D. Y. Patil Agriculture and Technical University, held on 5 April 2025',
    },
    Icon: ZapIcon,
  },
  {
    id: 'hackera-2024',
    kind: 'Hackathon',
    title: 'HackEra 2024',
    organizer: 'School of Computer Applications, Sanjay Ghodawat University, Kolhapur',
    date: '30 Aug – 1 Sep 2024',
    description:
      'Competed in a national-level hackathon, collaborating with a team on real-world problem statements.',
    outcome: 'Team collaboration',
    certificate: {
      src: '/certificates/hackera-2024.jpg',
      alt: 'Certificate of participation in HackEra 2024, organized by the School of Computer Applications at Sanjay Ghodawat University from 30 August to 1 September 2024',
    },
    Icon: UsersIcon,
  },
  {
    id: 'call-of-codes-2023',
    kind: 'Coding competition',
    title: 'Call Of Codes',
    organizer: 'Computer Science & Engineering department, D. Y. Patil Agriculture & Technical University',
    date: '2023',
    description:
      'Took part in the department’s coding competition and advanced to the second round, sharpening problem-solving skills along the way.',
    outcome: 'Advanced to round 2',
    certificate: {
      src: '/certificates/call-of-codes-2023.jpg',
      alt: 'Certificate of participation in the 2023 Call Of Codes competition organized by the Computer Science and Engineering department of D. Y. Patil Agriculture and Technical University',
    },
    Icon: TrophyIcon,
  },
];
