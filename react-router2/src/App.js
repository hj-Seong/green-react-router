import './App.css';
import Layout from './page/Layout';
import { Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import Writeform from './page/Wirteform';
import BoardList from './page/BoardList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          {/** path='/'대신에 index사용 */}
          <Route index element={<Home />}/>
          <Route path='writeform' element={<Writeform />} />
          <Route path='boardlist' element={<BoardList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
