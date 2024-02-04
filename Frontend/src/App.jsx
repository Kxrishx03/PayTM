import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Signup } from "../pages/signup";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Transaction } from "../pages/Transaction";

function App() {
  return (
  <div>
    <BrowserRouter>
    <div className="pages">
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/transaction" element={<Transaction />} />
    </Routes>
     </div>
    </BrowserRouter>
  </div>
  )
}

export default App;
