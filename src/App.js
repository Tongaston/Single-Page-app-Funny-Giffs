import React, { Suspense } from 'react';
import './App.css';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'

import { Link, Route } from "wouter";
import { GifsContextProvider } from './context/GifsContext';

export default function App() {

  return (
    <StaticContext.Provider value={{
      name: 'GMdev',
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <section className="App-content">

          <Link to="/">
            <figure className="App-logo">
              <img src="./logo.png" alt="Giffy logo" />
            </figure>
            <h1 className='title'>Funny Giffy</h1>
          </Link>

          <GifsContextProvider>
            <Route
              component={Home}
              path='/'
            />
            <Route
              component={SearchResults}
              path='/search/:keyword'
            />
            <Route
              component={Detail}
              path='/gif/:id'
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}


