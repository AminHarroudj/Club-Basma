import Navbar from "./components/navbar";
import bg from "./assets/bg4.png";
import Home from "./components/home";
import About from "./components/about";
import Activities from "./components/activities";
import Footer from "./components/footer";
import Form from "./components/form";

function App() {
  return (
    <div
      className="App text-white"
      style={{
        backgroundImage: `url(${bg})`,
      }}
      id="home"
    >
      <Navbar />
      <Home />
      <About />
      <Activities />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
