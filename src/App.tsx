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
import Hoverview from "./pages/dashboard/screens/main_dashboard/Hoverview";
import History from "./pages/dashboard/screens/history/History";
import Menu from "./pages/dashboard/screens/menu/Menu";
import Calendar from "./pages/dashboard/screens/calendar/Calendar";
import Analytics from "./pages/dashboard/screens/analytics/Analytics";
import Contact from "./pages/dashboard/screens/contact/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Hoverview />} />
          <Route path="menu" element={<Menu />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
