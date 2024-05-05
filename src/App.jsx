import Navbar from './components/Navbar'
import Future from './components/Future'
import Ecosystem from './components/Ecosystem'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Company from './components/Company'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <div className='app'>
        <Navbar />
        <Future />
        <Ecosystem />
        <About />
        <Tokenomics />
        <Company />
        <Form />
        <Team />
        <Footer />
      </div>
    </>
  )
}

export default App
