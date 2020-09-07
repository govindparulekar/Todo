import React, { Component } from 'react';
import Todo from './Todo';
import "./App.css";

class List extends Component {


   
     
    render() { 
        console.log('rendered');
        return ( 
            <div className="container list p-2">
                <ul className="list-group">
                    {this.props.todos.map((todo)=><Todo key={todo.id} handleCheck={this.props.handleCheck} handleDelete={this.props.handleDelete} todo={todo}/>)}
                </ul>
            </div>
        );
    }
}
 
export default List;
