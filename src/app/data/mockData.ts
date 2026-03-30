// Mock data for the real estate website

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
  propertyType: 'Flat' | 'Villa' | 'Plot';
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
    title: 'Luxury 3BHK Flat in OMR',
    description:
      'Experience premium living with this stunning 3BHK flat featuring panoramic views, modern finishes, and world-class amenities. Located in the heart of OMR IT corridor, this property offers the perfect blend of work-life balance with easy access to major tech parks and entertainment hubs.',
    price: 14300000,
    location: 'Karapakkam, OMR, Chennai - 600097',
    area: 1850,
    type: 'For Sale',
    propertyType: 'Flat',
    bedrooms: 3,
    bathrooms: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Parking', '24/7 Security', 'Children Play Area', 'Landscaped Gardens'],
    amenityImages: [
      { name: 'Swimming Pool', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop' },
      { name: 'Gym & Fitness', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop' },
      { name: 'Clubhouse', image: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=400&h=300&fit=crop' },
      { name: "Children's Play Area", image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
      { name: 'Landscaped Gardens', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
      { name: '24/7 Security', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
    ],
    highlights: ['RERA Approved', 'Vastu Compliant', 'Prime Location', 'Gated Community'],
    highlightIcons: [
      { label: 'RERA Approved', icon: 'ShieldCheck' },
      { label: 'Vastu Compliant', icon: 'Compass' },
      { label: 'Prime Location', icon: 'MapPin' },
      { label: 'Gated Community', icon: 'Lock' },
      { label: 'Power Backup', icon: 'Zap' },
      { label: 'Water Supply', icon: 'Droplets' },
    ],
    launchDate: 'January 2024',
    status: 'Ready to Move',
    possessionDate: 'Dec 2024',
    units: 120,
    projectSize: '2.5 Acres',
    reraNumber: 'TN/29/Building/0453/2023',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d80.2285!3d12.9121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzQzLjYiTiA4MMKwMTMnNDIuNiJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: true,
    whyToBuy: [
      'Located in prime OMR IT corridor',
      'Walking distance to major tech parks',
      'World-class club amenities',
      'RERA approved with clear title',
      'High rental yield — 4.5% annually',
      'Premium construction quality',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [
      {
        question: '01. What is the exact location of this property?',
        answer: 'The property is located in Karapakkam, OMR, Chennai — 600097. It is just 700 metres from the Old Mahabalipuram Road and surrounded by major IT parks, schools, hospitals and entertainment hubs.',
      },
      {
        question: '02. Is the property RERA approved?',
        answer: 'Yes. The property is fully RERA approved under registration number TN/29/Building/0453/2023. You can verify this on the official RERA Tamil Nadu portal at www.rera.tn.gov.in.',
      },
      {
        question: '03. What are the payment options available?',
        answer: 'We offer flexible payment plans including home loan tie-ups with leading banks, construction-linked plans, and customised down payment options. Our team will guide you through the best plan for your situation.',
      },
      {
        question: '04. Can I schedule a site visit?',
        answer: 'Absolutely! You can schedule a site visit by filling the enquiry form, calling us directly, or clicking the "Schedule Site Visit" button. We conduct visits Monday to Saturday, 9 AM to 6 PM.',
      },
    ],
  },
  {
    id: '2',
    title: 'Premium Villa with Private Pool',
    description:
      'Stunning luxury villa featuring contemporary design, spacious interiors, and a beautiful private pool. Perfect for families seeking comfort and elegance. Set in an exclusive gated enclave on ECR Road, this villa offers serene surroundings with convenient access to the city.',
    price: 27500000,
    location: 'ECR Road, Chennai - 600119',
    area: 3200,
    type: 'For Sale',
    propertyType: 'Villa',
    bedrooms: 4,
    bathrooms: 5,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&h=800&fit=crop',
    ],
    amenities: ['Private Pool', 'Garden', 'Servant Room', 'Covered Parking', 'Power Backup', 'Modular Kitchen'],
    amenityImages: [
      { name: 'Private Pool', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop' },
      { name: 'Landscaped Garden', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
      { name: 'Modular Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
      { name: 'Covered Parking', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
      { name: 'Servants Quarter', image: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=400&h=300&fit=crop' },
    ],
    highlights: ['Sea Facing', 'RERA Approved', 'Premium Construction', 'Gated Community'],
    highlightIcons: [
      { label: 'Sea Facing', icon: 'Waves' },
      { label: 'RERA Approved', icon: 'ShieldCheck' },
      { label: 'Premium Construction', icon: 'Building2' },
      { label: 'Gated Community', icon: 'Lock' },
      { label: 'Private Pool', icon: 'Waves' },
      { label: 'Power Backup', icon: 'Zap' },
    ],
    launchDate: 'March 2024',
    status: 'Ready to Move',
    possessionDate: 'Mar 2024',
    units: 25,
    projectSize: '5 Acres',
    reraNumber: 'TN/29/Building/0521/2023',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d80.2542!3d12.9654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzU1LjQiTiA4MMKwMTUnMTUuMSJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: true,
    whyToBuy: [
      'Exclusive sea-facing villa on ECR',
      'Private pool and landscaped garden',
      'Only 25 premium villas — high exclusivity',
      'Premium German-engineered fittings',
      'Clear title and RERA approved',
      'Excellent holiday rental potential',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [
      {
        question: '01. Where is this villa located?',
        answer: 'The villa is located along ECR Road, Chennai — 600119. ECR is one of the most coveted residential corridors in the city, known for its sea-facing plots and proximity to beaches.',
      },
      {
        question: '02. Does the villa come with a private pool?',
        answer: 'Yes, every villa in this project includes a private swimming pool, landscaped garden, and covered parking as standard inclusions.',
      },
      {
        question: '03. What is the RERA registration number?',
        answer: 'The RERA registration number is TN/29/Building/0521/2023, verifiable at www.rera.tn.gov.in.',
      },
      {
        question: '04. Are home loans available?',
        answer: 'Yes. We have tie-ups with SBI, HDFC, ICICI, and Axis Bank. Our team can help you with the loan application process end-to-end.',
      },
    ],
  },
  {
    id: '3',
    title: 'Modern 2BHK Flat in Adyar',
    description:
      'Beautiful 2-bedroom flat in prime Adyar location with modern amenities and excellent connectivity. Perfect for young families and professionals. Located minutes from the metro, this property offers the ideal urban lifestyle with top schools, hospitals and shopping centres nearby.',
    price: 9200000,
    location: 'Adyar, Chennai - 600020',
    area: 1100,
    type: 'For Sale',
    propertyType: 'Flat',
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560449752-c0dfd4977086?w=1200&h=800&fit=crop',
    ],
    amenities: ['Gym', 'Swimming Pool', 'Parking', '24/7 Security', 'Lift', 'Power Backup'],
    amenityImages: [
      { name: 'Gym', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop' },
      { name: 'Swimming Pool', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop' },
      { name: 'Covered Parking', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
      { name: '24/7 Security', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
    ],
    highlights: ['Prime Location', 'Near Metro', 'RERA Approved', 'Ready to Move'],
    highlightIcons: [
      { label: 'Prime Location', icon: 'MapPin' },
      { label: 'Near Metro', icon: 'Train' },
      { label: 'RERA Approved', icon: 'ShieldCheck' },
      { label: 'Ready to Move', icon: 'Home' },
      { label: 'Power Backup', icon: 'Zap' },
      { label: 'Water Supply', icon: 'Droplets' },
    ],
    launchDate: 'December 2023',
    status: 'Ready to Move',
    possessionDate: 'Immediate',
    units: 80,
    projectSize: '1.5 Acres',
    reraNumber: 'TN/29/Building/0389/2023',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7!2d80.2570!3d13.0067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTMCMDAnMjQuMSJOIDgwwrAxNScyNS4yIkU!5e0!3m2!1sen!2sin!4v1234567890',
    featured: true,
    whyToBuy: [
      'Walking distance to Adyar metro station',
      'Top schools & hospitals within 2 km',
      'Ready to move immediately',
      'Strong resale demand in Adyar micro-market',
      'RERA approved project',
      'Reputable developer with proven track record',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [
      {
        question: '01. Is this flat ready for immediate possession?',
        answer: 'Yes, this is a ready-to-move flat. You can take possession within 30 days of registration, subject to completion of formalities.',
      },
      {
        question: '02. How far is the metro station?',
        answer: 'The flat is approximately 600 metres (walking distance) from the Adyar metro station, part of Chennai Metro Rail Phase II.',
      },
      {
        question: '03. What is the maintenance charge?',
        answer: 'The monthly maintenance is ₹3 per sq.ft, approximately ₹3,300/month for this unit. This covers security, lifts, common area maintenance, and landscaping.',
      },
      {
        question: '04. Can I see the flat before purchasing?',
        answer: 'Absolutely. We conduct site visits Monday to Saturday between 9 AM and 6 PM. Please schedule via the enquiry form or call us directly.',
      },
    ],
  },
  {
    id: '4',
    title: 'Affordable 1BHK Flat in Velachery',
    description:
      'Perfect starter home or investment property. This 1-bedroom flat offers comfort and convenience in a well-connected location. Velachery is one of Chennai\'s fastest-growing residential hubs with excellent MRTS and metro connectivity.',
    price: 4500000,
    location: 'Velachery, Chennai - 600042',
    area: 650,
    type: 'For Sale',
    propertyType: 'Flat',
    bedrooms: 1,
    bathrooms: 1,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1554995207-67c811289c71?w=1200&h=800&fit=crop',
    ],
    amenities: ['Parking', 'Lift', 'Power Backup', '24/7 Security'],
    amenityImages: [
      { name: 'Car Parking', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
      { name: 'Lift', image: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=400&h=300&fit=crop' },
      { name: 'Power Backup', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
      { name: '24/7 Security', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop' },
    ],
    highlights: ['Budget Friendly', 'Near MRTS', 'Ready to Move', 'Good Resale Value'],
    highlightIcons: [
      { label: 'Budget Friendly', icon: 'IndianRupee' },
      { label: 'Near MRTS', icon: 'Train' },
      { label: 'Ready to Move', icon: 'Home' },
      { label: 'Good Resale Value', icon: 'TrendingUp' },
      { label: 'Power Backup', icon: 'Zap' },
      { label: 'RERA Approved', icon: 'ShieldCheck' },
    ],
    launchDate: 'June 2023',
    status: 'Ready to Move',
    possessionDate: 'Immediate',
    units: 150,
    projectSize: '2 Acres',
    reraNumber: 'TN/29/Building/0267/2023',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.2207!3d12.9752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzMwLjciTiA4MMKwMTMnMTQuNSJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: false,
    whyToBuy: [
      'Most affordable option in Velachery',
      'Excellent MRTS and metro connectivity',
      'Ready to move — immediate possession',
      'Strong rental demand in the area',
      'RERA approved with clear documents',
      'Good resale value — appreciated 18% in 3 years',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [
      {
        question: '01. Is this a good investment property?',
        answer: 'Yes. Velachery is one of the most in-demand rental micro-markets in Chennai. A 1BHK here typically fetches ₹12,000–₹15,000/month in rent, giving a solid yield on this investment.',
      },
      {
        question: '02. What floor is the flat on?',
        answer: 'Multiple floors are available. You can choose based on your preference. Higher floors are available at a slight premium. Contact us for floor-wise availability.',
      },
      {
        question: '03. Are there any hidden charges?',
        answer: 'No hidden charges. The price quoted is all-inclusive of parking. Stamp duty, registration charges, and GST would be additional as per government norms.',
      },
    ],
  },
  {
    id: '5',
    title: 'Spacious 3BHK Flat for Rent',
    description:
      'Perfect for families, this spacious 3-bedroom flat offers comfort, style, and excellent amenities in a premium location. Fully furnished with quality fittings, this property is available for immediate occupancy in the heart of Nungambakkam.',
    price: 35000,
    location: 'Nungambakkam, Chennai - 600034',
    area: 1550,
    type: 'For Rent',
    propertyType: 'Flat',
    bedrooms: 3,
    bathrooms: 3,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1200&h=800&fit=crop',
    ],
    amenities: ['Swimming Pool', 'Gym', 'Children Play Area', 'Parking', 'Clubhouse', '24/7 Security'],
    amenityImages: [
      { name: 'Swimming Pool', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop' },
      { name: 'Gym', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop' },
      { name: "Children's Play Area", image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
      { name: 'Clubhouse', image: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=400&h=300&fit=crop' },
      { name: 'Parking', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
    ],
    highlights: ['Fully Furnished', 'Premium Location', 'Pet Friendly', 'Immediate Possession'],
    highlightIcons: [
      { label: 'Fully Furnished', icon: 'Sofa' },
      { label: 'Premium Location', icon: 'MapPin' },
      { label: 'Pet Friendly', icon: 'Heart' },
      { label: 'Immediate Possession', icon: 'Home' },
      { label: 'Power Backup', icon: 'Zap' },
      { label: 'Swimming Pool', icon: 'Waves' },
    ],
    launchDate: 'August 2023',
    status: 'Available',
    possessionDate: 'Immediate',
    units: 60,
    projectSize: '1 Acre',
    reraNumber: 'TN/29/Building/0312/2023',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9!2d80.2365!3d13.0601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTMCMDMnMzYuNCJOIDgwwrAxNCcxMS40IkU!5e0!3m2!1sen!2sin!4v1234567890',
    featured: true,
    whyToBuy: [
      'Fully furnished — move in immediately',
      'Pet-friendly building with large open spaces',
      'Prime Nungambakkam location',
      'Close to US Consulate and business district',
      'Excellent school zone — PSBB, Chettinad nearby',
      'All utilities included (maintenance)',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [
      {
        question: '01. Is the flat fully furnished?',
        answer: 'Yes, the flat is fully furnished with modular kitchen, wardrobes, air conditioners, and quality furniture. A detailed inventory list will be provided before move-in.',
      },
      {
        question: '02. What is the lease tenure?',
        answer: 'Minimum lease tenure is 11 months with an option to renew. The monthly rent is ₹35,000 plus maintenance charges of ₹3,500/month.',
      },
      {
        question: '03. Are pets allowed?',
        answer: 'Yes, pets are allowed. The building has large landscaped green spaces and a pet-friendly community.',
      },
    ],
  },
  {
    id: '6',
    title: 'Independent Villa in Sholinganallur',
    description:
      'Modern independent villa with private garden and parking, ideal for families looking for space and privacy. Located in a quiet neighbourhood in Sholinganallur, this villa is minutes from major IT parks including Cognizant, TCS, and Infosys.',
    price: 18500000,
    location: 'Sholinganallur, Chennai - 600119',
    area: 2400,
    type: 'For Sale',
    propertyType: 'Villa',
    bedrooms: 3,
    bathrooms: 4,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&h=800&fit=crop',
    ],
    amenities: ['Private Garden', 'Parking', 'Power Backup', 'Bore Well', 'CCTV', 'Modular Kitchen'],
    amenityImages: [
      { name: 'Private Garden', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
      { name: 'Modular Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
      { name: 'Covered Parking', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
      { name: 'CCTV Security', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
      { name: 'Power Backup', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop' },
    ],
    highlights: ['RERA Approved', 'Vastu Compliant', 'Near IT Park', 'Ready to Move'],
    highlightIcons: [
      { label: 'RERA Approved', icon: 'ShieldCheck' },
      { label: 'Vastu Compliant', icon: 'Compass' },
      { label: 'Near IT Park', icon: 'Building2' },
      { label: 'Ready to Move', icon: 'Home' },
      { label: 'Private Garden', icon: 'Trees' },
      { label: 'Power Backup', icon: 'Zap' },
    ],
    launchDate: 'February 2024',
    status: 'Ready to Move',
    possessionDate: 'Feb 2024',
    units: 15,
    projectSize: '3 Acres',
    reraNumber: 'TN/29/Building/0478/2023',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1!2d80.2275!3d12.9012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzA0LjMiTiA4MMKwMTMnMzkuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: false,
    whyToBuy: [
      '5 minutes to Cognizant and TCS campuses',
      'Independent villa with no shared walls',
      'Private garden and children play space',
      'Vastu-compliant design',
      'RERA approved with clear title',
      'Strong rental income potential — ₹65,000/month',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [
      {
        question: '01. Is this a standalone independent villa?',
        answer: 'Yes. This is a 100% independent villa with no shared walls. It includes a private garden, full basement parking, and an independent bore well.',
      },
      {
        question: '02. Is it close to IT companies?',
        answer: 'Yes, it is within 2 km of Sholinganallur IT Park which houses Cognizant, TCS, Infosys, and Nokia. The commute is typically under 10 minutes.',
      },
      {
        question: '03. What documents are available with this property?',
        answer: 'All documents are clear including EC, patta, RERA certificate, and building approval plan. Our legal team can assist with due diligence.',
      },
    ],
  },
  {
    id: '7',
    title: 'Premium Plot in Tambaram',
    description:
      'DTCP approved residential plot in prime location. Perfect for building your dream home with all modern amenities nearby. This east-facing corner plot in Tambaram West offers excellent accessibility via the Chennai suburban railway network.',
    price: 7500000,
    location: 'Tambaram West, Chennai - 600045',
    area: 2400,
    type: 'For Sale',
    propertyType: 'Plot',
    bedrooms: 0,
    bathrooms: 0,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=800&fit=crop',
    ],
    amenities: ['DTCP Approved', 'Proper Road Access', 'Electricity Available', 'Water Connection', 'Clear Title'],
    amenityImages: [
      { name: 'Paved Road Access', image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=400&h=300&fit=crop' },
      { name: 'Electricity', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop' },
      { name: 'Water Connection', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
      { name: 'Clear Title', image: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=400&h=300&fit=crop' },
    ],
    highlights: ['Corner Plot', 'East Facing', 'Near Railway Station', 'Excellent Investment'],
    highlightIcons: [
      { label: 'Corner Plot', icon: 'LayoutGrid' },
      { label: 'East Facing', icon: 'Sun' },
      { label: 'Near Railway', icon: 'Train' },
      { label: 'Great Investment', icon: 'TrendingUp' },
      { label: 'DTCP Approved', icon: 'ShieldCheck' },
      { label: 'Clear Title', icon: 'FileCheck' },
    ],
    launchDate: 'April 2024',
    status: 'Available',
    possessionDate: 'Immediate',
    units: 35,
    projectSize: '5 Acres',
    reraNumber: 'TN/29/Layout/0156/2024',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3!2d80.1274!3d12.9232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzIzLjUiTiA4MMKwMDcnMzguNiJF!5e0!3m2!1sen!2sin!4v1234567890',
    featured: false,
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
        answer: 'Yes, the full layout is DTCP approved and panchayat approved. Original EC (Encumbrance Certificate) and patta are available for inspection.',
      },
      {
        question: '02. Can I construct any type of building?',
        answer: 'Yes. The plot has residential land use approval. You can build G+2 (ground plus two floors) as per CMDA norms. Our in-house architect can help you design your dream home.',
      },
      {
        question: '03. Is the plot immediately registrable?',
        answer: 'Yes. The plot can be registered immediately at the sub-registrar office in Tambaram. Our team will assist with all documentation.',
      },
    ],
  },
  {
    id: '8',
    title: 'Luxury 4BHK Penthouse in T Nagar',
    description:
      'Ultra-luxury penthouse with private terrace, modern amenities and breathtaking city views. Experience premium city living at its finest. The penthouse spans two floors with floor-to-ceiling windows, a sky lounge, and a private rooftop deck overlooking Chennai skyline.',
    price: 32500000,
    location: 'T Nagar, Chennai - 600017',
    area: 2800,
    type: 'For Sale',
    propertyType: 'Flat',
    bedrooms: 4,
    bathrooms: 5,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop',
    ],
    amenities: ['Private Terrace', 'Swimming Pool', 'Gym', 'Clubhouse', 'Covered Parking', 'Concierge Service'],
    amenityImages: [
      { name: 'Private Terrace', image: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=400&h=300&fit=crop' },
      { name: 'Swimming Pool', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop' },
      { name: 'Fitness Center', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop' },
      { name: 'Clubhouse', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
      { name: 'Concierge', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop' },
    ],
    highlights: ['Penthouse', 'City Views', 'Prime Shopping Area', 'RERA Approved'],
    highlightIcons: [
      { label: 'Penthouse', icon: 'Building2' },
      { label: 'City Views', icon: 'Eye' },
      { label: 'Prime Location', icon: 'MapPin' },
      { label: 'RERA Approved', icon: 'ShieldCheck' },
      { label: 'Private Terrace', icon: 'Sun' },
      { label: 'Concierge 24/7', icon: 'BellRing' },
    ],
    launchDate: 'May 2024',
    status: 'Under Construction',
    possessionDate: 'Dec 2025',
    units: 8,
    projectSize: '1.2 Acres',
    reraNumber: 'TN/29/Building/0534/2024',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2!2d80.2338!3d13.0418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTMCMDInMzAuNSJOIDgwwrAxNCcxLjciRQ!5e0!3m2!1sen!2sin!4v1234567890',
    featured: true,
    whyToBuy: [
      'Only 8 exclusive penthouses — ultra-rare offering',
      'Panoramic 360° view of Chennai skyline',
      'Private 1200 sq.ft. rooftop terrace',
      'Concierge and valet services included',
      'Walking distance to Pondy Bazaar and T Nagar hub',
      'Premium investment — limited supply, high demand',
    ],
    masterPlanImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    faq: [
      {
        question: '01. What is the possession date for this penthouse?',
        answer: 'The penthouse is expected to be delivered by December 2025. The project is currently under construction with 70% completion as of now.',
      },
      {
        question: '02. Is this truly a penthouse or a top-floor flat?',
        answer: 'This is a true split-level penthouse spanning the top two floors (21st and 22nd), with a dedicated private rooftop terrace of 1,200 sq.ft. accessible via a private internal staircase.',
      },
      {
        question: '03. What concierge services are included?',
        answer: 'The building offers 24/7 concierge, valet parking, housekeeping on request, parcel management, cab booking assistance, and a dedicated building manager for penthouse residents.',
      },
      {
        question: '04. Can I invest during the under-construction phase?',
        answer: 'Yes. We offer a construction-linked payment plan (CLP) where payments are tied to construction milestones. This is the best phase to invest for maximum capital appreciation.',
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Krishnan',
    role: 'Property Buyer',
    content: 'Working with this realtor was an absolute pleasure. They helped me find my dream home in OMR and made the entire process smooth and stress-free. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'Investor',
    content: 'Professional, knowledgeable, and always available. They helped me build a solid real estate investment portfolio in Chennai. Best realtor I have worked with!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: '3',
    name: 'Deepa Menon',
    role: 'First-time Buyer',
    content: 'As a first-time buyer, I was nervous about the process. They patiently guided me through every step and found me the perfect flat in Adyar within my budget.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    id: '4',
    name: 'Arun Srinivasan',
    role: 'Landlord',
    content: 'Excellent service! They helped me rent out my property quickly and found reliable tenants. Very professional and responsive throughout.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
];

export const realtorInfo = {
  name: 'Vikram Iyer',
  title: 'Premium Real Estate Consultant',
  bio: 'With over 10 years of experience in Chennai real estate market, I specialize in helping clients find their perfect property. Whether you are buying, selling, or renting, I am committed to providing exceptional service and delivering results that exceed expectations.',
  yearsExperience: 10,
  propertiesSold: 500,
  phone: '+91 98765 43210',
  email: 'vikram.iyer@realestate.com',
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
    message: 'Interested in the luxury 3BHK flat in OMR',
    property: 'Luxury 3BHK Flat in OMR',
    date: '2026-03-28',
    type: 'property',
  },
  {
    id: '2',
    name: 'Lakshmi Narayan',
    phone: '+91 98765 54321',
    email: 'lakshmi@example.com',
    message: 'Looking for a villa in ECR. Would like to schedule a site visit.',
    property: 'Premium Villa with Private Pool',
    date: '2026-03-29',
    type: 'site-visit',
  },
  {
    id: '3',
    name: 'Arjun Reddy',
    phone: '+91 98765 67890',
    email: 'arjun@example.com',
    message: 'General inquiry about available properties in Adyar area',
    date: '2026-03-30',
    type: 'general',
  },
  {
    id: '4',
    name: 'Meera Shah',
    phone: '+91 98765 98765',
    email: 'meera@example.com',
    message: 'Want to know more about the 2BHK flat in Adyar. Is it still available?',
    property: 'Modern 2BHK Flat in Adyar',
    date: '2026-03-29',
    type: 'property',
  },
  {
    id: '5',
    name: 'Karthik Venkat',
    phone: '+91 98765 11111',
    email: 'karthik@example.com',
    message: 'Interested in the plot in Tambaram. Can we schedule a site visit this weekend?',
    property: 'Premium Plot in Tambaram',
    date: '2026-03-27',
    type: 'site-visit',
  },
];
