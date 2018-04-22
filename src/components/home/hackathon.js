import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    const hackathon={
        height: '120px',
        width: '250px',
        backgroundColor:'lightGray',
        display: "inline-block",
        margin: '5px'
    }
    console.log(this.props)
    return(
        <Link to={`/event/${props.eventId}`} >
            <div style={hackathon} className="align-self-center justify-content-center " >
                <h6 className=" text-center" > Hackathon Title! </h6>
            </div>
        </Link>
    )
}