import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Ensures that whenever the route changes, the scroll position is reset to the top.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash, scroll to top on pathname change
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, scroll to the element after a short delay to ensure it's rendered
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}
