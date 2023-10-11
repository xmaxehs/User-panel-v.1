import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from "./pages";
import Courses from "./pages/courses";
import Tickets from "./pages/Tickets";
import Verify from "./pages/Verify";

const App = () => {
  return (
    <Router className="App">
      <Routes>
        <Route path="User-panel-v.1" element={<Home />} exact />
        <Route path="/User-panel-v.1/courses" element={<Courses />} exact />
        <Route path="/User-panel-v.1/ticket" element={<Tickets />} exact />
        <Route path="/User-panel-v.1/verify" element={<Verify />} exact />
      </Routes>
    </Router>
  );
};


export default App;
