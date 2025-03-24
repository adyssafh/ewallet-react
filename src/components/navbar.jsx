import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); 

  return (
    <nav className="flex justify-between items-center px-12 py-5 shadow-md bg-white">
      <Link to="/" className="flex items-center gap-2">
        <img src="src/assets/Group 7.svg" alt="Logo" className="w-30 h-7" />
      </Link>

      <div className="flex items-center gap-10">
        <Link 
          to="/" 
          className={location.pathname === "/" ? "text-blue-600 font-medium" : "text-gray-700"}
        >
          Dashboard
        </Link>
        <Link 
          to="/transfer" 
          className={location.pathname === "/transfer" ? "text-blue-600 font-medium" : "text-gray-700"}
        >
          Transfer
        </Link>
        <Link 
          to="/topup" 
          className={location.pathname === "/topup" ? "text-blue-600 font-medium" : "text-gray-700"}
        >
          Topup
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/login" className="text-gray-700">Sign Out</Link>
          <div className="h-6 w-px bg-gray-300"></div>
        </div>

        <img src="src/assets/Vector.svg" className="h-6 -ml-4" alt="Theme Icon" />
      </div>
    </nav>
  );
};

export default Navbar;