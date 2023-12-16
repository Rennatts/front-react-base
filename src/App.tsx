import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/ui/header";
import Signup from "./pages/SignupPage/SignupPage";
import LoginForm from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
    </Router>
  );
};

export default App;
