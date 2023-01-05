import './App.css';
import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header'
import Charts from './components/Charts.js'
import requests from "./requests.js";


function App() {
  return (

    <div className="app">
      <Nav />
      <Header />
      <Charts
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Charts title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Charts title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Charts title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Charts title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Charts title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Charts title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Charts title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
