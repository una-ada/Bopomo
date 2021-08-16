/**
 * Font preview component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.16
 * @since 2021.08.11
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import { Card } from '../../../elements';

const Preview = ({ font, ...props }) => (
  <Card {...props}>
    <p className="font__user">{font.user.name}</p>
    <h1 className="font__title">{font.name}</h1>
    <p className="font__body">{font.copy}</p>
  </Card>
);

export default Preview;
