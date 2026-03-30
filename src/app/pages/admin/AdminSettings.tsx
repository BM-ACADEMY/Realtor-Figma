import { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { toast } from 'sonner';
import { User, Mail, Phone, Facebook, Instagram, Linkedin, Twitter, Save } from 'lucide-react';

export function AdminSettings() {
  const [settings, setSettings] = useState({
    name: 'Vikram Iyer',
    title: 'Premium Real Estate Consultant',
    email: 'vikram.iyer@realestate.com',
    phone: '+91 98765 43210',
    whatsapp: '+919876543210',
    bio: 'With over 10 years of experience in Chennai real estate market, I specialize in helping clients find their perfect property.',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Settings updated successfully!');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-3xl text-[#1A1A1A] mb-2"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
        >
          Settings
        </h1>
        <p className="text-gray-600">Manage your profile and website settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Settings */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm">
            <h2
              className="text-xl text-[#1A1A1A] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Profile Information
            </h2>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">Full Name *</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={settings.name}
                  onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                  required
                  className="h-12 bg-[#F5F5F5] border-none"
                />
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">Professional Title *</label>
                <Input
                  type="text"
                  placeholder="e.g., Premium Real Estate Consultant"
                  value={settings.title}
                  onChange={(e) => setSettings({ ...settings, title: e.target.value })}
                  required
                  className="h-12 bg-[#F5F5F5] border-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    required
                    className="h-12 bg-[#F5F5F5] border-none pl-10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    required
                    className="h-12 bg-[#F5F5F5] border-none pl-10"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">WhatsApp Number *</label>
                <Input
                  type="tel"
                  placeholder="+919876543210"
                  value={settings.whatsapp}
                  onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                  required
                  className="h-12 bg-[#F5F5F5] border-none"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">Bio *</label>
                <Textarea
                  placeholder="Tell clients about yourself..."
                  value={settings.bio}
                  onChange={(e) => setSettings({ ...settings, bio: e.target.value })}
                  required
                  rows={4}
                  className="bg-[#F5F5F5] border-none resize-none"
                />
              </div>
            </div>

            {/* Social Media Links */}
            <h2
              className="text-xl text-[#1A1A1A] mb-6 mt-8"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Social Media
            </h2>

            <div className="space-y-6">
              {/* Facebook */}
              <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">Facebook URL</label>
                <div className="relative">
                  <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="url"
                    placeholder="https://facebook.com/yourprofile"
                    value={settings.facebook}
                    onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                    className="h-12 bg-[#F5F5F5] border-none pl-10"
                  />
                </div>
              </div>

              {/* Instagram */}
              <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">Instagram URL</label>
                <div className="relative">
                  <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="url"
                    placeholder="https://instagram.com/yourprofile"
                    value={settings.instagram}
                    onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                    className="h-12 bg-[#F5F5F5] border-none pl-10"
                  />
                </div>
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">LinkedIn URL</label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={settings.linkedin}
                    onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
                    className="h-12 bg-[#F5F5F5] border-none pl-10"
                  />
                </div>
              </div>

              {/* Twitter */}
              <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">Twitter URL</label>
                <div className="relative">
                  <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="url"
                    placeholder="https://twitter.com/yourprofile"
                    value={settings.twitter}
                    onChange={(e) => setSettings({ ...settings, twitter: e.target.value })}
                    className="h-12 bg-[#F5F5F5] border-none pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 mt-8">
              <button
                type="submit"
                className="h-12 px-8 bg-[#E63946] text-white rounded-lg hover:bg-[#d32f3d] transition-colors flex items-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3
              className="text-lg text-[#1A1A1A] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Account Info
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Account Type</p>
                <p className="text-[#1A1A1A]">Administrator</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Last Login</p>
                <p className="text-[#1A1A1A]">Today at 9:30 AM</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Member Since</p>
                <p className="text-[#1A1A1A]">January 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3
              className="text-lg text-[#1A1A1A] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full h-10 bg-[#F5F5F5] text-[#1A1A1A] rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Change Password
              </button>
              <button className="w-full h-10 bg-[#F5F5F5] text-[#1A1A1A] rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Export Data
              </button>
              <button className="w-full h-10 bg-[#F5F5F5] text-[#1A1A1A] rounded-lg hover:bg-gray-200 transition-colors text-sm">
                View Activity Log
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
