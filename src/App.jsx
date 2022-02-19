import './App.css'
import Home from './component/Home'
import ArrState from './context/ArrState'

function App() {

  return (
    <div className="App">
      <ArrState>
        <Home />
      </ArrState>
    </div>
  )
}

export default App
