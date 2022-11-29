import React, { useEffect, useState } from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const GameCarousel = ({ screenshots }) => {
	const [screens, setScreens] = useState([]);

	useEffect(() => {
		if (screenshots)
			setScreens(screenshots);
	}, [screenshots]);

	return (
			<Carousel className="game-carousel">
				{screens.map((screen, index) => (
					<div key={index}>
						<img src={screen.image} />
					</div>
				))}
            </Carousel>
	);
};

export default GameCarousel;