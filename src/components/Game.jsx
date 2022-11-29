import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GameCarousel from './GameCarousel';

const platformsList = {
	"pc": "../src/assets/icons/computer.png",
	"playstation": "../src/assets/icons/playstation-logotype.png",
	"xbox": "../src/assets/icons/xbox-logo.png",
	"xbox360": "../src/assets/icons/xbox-360-control-game-tool.png",
	"xbox-series-x": "../src/assets/icons/xbox-360-control-game-tool.png",
	"nintendo-switch": "../src/assets/icons/nintendo-switch.png",
	"macos": "../src/assets/icons/apple.png",
	"ios": "../src/assets/icons/apple.png",
	"android": "../src/assets/icons/android.png",
	"linux": "../src/assets/icons/linux-logo.png",
	"nintendo-ds": "../src/assets/icons/nintendo-ds.png",
	"ps-vita": "../src/assets/icons/ps-logo-of-games.png",
	"psp": "../src/assets/icons/ps-logo-of-games.png"
}

const Game = () => {
	const [platforms, setPlatforms] = useState([]);
	const [currentGame, setCurrentGame] = useState([]);
	const params = useParams();

	const getCurrentGame = async () => {
		const response = await axios.get(`https://api.rawg.io/api/games?key=5413a8afe0ff47fb974634bca7ebdcb5&search=${params.name}`);
		setCurrentGame(response.data.results[0]);

		let plats = [];
		let platformsTemp = response.data.results[0].platforms;

		for (let i = 0; i < platformsTemp.length; i++) {
			if (platformsTemp[i].platform.slug.includes("xbox") && !plats.includes("xbox")) {
				plats.push("xbox");
			} else if (platformsTemp[i].platform.slug.includes("playstation") && !plats.includes("playstation")) {
					plats.push("playstation");
			} else {
				if (!plats.includes("playstation")) {
					plats.push(platformsTemp[i].platform.slug);
				}
			}
		}
		setPlatforms(plats);
	};

	useEffect(() => {
		getCurrentGame();
	}, [params]);

	return (
		<section className="game-section">
			<h2>{currentGame.name}</h2>
			<GameCarousel  screenshots={currentGame.short_screenshots}/>
			<div className="screens-bottom">
				<div className="left-side">
					<p>Avaible Platforms :</p>
					<ul className="platforms">
						{
							platforms.map((platform, key) => {
								return <li key={key}><img src={platformsList[platform]} alt={platform} /></li>
							})
						}
					</ul>
				</div>
				<div className="right-side"></div>
			</div>
		</section>
	);
};

export default Game;