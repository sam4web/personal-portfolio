/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section className='hero'>
      <div className='section-container'>
        <p className='desc'>Hello, I'm Sam</p>
        <h1 className='title'>Hey! I'm Sijal Manandhar</h1>
        <p className='desc'>
          A Frontend focused <strong> Web Developer </strong> designing and
          developing front-end of Websites and Web Applications.
        </p>
        <a href='#projects' className='button'>
          Projects
        </a>
      </div>

      <div className='mouse-scroll-animation'>
        <div className='dot'></div>
      </div>
      {/* mouse-scroll-animation */}
    </section>
  );
};

export default Hero;
