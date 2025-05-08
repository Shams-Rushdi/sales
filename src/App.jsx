import { BrowserRouter,Routes, Route, Router } from "react-router";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetOTP from "./pages/PasswordResetOTP";
import SetPasswordPage from "./pages/SetPasswordPage";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/reset-password" element={<PasswordReset/>}/>
      <Route path="/reset-password-otp" element={<PasswordResetOTP/>}/>
      <Route path="/set-new-password" element={<SetPasswordPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
