import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NoFound from "./Pages/NoFound";
import Navbar from "./components/Navbar";
import Description from "./Pages/Description";

function App() {

  return (
    <BrowserRouter>

    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={<Home/> }
        />
                <Route
          path="/review/:id"
          element={<Description /> }
        />
        <Route
          path="*"
          element={ <div className="container text-center mt-5"><NoFound/> </div>  }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
