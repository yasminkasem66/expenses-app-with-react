import React from 'react';

import './Card.css';

// Sometimes however, you wanna have a component
// where you don't configure everything through props
// but where instead you're able to pass content
// between the opening and closing tags of that component.
// extract some code duplication
// from inside our CSS files
// into this separate wrapper component.
// And it's not just a duplicate CSS code.
// We also were able to extract this HTML code,
// this JSX code, this div here.
// In this case, it's just one div
const Card = (props) => {
  const classes = 'card ' + props.className;

  
  return(
     <div className={classes}>
      {/* And an especially important part of composition is this props children feature which allows you to also create wrapper components which is a special type of component, you could say, */}
      {props.children}</div>);
};

export default Card;