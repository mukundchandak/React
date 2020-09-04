import React, { Component } from 'react'
import Footer from './Footer'

export default class Timer extends Component {

    constructor(props){
        super(props)
        this.state={
            millisec: 300000,
            isRunning: false
        };
        
    }

    toggle = () => {
        this.setState({
            isRunning: !this.state.isRunning
        }, this.timeHandler)
    }

    timeHandler = () => {
        if(this.state.isRunning){
            this.time = setInterval(() => {
                this.setState({
                    millisec: this.state.millisec - 100
                })
            }, 100)
        }
        else{
            clearInterval(this.time)
        }
    }

    reset = () => {
        clearInterval(this.time)
        this.setState({
            millisec: 300000,
            isRunning: false
        })
    }

    render() {
        const { millisec, isRunning } = this.state
        const {isActive } = this.props
        const style = { display: isActive === 'timer' ? 'block' : 'none'}
        return (
            <div style={style}>
                <h3>{Math.floor(millisec/(60*60*1000)%24) + ' : ' + Math.floor(millisec/(60*1000)%60) + ' : ' + Math.floor(millisec/(1000)%60) + ' : ' + Math.floor(millisec%(1000))}</h3>
                <Footer active={isRunning} toggle={this.toggle} reset={this.reset}/>
            </div>
        )
    }
}
