
import React from 'react';

// Car should be capital case
class Car extends React.Component {
  constructor(props) {
    //props are added to this class using parent constructor
    super(props);
    this.changeColor = (bcolor) => {
      this.setState({ color: bcolor });
    };
    // this.state should be initialized in the constructor
    this.state = {
      brand: 'Toyota',
      model: 'Corolla',
      color: 'red', // Default color
     // year: props.year || '2021', // Default to 2021 if no year is provided
    };
  }

  render() {
    return ( 
    <>
    <h2>Hi, I am a {this.props.year} {this.state.brand} {this.state.color} {this.state.model} Car!</h2>
      <button onClick={() => this.changeColor('blue')}>Change Color to Blue</button>
      <button onClick={() => this.changeColor('green')}>Change Color to Green</button>
    </>
    );
  }
}

class Garage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      year: 2002,
    }
  }
  
//exectuted just before render method
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.year == prevState.year) {
      return { year: nextProps.year };
    }
    return null;
  }

  render(){
    return (
    <>
    <h2>Welcome to the Garage!</h2>
    <Car year={this.state.year} />
    </>
    )

  }
}

export default Garage;