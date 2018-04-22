import React,{Component} from 'react';

class EventPage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){

        const dummyImg={
            height:'300px',
            width: '100vw'
        }

        return(
            <div className="row w-100">
                <div style={dummyImg}></div>
                <div className="row w-100">
                    <h1 className="text-center w-100" >Title of Hackathon</h1>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non aut perferendis tempore voluptatum illum quidem culpa qui consectetur eaque laboriosam, pariatur mollitia deleniti voluptas debitis cupiditate et? Perferendis, consequatur!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPage