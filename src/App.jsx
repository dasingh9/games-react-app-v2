import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Spinner } from './components/Spinner'
import { PageHeader } from './components/PageHeader'
import GamesComponent from './components/GamesComponent'
import { Flexbox } from './components/Flexbox'
import './App.css'


function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  )
}

function Spiderman({name, version}) {
  const spiderman = {
    name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility'
  };

  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
      <div>Name:{name} | Version: {version} </div>
    </div>)

  return spideyJSX;
}

function App() {
  
  return (
    <>
    <PageHeader />

    <GamesComponent />

    </>
  )

}

export default App
