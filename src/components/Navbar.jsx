import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path
  
  // Pages with background images (hero sections) should have white text
  const hasBackgroundImage = location.pathname === '/' || location.pathname === '/about' || location.pathname.startsWith('/blog/')
  const textColor = hasBackgroundImage ? 'text-white' : 'text-primary'
  const textColorHover = hasBackgroundImage ? 'hover:text-white' : 'hover:text-primary/80'
  const textColorActive = hasBackgroundImage ? 'text-white' : 'text-primary'

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    {
      path: '/portfolio',
      label: 'Portfolio',
      dropdown: [
        { path: '/portfolio/photography', label: 'Photography' },
        { path: '/portfolio/films', label: 'Films' },
        { path: '/portfolio/just-us', label: 'Just Us' },
        { path: '/portfolio/black-and-white', label: 'Black & White' },
      ],
    },
    { path: '/couple-stories', label: 'WNCouple Stories' },
    { path: '/blog', label: 'WN Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className={`text-2xl font-sans font-semibold ${textColor}`}>
            WeddingNama
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.dropdown ? (
                  <>
                    <div className="relative">
                      <Link
                        to={item.path}
                        className={`text-sm font-medium transition-colors ${
                          isActive(item.path)
                            ? textColorActive
                            : hasBackgroundImage
                            ? 'text-white/90 hover:text-white'
                            : 'text-primary/80 hover:text-primary'
                        }`}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {isDropdownOpen && (
                        <div
                          className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
                          onMouseEnter={() => setIsDropdownOpen(true)}
                          onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-primary/80 hover:text-primary hover:bg-gray-50"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.path) ? textColorActive : hasBackgroundImage ? 'text-white/90 hover:text-white' : 'text-primary/80 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-20">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  {item.dropdown ? (
                    <div>
                      <Link
                        to={item.path}
                        className="text-lg font-medium text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <ul className="mt-2 space-y-2 pl-4">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.path}>
                            <Link
                              to={subItem.path}
                              className="block text-base text-primary/80 hover:text-primary"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-lg font-medium text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

