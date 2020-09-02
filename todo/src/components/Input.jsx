import React from "react";

export default class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    render () {

        const { buttonLabel, handleClick } = this.props;
        return(
            <>
                <input onChange={this.handleChange} placeholder="add item" />
                <button onClick={()=>handleClick(this.state.value)} >{buttonLabel || "SUBMIT"}</button>
            </>
        )
    }
}