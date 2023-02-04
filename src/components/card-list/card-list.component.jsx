import './card-list.styles.css';

import React, { Component } from 'react';

import Card from '../card/card.component';

export default function CardList({ monsters }) {
	return (
		<div className='card-list'>
			{monsters.map((monster) => {
				return <Card monster={monster} key={monster.id} />;
			})}
		</div>
	);
}
