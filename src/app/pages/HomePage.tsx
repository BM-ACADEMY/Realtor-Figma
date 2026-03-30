import { useState } from 'react';
import { Link } from 'react-router';
import {
  Search,
  MapPin,
  Home,
  IndianRupee,
  Award,
  CheckCircle2,
  Star,
  Phone,
  Mail,
  Send,
} from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { properties, testimonials, realtorInfo } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

export function HomePage() {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchBudget, setSearchBudget] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });

  const featuredProperties = properties.filter((p) => p.featured);

  const handleSearch = () => {
    // In production, this would filter properties based on search criteria
    toast.success('Searching properties...');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! I will contact you soon.');
    setContactForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] md:h-[700px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDg0OTYzNnww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white mb-12">
            <h1
              className="text-5xl md:text-6xl mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Find Your Dream Property
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Buy, Sell & Rent with a Trusted Realtor
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Location"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10 h-12 bg-[#F5F5F5] border-none"
                  />
                </div>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-full h-12 pl-10 pr-4 bg-[#F5F5F5] rounded-lg border-none outline-none text-[#1A1A1A]"
                  >
                    <option value="">Property Type</option>
                    <option value="flat">Flat</option>
                    <option value="villa">Villa</option>
                    <option value="plot">Plot</option>
                  </select>
                </div>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={searchBudget}
                    onChange={(e) => setSearchBudget(e.target.value)}
                    className="w-full h-12 pl-10 pr-4 bg-[#F5F5F5] rounded-lg border-none outline-none text-[#1A1A1A]"
                  >
                    <option value="">Budget</option>
                    <option value="0-50l">₹0 - ₹50 Lakh</option>
                    <option value="50l-1cr">₹50 Lakh - ₹1 Cr</option>
                    <option value="1cr-2cr">₹1 Cr - ₹2 Cr</option>
                    <option value="2cr+">₹2 Cr+</option>
                  </select>
                </div>
                <button
                  onClick={handleSearch}
                  className="h-12 bg-[#E63946] text-white rounded-lg hover:bg-[#d32f3d] transition-colors flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/properties"
                className="bg-[#E63946] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#d32f3d] transition-colors inline-block"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                Explore Properties
              </Link>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#1A1A1A] transition-colors inline-block"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                Book Site Visit
              </a>
            </div>
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
              Featured Properties
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our handpicked selection of premium properties
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
              View All Properties
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
                    <div className="text-gray-600 text-sm">Properties Sold</div>
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
                  'Expert Market Knowledge',
                  'Personalized Service',
                  'Proven Track Record',
                  'End-to-End Support',
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
                Contact Me
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
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let me help you discover the perfect property that matches your lifestyle and budget
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#E63946] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#d32f3d] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            Schedule a Visit
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
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