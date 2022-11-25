import React from 'react';
import Category from './Category';

const Categories = ({ newTrendyGames }) => {
	return (
		<section className="categories">
			<Category 
				title="New and Trendy"
				games={newTrendyGames}
			/>
		</section>
	);
};

export default Categories;