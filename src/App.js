import { Routes, Route } from "react-router-dom";
import "./components/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/homePage";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </div>
    </>
  );
}

export default App;
