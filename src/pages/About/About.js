import React from 'react';

import './About.css';
import githubLogo from '../../images/github.svg';
import linkedinLogo from '../../images/linkedin.svg';

const About = () => {
  return (
    <>
      <div className="about-container">
        <section className="project-info">
          <h4 className="about-intro">
            Hi, my name is <strong>Estanislao Albin Wotoszyn Grillo</strong> and
            I'm a Frontend Developer.
          </h4>
          <p className="about-description">
            The purpose of this page is just to practice code writing. In this
            case I'm using:
          </p>
          <ul className="list-languages">
            <li>React</li>
            <li>Redux</li>
            <li>
              The data is fetched from{' '}
              <a
                href="https://jsonplaceholder.typicode.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                jsonplaceholder API
              </a>
            </li>
          </ul>
        </section>
        <section className="social">
          <a
            href="https://github.com/albin-woto"
            title="Github profile"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="social-icon" src={githubLogo} alt="github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/albin-wotoszyn"
            title="LinkedIn profile"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="social-icon"
              src={linkedinLogo}
              alt="linkedin-icon"
            />
          </a>
        </section>

        <div className="attribute">
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
            rel="noopener noreferrer"
            target="_blank"
          >
            Pixel perfect
          </a>{' '}
          from{' '}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            rel="noopener noreferrer"
            target="_blank"
          >
            www.flaticon.com
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
