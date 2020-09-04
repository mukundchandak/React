import React, { Component } from 'react'

export default class Header extends Component {
   
    
    render() {
        const { toggle } = this.props
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{padding: 10, margin: 10}} onClick={()=> toggle('timer')}>Timer</div>
                <div style={{padding: 10, margin: 10}} onClick={()=> toggle('stopwatch')}>Stopwatch</div>
            </div>
            
        )
    }
}
