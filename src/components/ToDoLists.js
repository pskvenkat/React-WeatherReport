import React from 'react';
import ReactDOM from 'react-dom';
import ToDoListItem from './ToDoListItem';
import ToDoFormSubmit from './ToDoForm';


export default class ToDoLists extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveNode = this.handleRemoveNode.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        
    }
    state = {
        data: [
            {"id":"00001","task":"Wake up","complete":"false"},
            {"id":"00002","task":"Eat breakfast","complete":"false"},
            {"id":"00003","task":"Go to work","complete":"false"}
        ]
    };

    generateId () {
        return Math.floor(Math.random()*90000) + 10000;
    };

    componentDidUpdate() {
        //console.log(this.state.data);
    };

    componentDidMount() {
        //console.log(this.state.data);
    }

    handleAddOption (task) {
        const currentState = this.state.data;
       // console.log(opt);
        const id = this.generateId().toString();
        const complete = 'false';
        const data = currentState.concat([{id, task, complete}]);
        this.setState({data})
    };
    handleRemoveNode (nodeId) {
        const currentState = this.state.data;
        const data = currentState.filter(function (el) {
            console.log(el.id)
			return el.id !== nodeId;
		});
		this.setState({data});
    };

    handleToggle (nodeId) {
        var currentState = this.state.data;
        currentState.map((index, i) => {
            if(currentState[i].id == nodeId) {
               currentState[i].complete = currentState[i].complete ==='true' ? 'false': 'true';
            }
            this.setState({data:currentState});
        })
    }
    render () {
        return (
            <div>
                <ToDoListItem data= {this.state.data} removeNode = {this.handleRemoveNode}  completToggle = {this.handleToggle} />
                <ToDoFormSubmit  addSubmit = {this.handleAddOption}/>
            </div>
        )
    }
}