import React from 'react';

const MainText = () => (
  <div className="main-text">
    <h1>
      <strong>circlarc.svg</strong> is an open-source online service for generating
      SVG circular arcs using Bézier curves
    </h1>
    <p>
      If you need to create a circular line or figure and you wouldn't
      like to spend a lot of time drawing it in Inkscape, Adobe Illustrator
      or another vector graphic editor, you will like <strong>circlarc.svg</strong>.
    </p>
    <p>
      Simply enter the initial data, such as the start/end angle, the radius,
      and the center point of the circle, and in a second you will get the
      final value of the attribute <strong>d</strong> of your <strong>path</strong> element.
      And that's it:)
    </p>
  </div>
);

export default MainText;
