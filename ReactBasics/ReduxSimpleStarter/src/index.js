import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('surfboards');
  }

    videoSearch(term){
      YTSearch({ key: API_KEY, term: term }, (videos) => {
        this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
        }); //{videos}= {videos: videos}
      });

    }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} 
        videos={this.state.videos} />
      </div>
    );
  }

}


/*Take this component's generated HTML and put it in the page(in the DOM).*/
ReactDOM.render(<App />, document.querySelector('.container')); //<App/> is a self-closing tag.


//App is a component class and <App/> is its instance.