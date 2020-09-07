import React,{Component} from 'react';

class ItemAdder extends Component {
    constructor(props){
        super(props)
        this.state = { 
        value:this.props.value
     }
    }
    

    changeState = (e)=> {
        
        this.setState({value:e.target.value});
    }

    render() { 
        return (
            <div className="container d-flex item-adder p-2">
                <div className="input-group"><input value={this.state.value} onChange={this.changeState} className="form-control" placeholder="Add item here.." type="text"/></div>
                <button onClick={()=>{
                    if(this.state.value !== ""){
                        this.setState({value:""});
                        this.props.handleAddItem(this.state.value);
                    }
                    
                }  } className="add btn btn-primary ml-3">Add</button>
            </div>
        );
    }
}
 
export default ItemAdder;
