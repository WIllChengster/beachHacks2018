import React from 'react';
import {Link} from 'react-router-dom'

export default () => {
    return(
        <div className="navbar navbar-dark bg-dark" >
            <Link to="/" >This is the navbar</Link>
            <Link to="/topicCreator"> Topic Creator </Link>
            <Link to="/matching" > Matching </Link>
            
        </div>
    )
}