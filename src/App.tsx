
import { Articles } from './Articles/Articles'
import { Features } from './Features/Features'
import { Footer } from './Footer/Footer'
import Header from './Header/Header'
import { Hero } from './Hero/Hero'

function App()
{

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </div>
  )
}

export default App
