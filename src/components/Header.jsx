import { useEffect, useState } from 'react';
import { navLinks } from '../constants';

const Header = () => {
  const [headerToggleActive, setHeaderToggleActive] = useState(false);
  const [headerScrollActive, setHeaderScrollActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResizeAndScroll = () => {
      setHeaderToggleActive(false);
      setScrollY(window.scrollY);
    };
    window.addEventListener('resize', handleResizeAndScroll);
    window.addEventListener('scroll', handleResizeAndScroll);
    return () => {
      window.removeEventListener('scroll', handleResizeAndScroll);
      window.removeEventListener('resize', handleResizeAndScroll);
    };
  }, []);

  useEffect(() => {
    setHeaderScrollActive(scrollY > 130);
  }, [scrollY]);

  return (
    <header
      className={`header ${headerToggleActive ? 'header-toggle-active' : ''} 
      ${headerScrollActive ? 'header-scroll-active' : ''}`}
    >
      <div className='section-container'>
        <h3 className='logo'>
          <a href='/'>
            <span>S</span>
            am4Web
            <span>.</span>
          </a>
        </h3>
        {/* logo */}

        <nav className='nav'>
          <ul className='nav-list'>
            {navLinks.map((link, idx) => (
              <li className='nav-item' key={idx}>
                <a href={`#${link.id}`} className='nav-link'>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* nav */}
      </div>
      {/* section-container */}

      <button
        className='toggle-btn'
        onClick={() => {
          setHeaderToggleActive((prevState) => !prevState);
        }}
      >
        <div className='bar'></div>
      </button>
      {/* toggle-btn */}
    </header>
  );
};

export default Header;
