import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Signup } from "../pages/signup";
import { Login } from "../pages/Login";


function App() {
  return (
  <div className="flex justify-center pt-6 pb-8">
    <BrowserRouter>
    <div className="pages">
    <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    </Routes>
     </div>
    </BrowserRouter>
    
  </div>
  )
}

export default App;
