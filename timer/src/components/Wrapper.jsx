import React, { Component } from 'react'
import Header from "./Header"
import Timer from './Timer'
import Stopwatch from './Stopwatch'

export default class Wrapper extends Component {
    constructor(props){
        super(props)
        this.state = {
            isActive: 'timer'
        }
    }

    setActive = cont => {
        this.setState({
            isActive: cont
        })
    }

    render() {
        console.log(this.state.isActive)
        const { isActive } = this.state
        return (
            <div style={{border: '1px solid black', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Header toggle={this.setActive} />
                <Timer isActive={isActive}/>
                <Stopwatch isActive={isActive}/>
            </div>
        )
    }
}
