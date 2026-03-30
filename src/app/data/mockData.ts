// Mock data for the real estate website

import tambaramImage from '@/assets/plots/tambaram_residential.png';
import ecrImage from '@/assets/plots/ecr_oceanview.png';
import omrImage from '@/assets/plots/omr_gated.png';
import adyarImage from '@/assets/plots/adyar_luxury.png';
import sholinganallurImage from '@/assets/plots/sholinganallur_commercial.png';

export interface AmenityItem {
  name: string;
  image: string;
}

export interface HighlightIcon {
  label: string;
  icon: string; // lucide icon name
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  area: number; // in sq.ft
  type: 'For Sale' | 'For Rent';
  propertyType: 'Plot';
  bedrooms: number;
  bathrooms: number;
  image: string;
  images: string[];
  amenities: string[];
  amenityImages: AmenityItem[];
  highlights: string[];
  highlightIcons: HighlightIcon[];
  launchDate: string;
  status: string;
  possessionDate: string;
  units: number;
  projectSize: string;
  reraNumber: string;
  mapUrl: string;
  featured: boolean;
  whyToBuy: string[];
  masterPlanImage: string;
  faq: FaqItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  property?: string;
  date: string;
  type: 'general' | 'property' | 'site-visit';
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Premium Residential Plot in Tambaram West',
    description:
      'DTCP approved residential plot in a prime, fast-growing location. This east-facing corner plot in Tambaram West offers excellent accessibility via the Chennai suburban railway network. Perfectly leveled, clear title, and ready for immediate construction of your dream home.',
    price: 7500000,
    location: 'Tambaram West, Chennai - 600045',
    area: 2400,
    type: 'For Sale',
    propertyType: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    image: tambaramImage,
    images: [
      tambaramImage,
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
    ],
    amenities: ['Paved Roads', 'Street Lights', '24/7 Security', 'Park Area', 'Water Connection', 'EB Connection'],
    amenityImages: [
      { name: 'Paved Roads', image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=400&h=300&fit=crop' },
      { name: 'Street Lights', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
      { name: 'Water Connection', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
      { name: 'Green Park', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
    ],
    highlights: ['Corner Plot', 'East Facing', 'Near Railway Station', 'DTCP Approved'],
    highlightIcons: [
      { label: 'Corner Plot', icon: 'LayoutGrid' },
      { label: 'East Facing', icon: 'Sun' },
      { label: 'Near Railway', icon: 'Train' },
      { label: 'DTCP Approved', icon: 'ShieldCheck' },
      { label: 'Clear Title', icon: 'FileCheck' },
      { label: 'Investment Potential', icon: 'TrendingUp' },
    ],
    launchDate: 'March 2024',
    status: 'Available',
    possessionDate: 'Immediate',
    units: 35,
    projectSize: '5 Acres',
    reraNumber: 'TN/29/Layout/0156/2024',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3!2d80.1274!3d12.9232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzIzLjUiTiA4MMKwMDcnMzguNiJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: true,
    whyToBuy: [
      'Rare east-facing corner plot — highest value orientation',
      '400 metres from Tambaram railway station',
      'DTCP and panchayat approved layout',
      'Immediate registration — no waiting period',
      'Land value appreciated 35% in last 3 years',
      'Build at your own pace and convenience',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [
      {
        question: '01. Is this plot DTCP approved?',
        answer: 'Yes, the full layout is DTCP approved and panchayat approved. Original EC and patta are available for inspection.',
      },
      {
        question: '02. Is it ready for construction?',
        answer: 'Absolutely. The land is leveled, filled, and internal roads are laid. You can start construction as soon as the registration is complete.',
      },
    ],
  },
  {
    id: '2',
    title: 'Oceanview Luxury Plot in ECR Road',
    description:
      'Stunning beachfront residential plot along the scenic East Coast Road. This premium 4800 sq.ft estate offers a unique opportunity to build a luxury sea-facing villa in an exclusive community. Serene surroundings, fresh sea breeze, and premium neighbors make this the most coveted address in Chennai.',
    price: 45000000,
    location: 'ECR, Kanathur, Chennai - 600119',
    area: 4800,
    type: 'For Sale',
    propertyType: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    image: ecrImage,
    images: [
      ecrImage,
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
    ],
    amenities: ['Private Beach Access', 'Gated Community', 'Swimming Pool', 'Clubhouse', 'Underground Cables', 'Borewell Water'],
    amenityImages: [
      { name: 'Private Beach', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=300&fit=crop' },
      { name: 'Clubhouse', image: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=400&h=300&fit=crop' },
      { name: 'Gated Entrance', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
    ],
    highlights: ['Sea Facing', 'RERA Approved', 'Gated Community', 'Prime ECR Location'],
    highlightIcons: [
      { label: 'Sea Facing', icon: 'Waves' },
      { label: 'RERA Approved', icon: 'ShieldCheck' },
      { label: 'Premium Address', icon: 'MapPin' },
      { label: 'Gated Enclave', icon: 'Lock' },
      { label: 'Club Amenities', icon: 'Trees' },
      { label: '24/7 Security', icon: 'Lock' },
    ],
    launchDate: 'February 2024',
    status: 'Ready to Move',
    possessionDate: 'Immediate',
    units: 12,
    projectSize: '2 Acres',
    reraNumber: 'TN/29/Building/0521/2023',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d80.2542!3d12.9654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzU1LjQiTiA4MMKwMTUnMTUuMSJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: true,
    whyToBuy: [
      'Exclusive beachfront access',
      'Limited number of plots — high exclusivity',
      'Premium lifestyle amenities included',
      'Excellent capital appreciation potential',
      'Clear legal title and RERA registered',
      'Most prestigious location in South Chennai',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [
      {
        question: '01. How far is the beach?',
        answer: 'The plot is situated directly facing the ocean with a private walkway leading to the beach, less than 50 meters away.',
      },
    ],
  },
  {
    id: '3',
    title: 'Investment Plot in Chengalpattu High Road',
    description:
      'High-yield investment opportunity in the satellite city of Chengalpattu. These DTCP approved plots are located right on the GST Road corridor, offering rapid appreciation. Ideal for both long-term investment and building a spacious home in a tranquil environment away from city congestion.',
    price: 3200000,
    location: 'Chengalpattu, GST Road, Chennai - 603101',
    area: 1200,
    type: 'For Sale',
    propertyType: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    image: 'https://images.unsplash.com/photo-1542366810-7e471d87f96b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542366810-7e471d87f96b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1200&h=800&fit=crop',
    ],
    amenities: ['Compound Wall', 'Black Top Roads', 'Eb Connectivity', 'Water Reservoir', 'Landscaped Parks'],
    amenityImages: [
      { name: 'Park', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
      { name: 'Roads', image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=400&h=300&fit=crop' },
    ],
    highlights: ['High Appreciation', 'Budget Friendly', 'Near Railway Station', 'DTCP Approved'],
    highlightIcons: [
      { label: 'Value Growth', icon: 'TrendingUp' },
      { label: 'Near Station', icon: 'Train' },
      { label: 'DTCP Approved', icon: 'ShieldCheck' },
      { label: 'Ready to Register', icon: 'FileCheck' },
      { label: 'Budget Pick', icon: 'IndianRupee' },
    ],
    launchDate: 'January 2024',
    status: 'Available',
    possessionDate: 'Immediate',
    units: 120,
    projectSize: '15 Acres',
    reraNumber: 'TN/01/Layout/0289/2023',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1zMTLCsDQxJzI0LjAiTiA3OcKwNTgnNTUuMSJF!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQxJzI0LjAiTiA3OcKwNTgnNTUuMSJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: false,
    whyToBuy: [
      'Rapidly growing industrial & educational hub',
      'Excellent connectivity via GST Road and Suburban Rails',
      'Large layout with premium specifications',
      'Very affordable entry price for first-time investors',
      'Ready to construct with all base infra in place',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [],
  },
  {
    id: '4',
    title: 'Gated Villa Plot in OMR Karapakkam',
    description:
      'Premier villa plot inside a lush gated community in the heart of OMR IT corridor. Experience the luxury of space right next to major IT hubs like TCS and Cognizant. This plot is part of a premium township with world-class amenities like a 10,000 sq.ft clubhouse and indoor sports facilities.',
    price: 18500000,
    location: 'Karapakkam, OMR, Chennai - 600097',
    area: 1800,
    type: 'For Sale',
    propertyType: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    image: omrImage,
    images: [
      omrImage,
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    ],
    amenities: ['Luxury Clubhouse', 'Gym', 'Swimming Pool', 'Security', 'Landscoped Gardens', 'Jogging Track'],
    amenityImages: [
      { name: 'Clubhouse', image: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=400&h=300&fit=crop' },
      { name: 'Swimming Pool', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop' },
      { name: 'Gym', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop' },
    ],
    highlights: ['IT Hub Proximity', 'RERA Approved', 'Gated Community', 'Vastu Compliant'],
    highlightIcons: [
      { label: 'IT Corridor', icon: 'Building2' },
      { label: 'RERA Approved', icon: 'ShieldCheck' },
      { label: 'Gated Community', icon: 'Lock' },
      { label: 'Prime Location', icon: 'MapPin' },
      { label: 'Vastu Compliant', icon: 'Compass' },
    ],
    launchDate: 'January 2024',
    status: 'Ready to Move',
    possessionDate: 'Immediate',
    units: 45,
    projectSize: '2.5 Acres',
    reraNumber: 'TN/29/Building/0453/2023',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d80.2285!3d12.9121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzQzLjYiTiA4MMKwMTMnNDIuNiJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: true,
    whyToBuy: [
      'Located in prime OMR IT corridor',
      'Walking distance to major tech parks',
      'World-class club amenities',
      'RERA approved with clear title',
      'Excellent rental yield potential for built villas',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [],
  },
  {
    id: '5',
    title: 'Luxury Corner Plot in Adyar',
    description:
      'A rare and precious diamond in the heart of prime Adyar. This 2400 sq.ft corner plot is situated in a high-profile neighborhood, offering unparalleled access to the best schools, hospitals, and high-street retail in Chennai. Perfect for building a signature luxury residence in the city s most heritage-rich and leafy locality.',
    price: 32000000,
    location: 'Adyar, Gandhi Nagar, Chennai - 600020',
    area: 2400,
    type: 'For Sale',
    propertyType: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    image: adyarImage,
    images: [
      adyarImage,
      'https://images.unsplash.com/photo-1542366810-7e471d87f96b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
    ],
    amenities: ['EB Connection', 'Metro Water', 'Paved Roads', 'Street Lighting', 'Storm Water Drains'],
    amenityImages: [
      { name: 'Street Lights', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
      { name: 'Paved Roads', image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=400&h=300&fit=crop' },
    ],
    highlights: ['Prime Adyar', 'Corner Plot', 'Ready to Build', 'Clear Title'],
    highlightIcons: [
      { label: 'Prime Adyar', icon: 'MapPin' },
      { label: 'Corner Plot', icon: 'LayoutGrid' },
      { label: 'Near Metro', icon: 'Train' },
      { label: 'File Check', icon: 'FileCheck' },
      { label: 'City Living', icon: 'Building2' },
    ],
    launchDate: 'April 2024',
    status: 'Available',
    possessionDate: 'Immediate',
    units: 1,
    projectSize: '2400 sq.ft',
    reraNumber: 'NA (Individual)',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7!2d80.2570!3d13.0067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTMCMDAnMjQuMSJOIDgwwrAxNScyNS4yIkU!5e0!3m2!1sen!2sin!4v1234567890',
    featured: true,
    whyToBuy: [
      'Unmatchable location in Gandhi Nagar, Adyar',
      'Last remaining plot in this premium street',
      'Immediate registration and construction',
      'Surrounded by premium independent bungalows',
      'Walking distance to Adyar Club and top schools',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [],
  },
  {
    id: '6',
    title: 'Green View Plot in Guduvanchery',
    description:
      'Eco-friendly residential project nestled in the green landscapes of Guduvanchery. These plots offer a serene lifestyle away from the urban noise, with a focus on sustainable living. Large open spaces, tree-lined avenues, and dedicated gardens make it an ideal choice for building a peaceful retirement or vacation home.',
    price: 2400000,
    location: 'Guduvanchery, Chennai - 603202',
    area: 1500,
    type: 'For Sale',
    propertyType: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=800&fit=crop',
    ],
    amenities: ['Herb Garden', 'Lotus Pond', 'Yoga Deck', 'Jogging Track', 'Children Play Area', 'Eb Access'],
    amenityImages: [
      { name: 'Herb Garden', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
      { name: 'Yoga Deck', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
    ],
    highlights: ['Green Living', 'Pollution Free', 'DTCP Approved', 'Rapid Growth Area'],
    highlightIcons: [
      { label: 'Green Living', icon: 'Trees' },
      { label: 'Fresh Air', icon: 'Waves' },
      { label: 'DTCP Approved', icon: 'ShieldCheck' },
      { label: 'EB Connection', icon: 'Zap' },
    ],
    launchDate: 'March 2024',
    status: 'Available',
    possessionDate: 'Immediate',
    units: 80,
    projectSize: '10 Acres',
    reraNumber: 'TN/01/Layout/0356/2023',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1!2d80.0654!3d12.8432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUwJzM1LjUiTiA4MMKwMDMnNTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: false,
    whyToBuy: [
      'Lowest price in the GST corridor',
      'Focus on organic and sustainable layout design',
      'Guduvanchery is the fastest growing residential hub',
      'Excellent groundwater level and air quality',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [],
  },
  {
    id: '7',
    title: 'Commercial Plot in Sholinganallur',
    description:
      'High-potential commercial plot situated exactly at the Sholinganallur Junction. This CMDA approved plot offers massive visibility and footfall, perfect for showrooms, office buildings, or clinics. With the upcoming Metro connection right at the doorstep, this is a goldmine for any commercial investment.',
    price: 38000000,
    location: 'Sholinganallur Junction, OMR, Chennai - 600119',
    area: 3200,
    type: 'For Sale',
    propertyType: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    image: sholinganallurImage,
    images: [
      sholinganallurImage,
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    ],
    amenities: ['Wide Road Access', '3-Phase EB', 'Industrial Water', 'Proper Drains', 'Near Metro'],
    amenityImages: [
      { name: 'Road Access', image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=400&h=300&fit=crop' },
    ],
    highlights: ['Commercial Hub', 'Main Road Facing', 'Metro Connection', 'CMDA Approved'],
    highlightIcons: [
      { label: 'Commercial', icon: 'Building2' },
      { label: 'Main Road', icon: 'MapPin' },
      { label: 'Metro Access', icon: 'Train' },
      { label: 'High ROI', icon: 'TrendingUp' },
    ],
    launchDate: 'January 2024',
    status: 'Available',
    possessionDate: 'Immediate',
    units: 2,
    projectSize: '6400 sq.ft total',
    reraNumber: 'CMDA/REG/0123/2024',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1!2d80.2275!3d12.9012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzA0LjMiTiA4MMKwMTMnMzkuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: true,
    whyToBuy: [
      'Best commercial catchment area in South Chennai',
      'Unmatched visibility for any business',
      'Ready for G+4 commercial building construction',
      'Strategic location at the intersection of OMR & ECR link road',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [],
  },
  {
    id: '8',
    title: 'Farmland Plot near Mahabalipuram',
    description:
      'Beautiful organic farmland plots situated just 15 minutes from Mahabalipuram. These 1/2 acre plots come with pre-planted fruit trees (Mango, Coconut, Lemon) and a small cottage plan. Ideal for a weekend getaway or a hobby farming project, with full maintenance services available.',
    price: 4800000,
    location: 'Mahabalipuram Outskirts, ECR Road, Chennai - 603104',
    area: 21780, // 0.5 Acre
    type: 'For Sale',
    propertyType: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
    ],
    amenities: ['Fencing', 'Drip Irrigation', 'Borewell', 'Manpower Support', 'Pre-planted Trees', 'Eb Access'],
    amenityImages: [
      { name: 'Irrigation', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
      { name: 'Fencing', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
    ],
    highlights: ['Farmland', 'Fruit Trees', 'ECR Access', 'Weekend Getaway'],
    highlightIcons: [
      { label: 'Farm House', icon: 'Home' },
      { label: 'Greenery', icon: 'Trees' },
      { label: 'Water Access', icon: 'Droplets' },
      { label: 'Clean Title', icon: 'FileCheck' },
    ],
    launchDate: 'May 2024',
    status: 'Available',
    possessionDate: 'Immediate',
    units: 15,
    projectSize: '10 Acres',
    reraNumber: 'NA (Agricultural)',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.3!2d80.1770!3d12.6270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM3JzM3LjIiTiA4MMKwMTAnMzcuMiJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: false,
    whyToBuy: [
      'Own a piece of green land near the heritage city of Mahabs',
      'Pre-installed drip irrigation and fruit-bearing trees',
      'Full-time security and estate maintenance provided',
      'Perfect for building a farm-stay or weekend cottage',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Krishnan',
    role: 'Plot Owner',
    content: 'Working with Vikram was an absolute pleasure. He helped me find a rare corner plot in Adyar that was perfect for our future home. The documentation process was seamless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'Real Estate Investor',
    content: 'Vikram s knowledge of local layout approvals and RERA guidelines is exceptional. I have bought multiple investment plots through him in Chengalpattu and ECR, and the returns have been fantastic.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: '3',
    name: 'Deepa Menon',
    role: 'First-time Buyer',
    content: 'As a first-time land buyer, I was nervous about legal verification. Vikram patiently guided me through EC, Patta, and DTCP approvals. I now own a beautiful plot in Guduvanchery.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    id: '4',
    name: 'Arun Srinivasan',
    role: 'Commercial Developer',
    content: 'Excellent service! Vikram helped me acquire a high-visibility commercial plot in Sholinganallur. His negotiation skills and market insight saved us significant time and money.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
];

export const realtorInfo = {
  name: 'Vikram Iyer',
  title: 'Premium Plot & Land Consultant',
  bio: 'With over 10 years of experience in Chennai s land market, I specialize in helping clients find DTCP and CMDA approved plots. Whether you are looking for an investment goldmine, a residential corner plot, or a commercial space, I am committed to provide verified land with clear titles.',
  yearsExperience: 10,
  propertiesSold: 1200, // Land units usually higher
  phone: '+91 98765 43210',
  email: 'vikram.iyer@realearth.com',
  whatsapp: '+919876543210',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop',
  address: 'Old Mahabalipuram Rd, Karapakkam, Chennai, Tamil Nadu 600097',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
};

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Suresh Kumar',
    phone: '+91 98765 12345',
    email: 'suresh@example.com',
    message: 'Interested in the corner plot in Tambaram West',
    property: 'Premium Residential Plot in Tambaram West',
    date: '2026-03-28',
    type: 'property',
  },
  {
    id: '2',
    name: 'Lakshmi Narayan',
    phone: '+91 98765 54321',
    email: 'lakshmi@example.com',
    message: 'Looking for a sea-facing plot in ECR. Would like to schedule a site visit.',
    property: 'Oceanview Luxury Plot in ECR Road',
    date: '2026-03-29',
    type: 'site-visit',
  },
  {
    id: '3',
    name: 'Arjun Reddy',
    phone: '+91 98765 67890',
    email: 'arjun@example.com',
    message: 'General inquiry about investment plots in Chengalpattu GST road',
    date: '2026-03-30',
    type: 'general',
  },
];
