import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../boton/boton.css';

const Boton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top-btn" onClick={handleScrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Boton;
