/**
 * Feed component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.11
 * @since 2021.08.11
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import { Font } from '../../components';

const Feed = ({ fonts }) => (
  <>
    {fonts.map(font => (
      <Font.Preview key={font._id} font={font} />
    ))}
  </>
);

export default Feed;
