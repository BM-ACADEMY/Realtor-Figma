import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock, User } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { toast } from 'sonner';

export function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication - in production, this would validate against a real backend
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      toast.success('Login successful!');
      navigate('/admin');
    } else {
      toast.error('Invalid credentials. Use admin/admin123');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#F5F5F5]"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(230, 57, 70, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)`,
      }}
    >
      <div className="w-full max-w-md mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1
              className="text-3xl mb-2"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              <span className="text-[#E63946]">Elite</span>
              <span className="text-[#1A1A1A]">Estates</span>
            </h1>
            <p className="text-gray-600">Admin Panel Login</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-[#1A1A1A] mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  required
                  className="pl-10 h-12 bg-[#F5F5F5] border-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#1A1A1A] mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                  className="pl-10 h-12 bg-[#F5F5F5] border-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[#E63946] text-white rounded-lg hover:bg-[#d32f3d] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Demo credentials:</p>
            <p className="mt-1">
              <span className="font-medium">Username:</span> admin
            </p>
            <p>
              <span className="font-medium">Password:</span> admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
