import React, { Component } from "react"; //All components with JSX have to import the React module.

/*This is a functional component.*/
/*
const SearchBar = () => {
    return <input/>;
};
*/

/* Class-based component is component which is able to save and indicate its estate to another components.*/
/*
This is an example of class based components:
class SearchBar extends Component {
  render() {
    return <input onChange = { this.onInputChange}/>;
  }

  onInputChange(event) {
      console.log(event.target.value);
      //event.target.value to get the object's value

  }
}
*/

class SearchBar extends Component{
    render(){
        return <input onChange = { (event) => (console.log(event.target.value))}/>;
    }
}
export default SearchBar;
