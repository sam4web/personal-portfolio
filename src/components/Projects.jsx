const Projects = () => {
  return (
    <section className='project' id='projects'>
      <div className='section-container'>
        <h2 className='section-title'>Projects</h2>
        <p className='section-subtitle'>
          These are some of the personal projects that I've created and worked
          on
        </p>

        <div className='project-container'></div>
        {/* project-container */}

        <a
          target='_blank'
          href='https://sam4web.github.io/web-projects/'
          className='button'
          rel='noreferrer'
        >
          View More
        </a>
      </div>
      {/* section-container */}
    </section>
  );
};

export default Projects;
