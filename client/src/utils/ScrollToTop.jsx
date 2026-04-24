import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
        const element = document.getElementById(hash.slice(1));
        if (element) {
            // Give a tiny delay for Lenis and DOM to be ready
            setTimeout(() => {
                if (window.lenis) {
                    window.lenis.scrollTo(element, { offset: -100 });
                } else {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return;
        }
    }

    // Otherwise scroll to top
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
