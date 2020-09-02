import React from "react";
import Item from "./Item"

export default class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render () {

        const { label, data, handleClick, handleRemove, handleUpdate } = this.props;
        return(
            <>
                <h1>{label}</h1>
                {data?.map(item => <Item key={item.id} data={item} handleClick={handleClick} handleRemove={handleRemove} handleUpdate={handleUpdate} />)}
            </>
        )
    }
}