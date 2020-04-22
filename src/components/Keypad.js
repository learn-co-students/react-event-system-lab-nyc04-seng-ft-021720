  
// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {

    keyUpPassword = () =>{
        return console.log('Entering password...')
    }
    
    render() {
      return <input 
      onKeyUp = {this.keyUpPassword}
      type="password"
       />
    }
  }