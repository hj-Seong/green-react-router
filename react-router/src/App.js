import './App.css';
// 3. Routes와 Route를 가져와서 사용
import { Routes, Route, Link} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Test from './page/Test';


function App() {
  return (
    <div className="App">
      <h1>리액트라우터를 사용하게 된 것을 환영합니다</h1>
      <div>
        {/** Link를 통해서 컴포넌트간의 이동을 할수있다 */}
        <Link to="/about" >about</Link> | 
        {/**  a태그도 가능하지만 새로고침이 일어남으로 데이터가 리셋된다*/}
        <a href='/about'>about-a tag</a> |
        <Link to='/test'>test</Link>
      </div>
        {/** 
         * 주소마다 하나의 화면의 가지게됨 :
         * Route에 보여질 화면을 Routes로 묶어줌
         * */}
        <Routes> 
          {/** path를 통해 주소를 연결, element를 통해 컴포넌트 연결 */}
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />} />
          {/** Route 를 통해서 test입니다를 출력하는 Test페이지를 만들고 
           *  Link를 통해서 들어갈 수 있도록 작성해주세요
           *  */}
          <Route path='test' element={<Test />} />
        </Routes>
    </div>
  );
}

export default App;
