import React, { useState, useEffect } from 'react';
import { Feed, FontForm } from '../../components';
import { fonts as fontsAPI } from '../../api';

const Home = props => {
  const [fonts, setFonts] = useState([]),
    getFonts = () =>
      fontsAPI
        .index()
        .then(data => console.log(data) || setFonts(data))
        .catch(err => console.error(err));
  useEffect(getFonts, []);
  return (
    <>
      <FontForm />
      <Feed fonts={fonts} />
    </>
  );
};

export default Home;
