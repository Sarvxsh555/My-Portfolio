import React from 'react'
import { useEffect, useState, useRef } from "react";
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Project.scss'
import { Outlet } from 'react-router-dom'
import adminDashboard from '../../assets/project/Admin-Dashboard.png'
import eduSelectAd from '../../assets/project/EduSelect-Ad.png'
import eduSelect from '../../assets/project/EduSelect.png'
import hailMary from '../../assets/project/Hailmary.png'
import oeStudentPortal from '../../assets/project/OE-Student-Portal.png'
import openElective from '../../assets/project/Open-Elective.png'
import tradezy from '../../assets/project/Tradezy.png'
import wanderLust from '../../assets/project/WanderLust.png'
import wanderLust2 from '../../assets/project/Wanderlust-2.png'

function Project() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3300)
  }, [])

const scrollableRef = useRef(null);
const [isScrolling, setIsScrolling] = useState(true);

useEffect(() => {
  const scrollableElement = scrollableRef.current;

  const scrollContent = () => {
    if (isScrolling) {
      if (scrollableElement.scrollTop >= scrollableElement.scrollHeight / 2) {
        scrollableElement.scrollTop = 0;
      } else {
        scrollableElement.scrollTop += 1;
      }
    }
  };

  const intervalId = setInterval(scrollContent, 20);

  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  scrollableElement.addEventListener("mouseenter", handleMouseEnter);
  scrollableElement.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    clearInterval(intervalId);
    scrollableElement.removeEventListener("mouseenter", handleMouseEnter);
    scrollableElement.removeEventListener("mouseleave", handleMouseLeave);
  };
}, [isScrolling]);


  return (
    <>
      <div className="container project-page">
        <div className="page">
          <span className="tags top-html">&lt;/html&gt;</span>
          <span className="tags top-tags">&lt;body&gt;</span>

          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  "M",
                  "y",
                  " ",
                  "P",
                  "r",
                  "o",
                  "j",
                  "e",
                  "c",
                  "t",
                  "s",
                ]}
                idx={15}
              />
            </h1>
            <p>
              I specialize in Full Stack Development and have a growing passion for Artificial Intelligence and Machine Learning. From scalable web applications and enterprise platforms to AI-powered solutions, I enjoy building technology that is both impactful and user-centric.
              <br />
              <br />
              Every project reflects my focus on clean design, efficient engineering, and solving real-world challenges through innovation. I'm constantly learning, experimenting, and pushing my boundaries as a developer and aspiring software engineer.
              <br />
              <br />
              Here are some of my recent projects.
              <br />
              <a
                href="https://github.com/Sarvxsh555"
                target="_blank"
                rel="noreferrer"
                className="qView"
              >
                Care to explore?
              </a>
            </p>
          </div>
          <div
            id="home-magicwall"
            className="fake-magicwall auto-scroll"
            ref={scrollableRef}
          >
            {[...Array(50)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="magic-wall_item">
                  <a
                    href="https://github.com/Sarvxsh555/OPEN-ELECTIVE.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={adminDashboard} alt="Admin Dashboard" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://edu-select-three.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={eduSelect} alt="EduSelect" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://edu-select-three.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={eduSelectAd} alt="EduSelect Admin" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://github.com/Sarvxsh555/HailMary-TB-Analysis.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={hailMary} alt="Hailmary" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://www.svce.ac.in/office-of-the-coe/open-elective/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={oeStudentPortal} alt="OE Student Portal" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://www.svce.ac.in/office-of-the-coe/open-elective/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={openElective} alt="Open Elective" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://github.com/Sarvxsh555/Tradezy.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={tradezy} alt="Tradezy" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://wanderlust-d291.onrender.com/listings"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={wanderLust} alt="WanderLust" />
                  </a>
                </div>
                <div className="magic-wall_item">
                  <a
                    href="https://github.com/Sarvxsh555/WanderLust.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={wanderLust2} alt="WanderLust 2" />
                  </a>
                </div>
              </React.Fragment>
            ))}
          </div>
          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Project