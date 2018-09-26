import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDX3HfmVWqk_NClW4SeTG5F1VxVaYwq39U';


//Create a new component and this component has to produce some HTML.
/*
ES5 code:
const App = function(){
  return <ul>
    <li>test</li>
    <li>test</li>
    <li>test</li>
  </ul>;
}
*/

const App = () => {
  return (
  <div>
    <SearchBar/>
  </div>
  );
}

/*Take this component's generated HTML and put it in the page(in the DOM).*/ 
ReactDOM.render(<App/>, document.querySelector('.container')); //<App/> is a self-closing tag.


//App is a component class and <App/> is its instance.