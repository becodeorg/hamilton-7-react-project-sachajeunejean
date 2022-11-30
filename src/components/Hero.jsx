import React, { useEffect, useRef, useState } from 'react';

const Hero = ({ filters, setFilters, filtersElement, setFiltersElement }) => {
	const [isFilterClicked, setIsFilterClicked] = useState(false);
	const [filterSelected, setFilterSelected] = useState("");

	const filterDeleteHandler = (e) => {
		setIsFilterClicked(true);
		setFilterSelected(e.target.textContent);
	}

	const confirmFilterDelete = () => {
		let newFilters = [];

		for (let i = 0; i < filters.length; i++) {
			if (filterSelected !== filters[i]) {
				newFilters.push(filters[i]);
			}
		}

		for (let i = 0; i < filtersElement.length; i++) {
			if (filterSelected.toLowerCase() === filtersElement[i].id) {
				filtersElement[i].checked = false;
			}
		}

		setFiltersElement([...filtersElement]);
		setFilters([...newFilters]);
		setIsFilterClicked(false);
	}

	const declineFilterDelete = () => {
		setIsFilterClicked(false);
	}
 
	return (
		<section className="hero">
			<div className={isFilterClicked ? "pop-up-delete" : "hide"}>
				<p>Do you really want to delete this filter ?</p>
				<div className="buttons-delete">
					<button onClick={confirmFilterDelete} type="button" className="btn-confirm">Yes</button>
					<button onClick={declineFilterDelete} type="button" className="btn-decline">No</button> 
				</div>
			</div>
			<div className="hero-title">
					<h2>Applied filters : </h2>
					{filters.length > 0 ? "" : "none"}
			</div>
			<ul className="hero-filters">
				{
					filters.map((filter, key) => {
						return <li onClick={filterDeleteHandler} key={key}>{filter}</li>;
					})
				}
			</ul>
			<div className="sort-by-container">
				<h2>Sort by : </h2>
				<ul className="sorts-list">
					<li className="item">
						<input id="date-added" type="checkbox" />
						<label htmlFor="date-added">Date added</label>
					</li>
					<li className="item">
						<input id="date-release" type="checkbox" />
						<label htmlFor="date-release">Release date</label>
					</li>
					<li className="item">
						<input id="name" type="checkbox" />
						<label htmlFor="name">Name</label>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Hero;