import React, {Component} from 'react';
import matchData from '../../data/matchingDummy'
import DevCard from './devCard'

 class Matching extends Component{
    
    constructor(props){
        super(props);
        this.state={
            devSelected:[]
        }
    }

    render(){
        const devCards = Object.keys(matchData).map( (item, index)=>{
            return(
                <DevCard key={index} user={matchData[item]} />

            )
        } )

        return (
            <div>
                <h1>This is the matching page</h1>
                <div className="row">
                    <div className="col-3 align-self-center jumbotron">
                        <p className="text-center" >Developers Selected</p>
                    </div>
                    <div className="col">
                        {devCards}
                    </div>
                </div>
            </div>
        )
    }
}
export default Matching