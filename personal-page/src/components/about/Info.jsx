import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i className='bx bx-award about__icon'></i>
        <h3 className="about__title">Certificate</h3>
        <span className="about__subtitle">Fullstack Engineer</span>
      </div>

      <div className="about__box">
      <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48+ Projects</span>
      </div>

      <div className="about__box">
      <i className='bx bx-support about__icon'></i>
        <h3 className="about__title">Job</h3>
        <span className="about__subtitle">Open to all</span>
      </div>
    </div>
  );
};

export default Info;
