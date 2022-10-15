import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Home from "./Pages/home/Home";
import Hotel from "./Pages/hotel/Hotel";
import List from "./Pages/list/List";
import Login from "./Pages/login/Login";

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
