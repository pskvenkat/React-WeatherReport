import React from 'react';
import ReactDOM from 'react-dom';

export default class ToDoFormSubmit extends React.Component {
   
    submitAddOption = (e) => {
        e.preventDefault();
        const boxValue = e.target.elements.option.value.trim();
        if(!boxValue) {
            return
        }
        this.props.addSubmit(boxValue);
        e.target.elements.option.value ='';
    }
    
    render() {
        return (
            <div className="commentForm vert-offset-top-2">
                <hr />
                <div className="clearfix">
                    <form className="todoForm form-horizontal" onSubmit={this.submitAddOption}>
                        <div className="form-group">
                            <label htmlFor="task" className="col-md-2 control-label">Task</label>
                            <div className="col-md-10">
                                <input type="text" name="option" className="form-control" placeholder="What do you need to do?" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-2 text-right">
                                <input type="submit" value="Save Item" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}