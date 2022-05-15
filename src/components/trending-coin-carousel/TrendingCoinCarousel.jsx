import React, { useEffect, useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Cryptocontext } from '../../context/CryptoContext';
import { Link } from 'react-router-dom';
import formatNumber from '../../utils/formatNumber';

const TrendingCoinCarousel = () => {
    const { fetchTrendingCoins, trendingCoins } = useContext(Cryptocontext);

    const items = trendingCoins.map((coin) => (
        <Link to={`/coins/${coin.id}`} key={coin.id} className="trending-coin">
            <div>
                <div className="trending-coin-image">
                    <img src={coin?.image} alt={coin?.name} height="80" />
                </div>
                <div className="trending-coin-name">
                    <h4 className="lead">{coin?.name}</h4>
                </div>
                <div className="trending-coin-price">
                    <span className="lead">${formatNumber(coin?.current_price)}</span>
                </div>
            </div>
        </Link>
    ));

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };
    
    useEffect(() => {
        fetchTrendingCoins();
    }, []);
    
    return (
        <div className="mt-5">
            <AliceCarousel 
                mouseTracking
                infinite
                autoPlay
                autoPlayInterval={1000}
                animationDuration={1500}
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
                items={items} 
            />
        </div>
    );
};

export default TrendingCoinCarousel;