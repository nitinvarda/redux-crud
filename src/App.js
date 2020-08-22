import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';
import Edit from './components/Edit';
import Navbar from './components/Navbar.js'
import Add from './components/Add';
import './App.css';
import LikedPosts from './components/LikedPosts';
import Disliked from './components/Disliked';

function App() {
  return (

    <div >
      <Router>
        <Navbar />
        <div className="App">


          <Switch>
            <Route path="/" strict exact component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:id" component={Post} />
            <Route path="/add" component={Add} />
            <Route path="/edit/:id" exact component={Edit} />
            <Route path="/liked" exact component={LikedPosts} />
            <Route path="/disliked" exact component={Disliked} />

          </Switch>

        </div>
      </Router>
    </div >
  );
}

export default App;
