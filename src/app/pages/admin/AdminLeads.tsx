import { useState } from 'react';
import { mockLeads } from '../../data/mockData';
import { Phone, Mail, Calendar, Filter } from 'lucide-react';

export function AdminLeads() {
  const [leads, setLeads] = useState(mockLeads);
  const [filterType, setFilterType] = useState<string>('all');

  const filteredLeads =
    filterType === 'all' ? leads : leads.filter((lead) => lead.type === filterType);

  const getLeadTypeColor = (type: string) => {
    switch (type) {
      case 'property':
        return 'bg-blue-100 text-blue-700';
      case 'site-visit':
        return 'bg-green-100 text-green-700';
      case 'general':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
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
            Leads & Inquiries
          </h1>
          <p className="text-gray-600">Manage customer inquiries and follow-ups</p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-600" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="h-12 px-4 bg-white border border-gray-200 rounded-lg outline-none"
          >
            <option value="all">All Leads</option>
            <option value="property">Property Inquiries</option>
            <option value="site-visit">Site Visits</option>
            <option value="general">General Inquiries</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Total Leads</div>
          <div
            className="text-3xl text-[#1A1A1A]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {leads.length}
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Property Inquiries</div>
          <div
            className="text-3xl text-[#1A1A1A]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {leads.filter((l) => l.type === 'property').length}
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Site Visits</div>
          <div
            className="text-3xl text-[#1A1A1A]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {leads.filter((l) => l.type === 'site-visit').length}
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">General Inquiries</div>
          <div
            className="text-3xl text-[#1A1A1A]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {leads.filter((l) => l.type === 'general').length}
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F5F5F5]">
              <tr>
                <th
                  className="text-left px-6 py-4 text-sm text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Date
                </th>
                <th
                  className="text-left px-6 py-4 text-sm text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Name
                </th>
                <th
                  className="text-left px-6 py-4 text-sm text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Contact
                </th>
                <th
                  className="text-left px-6 py-4 text-sm text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Type
                </th>
                <th
                  className="text-left px-6 py-4 text-sm text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Property
                </th>
                <th
                  className="text-left px-6 py-4 text-sm text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Message
                </th>
                <th
                  className="text-left px-6 py-4 text-sm text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[#F5F5F5]/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{lead.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className="text-[#1A1A1A]"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                    >
                      {lead.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <a href={`tel:${lead.phone}`} className="hover:text-[#E63946]">
                          {lead.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${lead.email}`} className="hover:text-[#E63946]">
                          {lead.email}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm capitalize ${getLeadTypeColor(
                        lead.type
                      )}`}
                    >
                      {lead.type.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600 max-w-xs truncate">
                      {lead.property || '-'}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600 max-w-xs truncate">{lead.message}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${lead.phone}`}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Call"
                      >
                        <Phone className="w-5 h-5 text-[#E63946]" />
                      </a>
                      <a
                        href={`mailto:${lead.email}`}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Email"
                      >
                        <Mail className="w-5 h-5 text-[#E63946]" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLeads.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            No leads found for the selected filter.
          </div>
        )}
      </div>
    </div>
  );
}
