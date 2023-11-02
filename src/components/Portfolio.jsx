import { useEffect } from 'react';
import { projectTags, projectList } from '../db/data.json';
import { useState } from 'react';

const Portfolio = () => {
  const [projectTagList, setProjectTagList] = useState([]);
  const [filterTag, setFilterTag] = useState('all');

  useEffect(() => {
    const tagList = [{ id: 0, label: 'all', active: true }];
    projectTags.map((tag, idx) =>
      tagList.push({ id: idx + 1, label: tag, active: false })
    );
    setProjectTagList(tagList);
  }, []);

  const changeFilterTag = (id) => {
    setProjectTagList((prevTagList) =>
      prevTagList.map((tag) => ({ ...tag, active: tag.id === id }))
    );
    setFilterTag(projectTagList.filter((tag) => tag.id === id)[0].label);
  };

  return (
    <section className='portfolio' id='portfolio'>
      <div className='section-container'>
        <div className='section-subtitle'>Portfolio</div>
        <h2 className='section-title'>Creative Portfolio</h2>
        <p className='section-desc'>
          These projects reflect my personal endeavors, showcasing my dedication
          and creativity.
        </p>

        <div className='content-container'>
          <ul className='project-tag__list'>
            {projectTagList
              ? projectTagList.map((tag) => (
                  <li
                    key={tag.id}
                    className={`project-tag__item ${
                      tag.active ? 'tag-active' : ''
                    }`}
                    onClick={() => {
                      changeFilterTag(tag.id);
                    }}
                  >
                    {tag.label}
                  </li>
                ))
              : ''}
          </ul>
          {/* /tags-container */}

          <div className='project-container'>
            <div className='projcet-item'>
              {projectList.map((project) => {
                if (project.tags.includes(filterTag) || filterTag == 'all')
                  return <div key={project.id}>{project.name}</div>;
              })}
            </div>
          </div>
          {/* /project-container */}
        </div>
        {/* /content-container */}
      </div>
      {/* /section-container */}
    </section>
  );
};

export default Portfolio;
