/**
 * Font show page
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.16
 * @since 2021.08.16
 */

/*----- Imports --------------------------------------------------------------*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../elements';
import { useAuth } from '../../utils/auth';
import { fonts as fontsAPI } from '../../api';

const Show = props => {
  /*----- State --------------------------------------------------------------*/
  const [state, setState] = useState({
      error: '',
      font: {},
    }),
    { id } = useParams();

  /*----- Handler Functions --------------------------------------------------*/
  const getFont = () =>
    fontsAPI
      .show(id)
      .then(font => console.log(font) || setState({ ...state, font }))
      .catch(err => console.error(err) || setState({ ...state, error: err }));
  useEffect(getFont, [id]);

  /*----- Template -----------------------------------------------------------*/
  return <Card>Test {state.font.name}</Card>;
};

/*----- Exports --------------------------------------------------------------*/
export default Show;
