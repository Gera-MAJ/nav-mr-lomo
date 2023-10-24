
import './App.css'
import logomrlomo from '../img/logo-mr-lomo.png'
import NavMrLomo from './components/Nav';

function App() {

  return (
    <>
      <NavMrLomo />
      
      <img className='logoLomo' src={logomrlomo} alt="logo"/>    
    </>
  )
}

export default App
