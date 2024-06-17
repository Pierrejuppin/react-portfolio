import { NavLink } from 'react-router-dom'

export default function Navbar() { 
    return (
<>
  <nav className="shadow bg-gray-800">
    
    <div className="container flex items-center justify-center p-6 mx-auto  capitalize text-gray-300">
        <NavLink to="/" className="border-b-2 border-transparent transition-colors duration-300 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Accueil</NavLink>
        <NavLink to="/projets" className="border-b-2 border-transparent  transition-colors duration-300 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projets</NavLink>
        <NavLink to="/contact" className="border-b-2 border-transparent  transition-colors duration-300 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</NavLink>
    </div>
  </nav>
</>
  );
} 