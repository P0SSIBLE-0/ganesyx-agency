export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    id: '01',
    name: 'Chaitanya Malhotra',
    role: 'Brand Strategist, CEO',
    bio: 'CEO & Brand Strategist with 10+ years of experience building identities that leave a mark. Passionate about merging business goals with bold, impactful design.',
    image: '/avatar/avatar-vikram-malhotra.png',
  },
  {
    id: '02',
    name: 'Vatsa Khandelwal',
    role: 'Interior Designer, Co-Founder',
    bio: "Co-Founder & Interior Design Lead with 6+ years of experience. She crafts spaces that speak the brand's story, blending aesthetics with smart functionality.",
    image: '/avatar/avatar-sneha-gupta.png',
  },
  {
    id: '03',
    name: 'Rohan Sharma',
    role: 'Technical Director',
    bio: 'Full-stack engineer and tech architect. Rohan leads our technology team in deploying bleeding-edge, high-performing websites and custom web architectures.',
    image: '/avatar/avatar-rohan.png',
  },
  {
    id: '04',
    name: 'Ananya Sen',
    role: 'Creative Director',
    bio: 'An award-winning designer obsessed with bold branding systems. She translates client visions into cohesive color spaces, typography, and interactive bento grids.',
    image: '/avatar/avatar-ananya-kapoor.png',
  },
  {
    id: '05',
    name: 'Kabir Mehta',
    role: 'Head of Growth',
    bio: 'Growth expert who designs marketing frameworks that scale. From search engine optimization to generative AI search visibility, he makes sure brands get noticed.',
    image: '/avatar/avatar-arjun-singhania.png',
  }
];
