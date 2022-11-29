import React, { useEffect, useState } from 'react';
import SingleGame from '../pages/SingleGame';
import { NavLink, useNavigate, Link } from 'react-router-dom';

const platformsList = {
	"pc": "./src/assets/icons/computer.png",
	"playstation": "./src/assets/icons/playstation-logotype.png",
	"xbox": "./src/assets/icons/xbox-logo.png",
	"xbox360": "./src/assets/icons/xbox-360-control-game-tool.png",
	"xbox-series-x": "./src/assets/icons/xbox-360-control-game-tool.png",
	"nintendo-switch": "./src/assets/icons/nintendo-switch.png",
	"macos": "./src/assets/icons/apple.png",
	"ios": "./src/assets/icons/apple.png",
	"android": "./src/assets/icons/android.png",
	"linux": "./src/assets/icons/linux-logo.png",
	"nintendo-ds": "./src/assets/icons/nintendo-ds.png",
	"ps-vita": "./src/assets/icons/ps-logo-of-games.png",
	"psp": "./src/assets/icons/ps-logo-of-games.png"
}

const Card = ({ gameInfos, filters, setGame }) => {
	const [platforms, setPlatforms] = useState([]);
	const [genres, setGenres] = useState([]);
	const navigate = useNavigate();

	const getPlatforms = () => {
		let plats = [];

		for (let platform of gameInfos.platforms) {
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

		setPlatforms(plats);
	}

	const getGenres = () => {
		let gen = [];

		for (let i = 0; i < gameInfos.genres.length; i++) {
			gen.push(i !== gameInfos.genres.length - 1 ? gameInfos.genres[i].name + "," : gameInfos.genres[i].name);
		}

		setGenres(gen);
	}

	const onClickTitle = () => {
		setGame(gameInfos);
	};

	useEffect(() => {
		getPlatforms();
		getGenres();
		console.log(gameInfos.id);
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
			<h3>
				<Link onClick={onClickTitle} to={{pathname:`/SingleGame/${gameInfos.id}`}}>
					{gameInfos.name}
				</Link>
			</h3>
			<div className="game-infos">
				<p>Released: <span className="card-date">{gameInfos.date}</span></p>
				<p className="genres">Genres: {genres.map((genre, key) => <span key={key} className="genre">{genre}</span>)}</p>
			</div>
		</li>
	);
};

export default Card;