import { Routes, Route } from "react-router";
import RouteHome from "./routes/RouteHome";
import Login from "./pages/auth/Login"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home/*" element={<RouteHome />} />
      </Routes>
    </>
  )
}

export default App;
