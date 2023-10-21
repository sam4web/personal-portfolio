/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section className='about' id='about'>
      <div className='section-container'>
        <h2 className='section-title'>About Me</h2>
        <p className='section-subtitle'>
          Here you will find more information about me and my current skills
          mostly in terms of programming and technology
        </p>

        <div className='content-container'>
          <div className='content-main'>
            <h3 className='content-title'>Get to know me !</h3>
            <p className='content-main__para'>
              I'm a self-taught <strong> Frontend Web Developer </strong> with
              1.5+ years of experience on designing and developing front-end of
              websites and web applications. You can check out some of my
              previous work in the <strong> Projects </strong> section.
            </p>
            {/* content-paragraph */}
            <p className='content-main__para'>
              Currently I'm trying to find a great working environment to
              improve my skills and learn more.
            </p>
            {/* content-paragraph */}
            <p className='content-main__para'>
              I'm available to <strong> Job </strong> opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to
              <strong> contact </strong> me.
            </p>
            {/* content-paragraph */}
            <a href='#contact' className='btn'>
              Contact
            </a>
            <a
              href='https://resume.io/r/8tuDJbCVV'
              className='btn btn-transparent'
              target='_blank'
              rel='noreferrer'
            >
              View Resume
            </a>
          </div>
          {/* content-main */}

          <div className='content-skill'>
            <h3 className='content-title'>My Skills</h3>
            <ul className='skill-container'></ul>
            {/* skill-container */}
          </div>
          {/* content-skill */}
        </div>
        {/* content-container */}
      </div>
      {/* section-container */}
    </section>
  );
};

export default About;
