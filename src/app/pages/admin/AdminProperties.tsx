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
        <Link to="/admin/add-property">
          <Button
            className="bg-[#E63946] hover:bg-[#d32f3d] h-12 px-6"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Property
          </Button>
        </Link>
      </div>

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
                  Title & Type
                </th>
                <th className="text-left px-6 py-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Price
                </th>
                <th className="text-left px-6 py-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Possession
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
                    <div className="text-[#1A1A1A] max-w-xs truncate font-medium">{property.title}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{property.propertyType}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[#E63946]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                      {formatIndianCurrencyCompact(property.price)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{property.possessionDate || 'Immediate'}</div>
                    <div className="text-xs text-gray-400">{property.status}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
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