import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-white hover:text-blue-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-blue-400">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-blue-400">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
