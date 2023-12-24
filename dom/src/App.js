import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Dashboard from "./Pages/Dashboard";
import Chat from "./Components/Dashboard/Chat";
import Profile from "./Components/Dashboard/Profile";
import Notification from "./Components/Dashboard/Notification";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
