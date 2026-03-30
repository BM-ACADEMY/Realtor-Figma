import { MessageCircle } from 'lucide-react';
import { realtorInfo } from '../data/mockData';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi, I am interested in your real estate services.');
    window.open(
      `https://wa.me/${realtorInfo.whatsapp.replace(/\s+/g, '')}?text=${message}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 flex items-center justify-center z-50"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
}
