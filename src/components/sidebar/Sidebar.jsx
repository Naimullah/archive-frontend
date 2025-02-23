import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Users, Settings, ChevronDown, LayoutDashboard, TrendingUp, TrendingDown } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    {
      name: "Income",
      icon: <TrendingUp size={20} />,
      subMenu: [
        { name: "Income", path: "/create" },
        { name: "Outcome", path: "/outcome" },
      ],
    },
    {
      name: "Outcome",
      icon: <TrendingDown size={20} />,
      subMenu: [
        { name: "Monthly Outcome", path: "/outcome/monthly" },
        { name: "Annual Outcome", path: "/outcome/annual" },
      ],
    },
    {
      name: "Users",
      icon: <Users size={20} />,
      subMenu: [
        { name: "All Users", path: "/users" },
        { name: "Add User", path: "/users/add" },
      ],
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      subMenu: [
        { name: "Profile", path: "/settings/profile" },
        { name: "Security", path: "/settings/security" },
      ],
    },
  ];

  return (
    <div
      className={`h-full bg-white dark:bg-gray-900 ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 shadow-lg fixed inset-y-0 z-50 ${
        isMobile ? "absolute" : "relative"
      }`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-2">
            <Link
              to={item.path}
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => item.subMenu && toggleDropdown(item.name)}
            >
              {item.icon}
              {isOpen && <span className="ml-3">{item.name}</span>}
              {item.subMenu && isOpen && (
                <ChevronDown
                  className={`ml-auto transition-transform ${
                    openDropdown === item.name ? "rotate-180" : ""
                  }`}
                />
              )}
            </Link>

            {item.subMenu && openDropdown === item.name && (
              <div className="ml-6">
                {item.subMenu.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    to={sub.path}
                    className="block p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
