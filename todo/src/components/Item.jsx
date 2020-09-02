import React from "react";
import { render } from "react-dom";

class Item extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            updateValue: ''
        }
    }

    

    
    render() {

        const { handleClick, data, handleRemove, handleUpdate } = this.props
        const { value, status, edit, id } = data

        if(!edit){
            return (
                <>
                    <div onClick={()=> handleClick(id)}>{value}</div>
                    <button onClick={()=> handleRemove(id)}>Remove</button>
                    <button onClick={() => handleUpdate(data, this.state.updateValue)}>Edit</button>
                </>
            )
        }
        else{
            return (
                <>
                    <input value={this.state.updateValue} onChange={e => this.setState({updateValue: e.target.value})} />
                    <button onClick={()=> handleRemove(id)}>Remove</button>
                    <button onClick={()=> handleUpdate(data, this.state.updateValue)}>Update</button>
                </>
            )
        };
    }
}    
    

export default Item;