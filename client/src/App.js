import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Admin from "./components/admin";

function App() {
  return (
    <Router>
      <div
        className="App text-white bg-sky-500 bg-opacity-70"
        id="home"
      >
        {/* navbar */}
        <Navbar />
        {/* end navbar */}

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/admin" Component={Admin}/>
        </Routes>

        {/* footer */}
        <Footer />
        {/* end footer */}
      </div>
    </Router>
  );
}

export default App;
