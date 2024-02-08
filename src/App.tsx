import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Welcome from "./pages/welcome/Welcome";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/login/Login";
// import { isAuthenticated } from "./utils/authUtils";

const App = () => {
  // const isAuthenticatedUser = isAuthenticated();

  return (
    <Router>
      <Routes>
        {/* {isAuthenticatedUser ? (
          <>
            <Route path="/events" element={<Dashboard />} />
            <Route path="*" element={<Navigate replace to="/events" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        )} */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;