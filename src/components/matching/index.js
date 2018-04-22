import React from 'react';
import matchData from '../../data/matchingDummy'
import DevCard from './devCard'

export default () => {

    const devCards = Object.keys(matchData).map( (item, index)=>{
        return(
            <DevCard key={index} user={matchData[item]} />

        )
    } )

    return (
        <div>
            <h1>This is the matching page</h1>
            {devCards}
        </div>
    )
}