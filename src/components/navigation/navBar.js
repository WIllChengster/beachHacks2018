import React from 'react';
import {Link} from 'react-router-dom'
import '../../assets/css/navigation.css';

export default () => {
    return(
        <div className="nav">
            <p>This is the navbar</p>
            <Link to="/matching" > Matching </Link>
        </div>
    )
}