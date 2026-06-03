export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  department: 'leadership' | 'tech_design' | 'growth_seo' | 'video_production';
}

export const teamData: TeamMember[] = [
  {
    id: '01',
    name: 'Pradyuman',
    role: 'Director',
    bio: 'Director at Ganesyx Agency. I am responsible for the overall management and strategic direction of the agency.',
    image: '/team/pradyuman_director.png',
    department: 'leadership',
  },
  {
    id: '02',
    name: 'Vatsa Khandelwal',
    role: 'Interior Designer, Co-Founder',
    bio: "Co-Founder & Interior Design Lead with 6+ years of experience. She crafts spaces that speak the brand's story, blending aesthetics with smart functionality.",
    image: '/avatar/avatar-sneha-gupta.png',
    department: 'leadership',
  },
  {
    id: '03',
    name: 'Afnan',
    role: 'Full Stack Developer',
    bio: 'Develops highly responsive, scalable web applications. Afnan specializes in turning complex design blueprints into seamless, lightning-fast digital solutions.',
    image: '/team/afnan_full_stack_developer.jpeg',
    department: 'tech_design',
  },
  {
    id: '04',
    name: 'Aman',
    role: 'Performance Marketer',
    bio: 'Data-driven marketer who engineers paid acquisition funnels. Aman scales ad campaigns across Google and Meta, optimizing budget for maximum ROI and growth.',
    image: '/team/aman_performence_marketer.jpeg',
    department: 'growth_seo',
  },
  {
    id: '05',
    name: 'Divyanshu',
    role: 'Video Editor',
    bio: 'Brings raw footage to life. Devyanshu crafts high-retention vertical reels, cinematic edits, and video ads with a focus on pacing, hooks, and clean motion design.',
    image: '/team/devyanshu_video_editor.jpeg',
    department: 'video_production',
  },
  {
    id: '06',
    name: 'Obesh',
    role: 'Video Editor',
    bio: 'Specializes in dynamic post-production, kinetic typography, and ad creatives. Obesh ensures every frame grabs attention and delivers a powerful brand message.',
    image: '/team/obesh_video_editor.jpg',
    department: 'video_production',
  },
  {
    id: '07',
    name: 'Suraj',
    role: 'SEO Specialist',
    bio: 'Optimizes search visibility and guides brand discovery. Suraj designs keyword strategies and technical SEO roadmaps to drive high-intent organic traffic.',
    image: '/team/suraj_seo.jpeg',
    department: 'growth_seo',
  },
  {
    id: '08',
    name: 'Tushar',
    role: 'Video Editor',
    bio: 'Post-production specialist dedicated to storytelling. Tushar produces clean cuts, sound-designed narratives, and engaging commercials tailored for social channels.',
    image: '/team/tushar_video_editor.jpeg',
    department: 'video_production',
  },
  {
    id: '09',
    name: 'Harsh',
    role: 'Graphic Designer',
    bio: 'Graphic Designer at Ganesyx Agency. I am responsible for the visual identity and creative assets of the agency.',
    image: '/team/harsh_graphic_designer.png',
    department: 'tech_design',
  },
  {
    id: '10',
    name: 'Rohan Verma',
    role: 'UI/UX Designer',
    bio: 'Crafts intuitive, high-fidelity user journeys and interface designs that bridge aesthetics with product metrics.',
    image: '/avatar/avatar-rohan.png',
    department: 'tech_design',
  },
  {
    id: '11',
    name: 'Sneha Gupta',
    role: 'Frontend Engineer',
    bio: 'Translates complex visual identities into pixel-perfect, highly responsive React implementations.',
    image: '/avatar/avatar-sneha-gupta.png',
    department: 'tech_design',
  },
  {
    id: '12',
    name: 'Arjun Singhania',
    role: 'SEO Strategist',
    bio: 'Analyzes organic search opportunities and engineers technical SEO frameworks to maximize search share.',
    image: '/avatar/avatar-arjun-singhania.png',
    department: 'growth_seo',
  },
  {
    id: '13',
    name: 'Priya Sharma',
    role: 'Growth Engineer',
    bio: 'Designs performance marketing campaigns and paid funnels to scale inbound customer acquisition.',
    image: '/avatar/avatar-priya-sharma.png',
    department: 'growth_seo',
  },
  {
    id: '14',
    name: 'Kabir Mehta',
    role: 'Motion Designer',
    bio: 'Creates animated title cards, dynamic transitions, and 2D/3D brand graphics for engaging video campaigns.',
    image: '/avatar/avatar-rohan.png',
    department: 'video_production',
  }
];
