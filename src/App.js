import React, { Component } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Porjects";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from './components/Contact'

import { HashRouter as Router, Route } from "react-router-dom";

const noImage = "https://www.nocowboys.co.nz/images/v3/no-image-available.png";

class App extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "Blog & CMS",
        github_url: "https://github.com/ropali/Blog",
        desc: "",
        image:
          "https://user-images.githubusercontent.com/31515245/42435826-806f3854-8375-11e8-96b7-ec1037dd8096.PNG"
      },
      {
        id: 2,
        name: "Ecommerce Website",
        github_url: "https://github.com/ropali/EcommWebSite",
        desc: "",
        image:
          "https://user-images.githubusercontent.com/31515245/42436064-62b19da6-8376-11e8-8bb3-ba8425a7da09.png"
      },
      {
        id: 3,
        name: "InstaClick - A Social Networking Site",
        github_url: "https://github.com/ropali/instaclick",
        desc: "",
        image:
          "https://user-images.githubusercontent.com/31515245/43134180-c98abdb6-8f5e-11e8-98f8-9f22a3393d70.png"
      },
      {
        id: 4,
        name: "Texter - A Simple Code Editor",
        github_url: "https://github.com/ropali/Texter",
        desc: "",
        image:
          "https://user-images.githubusercontent.com/31515245/42436449-96912848-8377-11e8-9951-7fad824ab0e1.png"
      },
      {
        id: 5,
        name: "short-link - A URL shortner App Build Using MERN Stack",
        github_url: "https://github.com/ropali/short-link",
        desc: "",
        image:
          "https://user-images.githubusercontent.com/31515245/56467456-a0cb3c80-643c-11e9-9b88-640fcf60bcf1.png"
      }
    ]
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          
          <Route
            exact
            path="/"
            render={props => (
              <Projects {...props} projects={this.state.projects} />
            )}
          />

          <Route exact path="/about" component={ About } />
          <Route exact path="/contact" component={ Contact } />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
