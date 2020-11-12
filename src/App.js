import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

import './App.css';

class App extends Component {
  // States
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    };
  }
  
  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({imageUrl:this.state.input});
  }

  render() {
    return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}  
      />    
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
  } 
}

export default App;
