// App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/login/Login";
import Profile from "./pages/dashboard/screens/profile/Profile";
import Hoverview from "./pages/dashboard/hover_view/Hoverview";
import History from "./pages/dashboard/screens/history/History";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Hoverview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
