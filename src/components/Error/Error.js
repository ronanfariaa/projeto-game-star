import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './error.scss'

let imageError = require('./../../assets/images/error-banner.gif');

class Error extends Component {

    render() {
        return (
            <div className="error-div">
                <img src={imageError} alt="erro banner" />
                <h4 className="erro-text">Ops..Ocorreu um erro.</h4>
                <Link className="start-btn" to="/">RESTART</Link>
            </div>
        );
    }
}

export default Error;