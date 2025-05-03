import { BrowserRouter,Routes, Route, Router } from "react-router";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PasswordReset from "./pages/PasswordReset";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/reset-password" element={<PasswordReset/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
