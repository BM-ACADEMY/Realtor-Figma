import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router';
import {
  MapPin,
  Download,
  Phone,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Compass,
  Lock,
  Zap,
  Droplets,
  Train,
  Home,
  Waves,
  Building2,
  TrendingUp,
  Sofa,
  Heart,
  Sun,
  Eye,
  BellRing,
  LayoutGrid,
  FileCheck,
  Trees,
  IndianRupee,
  Send,
  CheckCircle2,
  X,
} from 'lucide-react';
import { properties, realtorInfo } from '../data/mockData';
import { PropertyCard } from '../components/PropertyCard';
import { toast } from 'sonner';
import { formatIndianCurrencyCompact } from '../utils/indianFormat';

// ────────────────────────────────────────────────────────────
// Icon map — lucide icons by string name
// ────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Compass, Lock, Zap, Droplets, Train, Home, Waves, Building2,
  TrendingUp, Sofa, Heart, Sun, Eye, BellRing, LayoutGrid, FileCheck, Trees,
  IndianRupee, MapPin,
};

const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'About Project' },
  { id: 'location', label: 'Location' },
  { id: 'plans', label: 'Plans' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'faq', label: 'FAQ' },
];

export function PropertyDetailsPage() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');
  const [amenityIndex, setAmenityIndex] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [locationTab, setLocationTab] = useState<'map' | 'about'>('map');
  const [otherFilter, setOtherFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', phone: '', agreed: false });
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    NAV_SECTIONS.forEach(({ id: sId }) => {
      const el = document.getElementById(sId);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Property not found</h2>
          <Link to="/properties" className="text-[#E63946] hover:underline">
            Back to properties
          </Link>
        </div>
      </div>
    );
  }

  const otherProperties = properties.filter((p) => {
    if (p.id === property.id) return false;
    if (otherFilter === 'all') return true;
    return p.status.toLowerCase().replace(/ /g, '-') === otherFilter;
  });

  const AMENITY_VISIBLE = 4;
  const HIGHLIGHT_VISIBLE = 4;

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryForm.agreed) {
      toast.error('Please agree to the terms & conditions');
      return;
    }
    toast.success('Request submitted! We will contact you shortly.');
    setEnquiryForm({ name: '', email: '', phone: '', agreed: false });
    setShowEnquiryModal(false);
  };

  const scrollTo = (sId: string) => {
    const el = document.getElementById(sId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO BANNER ── */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                  property.type === 'For Sale' ? 'bg-[#E63946] text-white' : 'bg-[#1A1A1A] text-white'
                }`}
              >
                {property.type}
              </span>
              <h1
                className="text-3xl md:text-5xl text-white mb-3 leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {property.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white/90 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-medium">RERA: {property.reraNumber}</span>
                </span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-white/70 text-sm mb-1">
                {property.area.toLocaleString()} sq.ft · {property.propertyType}
              </p>
              <p
                className="text-4xl md:text-5xl text-[#E63946]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {formatIndianCurrencyCompact(property.price)}
              </p>
              <p className="text-white/70 text-sm">
                {property.type === 'For Rent' ? '/month' : 'Onwards'}
              </p>
            </div>
          </div>
        </div>

        {/* Fixed right Enquire Now tab */}
        <button
          onClick={() => setShowEnquiryModal(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#E63946] text-white"
          style={{
            writingMode: 'vertical-rl',
            transform: 'translateY(-50%) rotate(180deg)',
            padding: '14px 8px',
            borderRadius: '8px 0 0 8px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '1px',
            cursor: 'pointer',
          }}
        >
          Enquire Now
        </button>
      </section>

      {/* ── STICKY SECTION NAV ── */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex items-center gap-0 min-w-max">
            {NAV_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`px-5 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeSection === sec.id
                    ? 'border-[#E63946] text-[#E63946]'
                    : 'border-transparent text-gray-600 hover:text-[#E63946]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN LAYOUT : content + sticky sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ─── LEFT MAIN CONTENT ─── */}
          <div className="flex-1 min-w-0">

            {/* ── OVERVIEW ── */}
            <section id="overview" className="mb-14 scroll-mt-36">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h2
                    className="text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {property.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4 text-[#E63946]" />
                      {property.location}
                    </span>
                    <span className="flex items-center gap-1 text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                      <ShieldCheck className="w-4 h-4" />
                      RERA Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Config / Area / Price row */}
              <div className="grid grid-cols-3 gap-4 bg-[#F8F8F8] rounded-xl p-5 mb-6 border border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Configurations</p>
                  <p className="text-[#E63946] font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {property.propertyType}
                    {property.bedrooms > 0 ? ` · ${property.bedrooms}BHK` : ''}
                  </p>
                  <p className="text-xs text-gray-500">Type</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Ranging From</p>
                  <p className="text-[#1A1A1A] font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {property.area.toLocaleString()} sq.ft
                  </p>
                  <p className="text-xs text-gray-500">Super Built-up Area</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Price</p>
                  <p className="text-[#E63946] font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {formatIndianCurrencyCompact(property.price)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {property.type === 'For Rent' ? '/month' : 'Onwards'}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => toast.success('Brochure download started')}
                  className="flex items-center gap-2 px-5 py-3 border-2 border-[#E63946] text-[#E63946] rounded-lg hover:bg-[#E63946] hover:text-white transition-colors font-semibold text-sm"
                >
                  <Download className="w-4 h-4" />
                  Brochure
                </button>
                <a
                  href={`tel:${realtorInfo.whatsapp}`}
                  className="flex items-center gap-2 px-5 py-3 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#E63946] transition-colors font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {realtorInfo.phone}
                </a>
              </div>

              {/* Why to buy */}
              <div className="border border-[#E63946]/20 rounded-xl p-6 bg-[#FFF5F6]">
                <h3
                  className="text-lg text-[#1A1A1A] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Why to buy in this project?
                </h3>
                <p className="text-gray-600 text-sm mb-4 italic">Buy now and secure a premium property at today's price</p>
                <ul className="space-y-2">
                  {property.whyToBuy.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#E63946] flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA pair */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <button
                  onClick={() => toast.success('Our team will send you the details shortly!')}
                  className="py-4 rounded-xl bg-[#E63946] text-white font-semibold hover:bg-[#d32f3d] transition-colors flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Send className="w-5 h-5" />
                  Send me the details
                </button>
                <button
                  onClick={() => toast.success('Site visit scheduled! We will call you to confirm.')}
                  className="py-4 rounded-xl border-2 border-[#E63946] text-[#E63946] font-semibold hover:bg-[#E63946] hover:text-white transition-colors flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Site Visit
                </button>
              </div>
            </section>

            {/* ── ABOUT PROJECT ── */}
            <section id="about" className="mb-14 scroll-mt-36">
              <h2
                className="text-2xl text-[#1A1A1A] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                About Project
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">{property.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                {[
                  { label: 'Launch Date', value: property.launchDate },
                  { label: 'Status', value: property.status },
                  { label: 'Possession By', value: property.possessionDate },
                  { label: 'Location', value: property.location.split(',')[0] + ', Chennai' },
                  { label: 'Total Units', value: property.units },
                  { label: 'Project Size', value: property.projectSize },
                  { label: 'Rera Number', value: property.reraNumber },
                  ...(property.bedrooms > 0
                    ? [
                        { label: 'Bedrooms', value: property.bedrooms },
                        { label: 'Bathrooms', value: property.bathrooms },
                      ]
                    : []),
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                    <p
                      className="text-[#1A1A1A] font-semibold"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── LOCATION ── */}
            <section id="location" className="mb-14 scroll-mt-36">
              <h2
                className="text-2xl text-[#1A1A1A] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Location
              </h2>
              {/* Location tabs */}
              <div className="flex border-b border-gray-200 mb-4">
                {(['map', 'about'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setLocationTab(tab)}
                    className={`px-5 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${
                      locationTab === tab
                        ? 'border-[#E63946] text-[#E63946]'
                        : 'border-transparent text-gray-500 hover:text-[#E63946]'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {tab === 'map' ? 'Location Map' : 'About Location'}
                  </button>
                ))}
              </div>

              {locationTab === 'map' ? (
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src={property.mapUrl}
                    width="100%"
                    height="360"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Property Location"
                  />
                  <div className="bg-[#F8F8F8] p-4 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">{property.title}</p>
                      <p className="text-sm text-gray-600">{property.location}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[#F8F8F8] rounded-xl p-6">
                  <h3 className="font-semibold text-[#1A1A1A] mb-3">About this location</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{property.description}</p>
                  <div className="mt-4 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{property.location}</p>
                  </div>
                </div>
              )}
            </section>

            {/* ── PLANS ── */}
            <section id="plans" className="mb-14 scroll-mt-36">
              <h2
                className="text-2xl text-[#1A1A1A] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Plans
              </h2>
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  className="px-5 py-2 text-sm font-medium border-b-2 border-[#E63946] text-[#E63946] -mb-px"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Master Plan
                </button>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={property.masterPlanImage}
                  alt="Master Plan"
                  className="w-full h-[360px] object-cover"
                />
                <div className="bg-[#F8F8F8] px-4 py-2 text-xs text-gray-500 text-center">
                  Master Plan — {property.title}
                </div>
              </div>
            </section>

            {/* ── AMENITIES ── */}
            <section id="amenities" className="mb-14 scroll-mt-36">
              <h2
                className="text-2xl text-[#1A1A1A] mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Amenities
              </h2>
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex gap-4 transition-transform duration-300"
                    style={{ transform: `translateX(-${amenityIndex * (100 / AMENITY_VISIBLE)}%)` }}
                  >
                    {property.amenityImages.map((amenity, i) => (
                      