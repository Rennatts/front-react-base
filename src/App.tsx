import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/ui/header";
import Signup from "./pages/SignupPage/SignupPage";
import LoginForm from "./pages/LoginPage/LoginPage";
import { UserProvider } from "./context/userContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
