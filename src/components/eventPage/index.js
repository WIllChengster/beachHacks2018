import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class EventPage extends Component{
    constructor(props){
        super(props);
        this.state={
            numAttendees:99
        }
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

        return(
            <div className="row w-100 mb-5">
                <div style={dummyImg} className="text-center mt-5" > dummy img </div>
                <div className="row w-100">
                    <h1 className="text-center w-100 my-3 " >Title of Hackathon</h1>
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
                        <div  style={desc} >
                            <h3 className="text-center" >Description</h3>
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consequuntur tempora corrupti dolores expedita sequi magnam quasi maiores neque eaque aliquam nulla, facilis pariatur, quidem eos ullam nisi dicta officia libero voluptate quibusdam dolor adipisci ut? Alias nihil, in iusto incidunt earum tenetur, nam quisquam ipsa corrupti sint et ad enim reprehenderit neque, dicta quis eveniet natus ducimus cupiditate molestias facilis sit repellat ex pariatur. Ullam debitis, inventore iusto maiores accusamus laborum, fugit enim saepe consequuntur praesentium provident natus soluta perspiciatis deleniti itaque est ex! Magni expedita quam similique rerum tenetur sunt sint nesciunt, libero, sed iusto delectus ut nostrum laboriosam molestias nemo quaerat. Incidunt sapiente recusandae, numquam placeat amet quo aperiam iste officiis velit, praesentium ducimus eos dolore labore reiciendis! Repudiandae in quis aliquam ipsum at officiis blanditiis inventore iure consequuntur dicta molestias optio ex voluptate veniam nostrum unde doloremque eveniet repellendus odio distinctio reprehenderit eum, veritatis nam! Assumenda vel, id quo obcaecati deserunt consequuntur quaerat, atque, facilis natus beatae debitis aspernatur impedit nesciunt dignissimos consequatur ratione ut sunt nisi! In consequuntur blanditiis dolorem tempore quidem iste aspernatur at beatae ea optio impedit culpa, quo consequatur dolor natus doloremque eius? Ullam nihil eligendi inventore aspernatur odio eveniet reiciendis animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non aut perferendis tempore voluptatum illum quidem culpa qui consectetur eaque laboriosam, pariatur mollitia deleniti voluptas debitis cupiditate et? Perferendis, consequatur!</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default EventPage