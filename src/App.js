import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import Header from './components/layouts/Navbar';   
import CryptoContextWrapper from './context/CryptoContext';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SingleCoin from './components/single-coin/SingleCoin';
import PageNotFound from './components/page-not-found/PageNotFound';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const App = () => {
    return (
        <CryptoContextWrapper>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route exact path="/" element={ <HomeScreen /> } />
                        <Route exact path="/coins/:id" element={ <SingleCoin /> } />
                        <Route exact path="*" element={ <PageNotFound /> } />
                    </Routes>
                </Container>
            </Router>
        </CryptoContextWrapper>
    );
};

export default App;
