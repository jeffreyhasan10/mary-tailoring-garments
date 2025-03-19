import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1
              className={`text-xl font-display font-semibold transition-colors duration-300 ${
                isScrolled ? "text-mtg-navy" : "text-mtg-navy"
              }`}
            >
              <span className="text-2xl">M</span>ary{" "}
              <span className="text-2xl">T</span>ailoring &{" "}
              <span className="text-2xl">G</span>arments
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`nav-link font-medium ${
                isScrolled ? "text-mtg-navy" : "text-mtg-navy"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link font-medium ${
                isScrolled ? "text-mtg-navy" : "text-mtg-navy"
              }`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`nav-link font-medium ${
                isScrolled ? "text-mtg-navy" : "text-mtg-navy"
              }`}
            >
              Products
            </Link>
            <Link
              to="/gallery"
              className={`nav-link font-medium ${
                isScrolled ? "text-mtg-navy" : "text-mtg-navy"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`nav-link font-medium ${
                isScrolled ? "text-mtg-navy" : "text-mtg-navy"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info for Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919600427367"
              className="flex items-center text-sm text-mtg-navy"
            >
              <Phone size={16} className="mr-1" />
              <span>+91 9600427367</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-mtg-navy focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="bg-white shadow-xl animate-slide-in-right">
          <div className="px-4 pt-4 pb-8 space-y-6">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block py-2 text-mtg-navy hover:text-mtg-gold font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block py-2 text-mtg-navy hover:text-mtg-gold font-medium"
            >
              About
            </Link>
            <Link
              to="/products"
              onClick={toggleMenu}
              className="block py-2 text-mtg-navy hover:text-mtg-gold font-medium"
            >
              Products
            </Link>
            <Link
              to="/gallery"
              onClick={toggleMenu}
              className="block py-2 text-mtg-navy hover:text-mtg-gold font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block py-2 text-mtg-navy hover:text-mtg-gold font-medium"
            >
              Contact
            </Link>

            <div className="pt-4 space-y-4 border-t border-gray-200">
              <a
                href="tel:+919600427367"
                className="flex items-center text-mtg-navy"
              >
                <Phone size={16} className="mr-2" />
                <span>+91 9600427367</span>
              </a>
              <a
                href="tel:+919790048353"
                className="flex items-center text-mtg-navy"
              >
                <Phone size={16} className="mr-2" />
                <span>+91 9790048353</span>
              </a>
              <a
                href="mailto:mtguniform@gmail.com"
                className="flex items-center text-mtg-navy"
              >
                <Mail size={16} className="mr-2" />
                <span>mtguniform@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.facebook.com/MaryTailoringGarments/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mtg-navy hover:text-mtg-gold"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/mtg_garments?igsh=djJmbHpxOHg0dzBi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mtg-navy hover:text-mtg-gold"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
