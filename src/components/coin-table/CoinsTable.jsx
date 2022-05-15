import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { Cryptocontext } from '../../context/CryptoContext';
import { Link } from 'react-router-dom';
import formatNumber from '../../utils/formatNumber';
import Spinner from '../layouts/Spinner';

const CoinsTable = () => {
    const { filteredCoins, currency, loading } = useContext(Cryptocontext);

    return (
        <div className="mt-5">
            <Table hover responsive>
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Current Price</th>
                        <th>Market Cap</th>
                        <th>View Coin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? (<Spinner />) : (
                            filteredCoins.map((coin) => (
                                <tr key={coin.id}>
                                    <td>{coin?.symbol.toUpperCase()}</td>
                                    <td>{coin?.name}</td>
                                    <td>
                                        <img src={coin?.image} alt={coin?.name} width="50rem" />
                                    </td>
                                    <td>
                                        {currency === 'usd' ? '$' : '₹'}
                                    &nbsp;
                                        {formatNumber(coin?.current_price)}
                                    </td>
                                    <td>
                                        {currency === 'usd' ? '$' : '₹'}
                                    &nbsp;
                                        {formatNumber(coin?.total_volume)}
                                    </td>
                                    <td>
                                        <Link to={`/coins/${coin.id}`}>
                                            <i className="bi bi-eye-fill"></i>
                                        </Link>
                                    </td>
                                </tr>
                            )))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default CoinsTable;