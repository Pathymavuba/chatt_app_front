import socketI0 from "socket.io-client"

const socket = socketI0.connect("http://localhost:4000")

function App() {
  return (
    <div>
      <h1>Welcome !</h1>
    </div>
  );
}

export default App;
