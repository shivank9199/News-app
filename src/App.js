import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}/>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News setProgress= {this.setProgress} key='general' pageSize={9} country="in" category="general"/>} />
            <Route exact path="/Science" element={<News setProgress= {this.setProgress} key='science' pageSize={9} country="in" category="science"/>} />
            <Route exact path="/Sports" element={<News setProgress= {this.setProgress} key='sports' pageSize={9} country="in" category="sports"/>} />
            <Route exact path="/Technology" element={<News setProgress= {this.setProgress} key='technology' pageSize={9} country="in" category="technology"/>} />
            <Route exact path="/Health" element={<News setProgress= {this.setProgress} key='health' pageSize={9} country="in" category="health"/>} />
            <Route exact path="/Entertainment" element={<News setProgress= {this.setProgress} key='entertainment' pageSize={9} country="in" category="entertainment"/>} />
            <Route exact path="/Business" element={<News setProgress= {this.setProgress} key='business' pageSize={9} country="in" category="business"/>} />
            <Route exact path="/General" element={<News setProgress= {this.setProgress} key='general' pageSize={9} country="in" category="general"/>} />
          </Routes>
        </Router>  
      </div>
    )
  }
}