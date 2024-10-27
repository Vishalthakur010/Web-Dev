import { NavLink, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Support from "./components/Support"
import About from "./components/About"
import Labs from "./components/Labs"
import NotFound from "./components/NotFound"
import { Link } from "react-router-dom"
import MainHeader from "./components/MainHeader"

const App = () => {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />} >
          {/*  default Route */}
          <Route index element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App