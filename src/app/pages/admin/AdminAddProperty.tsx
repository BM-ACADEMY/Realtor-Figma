import { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { toast } from 'sonner';
import { Upload, Plus, X } from 'lucide-react';

export function AdminAddProperty() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    area: '',
    type: 'For Sale',
    propertyType: 'Plot',
    status: 'Available',
    possessionDate: '',
    units: '',
    projectSize: '',
    reraNumber: '',
    amenities: [] as string[],
    whyToBuy: [] as string[],
    masterPlanImage: '',
    amenityImages: [] as { name: string; image: string }[],
    highlightIcons: [] as { label: string; icon: string }[],
    faq: [] as { question: string; answer: string }[],
  });

  const [currentAmenity, setCurrentAmenity] = useState('');

  const amenitiesList = [
    'Swimming Pool', 'Gym', 'Clubhouse', 'Parking', '24/7 Security',
    'Children Play Area', 'Landscaped Gardens', 'Power Backup', 'Lift',
    'CCTV', 'Modular Kitchen',
  ];

  const highlightOptions = [
    { label: 'RERA Approved', icon: 'ShieldCheck' },
    { label: 'Vastu Compliant', icon: 'Compass' },
    { label: 'Gated Community', icon: 'Lock' },
    { label: 'Power Backup', icon: 'Zap' },
    { label: 'Water Supply', icon: 'Droplets' },
    { label: 'Near Metro', icon: 'Train' },
    { label: 'Sea Facing', icon: 'Waves' },
    { label: 'Premium Construction', icon: 'Building2' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Property added successfully!');
    // Reset form
    setFormData({
      title: '',
      description: '',
      price: '',
      location: '',
      area: '',
      type: 'For Sale',
      propertyType: 'Plot',
      status: 'Available',
      possessionDate: '',
      units: '',
      projectSize: '',
      reraNumber: '',
      amenities: [],
      whyToBuy: [],
      masterPlanImage: '',
      amenityImages: [],
      highlightIcons: [],
      faq: [],
    });
  };

  const addAmenity = (amenity: string) => {
    if (!formData.amenities.includes(amenity)) {
      setFormData({ ...formData, amenities: [...formData.amenities, amenity] });
    }
  };

  const removeAmenity = (amenity: string) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.filter((a: string) => a !== amenity),
    });
  };



  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-3xl text-[#1A1A1A] mb-2"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
        >
          Add New Property
        </h1>
        <p className="text-gray-600">Fill in the details to add a new property listing</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#1A1A1A] mb-2">Property Title *</label>
            <Input
              type="text"
              placeholder="e.g., Luxury 3BHK Flat in OMR"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="h-12 bg-[#F5F5F5] border-none"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#1A1A1A] mb-2">Description *</label>
            <Textarea
              placeholder="Describe the property..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
              className="bg-[#F5F5F5] border-none resize-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Price (₹) *</label>
            <Input
              type="number"
              placeholder="e.g., 14300000"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
              className="h-12 bg-[#F5F5F5] border-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Location *</label>
            <Input
              type="text"
              placeholder="e.g., Karapakkam, OMR, Chennai - 600097"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
              className="h-12 bg-[#F5F5F5] border-none"
            />
          </div>

          {/* Area */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Area (sq.ft) *</label>
            <Input
              type="number"
              placeholder="e.g., 1850"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              required
              className="h-12 bg-[#F5F5F5] border-none"
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Land Category *</label>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as 'Plot' })}
              className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              required
            >
              <option value="Plot">Plot / Land</option>
            </select>
          </div>

          {/* Listing Type */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Listing Type *</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              required
            >
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Status *</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              required
            >
              <option value="Ready to Move">Ready to Move</option>
              <option value="Under Construction">Under Construction</option>
              <option value="Available">Available</option>
            </select>
          </div>



          {/* RERA Number */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">RERA Number</label>
            <Input
              type="text"
              placeholder="e.g., TN/29/Building/0453/2023"
              value={formData.reraNumber}
              onChange={(e) => setFormData({ ...formData, reraNumber: e.target.value })}
              className="h-12 bg-[#F5F5F5] border-none"
            />
          </div>

          {/* Amenities */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#1A1A1A] mb-2">Amenities</label>
            <div className="flex flex-wrap gap-2 mb-4">
              {amenitiesList.map((amenity) => (
                <button
                  key={amenity}
                  type="button"
                  onClick={() => addAmenity(amenity)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    formData.amenities.includes(amenity)
                      ? 'bg-[#E63946] text-white'
                      : 'bg-[#F5F5F5] text-[#1A1A1A] hover:bg-gray-200'
                  }`}
                >
                  {amenity}
                </button>
              ))}
            </div>
            {formData.amenities.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 bg-[#E63946] text-white px-3 py-1 rounded-full text-sm"
                  >
                    <span>{amenity}</span>
                    <button
                      type="button"
                      onClick={() => removeAmenity(amenity)}
                      className="hover:bg-white/20 rounded-full p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Possession Date */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Possession By</label>
            <Input
              type="text"
              placeholder="e.g., Dec 2024"
              value={formData.possessionDate}
              onChange={(e) => setFormData({ ...formData, possessionDate: e.target.value })}
              className="h-12 bg-[#F5F5F5] border-none"
            />
          </div>

          {/* Project Size & Units */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Project Size</label>
            <Input
              type="text"
              placeholder="e.g., 2.5 Acres"
              value={formData.projectSize}
              onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })}
              className="h-12 bg-[#F5F5F5] border-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Total Units</label>
            <Input
              type="number"
              placeholder="e.g., 120"
              value={formData.units}
              onChange={(e) => setFormData({ ...formData, units: e.target.value })}
              className="h-12 bg-[#F5F5F5] border-none"
            />
          </div>

          {/* Master Plan Image */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#1A1A1A] mb-2">Master Plan Image URL</label>
            <Input
              type="text"
              placeholder="Enter image URL"
              value={formData.masterPlanImage}
              onChange={(e) => setFormData({ ...formData, masterPlanImage: e.target.value })}
              className="h-12 bg-[#F5F5F5] border-none"
            />
          </div>

          {/* Why to Buy */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#1A1A1A] mb-2">Why to Buy (one per line)</label>
            <Textarea
              placeholder="Enter points..."
              value={formData.whyToBuy.join('\n')}
              onChange={(e) => setFormData({ ...formData, whyToBuy: e.target.value.split('\n') })}
              rows={4}
              className="bg-[#F5F5F5] border-none resize-none"
            />
          </div>

          {/* FAQ Items */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">FAQs</h3>
            <div className="space-y-4">
              {formData.faq.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-1 space-y-2">
                    <Input
                      placeholder="Question"
                      value={item.question}
                      onChange={(e) => {
                        const newFaq = [...formData.faq];
                        newFaq[index].question = e.target.value;
                        setFormData({ ...formData, faq: newFaq });
                      }}
                      className="h-10 bg-[#F5F5F5] border-none"
                    />
                    <Textarea
                      placeholder="Answer"
                      value={item.answer}
                      onChange={(e) => {
                        const newFaq = [...formData.faq];
                        newFaq[index].answer = e.target.value;
                        setFormData({ ...formData, faq: newFaq });
                      }}
                      rows={2}
                      className="bg-[#F5F5F5] border-none resize-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, faq: formData.faq.filter((_, i) => i !== index) });
                    }}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setFormData({ ...formData, faq: [...formData.faq, { question: '', answer: '' }] })}
                className="flex items-center gap-2 text-[#E63946] font-medium"
              >
                <Plus className="w-4 h-4" /> Add FAQ
              </button>
            </div>
          </div>

          {/* Highlight Icons Selection */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#1A1A1A] mb-2">Highlight Icons</label>
            <div className="flex flex-wrap gap-2">
              {highlightOptions.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => {
                    const exists = formData.highlightIcons.find(h => h.label === opt.label);
                    if (exists) {
                      setFormData({ ...formData, highlightIcons: formData.highlightIcons.filter(h => h.label !== opt.label) });
                    } else {
                      setFormData({ ...formData, highlightIcons: [...formData.highlightIcons, opt] });
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                    formData.highlightIcons.find(h => h.label === opt.label)
                      ? 'bg-[#E63946] border-[#E63946] text-white'
                      : 'border-gray-200 text-gray-600 hover:border-[#E63946]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Amenity Images */}
          <div className="md:col-span-2 text-center text-gray-500 py-4 border-2 border-dashed border-gray-200 rounded-xl">
             Amenity images and highlight carousel components to be managed here
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 mt-8">
          <button
            type="submit"
            className="h-12 px-8 bg-[#E63946] text-white rounded-lg hover:bg-[#d32f3d] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            Add Property
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                title: '',
                description: '',
                price: '',
                location: '',
                area: '',
                type: 'For Sale',
                propertyType: 'Plot',
                status: 'Available',
                possessionDate: '',
                units: '',
                projectSize: '',
                reraNumber: '',
                amenities: [],
                whyToBuy: [],
                masterPlanImage: '',
                amenityImages: [],
                highlightIcons: [],
                faq: [],
              })
            }
            className="h-12 px-8 bg-gray-200 text-[#1A1A1A] rounded-lg hover:bg-gray-300 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
