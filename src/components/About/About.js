import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Outlet, Link } from "react-router-dom";
import "./About.scss";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3300);
  }, []);

  return (
    <div className="container about-page">
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
                ",",
                " ",
                "M",
                "y",
                "s",
                "e",
                "l",
                "f",
                " ",
                "&",
                " ",
                "I",
              ]}
              idx={15}
            />
          </h1>
          <p>
            I'm Sarvesh Arun, a third-year Information Technology student at Sri Venkateswara College of Engineering with a passion for Software Engineering, Full Stack Development, and building impactful digital products.
            <br />
            <br />
            I've built full-stack applications ranging from stock trading platforms and property rental systems to enterprise-level course registration portals and AI-powered healthcare solutions. My interests lie in creating scalable systems, crafting intuitive user experiences, and solving complex real-world problems through technology.
            <br />
            <br />
            • Solved 200+ Data Structures & Algorithms problems using Java
            <br />
            • 2nd Place — RotaTechX Hackathon
            <br />
            • Runner-Up — Algent Arena AI Innovation Challenge
            <br />
            • Open Source & Full Stack Development Enthusiast
            <br />
            <br />
            Beyond development, I enjoy exploring emerging technologies, system design, UI animations, and continuously challenging myself to learn, build, and innovate.
            <Link to="/contact" className="reach">
              Reach out to me!
            </Link>
          </p>
          <div className="myCv">
            <div className="rtext">My Resume</div>
            <div className="rrtext"></div>
            <div className="okay">
              <a href="/Resume-Sarveshvaran A.pdf" target="_blank" rel="noopener noreferrer">
                CLICK HERE TO VIEW
              </a>
            </div>
          </div>
        </div>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
}

export default About;