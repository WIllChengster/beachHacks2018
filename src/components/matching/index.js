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
                <h1 className="text-center mt-3" >Match With Developers</h1>
                <div className="row">
                    <div className="col-3 align-self-center jumbotron">
                        <p className="text-center" >Developers Selected</p>
                        <div className="card">
                            <div className="card-body">
                                <p><small>John Smith </small></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p><small>John Smith </small></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p><small>John Smith </small></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p><small>John Smith </small></p>
                            </div>
                        </div>
                        
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