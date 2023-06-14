import { Route, Routes } from "react-router-dom";
import socketI0 from "socket.io-client"
import Home from "./pages/Home";
// eslint-disable-next-line no-unused-vars
const socket = socketI0.connect("http://localhost:4000")

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
    </Routes>
  );
}

export default App;
