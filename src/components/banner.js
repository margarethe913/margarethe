import React, { useEffect, useState } from 'react';
import '../style/banner.css';

function Banner() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true); // Activate transition after component mounts
    }, 100); // Slight delay for smoother transition
  }, []);

  return (
    <section id="banner">
        <div className="image"></div>
      <div className="inner">
        <h2 className={isActive ? 'active' : ''}>Margaret He</h2>
        <p className={isActive ? 'active' : ''}>Computer Science & Human-Computer Interaction @ Carnegie Mellon</p>
      </div>
    </section>
  );
}

export default Banner;