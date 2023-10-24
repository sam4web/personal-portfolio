import { aboutImage } from '../assets';
import { createSocialIcon } from '../utils';
import { socialInfo } from '../data';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='section-container'>
        <p className='section-subtitle'>Get to know me</p>
        <h2 className='section-title'>About Me</h2>
        <p className='section-desc'>
          Here you will find more information about me and my current skills
          mostly in terms of programming and technology
        </p>

        <div className='content-container'>
          <div
            className='content__image'
            style={{ backgroundImage: `url(${aboutImage})` }}
          ></div>
          {/* /content-image */}
          <div className='content__info'>
            <div className='content-info__section content-info__section-top'>
              <h3 className='content__info-title'>Sijal Manandhar</h3>
              <h4 className='content__info-subtitle'>
                A <span>Frontend</span> web developer based in{' '}
                <span>Nepal</span>
              </h4>
              <p className='content__info-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eius, harum neque maxime ratione inventore obcaecati velit
                sapiente mollitia pariatur ipsam impedit quisquam. Ea inventore
                voluptatibus est repellendus, magnam animi, tempora corrupti
                iure numquam laudantium quisquam ipsum commodi? Beatae,
                sapiente?
              </p>
              {/* /info-desc */}
              <ul className='social-icons'>
                {socialInfo.map((social) => (
                  <li key={social.id}>
                    <a href={social.url} title={social.title}>
                      {createSocialIcon(social.icon)}
                    </a>
                  </li>
                ))}
              </ul>
              {/* /social-icons */}
            </div>
            {/* content-info__section */}

            <hr className='line-break' />

            <div className='content-info__section content-info__section-bottom'>
              <h4 className='content-info__section-title'>Personal Info</h4>
              <div>
                <ul>
                  <li>
                    <span>Name: </span> John Smith
                  </li>
                  <li>
                    <span>Age: </span> 21 Years
                  </li>
                  <li>
                    <span>Nationality: </span> USA
                  </li>
                  <li>
                    <span>Freelance: </span> Available
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Address: </span> H-400 - Path2UK
                  </li>
                  <li>
                    <span>Phone: </span> +12345667
                  </li>
                  <li>
                    <span>Email: </span> yourmail@gmail.com
                  </li>

                  <li>
                    <span>Languages: </span> French, English
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /contact-info */}
        </div>
        {/* /content-container */}

        <div className='skills-container'>
          <div className='skills-container__title'>My Skills</div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      {/* section-container */}
    </section>
  );
};

export default About;
