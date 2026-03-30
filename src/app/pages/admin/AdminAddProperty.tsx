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
    propertyType: 'Flat',
    bedrooms: '',
    bathrooms: '',
    status: 'Ready to Move',
    reraNumber: '',
    amenities: [] as string[],
  });

  const [currentAmenity, setCurrentAmenity] = useState('');

  const amenitiesList = [
    'Swimming Pool',
    'Gym',
    'Clubhouse',
    'Parking',
    '24/7 Security',
    'Children Play Area',
    'Landscaped Gardens',
    'Power Backup',
    'Lift',
    'CCTV',
    'Modular Kitchen',
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
      propertyType: 'Flat',
      bedrooms: '',
      bathrooms: '',
      status: 'Ready to Move',
      reraNumber: '',
      amenities: [],
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
      amenities: formData.amenities.filter((a) => a !== amenity),
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
            <label className="block text-sm text-[#1A1A1A] mb-2">Property Type *</label>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              required
            >
              <option value="Flat">Flat</option>
              <option value="Villa">Villa</option>
              <option value="Plot">Plot</option>
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

          {/* Bedrooms */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Bedrooms</label>
            <Input
              type="number"
              placeholder="e.g., 3"
              value={formData.bedrooms}
              onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
              className="h-12 bg-[#F5F5F5] border-none"
              min="0"
            />
          </div>

          {/* Bathrooms */}
          <div>
            <label className="block text-sm text-[#1A1A1A] mb-2">Bathrooms</label>
            <Input
              type="number"
              placeholder="e.g., 3"
              value={formData.bathrooms}
              onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
              className="h-12 bg-[#F5F5F5] border-none"
              min="0"
            />
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

          {/* Images Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#1A1A1A] mb-2">Property Images</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#E63946] transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-400 mt-2">PNG, JPG up to 10MB</p>
            </div>
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
                propertyType: 'Flat',
                bedrooms: '',
                bathrooms: '',
                status: 'Ready to Move',
                reraNumber: '',
                amenities: [],
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
