import { Home, Users, Calendar, TrendingUp } from 'lucide-react';
import { properties, mockLeads } from '../../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AdminDashboard() {
  const stats = {
    totalProperties: properties.length,
    forSale: properties.filter((p) => p.type === 'For Sale').length,
    forRent: properties.filter((p) => p.type === 'For Rent').length,
    totalLeads: mockLeads.length,
    siteVisits: mockLeads.filter((l) => l.type === 'site-visit').length,
  };

  // Chart data
  const chartData = [
    { name: 'For Sale', value: stats.forSale },
    { name: 'For Rent', value: stats.forRent },
  ];

  const recentLeads = mockLeads.slice(0, 5);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1
          className="text-3xl text-[#1A1A1A] mb-2"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
        >
          Dashboard
        </h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Properties</p>
                <p
                  className="text-3xl text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {stats.totalProperties}
                </p>
              </div>
              <div className="w-12 h-12 bg-[#E63946]/10 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-[#E63946]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">For Sale</p>
                <p
                  className="text-3xl text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {stats.forSale}
                </p>
              </div>
              <div className="w-12 h-12 bg-[#E63946]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#E63946]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Leads</p>
                <p
                  className="text-3xl text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {stats.totalLeads}
                </p>
              </div>
              <div className="w-12 h-12 bg-[#E63946]/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[#E63946]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Site Visits</p>
                <p
                  className="text-3xl text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {stats.siteVisits}
                </p>
              </div>
              <div className="w-12 h-12 bg-[#E63946]/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#E63946]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart */}
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>
              Properties Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#E63946" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Leads */}
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-start justify-between p-4 bg-[#F5F5F5] rounded-lg">
                  <div className="flex-1">
                    <div
                      className="text-[#1A1A1A] mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                    >
                      {lead.name}
                    </div>
                    <div className="text-sm text-gray-600">{lead.phone}</div>
                    {lead.property && (
                      <div className="text-sm text-gray-500 mt-1">{lead.property}</div>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{lead.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
