import { TypeAnimation } from 'react-type-animation';
import resumeDoc from '../assets/resume.pdf';
import { FaChevronDown } from 'react-icons/fa6';
import { Link } from 'react-scroll';

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

        <button className='btn btn-transparent'>
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

      <Link
        className='nav-link'
        activeClass='nav-link__active'
        to='about'
        spy={true}
        smooth={true}
        offset={-70}
        duration={10}
      >
        <button className='arrow-down'>
          <FaChevronDown />
        </button>
      </Link>
      {/* mouse-scroll-animation */}
    </section>
  );
};

export default Hero;
