import React, { useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import CoinSearchInput from '../../components/coin-search/CoinSearchInput';
import CoinsTable from '../../components/coin-table/CoinsTable';
import TrendingCoinCarousel from '../../components/trending-coin-carousel/TrendingCoinCarousel';
import { Cryptocontext } from '../../context/CryptoContext';

const HomeScreen = () => {
    const { fetchCoins, currency } = useContext(Cryptocontext);

    useEffect(() => {
        fetchCoins(currency);
    }, [currency]);

    return (
        <div>
            <Container>
                <TrendingCoinCarousel />
                <CoinSearchInput />
                <CoinsTable />
            </Container>
        </div>
    );
};

export default HomeScreen;