import { useState, useEffect } from "react";
import { Bell, MessageSquare, User, LogOut, LogIn, Search, Sun, Moon, Settings } from "lucide-react";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow">
      <h1 className="text-xl font-bold">Archive MIS</h1>

      <div className="flex items-center gap-2">
        {/* Search Box */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
        </div>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="p-2">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <Bell className="cursor-pointer" onClick={() => setNotificationOpen(!notificationOpen)} />
          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border rounded shadow-lg z-50">
              <div className="p-2">No new notifications</div>
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="relative">
          <MessageSquare className="cursor-pointer" onClick={() => setMessageOpen(!messageOpen)} />
          {messageOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border rounded shadow-lg z-50">
              <div className="p-2">No new messages</div>
            </div>
          )}
        </div>

        {/* User Dropdown */}
        <div className="relative">
          <User className="cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded shadow-lg z-50">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LogOut size={16} className="inline-block mr-2" /> Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LogIn size={16} className="inline-block mr-2" /> Login
                </button>
              )}
            </div>
          )}
        </div>

        <Settings className="cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
