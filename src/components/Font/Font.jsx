/**
 * Font preview component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.11
 * @since 2021.08.11
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import { fonts } from '../../api';
import { Card } from '../../elements';
import './Font.css';

const Font = ({ font, ...props }) => (
  <Card {...props}>
    <p className="font__user">{font.user.name}</p>
    <h1 className="font__title">{font.name}</h1>
    <p className="font__body">{font.copy}</p>
  </Card>
);

export default Font;
