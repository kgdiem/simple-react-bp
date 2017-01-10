import React from 'react';

class Hello extends React.Component {
    constructor(){
        super();
        this.state = {
            message: "Hello World"
        }
    }

    render(){
        return(
            <h1>{this.state.message}</h1>
        )
    }
}

export default Hello;