import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './Comp/maincomp/Master';
import FirstPage from './Comp/maincomp/FirstPage';
import About from './Comp/About';
import Services from './Comp/Services';
import Projects from './Comp/Projects';
import Header from './Comp/maincomp/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master Rcf={FirstPage} />}> </Route>
          <Route path='/' element={<Master Rcf={Header}/>}></Route>
          <Route path='/about' element={<Master Rcf={About} />}></Route>
          <Route path='/services' element={<Master Rcf={Services} />}></Route>
          <Route path='/projects' element={<Master Rcf={Projects} />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
