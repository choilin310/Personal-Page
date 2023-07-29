import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.demoLink} className="work__button" target="_blank">
        <div className="demo">
        Showcase <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </div>
      </a>
    </div>
  );
};

export default WorkItems;
