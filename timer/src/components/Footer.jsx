import React, { Component } from 'react'

export default class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        const { active, toggle, reset } = this.props;

        return (
            <div>
                { !active ?
                    <button onClick={toggle}>Start</button> :
                    <button onClick={toggle}>Stop</button> 
                }
                <button onClick={reset}>Reset</button>
                
                    <style jsx>
                        {`
                            button {
                                padding: 10;
                                font-size: 24px;
                            }
                        `}
                    </style>
                
            </div>
        )
    }
}
