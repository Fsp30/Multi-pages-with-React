import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-2">
      <ul className="flex space-x-8">
        <li>
          <Link to="/" className="text-white hover:text-blue-400 underline decoration-sky-600 ml-2">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-blue-400 underline decoration-sky-600 md:decoration-blue-400">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-blue-400 underline decoration-sky-600 md:decoration-blue-400">Contact</Link>
        </li>
        
      </ul>
    </nav>
  )
}
