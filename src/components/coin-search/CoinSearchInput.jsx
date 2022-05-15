import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Cryptocontext } from '../../context/CryptoContext';

const CoinSearchInput = () => {
    const { searchedCoin, setSearchedCoin } = useContext(Cryptocontext);
    return (
        <div>
            <Form className="mt-5">
                <Form.Control 
                    size='lg'
                    className="rounded-0"  
                    value={searchedCoin} 
                    onChange={e => {
                        setSearchedCoin(e.target.value);
                    }} placeholder='Search Coins'  />
            </Form>
        </div>
    );
};

export default CoinSearchInput;