import React, { useContext } from 'react';
import { Container, Navbar  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cryptocontext } from '../../context/CryptoContext';

const Header = () => {
    const { currency, setCurrency } = useContext(Cryptocontext);
    console.log(currency);
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">CryptoJungle</Navbar.Brand>
                    <div className="currency-select">
                        <select 
                            className="form-select rounded-0"
                            value={currency} 
                            onChange={e => setCurrency(e.target.value)}
                        >
                            <option value="usd">USD</option>
                            <option value="inr">INR</option>
                        </select>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;