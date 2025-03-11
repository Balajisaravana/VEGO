import React from "react";
import '@/scss/About.scss';

const EllipseLayout: React.FC = () => {
  const total = 8; // Number of containers
  const radiusX = 650; // Horizontal radius
  const radiusY = 600; // Vertical radius

  const containers = Array.from({ length: total }, (_, i) => {
    const angle = (i * (360 / total)) * (Math.PI / 180); // Convert to radians
    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY;

    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  });

  return (
    <div className="ellipse-wrapper">
      <div className="center-text">Central Text</div>

      {containers.map((style, index) => (
        <div key={index} className="container" style={style}>
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default EllipseLayout;
