import Home1 from "./pages/home/Home";
import Login from "./pages/login/Login";
import Customer from "./pages/customer/Customer"
import Poster from "./pages/poster/Poster"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/Kuest">
      <Routes>
        <Route path="" element={<Home1 />} />
        <Route path="/Kuest/" element={<Home1 />} />
        <Route path="/Home" element={<Home1 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Poster" element={<Poster />} />
      </Routes>
    </Router>     
  );
}

export default App;
