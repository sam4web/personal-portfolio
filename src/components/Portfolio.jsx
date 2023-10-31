const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='section-container'>
        <div className='section-subtitle'>Portfolio</div>
        <h2 className='section-title'>Creative Portfolio</h2>
        <p className='section-desc'>
          These are some of the personal projects that I&#39;ve created and
          worked on
        </p>
        <div className='project-container'></div>
        {/* project-container */}

        <button className='btn'>
          <a
            target='_blank'
            href='https://sam4web.github.io/web-projects/'
            rel='noreferrer'
          >
            View More
          </a>
        </button>
      </div>
      {/* section-container */}
    </section>
  );
};

export default Portfolio;
