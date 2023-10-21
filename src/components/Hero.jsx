import { TypeAnimation } from 'react-type-animation';
import resumeDoc from '../assets/resume.pdf';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='section-container'>
        <p className='desc info'>Hello, I&#39;m Sam</p>
        <h1 className='title'>
          I&#39;m a{' '}
          <TypeAnimation
            sequence={['Web Developer.', 1500, 'UI/UX Designer.', 1500]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className='desc'>
          I create user-friendly websites for all kinds of businesses, big or
          small. Let me turn your ideas into reality!
        </p>

        <button className='btn'>
          <a
            href={resumeDoc}
            download='Sijal Manandhar Resume'
            target='_blank'
            rel='noreferrer'
          >
            Download CV
          </a>
        </button>
      </div>

      <div className='mouse-scroll-animation'>
        <div className='dot'></div>
      </div>
      {/* mouse-scroll-animation */}
    </section>
  );
};

export default Hero;
