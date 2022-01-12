import './App.css';
import { Header } from './components/partials/Header/Header'
import { Nav } from './components/partials/Nav/Nav'
import { Main } from './components/partials/Main/Main'
import { Footer } from './components/partials/Footer/Footer'

export const navItems = [
  "Forside",
  "Produkter",
  "Om os",
  "Ledige stillinger",
  "Kontakt os",
]

function App() {
  return (
    <div className="sitewrapper">
      <Header pagetitle="My App" />
      <div className="gridwrapper">
        <Nav items={navItems} />
        <Main />
      </div>
      <Footer items={navItems} />
    </div>
  );
}

export default App;
