import React from 'react';
import Category from './Category';

const Categories = ({ newTrendyGames, newReleasesGames, nextWeekReleasesGames }) => {
	return (
		<section className="categories">
			<Category 
				title="New and trending"
				games={newTrendyGames}
			/>
			<Category 
				title="New releases"
				games={newReleasesGames}
			/>
			<Category 
				title="Next week releases"
				games={nextWeekReleasesGames}
			/>
		</section>
	);
};

export default Categories;