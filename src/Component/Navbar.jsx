import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  // useLocation membantu kita tahu pengguna sedang di URL mana
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-24">
        
        {/* BAGIAN KIRI: Logo & Judul */}
          <img src="/gdg-logo.svg" alt="GDGoC Logo" className="h-8 w-auto" />
          
        {/* BAGIAN TENGAH: Menu Navigasi */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              path ===   "/"
                ? "bg-[#E8F0FE] text-[#1967D2]" // Biru aktif
                : "text-[#5F6368] hover:bg-gray-50 hover:text-gray-900" // Abu-abu default
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              path === "/about"
                ? "bg-[#E8F0FE] text-[#1967D2]"
                : "text-[#5F6368] hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            About
          </Link>
          <Link
            to="/overview"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              path === "/overview"
                ? "bg-[#E8F0FE] text-[#1967D2]"
                : "text-[#5F6368] hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Overview
          </Link>
          <Link
            to="/contact"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              path === "/contact"
                ? "bg-[#E8F0FE] text-[#1967D2]"
                : "text-[#5F6368] hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* BAGIAN KANAN: Tombol CTA */}
        <Link
          to="/#tracks"
          className="hidden md:flex items-center gap-2 rounded-lg bg-[#4284F4] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3b78e0]"
        >
          Find your track
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="M3.33 10h13.23m0 0c0 .32-.12.64-.37.88L11.46 15.6M16.56 10c0-.32-.12-.64-.37-.88L11.46 4.37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        
      </div>
    </nav>
  );
}