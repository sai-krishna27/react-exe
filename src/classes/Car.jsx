
import React from 'react';

class Car extends React.Component {
  constructor(props) {
    //props are added to this class using parent constructor
    super(props);
    this.changeColor = (bcolor) => {
      this.setState({ color: bcolor });
    };
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
  }
  render(){
    return (
    <>
    <h2>Welcome to the Garage!</h2>
    <Car year={this.props.year} />
    </>
    )

  }
}

export default Garage;