import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  
    style = {
        cursor: "pointer"
    }
    
    render() { 
        return ( 
            <li className="list-group-item d-flex align-items-baseline justify-content-between">
                <div className="form-check">
                    <input style={this.style} className="form-check-input mt-2" onChange= {()=>this.props.handleCheck(this.props.todo.id)} type="checkbox" value="" id={this.props.todo.id}/>
                    <label className="form-check-label" htmlFor={this.props.todo.id}>
                       <span className={this.props.todo.isChecked?"line-through":" "}>{this.props.todo.text}</span> 
                    </label>
                </div>
               <button onClick={()=>this.props.handleDelete(this.props.todo.id)} className="btn btn-danger btn-sm float-right">X</button> 
            </li>
        );
    }
}
 
export default Todo;