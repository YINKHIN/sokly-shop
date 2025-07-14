
import { useState } from "react"
import { Search, User, Menu, X, Phone, Facebook } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const navigationItems = [
    { name: "Product", hasDropdown: true },
    { name: "Accessories", hasDropdown: true },
    { name: "Secondhand", hasDropdown: true },
    { name: "Special Offer", hasDropdown: true },
    { name: "Pre Order", hasDropdown: false },
    { name: "News", hasDropdown: false },
    { name: "Contact us", hasDropdown: false },
  ]

  return (
    <div className="w-full cursor-pointer">
      {/* Header Top - Contact Info */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Contact Info - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Tel: 023 216 725/6, 078 311 111, 092 111 168, 078 911 166</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-2 ml-auto">
              <Facebook className="w-4 h-4 text-blue-600" />
              <span className="text-gray-600 hidden sm:inline">Sokly Phone Shop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold text-blue-600">SOKLY</h1>
                  <p className="text-xs text-gray-500">Your Perfect Choice</p>
                </div>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-lg mx-8">
              <div className="w-full flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Mobile Search Button */}
            <button
              onClick={toggleSearch}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Account Info */}
            <div className="hidden lg:flex items-center space-x-2 text-gray-600">
              <User className="w-5 h-5" />
              <div className="text-sm">
                <div className="font-medium">My Account</div>
                <div className="text-xs">Register or Login</div>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-blue-600  cursor-pointer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 h-12">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex cursor-pointer items-center space-x-1 text-white hover:text-blue-200 transition-colors py-3">
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between w-full text-left text-white hover:text-blue-200 transition-colors py-2"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              ))}

              {/* Mobile Account Section */}
              <div className="pt-4 border-t border-blue-500">
                <div className="flex items-center space-x-2 text-white py-2">
                  <User className="w-5 h-5" />
                  <div className="text-sm">
                    <div className="font-medium">My Account</div>
                    <div className="text-xs text-blue-200">Register or Login</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
