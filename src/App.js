import "./App.css";
import { Teacher } from "./component/teacher";
import { Friend } from "./component/friend";
import { Home } from "./component/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/teacher" element={<Teacher/>}></Route>
        <Route path="/friend" element={<Friend/>}></Route>
      </Routes>
    </Router>

    
    </>
  );
}

export default App;
