import { useState } from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { properties } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { formatIndianCurrencyCompact } from '../../utils/indianFormat';

export function AdminProperties() {
  const [propertyList, setPropertyList] = useState(properties);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this property?')) {
      setPropertyList(propertyList.filter((p) => p.id !== id));
      toast.success('Property deleted successfully');
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1
            className="text-3xl text-[#1A1A1A] mb-2"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Properties
          </h1>
          <p className="text-gray-600">Manage your property listings</p>
        </div>
        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[#E63946] hover:bg-[#d32f3d] h-12 px-6"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Property
        </Button>
      </div>

      {/* Add Property Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2
            className="text-xl text-[#1A1A1A] mb-6"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Add New Property
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success('Property added successfully');
              setShowAddForm(false);
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm text-[#1A1A1A] mb-2">Title</label>
              <input
                type="text"
                required
                className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[#1A1A1A] mb-2">Price</label>
              <input
                type="number"
                required
                className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[#1A1A1A] mb-2">Location</label>
              <input
                type="text"
                required
                className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[#1A1A1A] mb-2">Area (sq.ft)</label>
              <input
                type="number"
                required
                className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[#1A1A1A] mb-2">Listing Type</label>
              <select
                required
                className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              >
                <option value="">Select Type</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#1A1A1A] mb-2">Property Type</label>
              <select
                required
                className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              >
                <option value="">Select Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Studio">Studio</option>
                <option value="House">House</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#1A1A1A] mb-2">Bedrooms</label>
              <input
                type="number"
                required
                className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[#1A1A1A] mb-2">Bathrooms</label>
              <input
                type="number"
                required
                className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-[#1A1A1A] mb-2">Description</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-none outline-none resize-none"
              />
            </div>
            <div className="md:col-span-2 flex gap-4">
              <Button
                type="submit"
                className="bg-[#E63946] hover:bg-[#d32f3d] h-12 px-8"
              >
                Save Property
              </Button>
              <Button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="bg-gray-200 text-gray-700 hover:bg-gray-300 h-12 px-8"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Properties Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F5F5F5]">
              <tr>
                <th className="text-left px-6 py-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Image
                </th>
                <th className="text-left px-6 py-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Title
                </th>
                <th className="text-left px-6 py-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Price
                </th>
                <th className="text-left px-6 py-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Location
                </th>
                <th className="text-left px-6 py-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Status
                </th>
                <th className="text-left px-6 py-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {propertyList.map((property) => (
                <tr key={property.id} className="hover:bg-[#F5F5F5]/50 transition-colors">
                  <td className="px-6 py-4">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[#1A1A1A] max-w-xs truncate">{property.title}</div>
                    <div className="text-sm text-gray-500">{property.propertyType}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[#E63946]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                      {formatIndianCurrencyCompact(property.price)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{property.location}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        property.type === 'For Sale'
                          ? 'bg-[#E63946]/10 text-[#E63946]'
                          : 'bg-[#1A1A1A]/10 text-[#1A1A1A]'
                      }`}
                    >
                      {property.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/properties/${property.id}`}
                        target="_blank"
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Eye className="w-5 h-5 text-gray-600" />
                      </Link>
                      <button
                        onClick={() => toast.info('Edit functionality coming soon')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Edit className="w-5 h-5 text-blue-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(property.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5 text-[#E63946]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}