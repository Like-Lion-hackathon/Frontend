import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./page/start"
import Main from './page/main'


function App() {
    return (
      <div  className=" wrapper">
          <div className="contentWrapper">
            <Routes>
                 <Route path="/" element={<Start/>}/>
                  <Route path='main' element={<Main/>}/>
            </Routes>
          </div>
      </div>
    );
  }
  export default App;