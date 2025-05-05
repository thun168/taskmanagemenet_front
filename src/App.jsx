
import './App.css'
import { StateContext } from './context/StateContext'
import Dashboard from './layout/Dashboard'

function App() {

  return (
    <>
    <StateContext>
    <div className='pt-5'>
      <Dashboard/>
    </div>
    </StateContext>
    </>
  )
}

export default App
