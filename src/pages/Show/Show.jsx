/**
 * Font show page
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.16
 * @since 2021.08.16
 */

/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import { useParams } from 'react-router-dom';
import { Font } from '../../components';

const Show = props => {
  /*----- State --------------------------------------------------------------*/
  const { id } = useParams();

  /*----- Template -----------------------------------------------------------*/
  return <Font id={id} />;
};

/*----- Exports --------------------------------------------------------------*/
export default Show;
