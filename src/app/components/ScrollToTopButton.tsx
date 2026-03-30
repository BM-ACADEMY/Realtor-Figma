import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopButtonProps {
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
}

export function ScrollToTopButton({ scrollContainerRef }: ScrollToTopButtonProps = {}) {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    const scrollY = scrollContainerRef?.current 
      ? scrollContainerRef.current.scrollTop 
      : window.pageYOffset;

    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0 with smooth scrolling
  const scrollToTop = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const target = scrollContainerRef?.current ?? window;
    target.addEventListener('scroll', toggleVisibility);
    return () => {
      target.removeEventListener('scroll', toggleVisibility);
    };
  }, [scrollContainerRef]);

  return (
    <div className={`fixed bottom-28 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-[#E63946] text-white shadow-lg flex items-center justify-center hover:bg-[#d32f3d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}
