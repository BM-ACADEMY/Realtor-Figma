import { mockLeads } from '../../data/mockData';
import { formatIndianPhone } from '../../utils/indianFormat';
import { Calendar, Clock, MapPin, Phone, Mail, User } from 'lucide-react';

export function AdminSiteVisits() {
  // Filter only site visit bookings
  const siteVisits = mockLeads.filter((lead) => lead.type === 'site-visit');

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-3xl text-[#1A1A1A] mb-2"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
        >
          Site Visit Bookings
        </h1>
        <p className="text-gray-600">Manage all site visit requests and bookings</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Visits</p>
              <p
                className="text-3xl text-[#1A1A1A]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {siteVisits.length}
              </p>
            </div>
            <div className="w-12 h-12 bg-[#E63946]/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#E63946]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Today</p>
              <p
                className="text-3xl text-[#1A1A1A]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                0
              </p>
            </div>
            <div className="w-12 h-12 bg-[#E63946]/10 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#E63946]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">This Week</p>
              <p
                className="text-3xl text-[#1A1A1A]"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
              >
                {siteVisits.length}
              </p>
            </div>
            <div className="w-12 h-12 bg-[#E63946]/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#E63946]" />
            </div>
          </div>
        </div>
      </div>

      {/* Site Visits List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F5F5F5] border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Property
                </th>
                <th className="px-6 py-4 text-left text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {siteVisits.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No site visit bookings yet
                  </td>
                </tr>
              ) : (
                siteVisits.map((visit) => (
                  <tr key={visit.id} className="border-b border-gray-100 hover:bg-[#F5F5F5] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#E63946]/10 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-[#E63946]" />
                        </div>
                        <div>
                          <p className="text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                            {visit.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4" />
                          {visit.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4" />
                          {visit.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                        <span className="text-sm text-gray-600">{visit.property || 'General Inquiry'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {new Date(visit.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-[#E63946] text-white rounded-lg text-sm hover:bg-[#d32f3d] transition-colors">
                          Confirm
                        </button>
                        <button className="px-3 py-1 bg-gray-200 text-[#1A1A1A] rounded-lg text-sm hover:bg-gray-300 transition-colors">
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
