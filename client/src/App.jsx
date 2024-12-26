import { Routes, Route } from "react-router";
import RouteHome from "./routes/RouteHome";


function App() {
  return (
    <>
      <Routes>
        <Route path="/Home/*" element={<RouteHome />} />
      </Routes>
    </>
  )
}

export default App;
