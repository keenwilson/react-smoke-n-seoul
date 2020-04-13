import React from "react";

const Feature = ({ title, content, icon }) => {
  // TODO render icon dynamically
  return (
    <div className="feature">
      <i className="feature-icon fa fa-comments"></i>
      <div className="feature-content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Feature;
