import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle2, Star, Phone, Mail, Send, ArrowRight } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { properties, testimonials, realtorInfo } from '../data/mockData';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

// Hero Assets
import mainHouse from '@/assets/hero/hero_house.png';
import handshakeImg from '@/assets/hero/handshake.png';
import archDetailImg from '@/assets/hero/arch_detail.png';
import blueprintImg from '@/assets/hero/blueprint.png';

export function HomePage() {
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! I will contact you soon.');
    setContactForm({ name: '', phone: '', message: '' });
  };

  const featuredProperties = properties.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Dribbble Hero Section */}
      <section className="relative min-h-[900px] flex items-center pt-24 overflow-hidden">
        {/* Main Geometric Background Layer */}
        <div 
          className="absolute inset-0 bg-[#E63946] clip-dribbble-hero z-0 shadow-2xl"
          style={{ originY: 0 }}
        />

        {/* Decorative Dotted Grids */}
        <div 
          className="absolute top-40 left-20 w-40 h-40 opacity-20 z-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 0)', backgroundSize: '20px 20px' }}
        />
        <div 
          className="absolute bottom-60 right-1/4 w-32 h-32 opacity-20 z-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 0)', backgroundSize: '16px 16px' }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-20 flex flex-col lg:flex-row items-center lg:items-start pt-12">
          {/* Left Content Column */}
          <div className="lg:w-1/2 text-white mt-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-6xl lg:text-8xl leading-[1.1] mb-8"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
              >
                Buy or sell<br />
                your plot with<br />
                <span className="text-white/90">RedEarth</span>
              </h1>
              
              <div className="flex flex-col gap-6 max-w-md">
                <p className="text-xl text-white/80 font-medium tracking-wide">
                  Learn more about our services
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/properties"
                    className="bg-[#111111] text-white px-10 py-5 rounded-md text-lg font-bold hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl flex items-center gap-3"
                  >
                    Buying
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="#contact"
                    className="bg-[#FF7F50] text-white px-10 py-5 rounded-md text-lg font-bold hover:bg-[#e66c42] transition-all transform hover:-translate-y-1 shadow-xl"
                  >
                    Selling
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Imagery Column */}
          <div className="lg:w-1/2 relative mt-20 lg:mt-0">
            {/* Main Hero House Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative z-20"
            >
              <img 
                src={mainHouse} 
                alt="Modern Architecture" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
              />
            </motion.div>

            {/* Floating Floating Hexagon 1 (Handshake) */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-5 w-48 h-48 z-30"
            >
              <div className="clip-hexagon bg-white p-2 shadow-2xl">
                <img src={handshakeImg} className="w-full h-full object-cover clip-hexagon" />
              </div>
            </motion.div>

            {/* Floating Floating Hexagon 2 (Arch Detail) */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "easeInOut" }}
              className="absolute -bottom-20 right-10 w-40 h-40 z-30"
            >
              <div className="clip-hexagon bg-[#FF7F50] p-1.5 shadow-2xl">
                <div className="clip-hexagon bg-white w-full h-full p-1.5">
                  <img src={archDetailImg} className="w-full h-full object-cover clip-hexagon" />
                </div>
              </div>
            </motion.div>

            {/* Floating Hexagon 3 (Architectural Blueprint) */}
            <motion.div
              animate={{ x: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 -left-12 w-32 h-32 z-30"
            >
              <div className="clip-hexagon bg-[#E63946] p-1.5 shadow-2xl">
                <div className="clip-hexagon bg-white w-full h-full p-1.5">
                  <img src={blueprintImg} className="w-full h-full object-cover clip-hexagon" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl text-[#1A1A1A] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Top Investment Plots
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our handpicked selection of premium land & layouts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="inline-block bg-[#1A1A1A] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#E63946] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Explore All Plots
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section id="about" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={realtorInfo.image}
                  alt={realtorInfo.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex gap-8">
                  <div className="text-center">
                    <div
                      className="text-4xl text-[#E63946] mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      {realtorInfo.yearsExperience}+
                    </div>
                    <div className="text-gray-600 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div
                      className="text-4xl text-[#E63946] mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      {realtorInfo.propertiesSold}+
                    </div>
                    <div className="text-gray-600 text-sm">Units Sold</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2
                className="text-4xl text-[#1A1A1A] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                Why Choose Me
              </h2>
              <h3
                className="text-2xl text-[#E63946] mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                {realtorInfo.name}
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{realtorInfo.bio}</p>

              <div className="space-y-4 mb-8">
                {[
                  'Verified Land & Clear Titles',
                  'Expert in Layout Approvals',
                  'Strategic Investment Guidance',
                  'Fast Documentation Support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#E63946] flex-shrink-0" />
                    <span className="text-[#1A1A1A] text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block bg-[#E63946] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#d32f3d] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                Connect with Agent
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#000000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Ready to Find Your Perfect Plot?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let me help you secure a premium piece of land that matches your vision and budget
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#E63946] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#d32f3d] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            Schedule Site Visit
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl text-[#1A1A1A] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              What My Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take my word for it - hear from satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#F5F5F5] rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E63946] text-[#E63946]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 line-clamp-4">{testimonial.content}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div
                      className="text-[#1A1A1A]"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                    >
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl text-[#1A1A1A] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Have a question? Send me a message and I'll get back to you soon
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E63946] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    Phone
                  </h3>
                  <p className="text-gray-600">{realtorInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E63946] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    Email
                  </h3>
                  <p className="text-gray-600">{realtorInfo.email}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3
                  className="text-xl text-[#1A1A1A] mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    className="h-12 bg-[#F5F5F5] border-none"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    required
                    className="h-12 bg-[#F5F5F5] border-none"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-[#F5F5F5] border-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-[#E63946] text-white rounded-lg hover:bg-[#d32f3d] transition-colors flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}