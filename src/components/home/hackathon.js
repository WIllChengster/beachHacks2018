import React from 'react';

export default () => {
    const hackathon={
        height: '120px',
        width: '250px',
        backgroundColor:'lightGray',
        display: "inline-block",
        margin: '5px'
    }
    return(
        <div style={hackathon} className="align-self-center justify-content-center " >
            <h6 className=" text-center" > Hackathon Title! </h6>
        </div>
    )
}