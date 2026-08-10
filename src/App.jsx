import "./Css/App.css";
import Home from "./Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import Sider from "./Components/Sider";
import Projets from "./Pages/Projets";
import SignUp from "./Pages/SignUp";
import Test from "./Pages/Test";
import Movies from "./Pages/Movies";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="flex">
        <div className="top-[-15px] left-0 fixed">
          {location.pathname !== "/" && <Sider />}
        </div>

        <div className='flex-1 bg-[url("public/Bg.jpg")] bg-cover sm:min-h-screen'>
          <main>
            <Routes>
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route path="/Movies" element={<Movies />} />
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/Projets" element={<Projets />} />
              <Route path="/Test" element={<Test />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
