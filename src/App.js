import Navbar from "./Navbar"
import Form from "./components/Form"
import useLocalStorage from './useLocalStorage'
import agebar from './components/agebar'

function App() {
  return(
  
    <div>
      <Navbar/>
      <Form/>
      <useLocalStorage/>
      <agebar isLoggedIn={true} username="brocode"/>
      </div>
    


  )
}

export default App
    