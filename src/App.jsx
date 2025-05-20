import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetOTP from "./pages/PasswordResetOTP";
import SetPasswordPage from "./pages/SetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import DashboarLayout from "./layouts/DashboardLayout";
import Guard from "./components/Guard";

// Missing dashboard inner pages
import DashboarIndexPage from "./pages/DashboarPage";
import ProfilePage from "./pages/ProfilePage";
import CustomerPage from "./pages/CustomerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/reset-password-otp" element={<PasswordResetOTP />} />
        <Route path="/set-new-password" element={<SetPasswordPage />} />

        <Route path="/dashboard" element={<DashboarLayout />}>
          <Route path="index" element={<DashboarIndexPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="customer" element={<CustomerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
