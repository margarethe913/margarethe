import React, { useState } from 'react';

import '../style/about.css'
import '../style/index.css'
import Popup from './popup'

function About() {    
    const [showPopup, setShowPopup] = useState(false);
    // Function to toggle the popup
    const togglePopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
  return (
    <>
    <section id="about">
        <section id="one" class="wrapper spotlight style1">
            <div class="inner">
                <div class="content">
                    <h2 class="major">About Me</h2>
                    <p>Hi! I'm Margaret (she/her) and I'm a student in the School of Computer Science at Carnegie Mellon, pursuing a major in Computer Science with a concentration in Human-Computer Interaction. 
With my strong technical background and expertise in empathetic and user-centered design, I'm interested in software engineering positions in which I can combine my aptitude for leadership and problem-solving, creative-thinking skills, and knowledge of existing societal systems to drive technological innovation that works for and with users.
    </p>
                    <a href="https://www.linkedin.com/in/margaret-he/" class="special">LinkedIn</a>
                </div>
            </div>
        </section>
        <section id="two" class="wrapper alt spotlight style2">
            <div class="inner">
                <div class="content">
                <h2 class="major">Education</h2>
                <h3> B.S. in Computer Science, Carnegie Mellon University</h3>
                <h3> GPA : 4.0 </h3>
                <a class="special" onClick={togglePopup}>My Coursework</a>
            </div>
            </div>
        </section>
        <section id ="three" class="wrapper spotlight style3">
            <div class="inner">
                <div class="content">
                <h2 class="major">My Skills</h2>
                <ul class="skill-list">
                    <li>Python</li>
                    <li>C</li>
                    <li>Go</li>
                    <li>SML</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                </div>
            </div>
        </section>
</section>
{showPopup && <Popup onClose={handleClosePopup} />}
</>
);
}

export default About;