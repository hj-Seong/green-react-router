import './App.css';
import Layout from './page/Layout';
import { Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import Writeform from './page/Wirteform';
import BoardList from './page/BoardList';
import BoardContext from './page/BoardContext';
import { useState } from 'react';
import { StateContext } from './context/ContextComp';

function App() {
  const [boardlist, setBoard] = useState( [
    {id:1, context : "첫번째"},
    {id:2, context : "두번째"},
    {id:3, context : "세번째"},
  ] )

  return (
    <div className="App">
      {/** 데이터를 전체적으로 관리하기 위해 Context사용 */}
      <StateContext.Provider value={boardlist}>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/** path='/'대신에 index사용 */}
          <Route index element={<Home />}/>
          <Route path='writeform' element={<Writeform />} />
          <Route path='boardlist' element={<BoardList />} >
            <Route path=':id' element={<BoardContext />} />
          </Route>
        </Route>
      </Routes>
      </StateContext.Provider>
    </div>
  );
}

export default App;
