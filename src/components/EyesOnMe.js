// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

    onFocusEvent = () =>{
        return console.log('Good!')
    }

    onBlurEvent = () =>{
        return console.log('Hey! Eyes on me!')
    }

    render() {
      return <button type="button"
      onFocus = {this.onFocusEvent}
      onBlur = {this.onBlurEvent}
      >Hey Click Me!</button>;
    }
  }