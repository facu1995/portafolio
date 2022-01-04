/* import { BrowserRouter, Route, Routes } from 'react-router-dom'; */
//componets
/* import Error504 from './components/screens/Error404'; */
import Home from './components/screens/Home';
import NavMain from './components/Nav/NavMain';
/* import About from './components/screens/About'; */
import Contact from './components/screens/Contact';
import Proyect from './components/screens/Proyect';
//styles
import './styles/style.css';
function App() {
  return (
    <>
      <NavMain/>
      <Home/>
      <Proyect/>
      <Contact/>
    </>
  );
}

export default App;

{/* <>
      <BrowserRouter>
      <NavMain/>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proyect" element={<Proyect />} />
          <Route path="*" element={<Error504 />} />
        </Routes>
      </BrowserRouter>
    </> */}