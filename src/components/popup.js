import React, { useState } from 'react';
import '../style/popup.css';
import '../style/index.css';

function Popup({ onClose }) {
    // State to manage which year is open
    const [openYear, setOpenYear] = useState(null); // null means all closed

    // Function to toggle year
    const toggleYear = (year) => {
        setOpenYear(openYear === year ? null : year);
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h3>Coursework</h3>
                 <button className="close-button" onClick={onClose}>
                    &times; 
                </button>

                {/* Freshman Year Button */}
                <button className={`collapsible ${openYear === 'freshman' ? 'active' : ''}`} onClick={() => toggleYear('freshman')}>
                    Freshman Year
                </button>
                {openYear === 'freshman' && (
                    <div className="popup-content">
                        <ol>
                            <li>
                                <h4>Fall 2021 (GPA: 4.0)</h4>
                                <ul>
                                    <li>15112: Fundamentals of Programming & Computer Science</li>
                                    <li>15151: Mathematical Foundations for Computer Science</li>
                                    <li>21122: Integration & Approximation</li>
                                    <li>07131: Great Practical Ideas in Computer Science</li>
                                    <li>76102: Advanced First Year Writing: Special Topics</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Spring 2022 (GPA: 4.0)</h4>
                                <ul>
                                    <li>15122: Principles of Imperative Computation</li>
                                    <li>15150: Principles of Functional Programming</li>
                                    <li>21259: Calculus in Three Dimensions</li>
                                    <li>03133: Neurobiology of Disease</li>
                                    <li>88120: Reason, Passion & Cognition</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                )}

                {/* Sophomore Year Button */}
                <button className={`collapsible ${openYear === 'sophomore' ? 'active' : ''}`} onClick={() => toggleYear('sophomore')}>
                    Sophomore Year
                </button>
                {openYear === 'sophomore' && (
                    <div className="popup-content">
                        <ol>
                            <li>
                                <h4>Fall 2022 (GPA: 4.0)</h4>
                                <ul>
                                    <li>15251: Great Ideas in Theoretical Computer Science</li>
                                    <li>05470: Digital Service Innovation</li>
                                    <li>21241: Matrices & Linear Transformations</li>
                                    <li>85241: Social Psychology</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Spring 2023 (GPA: 4.0)</h4>
                                <ul>
                                    <li>15213: Introduction to Computer Systems</li>
                                    <li>15317: Constructive Logic</li>
                                    <li>05391: Designing Human Centered Software</li>
                                    <li>70381: Marketing 1</li>
                                    <li>76270: Writing for the Professions</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                )}

                {/* Junior Year Button */}
                <button className={`collapsible ${openYear === 'junior' ? 'active' : ''}`} onClick={() => toggleYear('junior')}>
                    Junior Year
                </button>
                {openYear === 'junior' && (
                    <div className="popup-content">
                        <ol>
                            <li>
                                <h4>Fall 2023 (GPA: 4.0)</h4>
                                <ul>
                                    <li>15210: Parallel and Sequential Data Structures & Algorithms</li>
                                    <li>15330: Introduction to Computer Security</li>
                                    <li>36218: Probability Theory for Computer Scientists</li>
                                    <li>03125: Evolution</li>
                                </ul>
                            </li>
                            <li>
                                <h4>Spring 2024 (GPA: 4.0)</h4>
                                <ul>
                                    <li>15451: Algorithm Design & Analysis</li>
                                    <li>10315: Introduction to Machine Learning</li>
                                    <li>05317: Design of AI Products</li>
                                    <li>02261: Quantitative Cell & Molecular Biology Laboratory</li>
                                    <li>33120: Science & Science Fiction</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Popup;
