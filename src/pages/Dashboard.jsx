import "../styles/dashboard.css";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/"); // redirect to login if not logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>Student Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="content">
        <aside className="sidebar">
          <ul>
            <li>Profile</li>
            <li>Course Management</li>
            <li>Career Planning</li>
            <li>Skill Development</li>
            <li>Events & Announcements</li>
          </ul>
        </aside>
        <main className="main-area">
          <h2>Welcome, {user?.email}</h2>
          <p>This is your personalized dashboard.</p>
        </main>
      </div>
    </div>
  );
}
