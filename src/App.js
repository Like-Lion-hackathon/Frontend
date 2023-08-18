import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from './page/Start';
import Main from './page/Main';
import Search from './page/Search';
import Page1 from './page/Page1'
import Page2 from './page/Page2'



function App() {
    
  App.use(cors({
    origin: ['http://localhost:3000', 'http://3.38.247.101:8082'], // front IP 추가
    credentials: true
  }));
  
  // 2.
  App.listen(8082, () => { // 3065 -> 80(허용된 포트 번호)으로 변경
    console.log('서버 실행 중!');
  })
    
    return(
      

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Start /> } />
          <Route path="/main" element={ <Main /> } />
          <Route path="/search" element={ <Search /> } />
          <Route path="/Page1" element={ <Page1 /> } />
          <Route path="/Page2" element={ <Page2 /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;