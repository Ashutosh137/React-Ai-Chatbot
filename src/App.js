import "./App.css";
import Teacher  from "./component/teacher";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/" element={<Teacher/>}></Route>
        {/* <Route path="/friend" element={<Friend/>}></Route> */}
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
