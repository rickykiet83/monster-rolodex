import './card-list.styles.css';

import React, { Component } from 'react';

import Card from '../card/card.component';

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
