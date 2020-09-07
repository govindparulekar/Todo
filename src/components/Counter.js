import React, { Component } from 'react';

class Counter extends Component {
    //data associated with component at particular time

    calFcount(todos){
       let ftodos = todos.filter((todo)=>todo.isChecked === true);
       return ftodos.length;
    }
    render() { 
        
        return (
            <div className = "rounded-top counter container bg-secondary p-2 d-flex">
                <h3 className="text-white ml-2">ToDos : {this.props.todos.length}</h3>
                <h3 className="text-white ml-5">Finished:{this.calFcount(this.props.todos)}</h3>
            </div>
    
        );
    }
    
    
}
 
export default Counter; 
