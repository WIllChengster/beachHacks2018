import React,{Component} from 'react';

class TopicCreator extends Component{
    constructor(props){
        super(props)
        this.state={
            titleInput:'',
            descInput:'',
        }
    }
    onTitleChange(event){
        console.log(event.target.value)
        this.setState({
            titleInput: event.target.value
        })
    }
    onDescChange(event) {
        console.log(event.target.value)
        this.setState({
            descInput: event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
    }
    render(){
        return(
            <div className="row">
                <div className="row w-100 ">
                    <h1  className="text-center w-100">Create a topic</h1>
                </div>
                <div className="row w-100">
                    <div className="jumbotron w-100">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input onChange={this.onTitleChange.bind(this)} value={this.state.titleInput} id="title" type="text" className="form-control" placeholder="Enter a title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input onChange={this.onDescChange.bind(this)} value={this.state.descInput} id="description" className="form-control" type="text" placeholder="Enter description here"/>
                            </div>
                            <button className="btn btn-primary float-right" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default TopicCreator;