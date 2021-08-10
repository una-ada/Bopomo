/**
 * Card Component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import './Card.css';

const Card = props => (
  <div className="card" {...props}>
    {props.children}
  </div>
);

/*----- Exports --------------------------------------------------------------*/
export default Card;
