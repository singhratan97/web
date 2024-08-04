import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route
            path="/products"
            element={<Products />}
            /*render={(props) => <Products {...props} a="sss" />}*/
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
