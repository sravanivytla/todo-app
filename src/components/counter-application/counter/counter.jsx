import React, {Component} from 'react';
import './counter.css';
import PropTypes from 'prop-types';
export default class Counter extends Component {
    constructor(){
        super();
        this.state ={
            counter:0
        }
        //with arrow functions we no need to do binding
        //this.increment= this.increment.bind(this);
    }
    increment = (by) =>{
        this.setState(
            (prevState) => {
             return {counter:prevState.counter + by}
        }

        )
    }
    decrement = (by) =>{
        this.setState(
            (prevState) => {
             return {counter:prevState.counter - by}
        }

        )
    }


    render(){
        return (
            <div className ="counter">
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <CounterButton by={15} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
        <span className="count">{this.state.counter}</span>
        <button onClick={this.reset}>Reset</button>
            </div>
        )
           
    }
      reset =() =>{
        this.setState({
        counter:0
})
      }  

}
class CounterButton extends Component {

    constructor(){
        super();
        this.state ={
            counter:0
        }
        //with arrow functions we no need to do binding
        //this.increment= this.increment.bind(this);
    }
    render () {
        return(
            <div className="counter">
            {/* <button onClick={this.increment}>+{this.props.by}</button> */}
            {/* <button onClick={this.decrement}>-{this.props.by}</button> */}
            <button onClick={() =>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            {/* <span className="count">{this.state.counter}</span> */}
            </div>
            
        )
    }
    //  increment = () =>{
    //     this.setState({
    //         counter:this.state.counter + this.props.by
    //     }

    //     )
    //     this.props.incrementMethod(this.props.by)
    // }
    // decrement = () =>{
    //     this.setState({
    //         counter:this.state.counter - this.props.by
    //     }

    //     )
    //     this.props.decrementMethod(this.props.by)
    // }
}
Counter.defaultProps ={
    by:1
}
Counter.propTypes ={
    by:PropTypes.number
}

