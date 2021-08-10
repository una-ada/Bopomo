/**
 * Card Component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 */

/*----- Imports --------------------------------------------------------------*/
import React, { Component } from 'react';
import CardTitle from './CardTitle/CardTitle';
import './Card.css';

class Card extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <div className="card" {...rest}>
        {children}
      </div>
    );
  }
}

Card.Title = CardTitle;

/*----- Exports --------------------------------------------------------------*/
export default Card;
