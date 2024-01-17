
import animals from './assets/data/data'
import './App.css'
import AnimalList from './components/animallist/AnimalList';

function App() {

  return (
    <>
    <AnimalList 
    animals = {animals}/>
    </>
  )
}

export default App
