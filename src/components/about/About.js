import React from 'react';
import { aboutData } from './data';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about">
      <h1 className="about-title">{aboutData.company.title}</h1>
      <p className="about-description">{aboutData.company.description}</p>
      <div className="about-content">
        <h2>{aboutData.company.story.title}</h2>
        <p>{aboutData.company.story.description}</p>
        <div className="about-stats">
          {aboutData.stats.map((stat) => (
            <div key={stat.id} className="stat">
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
