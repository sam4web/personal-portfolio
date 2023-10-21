const Header = () => {
  return (
    <header className='header'>
      <div className='section-container'>
        <div className='logo'>
          <a className='noselect' href='/'>
            Sam4Web
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

      <div className='toggle-btn'>
        <div className='bar'></div>
      </div>
      {/* toggle-btn */}
    </header>
  );
};

export default Header;
