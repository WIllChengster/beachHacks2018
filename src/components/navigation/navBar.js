import React from 'react';
import {Link} from 'react-router-dom'
import Auth from './auth'
import logo from '../../assets/images/site_logo.png'

export default () => {
    const logoStyle={
        width:'230px'
    }
    return(
        <div className="navbar navbar-dark bg-dark py-3" >
            <Link to="/home" ><img style={logoStyle} className src={logo} alt="logo"/></Link>
            <Link to="/topicCreator"> Topic Creator </Link>
            {/* <Link to="/event/someId">Event</Link> */}
            {/* <Link to="/matching" > Matching </Link> */}
            <Auth/>
        </div>
    )
}
