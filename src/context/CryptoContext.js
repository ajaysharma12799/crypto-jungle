/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';
import axios from 'axios';

export const Cryptocontext = createContext(null);

const CryptoContextWrapper = ({children}) => {
    const [coins, setCoins] = useState([]);
    const [singleCoinInfo, setSingleCoinInfo] = useState({});
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [searchedCoin, setSearchedCoin] = useState('');
    const [currency, setCurrency] = useState('usd');
    const [loading, setLoading] = useState(false);

    const fetchCoins = async (currency) => {
        setLoading(true);
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        setCoins(response.data);
        setLoading(false);
    };

    const fetchSingleCoin = async (coinID) => {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinID}`);
        setSingleCoinInfo(response.data);
    };

    const fetchTrendingCoins = async () => {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
        setTrendingCoins(response.data);
    };

    // Search Coins By Name
    const filteredCoins = coins.filter((coin) => coin?.name.toLowerCase().includes(searchedCoin.toLowerCase()));

    return (
        <React.Fragment>
            <Cryptocontext.Provider 
                value={{ 
                    fetchCoins,
                    filteredCoins, 
                    searchedCoin, 
                    setSearchedCoin, 
                    singleCoinInfo, 
                    fetchSingleCoin,
                    fetchTrendingCoins,
                    trendingCoins,
                    currency,
                    setCurrency,
                    loading
                }}>
                {children}
            </Cryptocontext.Provider>
        </React.Fragment>
    );
};

export default CryptoContextWrapper;