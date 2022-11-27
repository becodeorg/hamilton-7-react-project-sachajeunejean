import React, { useEffect, useState } from 'react';

const platformsList = {
	"pc": "./src/assets/icons/computer.png",
	"playstation": "./src/assets/icons/playstation-logotype.png",
	"xbox": "./src/assets/icons/xbox-logo.png",
	"nintendo-switch": "./src/assets/icons/nintendo-switch.png",
	"macos": "./src/assets/icons/apple.png",
	"android": "./src/assets/icons/android.png",
	"linux": "./src/assets/icons/linux-logo.png"
}

const Card = ({ gameInfos }) => {
	const [platforms, setPlatforms] = useState([]);
	const [genres, setGenres] = useState([]);

	const getPlatforms = () => {
		let plats = [];

		for (let platform of gameInfos.platforms) {
			if (!platform.platform.slug.includes("xbox-series") && !platform.platform.slug.includes("ios")) {
				if (platform.platform.slug.includes("xbox") && !plats.includes("xbox")) {
					plats.push("xbox");
				} else if (platform.platform.slug.includes("playstation") && !plats.includes("playstation")) {
					plats.push("playstation");
				} else {
					if (!plats.includes("playstation")) {
						plats.push(platform.platform.slug);
					}
				}
			}
		}

		setPlatforms(plats);
	}

	const getGenres = () => {
		let gen = [];

		for (let i = 0; i < gameInfos.genres.length; i++) {
			gen.push(i !== gameInfos.genres.length - 1 ? gameInfos.genres[i].name + "," : gameInfos.genres[i].name);
		}

		setGenres(gen);
	}

	useEffect(() => {
		getPlatforms();
		getGenres();
	}, []);

	return (
		<li className="card">
			<div className="game-image" style={{"backgroundImage": "url(" + gameInfos.bgImg + ")"}}>
			</div>
			<div className="top-card-wrapper">
					<ul className="platforms">
						{
							platforms.map((platform, key) => {
								return <li key={key}><img src={platformsList[platform]} alt={platform} /></li>
							})
						}
					</ul>
					<div className="rating-container">
						<p>Score : {Math.floor(gameInfos.rating)}/5</p>
					</div>
			</div>
			<h3>{gameInfos.name}</h3>
			<p>Released: <span className="card-date">{gameInfos.date}</span></p>
			<p>Genres: {genres.map((genre, key) => <span key={key} className="genre">{genre}</span>)}
			</p>
		</li>
	);
};

export default Card;