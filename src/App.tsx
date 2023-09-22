import {useState} from 'react'
import Header from "./components/Header"
import Home from "./pages/Home"
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/defaullt"
import { GlobalStyles } from "./styles/Global"
import Footer from "./components/Footer"

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles isOpenMenu={isOpenMenu}/>
      <Header isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />
      <Home />
      <Footer />
    </ThemeProvider> 
  )
}

export default App
