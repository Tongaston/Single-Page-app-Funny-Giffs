import React, { Suspense } from 'react';
import './App.css';
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';
import { Link, Route, Switch } from "wouter";
import ErrorPage from './pages/ErrorPage';

const HomePage = React.lazy(() => import('./pages/Home'))


export default function App() {

  return (
    <StaticContext.Provider value={{
      name: 'GMdev',
      follow: true
    }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">

            <Link to="/">
              <figure className="App-logo">
                <img src="./logo.png" alt="Funny GIFs logo" />
              </figure>
              <h1 className='title'>Funny GIFs</h1>
            </Link>

            <GifsContextProvider>
              <Switch>
              <Route
                component={HomePage}
                path='/'
              />
              <Route
                component={SearchResults}
                path='/search/:keyword/:rating?'
              />
              <Route
                component={Detail}
                path='/gif/:id'
              />
              <Route
                component={ErrorPage}
                path='/:rest*'
              />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  )
}


