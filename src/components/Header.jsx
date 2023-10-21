import { useEffect } from 'react';
import { useState } from 'react';

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
        <div className='logo'>
          <a href='/'>
            <span>S</span>
            am4Web
            <span>.</span>
          </a>
        </div>
        {/* logo */}

        <nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a href='#about' className='nav-link'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a href='#projects' className='nav-link'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' className='nav-link'>
                Contact
              </a>
            </li>
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
