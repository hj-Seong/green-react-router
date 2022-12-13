import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About';
import Home from './page/Home';
import Layout from './page/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
