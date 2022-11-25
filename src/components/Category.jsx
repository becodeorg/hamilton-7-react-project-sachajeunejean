import React from 'react';
import Card from './Card';

const Category = ({ title, games }) => {
	return (
		<article className="category">
			<h3>{title}</h3>
			<ul className="category-list">
				{
					games.map((game, key) => {
						return <Card key={key} gameInfos={game} />
					})
				}
			</ul>
		</article>
	);
};

export default Category;