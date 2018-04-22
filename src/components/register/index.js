import React, {Component} from 'react';

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            description:''
        }
    }

    onTitleChange(event){
        this.setState({
            title:event.target.value
        })
    }

    onDescriptionChange(event){
        this.setState({
            description: event.target.value
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className="row">
                <h1 className="text-center w-100">Register your Project</h1>
                <div className="col-5 jumbotron ">
                    <form>
                        <div className="form-group">
                            <label htmlFor="projectName">Title</label>
                            <input onChange={this.onTitleChange.bind(this)} value={this.state.title} id="projectName" type="text" className="form-control" placeholder="Enter your project title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectDesc">Brief Description</label>
                            <textarea onChange={this.onDescriptionChange.bind(this)} value={this.state.description} id="projectDesc" className="form-control" placeholder="Enter a brief project description" rows="5" ></textarea>
                        </div> 
                        <button className="btn btn-primary" >Create your project!</button>
                    </form>
                </div>
                <div className="col align-self-center card ml-2">
                    <h5 className="text-center card-bopdy p-5 " >side content can go here</h5>
                </div>
            </div>
        )
    }
}

export default Register;