import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import SignBussiness from "./pages/SignBussiness";

import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/create-account" element={<Sign/>} />
          <Route exact path="/create-account-bussiness" element={<SignBussiness/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/loading" element={<Loading/>} />
          {/* <Route path="*" element={<Error/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
