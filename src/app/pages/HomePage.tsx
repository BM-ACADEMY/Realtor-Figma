import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Award, CheckCircle2, Star, Phone, Mail, Send } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { properties, testimonials, realtorInfo } from '../data/mockData';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

export function HomePage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });

  const heroImages = [
    'https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDg0OTYzNnww&ixlib=rb-4.1.0&q=80&w=1920',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop&q=80',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  const featuredProperties = properties.filter((p) => p.featured);



  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! I will contact you soon.');
    setContactForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden flex items-center">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
                idx === currentBgIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-110'
              }`}
              style={{
                backgroundImage: `url('${img}')`,
              }}
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30">
          <div className="text-center text-white mb-12">
            <h1
              className="text-5xl md:text-6xl mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Build Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Buy & Sell Verified Plots with the Trusted Land Expert
            </p>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/properties"
                className="bg-[#E63946] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#d32f3d] transition-colors inline-block"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                View Available Plots
              </Link>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#1A1A1A] transition-colors inline-block"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                Inquire About Land
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