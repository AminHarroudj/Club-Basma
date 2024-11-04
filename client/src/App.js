import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Admin from "./components/admin";
import Login from "./components/Login";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookies] = useCookies("access_token");
  return (
    <Router>
      <div className="App text-white bg-sky-500 bg-opacity-70" id="home">
        <Routes>
          <Route path="/" exact Component={Home} />

          {cookies.access_token ? (
            <Route path="/admin" Component={Admin} />
          ) : (
            <Route path="/login" Component={Login} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
