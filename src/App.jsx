import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign from "./pages/Sign";

import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/create-account" element={<Sign/>} />
          <Route exact path="/home" element={<Home/>} />
          {/* <Route path="*" element={<Error/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
