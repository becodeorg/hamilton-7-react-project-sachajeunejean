import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GameCarousel from './GameCarousel';

const platformsList = {
	"pc": "/assets/icons/computer.png",
	"playstation": "/assets/icons/playstation-logotype.png",
	"xbox": "/assets/icons/xbox-logo.png",
	"xbox360": "/assets/icons/xbox-360-control-game-tool.png",
	"xbox-series-x": "/assets/icons/xbox-360-control-game-tool.png",
	"nintendo-switch": "/assets/icons/nintendo-switch.png",
	"macos": "/assets/icons/apple.png",
	"ios": "/assets/icons/apple.png",
	"android": "/assets/icons/android.png",
	"linux": "/assets/icons/linux-logo.png",
	"nintendo-ds": "/assets/icons/nintendo-ds.png",
	"ps-vita": "/assets/icons/ps-logo-of-games.png",
	"psp": "/assets/icons/ps-logo-of-games.png"
}

const Game = () => {
	const [platforms, setPlatforms] = useState([]);
	const [currentGame, setCurrentGame] = useState([]);
	const [screenshots, setScreenshots] = useState([]);
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);

	const getCurrentGame = async () => {
		let response = await axios.get(`https://api.rawg.io/api/games/${params.name}?token&key=5413a8afe0ff47fb974634bca7ebdcb5`);

		setCurrentGame(response.data);

		let plats = [];
		let platformsTemp = response.data.platforms;

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

		response = await axios.get(`https://api.rawg.io/api/games?key=5413a8afe0ff47fb974634bca7ebdcb5&search=${response.data.slug}`);
		setScreenshots(response.data.results[0].short_screenshots);
		setIsLoading(false);
	};

	useEffect(() => {
		getCurrentGame();
	}, [params, isLoading]);

	if (isLoading) {
		return (
			<div className="loading-container">
				<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
			</div>
		);
	} else {
		return (
			<section className="game-section">
				<h2>{currentGame.name}</h2>
				<GameCarousel  screenshots={screenshots}/>
				<div className="screens-bottom">
					<div className="left-side">
						<ul className="platforms">
							{
								platforms.map((platform, key) => {
									return <li key={key}><img src={platformsList[platform]} alt={platform} /></li>
								})
							}
						</ul>
					</div>
					<div className="right-side">
						<p>Score: {Math.floor(currentGame.rating)}/5</p>
					</div>
				</div>
				<div className="about">
					<h3>About</h3>
					<div dangerouslySetInnerHTML={{__html: currentGame.description}}></div>
				</div>
			</section>
		);
	}
};

export default Game;