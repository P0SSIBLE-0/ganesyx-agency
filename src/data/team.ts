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
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '02',
    name: 'Vatsa Khandelwal',
    role: 'Interior Designer, Co-Founder',
    bio: "Co-Founder & Interior Design Lead with 6+ years of experience. She crafts spaces that speak the brand's story, blending aesthetics with smart functionality.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '03',
    name: 'Rohan Sharma',
    role: 'Technical Director',
    bio: 'Full-stack engineer and tech architect. Rohan leads our technology team in deploying bleeding-edge, high-performing websites and custom web architectures.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '04',
    name: 'Ananya Sen',
    role: 'Creative Director',
    bio: 'An award-winning designer obsessed with bold branding systems. She translates client visions into cohesive color spaces, typography, and interactive bento grids.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '05',
    name: 'Kabir Mehta',
    role: 'Head of Growth',
    bio: 'Growth expert who designs marketing frameworks that scale. From search engine optimization to generative AI search visibility, he makes sure brands get noticed.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
  }
];
