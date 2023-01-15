import Navbar from "./components/navbar";
import { Router } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Button variant="primary">Primary</Button>{" "}
    </div>
  );
}

export default App;
