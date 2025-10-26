import { useAuthStore } from "../store/useAuthStore"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = () => {
  const { user, logout } = useAuthStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } px-6 py-4`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex justify-center hover:scale-105 transition-transform"
        >
          <img
            src="	https://i.ibb.co/20hYCzJs/Screenshot-2025-05-18-180804-removebg-preview.png"
            alt=""
            className="h-10"
          />
        </Link>

        {user ? (
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full ring-2 ring-offset-2 ring-[#76e889] transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#76e889] rounded-full border-2 border-[#0D1B2A]"></div>
                </div>
                <span className="text-white hidden md:block font-medium group-hover:text-[#76e889] transition-colors">
                  {user.name}
                </span>
              </div>
              <div className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-[#0D1B2A] rounded-lg shadow-xl py-2 border border-[#586E7C]/20">
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#76e889]/10 hover:text-[#76e889] transition-colors flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="relative inline-flex items-center px-6 py-2 overflow-hidden text-[#0D1B2A] font-medium bg-[#76e889] rounded-lg group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#76e889]/30"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Login</span>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
