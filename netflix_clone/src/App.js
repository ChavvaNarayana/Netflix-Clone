import './App.css';
import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import Charts from './components/Charts.js'

function App() {
  return (
    <div className="App">

      <Nav />
      <Header />
      <Charts />
      <Charts title="NETFLIX ORIGINALS" isLargeRow />
      <Charts title="Trending Now" />
      <Charts title="Top Rated" />
      <Charts title="Action Movies" />
      <Charts title="Comedy Movies" />
      <Charts title="Horror Movies" />
      <Charts title="Romance Movies" />
      <Charts title="Documentaries" />

    </div>
  );
}

export default App;
