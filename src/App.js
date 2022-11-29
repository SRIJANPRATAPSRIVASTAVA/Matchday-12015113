import "./App.css";
import {Routes , Route} from 'react-router-dom'
import VideoPlayer from './Components/Videoplayer'
import Home from './Components/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/screentwo" element={<VideoPlayer/>}/>
    </Routes>
    </>
  );
}

export default App;
