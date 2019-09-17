import React, { Component } from 'react';
import { increment, decrement, reset } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
   return {
      counter: state
   };
  };

  
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};

class Counter extends Component {
   render() {
    const {counter,increment,decrement,reset} = this.props;
      return (
         <div className = "App">
            <div>{counter}</div>
            <div>
               <button onClick = {increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset}>RESET</button>
         </div>
      );
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);