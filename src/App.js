import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./page/start"
import Main from './page/main'
import Search from "./page/search";


function App() {
    return (
      <div  className=" wrapper">
          <div className="contentWrapper">
            <Routes>
                 <Route path="/" element={<Start/>}/>
                  <Route path='main' element={<Main/>}/>
                  <Route pathe='search' element={<Search/>}/>
            </Routes>
          </div>
      </div>
    );
  }
  export default App;