import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ContactButton from './components/ContactButton/ContactButton'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { GlobalContext, GlobalProvider } from './context/GlobalState'
import { useContext } from 'react'

function App() {
  const {state} = useContext(GlobalContext);
  return (
    <GlobalProvider>
      <Header />
      <Main/>
      <ContactButton/>
      <Portfolio/>
      <About />
      <Contact />
      <footer style={{backgroundColor: state.firstBackground, color: state.textFont}}><span dangerouslySetInnerHTML={{ "__html": "&copy;" }}></span> Pedro Lopes - 2022</footer>
    </GlobalProvider>
  )
}

export default App
