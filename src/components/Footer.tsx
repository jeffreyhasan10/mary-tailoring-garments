
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mtg-navy text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-semibold">Mary Tailoring & Garments</h2>
            <p className="text-mtg-gold italic font-display">"Quilted for Quality and Style"</p>
            <p className="text-gray-300 mt-4 max-w-xs">
              Specializing in premium school, college, and professional uniforms in Tamil Nadu since 2022.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-display">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-mtg-gold transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-mtg-gold transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-300 hover:text-mtg-gold transition-colors">Products</Link>
              <Link to="/gallery" className="text-gray-300 hover:text-mtg-gold transition-colors">Gallery</Link>
              <Link to="/contact" className="text-gray-300 hover:text-mtg-gold transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-display">Products</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/products#school" className="text-gray-300 hover:text-mtg-gold transition-colors">School Uniforms</Link>
              <Link to="/products#college" className="text-gray-300 hover:text-mtg-gold transition-colors">College Uniforms</Link>
              <Link to="/products#corporate" className="text-gray-300 hover:text-mtg-gold transition-colors">Corporate Uniforms</Link>
              <Link to="/products#hospital" className="text-gray-300 hover:text-mtg-gold transition-colors">Hospital Uniforms</Link>
              <Link to="/products#cultural" className="text-gray-300 hover:text-mtg-gold transition-colors">Cultural Program Dresses</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-display">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-mtg-gold" />
                <span className="text-gray-300">Shakar Plaza, Manali Jn., Thuckalay - 629 175, Kanyakumari District</span>
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 text-mtg-gold" />
                <a href="tel:+919600427367" className="text-gray-300 hover:text-mtg-gold">+91 9600427367</a>
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 text-mtg-gold" />
                <a href="tel:+919790048353" className="text-gray-300 hover:text-mtg-gold">+91 9790048353</a>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 text-mtg-gold" />
                <a href="mailto:mtguniform@gmail.com" className="text-gray-300 hover:text-mtg-gold">mtguniform@gmail.com</a>
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.facebook.com/MaryTailoringGarments/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-mtg-gold transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/mtg_garments?igsh=djJmbHpxOHg0dzBi" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-mtg-gold transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Mary Tailoring & Garments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
