import React from 'react';

const AppHeader = () => (
  <div className="app-header">
    <div className="logo">
      <svg className="logo-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 446.6 387.66 C 370.57 496.24 220.92 522.63 112.34 446.6
          L 112.34 446.6 C 3.76 370.57 -22.63 220.92 53.4 112.34
          L 53.4 112.34 C 129.43 3.76 279.08 -22.63 387.66 53.4
          L 387.66 53.4 C 410.59 69.46 430.54 89.41 446.6 112.34"
        />
        <path
          d="M 413.83 364.72 C 350.47 455.2 225.76 477.19 135.28 413.83
          L 135.28 413.83 C 44.8 350.47 22.81 225.76 86.17 135.28
          L 86.17 135.28 C 149.53 44.8 274.24 22.81 364.72 86.17
          L 364.72 86.17 C 383.83 99.55 400.45 116.17 413.83 135.28"
        />
        <path
          d="M 381.06 341.77 C 330.38 414.15 230.61 431.74 158.23 381.06
          L 158.23 381.06 C 85.85 330.38 68.26 230.61 118.94 158.23
          L 118.94 158.23 C 169.62 85.85 269.39 68.26 341.77 118.94
          L 341.77 118.94 C 357.06 129.65 370.35 142.94 381.06 158.23"
        />
      </svg>
      <p className="logo-text">circlarc.svg</p>
    </div>
    <a
      href="https://github.com/eclipseeer/circlarc.svg"
      rel="noreferrer noopener"
      target="_blank"
    >GitHub</a>
  </div>
);

export default AppHeader;
