import React, { useEffect, useState } from 'react';
import Card from './Card';

const Category = ({ title, games, filters, setGame }) => {
	const [byPassFilters, setByPassFilters] = useState(false);

	useEffect(() => {

	}, [filters]);

	return (
		<article className="category">
			<h3>{title}</h3>
			<ul className="category-list">
				{
					games.map((game, key) => {
						return <Card key={key} gameInfos={game} filters={filters} setGame={setGame} />
					})
				}
			</ul>
		</article>
	);
};

export default Category;