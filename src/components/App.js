import React, { Component } from 'react';
import Counter from './Counter';
import ItemAdder from './ItemAdder';
import List from './List';
import './App.css';

class App extends Component {
    state = { 
        todos:[ ]
    }

    handleCheck = (id)=>{
        let todos = this.state.todos.map((todo)=>{
            console.log(todo.id,id);
            if(todo.id === id){
                todo.isChecked = !todo.isChecked;
                
            }
            return todo;
        });
        let checked = todos.filter((todo)=>todo.isChecked===true);
        let unchecked = todos.filter((todo)=>todo.isChecked===false);
        console.log(checked,unchecked);
        this.setState({todos:[...unchecked,...checked]});

    }

    handleAddItem = (todoText)=>{
        let todos = [...this.state.todos];
        console.log(todos);
        todos.push({id:this.generateId(),text:todoText,isChecked:false});
        this.setState({todos});
    }

    handleDelete = (id)=>{
        console.log('d');
        let todos = this.state.todos.filter((todo)=>todo.id!==id);
        console.log(todos);
    
    
        this.setState({todos:todos});
    }

    generateId(){
    let id = this.state.todos.length + 1;
    return id;
    }

    render() { 
        return (
            <div className="wrapper rounded">
                <Counter todos={this.state.todos}/>
                <ItemAdder value={""} handleAddItem={this.handleAddItem}/>
                {this.state.todos.length === 0 && <h4 className="text-secondary mt-4 text-center">No Todos!</h4> }
                <List handleDelete={this.handleDelete} handleCheck={this.handleCheck} todos={this.state.todos}/>
            </div>
                
        );
    }
}
export default App;
