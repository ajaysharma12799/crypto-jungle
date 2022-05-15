import React from 'react';
import Page404 from '../../assets/404Page.jpg';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="mb-5 page-not-found-container">
            <div className="page-not-found-image">
                <img src={Page404} alt="Page Not Found" />
            </div>
            <div className="go-back-link">
                <Link to='/' className="btn btn-primary btn-lg rounded-0">Go Back</Link>
            </div>
        </div>
    );
};

export default PageNotFound;