import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

class EventPage extends Component{
    constructor(props){
        super(props);
        this.state={
            numAttendees:99,
            hackData:{
                title:''
            }
        }
    }

    componentWillMount(){
        this.getHackathonInfo()
    }

    getHackathonInfo(){
        axios.get(`/hackathons/${this.props.match.params.eventId}`).then(res => {
            console.log(res)
            this.setState({
            hackData: res.data[0]
        })
    })
    }

    render(){
        const dummyImg={
            height:'300px',
            width: '100vw',
            backgroundColor: 'lightGray'
        }
        const desc = {
            height: '500px',
            overflow:'auto'
        }
        
        const attendee={
            height:'4vw',
            width:'4vw',
            display:'inline-block',
            backgroundColor:'lightGray',
            margin: '3px'
        }
        const attendeeArray=[]
        for( let i =0; i<this.state.numAttendees; i++){
            if(i>16) continue
            attendeeArray.push(null);

        }
        const attendeeSquare = attendeeArray.map( (item,index)=>{
            if(index===16){
                return(
                    <span key={index}> {this.state.numAttendees - attendeeArray.length} more </span>

                )
            }
            return(
                <div key={index} style={attendee}></div>
            )
        } )
        console.log(this.state)
        return(
            <div className="row w-100 mb-5">
                <div style={dummyImg} className="text-center mt-5" > dummy img </div>
                <div className="row w-100">
                    <h1 className="text-center w-100 my-3 " >{this.state.hackData.title}</h1>
                </div>
                <div className="row">
                    <div className="col-4">
                        
                        <div>
                            <Link to={`/event/${this.props.match.params.eventId}/register`} >
                                <p className="text-center" >
                                    <button className="btn btn-info w-100 ">Register</button>
                                </p>
                            </Link>
                            <h3 className="text-center" >Attendees</h3>
                            {attendeeSquare}

                        </div>
                    </div>
                    <div className="col">
                        <p><span className="font-weight-bold">Start:</span> {this.state.hackData.dateStart}</p>
                        <p><span className="font-weight-bold">End:</span> {this.state.hackData.dateEnd}</p>

                        <div  style={desc} >
                            <h3 className="text-center" >Description</h3>
                            <p>{this.state.hackData.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default EventPage