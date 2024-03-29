import './card.styles.css';

import React, { Component } from 'react';

export default function Card({ monster }) {
	const { id, name, email } = monster;
	return (
		<div className='card-container' key={id}>
			<img
				alt={`monster ${name}`}
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}
