import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

