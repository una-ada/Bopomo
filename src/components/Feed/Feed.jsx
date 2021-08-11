/**
 * Feed component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.11
 * @since 2021.08.11
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import { Card } from '../../elements';

const Feed = ({ fonts }) => (
  <>
    {fonts.map(font => (
      <Card key={font._id}>
        <h1>{font.name}</h1>
      </Card>
    ))}
  </>
);

export default Feed;
