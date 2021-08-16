/**
 * Font show component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.16
 * @since 2021.08.16
 */

/*----- Imports --------------------------------------------------------------*/
import React, { Component } from 'react';
import { Card } from '../../elements';
import { fonts as fontsAPI } from '../../api';
import Preview from './Preview/Preview';
import './Font.css';

class Font extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, error: '', font: {} };
  }

  componentDidMount() {
    fontsAPI
      .show(this.props.id)
      .then(font => this.setState({ loading: false, font }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { id, ...rest } = this.props,
      { font, loading, error } = this.state;
    return loading ? (
      <div></div>
    ) : (
      <Card {...rest}>
        <p className="font__user">{font.user.name}</p>
        <h1 className="font__title">{font.name}</h1>
        <p className="font__body">{font.copy}</p>
      </Card>
    );
  }
}

Object.assign(Font, { Preview });

export default Font;
