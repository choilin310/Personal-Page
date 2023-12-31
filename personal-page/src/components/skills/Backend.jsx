import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-nodejs"></i>

            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-postgresql"></i>
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-deezer"></i>
            <div>
              <h3 className="skills__name">JSON</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-mongodb"></i>

            <div>
              <h3 className="skills__name">Express.js</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-netlify"></i>
            <div>
              <h3 className="skills__name">Restful API services</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
