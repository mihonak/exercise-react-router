import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/Page1">Page1</Link>
        <Link to="/Page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
