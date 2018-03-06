import React from 'react';
import ReactDOM from 'react-dom';


export default class TodoItems extends React.Component {
    constructor(props) {
        super(props)
        this.removeNode = this.removeNode.bind(this);
        this.completToggle = this.completToggle.bind(this);
    }
    removeNode (e) {
        e.preventDefault;
        this.props.removeNode(this.props.nodeId);
        return;
        
    }
    completToggle (e){
        e.preventDefault;
        this.props.completToggle(this.props.nodeId)
        return;
    }
    render (props) {
        var classes = 'list-group-item clearfix';

        if(this.props.complete === 'true'){
            classes = classes + ' list-group-item-success';
            //console.log("test", classes);
        }
        return (
            <li id={this.props.nodeId} className = {classes}>
                {this.props.tasks}
                <div className="pull-right" role="group">
					<button type="button" className="btn btn-xs btn-success img-circle" onClick={this.completToggle}>&#x2713;</button> 
                    <button type="button" className="btn btn-xs btn-danger img-circle" data-id ={this.props.nodeId} onClick={this.removeNode}>&#xff38;</button>
				</div>
            </li>
        )
    }
}