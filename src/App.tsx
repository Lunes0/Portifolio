import { ThemeProvider } from 'styled-components'
import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [usandoTemaDark, setUsandoTemaDark] = useState(false)

  function trocaTema() {
    setUsandoTemaDark(!usandoTemaDark)
  }

  return (
    <ThemeProvider theme={usandoTemaDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
