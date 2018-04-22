import React from 'react';
import {Link} from 'react-router-dom'
import Auth from './auth'
export default () => {
    return(
        <div className="navbar navbar-dark bg-dark py-3" >
            <Link to="/home" >This is the navbar</Link>
            <Link to="/topicCreator"> Topic Creator </Link>
            {/* <Link to="/event/someId">Event</Link> */}
            {/* <Link to="/matching" > Matching </Link> */}
            <Auth/>
        </div>
    )
}
