const Footer = () => {
  return (
    <footer className='footer'>
      <div className='section-container'>
        <div className='footer-top'>
          <div className='info-container'>
            <h3 className='footer-title'>Sijal Manandhar</h3>
            <p className='info-desc'>
              Frontend focused <strong> Web Developer </strong> designing and
              developing front-end of Websites and Web Applications.
            </p>
          </div>
          {/* info-container */}

          <div className='social-container'>
            <h3 className='footer-title'>Social</h3>
            <ul className='social-list'></ul>
            {/* social-list */}
          </div>
          {/* social-container */}
        </div>
        {/* footer-top */}

        <div className='footer-bottom'>
          &copy; Copyright
          <script>document.write(new Date().getFullYear());</script>. Made by
          <a href='#'>Sijal Manandhar</a>
        </div>
        {/* footer-bottom  */}
      </div>
      {/* social-container  */}
    </footer>
  );
};

export default Footer;
