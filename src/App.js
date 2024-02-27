
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './Comp/maincomp/Master';
import FirstPage from './Comp/maincomp/FirstPage';
import About from './Comp/About';
import Services from './Comp/Services';
import Projects from './Comp/Projects';
import Header from './Comp/maincomp/Header';
import Footer from './Comp/maincomp/Footer';
import Blog from './Comp/Blog';
import Contact from './Comp/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master Rcf={FirstPage} />}> </Route>
          <Route path='/top' element={<Master Rcf={Header}/>}></Route>
          <Route path='/about' element={<Master Rcf={About} />}></Route>
          <Route path='/services' element={<Master Rcf={Services} />}></Route>
          <Route path='/projects' element={<Master Rcf={Projects} />}></Route>
          {/* <Route path='/footer' element={<Master Rcf={Footer} />}></Route> */}
          <Route path='/blog' element={<Master Rcf={Blog} />}></Route>
          <Route path='/contact' element={<Master Rcf={Contact} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
