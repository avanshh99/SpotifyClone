import Sidebar from "./components/Sidebar";
import Bottombar from "./components/Bottombar";
import { Route, BrowserRouter as Router, Routes}  from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import SongState from "./context/SongState";
export default function App() 
  {
  return (
    <>
    <SongState>
    <Router>
    <div className='flex h-[calc(100vh-theme(space.24))]' >
    <Sidebar/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/search" element={<Search/>}></Route>

    </Routes>
    
    </div>
    <Bottombar/>
    </Router>
    </SongState>
    </>
  )
}

// export default App;
