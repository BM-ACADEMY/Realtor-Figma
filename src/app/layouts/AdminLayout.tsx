import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import { LayoutDashboard, Home, Plus, Users, Calendar, Image, Settings, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';

export function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simple auth check - in production, this would check a real auth token
    const auth = localStorage.getItem('adminAuth');
    if (!auth) {
      navigate('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/properties', label: 'Properties', icon: Home },
    { path: '/admin/add-property', label: 'Add Property', icon: Plus },
    { path: '/admin/leads', label: 'Leads / Inquiries', icon: Users },
    { path: '/admin/site-visits', label: 'Site Visit Bookings', icon: Calendar },
    { path: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#000000] text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
            <span className="text-[#E63946]">Red</span>
            <span className="text-white">earth properties</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">Admin Panel</p>
        </div>
        <nav className="flex-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  isActive
                    ? 'bg-[#E63946] text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}