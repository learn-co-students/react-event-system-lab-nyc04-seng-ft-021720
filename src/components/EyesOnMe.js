// Code EyesOnMe Component Here
import React from 'react';


export default class EyesOnMe extends React.Component {
    
    focusFunction = () => {
        return console.log('Good!')
    }

    blurFunction = () => {
        return console.log('Hey! Eyes on me!')
    }
    
    render () {
        return <button onFocus={this.focusFunction} onBlur={this.blurFunction}>Hey Click Me!</button>
        
    }
}