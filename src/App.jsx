import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Spinner } from './components/shared/Spinner'
import { PageHeader } from './components/PageHeader'
import GamesComponent from './components/games/GamesComponent'
import { Flexbox } from './components/shared/Flexbox'
import './App.css'
import { Container } from './components/shared/container/Container'
import MoodChanger from './components/MoodChanger'
import ExplodingBomb from './components/ExplodingBomb'
import Clock from './components/Clock'
import RefCounter from './components/RefCounter'

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  )
}

function Spiderman({ name, version }) {
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
      <GamesComponent></GamesComponent>
    </>
  )

}

export default App
