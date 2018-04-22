import React from 'react';
import matchData from '../data/matchingDummy'

export default () => {

    return (
        <div>
            <h1>This is the matching page</h1>
            <div className="card my-2">
                <div className="card-body">
                    <p>name: john doe</p>
                    <p>role: front end</p>
                    <p>Technology: A,A,A,A,A,</p>
                </div>
            </div>
            <div className="card my-2 ">
                <div className="card-body">
                    <p>name: john doe</p>
                    <p>role: front end</p>
                    <p>Technology: A,A,A,A,A,</p>
                </div>
            </div>
            <div className="card my-2 ">
                <div className="card-body">
                    <p>name: john doe</p>
                    <p>role: front end</p>
                    <p>Technology: A,A,A,A,A,</p>
                </div>
            </div>
        </div>
    )
}