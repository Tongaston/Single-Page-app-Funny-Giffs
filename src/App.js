import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'

import { Link, Route } from "wouter";

export default function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <h1>Random Pets App</h1>
        <Link to="/gif/dogs">Gifs de Perros</Link>
        <Link to="/gif/cats">Gifs de Gatos</Link>
        <Link to="/gif/racoon">Gifs de Mapaches</Link>
        <Route 
        component={ListOfGifs} 
        path='/gif/:keyword' />
      </section>
    </div>
  )
}


