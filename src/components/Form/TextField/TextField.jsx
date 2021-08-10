/**
 * Form text input component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import './TextField.css';

const TextField = ({ label, ...props }) => {
  // Function to create the responder effect
  const handleClick = ({ nativeEvent: e }) =>
    (res =>
      res &&
      // Assign the initial styles to the responder
      Object.assign(res.style, {
        transition: '',
        opacity: 1,
        // Create a circle with 0 radius at the point the mouse clicked
        webkitClipPath: `circle(0px at ${e.offsetX}px ${e.offsetY}px)`,
      }) &&
      // Run on next animation frame to make sure style was applied
      requestAnimationFrame(_ =>
        Object.assign(res.style, {
          transitionDuration: '0.7s',
          opacity: 0,
          // Needs to get the largest possible radius from the diagonal
          webkitClipPath: `circle(${(({ width, height }) =>
            (width ** 2 + height ** 2) ** 0.5)(
            res.getBoundingClientRect()
          )}px at ${e.offsetX}px ${e.offsetY}px)`,
        })
      ))(
      // Get the responder element by searching through the DOM tree
      e.path
        .find(el => el.classList && el.classList.contains('text-field'))
        ?.querySelector('.text-field__responder')
    );
  return (
    <>
      {label && <label className="form__label">{label}</label>}
      <div className="text-field" onClick={handleClick}>
        <div className="text-field__responder"></div>
        <input className="text-field__input" {...props} />
      </div>
    </>
  );
};

/*----- Exports --------------------------------------------------------------*/
export default TextField;
