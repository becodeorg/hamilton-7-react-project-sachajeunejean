import React, { useState } from 'react';

const Filters = ({ onSingleGame, isSearchClicked, setFilters, setFiltersElement }) => {
	const [isIconClicked, setIsIconCliked] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	const handleIconClick = () => {
		setIsIconCliked(!isIconClicked);
		setShowMenu(!showMenu);
	};

	const handleSubmitFilters = (e) => {
		setIsIconCliked(!isIconClicked);
		setShowMenu(!showMenu);
		e.preventDefault();

		const newFiltersElements = [];
		for (let i = 0; i < e.target.length; i++) {
			if (e.target.elements[i].checked) {
				newFiltersElements.push(e.target.elements[i]);
			}
		}
		setFiltersElement([...newFiltersElements]);

		const newFilters = [];
		for (let i = 0; i < e.target.length; i++) {
			if (e.target.elements[i].checked) {
				let labels = e.target.elements[i].labels;
				for (let label of labels) {
					if (label.textContent === "Switch") 
						newFilters.push("Nintendo-switch");
					else
						newFilters.push(label.textContent);
				}
			}
		}
		setFilters([...newFilters]);
	};

	return (
		<div className={onSingleGame ? "hide" : "filters"}>
			<span onClick={handleIconClick} className={isSearchClicked ? "hide" : "menu-icon material-symbols-outlined"}>
				{isIconClicked ? "close" : "menu"}
			</span>
			<div className={showMenu ? "menu" : "hide"}>
				<h2>FILTERS</h2>
				<form onSubmit={handleSubmitFilters} className="filters-container">
					<h3>Platforms</h3>
					<div className="filters-container-grid">
						<ul className="filters-grid">
							<li className="item">
								<input id="xbox" type="checkbox" />
								<label htmlFor="xbox">Xbox</label>
							</li>
							<li className="item">
								<input id="playstation" type="checkbox" />
								<label htmlFor="playstation">Playstation</label>
							</li>
							<li className="item">
								<input id="pc" type="checkbox" />
								<label htmlFor="pc">PC</label>
							</li>
							<li className="item">
								<input id="nintendo-switch" type="checkbox" />
								<label htmlFor="nintendo-switch">Switch</label>
							</li>
						</ul>
					</div>
					<h3>Genres</h3>
					<div className="filters-container-grid">
						<ul className="filters-grid">
							<li className="item">
								<input id="action" type="checkbox" />
								<label htmlFor="action">Action</label>
							</li>
							<li className="item">
								<input id="strategy" type="checkbox" />
								<label htmlFor="strategy">Strategy</label>
							</li>
							<li className="item">
								<input id="rpg" type="checkbox" />
								<label htmlFor="rpg">RPG</label>
							</li>
							<li className="item">
								<input id="shooter" type="checkbox" />
								<label htmlFor="shooter">Shooter</label>
							</li>
							<li className="item">
								<input id="adventure" type="checkbox" />
								<label htmlFor="adventure">Adventure</label>
							</li>
							<li className="item">
								<input id="puzzle" type="checkbox" />
								<label htmlFor="puzzle">Puzzle</label>
							</li>
							<li className="item">
								<input id="racing" type="checkbox" />
								<label htmlFor="racing">Racing</label>
							</li>
							<li className="item">
								<input id="sports" type="checkbox" />
								<label htmlFor="sports">Sports</label>
							</li>
						</ul>
					</div>
					<button className="btn-submit-filters" type="submit">Apply filters</button>
				</form>
			</div>
		</div>
	);
};

export default Filters;