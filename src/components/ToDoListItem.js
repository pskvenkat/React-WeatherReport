import React from 'react';
import ReactDOM from 'react-dom';
import TodoItems from './TodoItems';

export default class ToDoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.removeNode = this.removeNode.bind(this);
        this.completToggle = this.completToggle.bind(this);
    }
    removeNode (nodeId) {
        this.props.removeNode(nodeId);
    }   
    
    completToggle (nodeId){
        this.props.completToggle(nodeId)
    }
    render (props) {
        return (
            <div>
                <ul>
                    {this.props.data.map((lists) => (<TodoItems tasks ={lists.task} removeNode={this.removeNode} completToggle={this.completToggle} key={lists.id} complete = {lists.complete} nodeId={lists.id} />))}
                </ul>
            </div>
        )
    }
}



