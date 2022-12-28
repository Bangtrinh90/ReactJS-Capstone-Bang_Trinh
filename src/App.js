import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Detail from "./components/detail/Detail.jsx";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Hometemplate from "./templates/Hometemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hometemplate />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:productID" element={<Detail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
