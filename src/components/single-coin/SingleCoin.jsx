import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Cryptocontext } from '../../context/CryptoContext';

const SingleCoin = () => {
    const urlParams = useParams();
    const { fetchSingleCoin, singleCoinInfo } = useContext(Cryptocontext);

    useEffect(() => {
        fetchSingleCoin(urlParams.id);
    }, []);

    return (
        <React.Fragment>
            <Link to="/" className="mt-5 btn btn-dark rounded-0">Go Back</Link>
            <div className="mt-5 mb-5 card rounded-0 p-5">
                <div className="coin-image">
                    <img src={singleCoinInfo?.image?.large} />
                </div>
                <div className="coin-name">
                    <h4 className="lead display-5">{singleCoinInfo?.name}</h4>
                </div>
                <div className="coin-description">
                    <p
                        dangerouslySetInnerHTML={{ __html: singleCoinInfo?.description?.en }}
                        className="lead text-justify">
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SingleCoin;