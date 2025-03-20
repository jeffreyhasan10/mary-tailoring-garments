import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Check,
  School,
  Building,
  Building2,
  Stethoscope,
  Shirt,
  Users,
  Stars,
  Scissors,
  Phone,
  Factory,
  Ruler,
  Menu,
  X,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";
import { Section, SectionTitle } from "../components/ui/section";
import { Container } from "../components/ui/container";

// Header Component (unchanged)
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
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919600427367"
              className="flex items-center text-sm text-mtg-navy"
            >
              <Phone size={16} className="mr-1" />
              <span>+91 9600427367</span>
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-mtg-navy focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
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

// Index Component with Updated Hero Section
const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const tourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const refs = [heroRef, productsRef, aboutRef, testimonialsRef, tourRef];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Hero Section with Blended Image and Color */}
      <section
        className="hero-section relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen pt-24 sm:pt-28"
        ref={heroRef}
      >
        {/* Background with Image and Color Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Color Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-mtg-navy/80 to-mtg-navy/60"></div>
          {/* Background Image with Reduced Opacity */}
          <img
            src="/lovable-uploads/2032bf85-bbc1-47da-9bb3-d5e7e23419c2.png"
            alt="School uniform group"
            className="w-full h-full object-cover opacity-30" // Reduced opacity to make the image lightly visible
          />
        </div>

        <div className="relative container mx-auto px-4 h-full z-10 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl text-center space-y-6">
            <div
              className="opacity-0"
              style={{ animation: "fade-in 1s ease-out forwards 0.3s" }}
            >
              <span className="badge-gold mb-4 inline-block px-4 py-2 rounded-full text-sm sm:text-base bg-mtg-gold/30 text-mtg-gold shadow-md">
                Premium Uniform Tailoring
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
                Crafting <span className="text-mtg-gold">Quality</span> Uniforms
                with Precision
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-light">
                Specialized in manufacturing premium school, college, and
                professional uniforms that embody elegance, comfort, and
                durability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products"
                  className="bg-mtg-gold text-mtg-navy font-semibold px-6 py-3 rounded-md hover:bg-mtg-gold/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-base sm:text-lg"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-md hover:bg-white/10 transition-all text-center text-base sm:text-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 p-4 sm:p-6 w-full shadow-lg">
              {[
                {
                  title: "Premium Quality",
                  desc: "Durable fabrics, precise stitching",
                },
                {
                  title: "Bulk Orders",
                  desc: "Efficiently handle large quantities",
                },
                {
                  title: "Custom Designs",
                  desc: "Tailored to your specifications",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-3 sm:p-4 w-full min-w-0 hover:bg-white/10 transition-all rounded-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mtg-gold/30 mr-4 flex-shrink-0">
                    <Check className="text-mtg-gold" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-base sm:text-lg truncate">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base truncate">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Products Section */}
      <section className="section-padding bg-gray-50 py-12 sm:py-16" ref={productsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge-navy inline-block px-3 py-1 rounded-full bg-mtg-navy/10 text-mtg-navy text-sm">
              Our Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Quality Uniforms for All Sectors
            </h2>
            <p className="text-mtg-neutral max-w-2xl mx-auto text-sm sm:text-base">
              From educational institutions to corporate environments, we
              provide tailored uniform solutions that meet the highest
              standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group hover-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-100">
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src="/lovable-uploads/7be8b1a8-623d-443f-aaf5-07aaba49352d.png"
                  alt="School Uniforms"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mtg-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-base sm:text-lg">
                      School Uniforms
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <School className="text-mtg-navy mr-3" size={20} />
                  <h3 className="font-display font-semibold text-lg sm:text-xl">
                    School Uniforms
                  </h3>
                </div>
                <p className="text-mtg-neutral text-sm sm:text-base mb-4">
                  Complete range of school uniforms designed for comfort,
                  durability, and a professional appearance.
                </p>
                <Link
                  to="/products#school"
                  className="inline-flex items-center text-mtg-navy font-medium story-link text-sm sm:text-base"
                >
                  View Collection <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="group hover-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-100">
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src="/lovable-uploads/55ddebd3-2f4a-4e2d-962d-983e8d2cfa6f.png"
                  alt="College Uniforms"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mtg-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-base sm:text-lg">
                      College Uniforms
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <Building className="text-mtg-navy mr-3" size={20} />
                  <h3 className="font-display font-semibold text-lg sm:text-xl">
                    College Uniforms
                  </h3>
                </div>
                <p className="text-mtg-neutral text-sm sm:text-base mb-4">
                  Department-specific college uniforms tailored for a polished
                  and professional campus look.
                </p>
                <Link
                  to="/products#college"
                  className="inline-flex items-center text-mtg-navy font-medium story-link text-sm sm:text-base"
                >
                  View Collection <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="group hover-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-100">
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src="/lovable-uploads/fb10461d-76f8-4815-9fb2-5d31dcfe783b.png"
                  alt="Corporate Uniforms"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mtg-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-base sm:text-lg">
                      Corporate Uniforms
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <Building2 className="text-mtg-navy mr-3" size={20} />
                  <h3 className="font-display font-semibold text-lg sm:text-xl">
                    Corporate Uniforms
                  </h3>
                </div>
                <p className="text-mtg-neutral text-sm sm:text-base mb-4">
                  Professional corporate attire that aligns with your brand
                  identity and company culture.
                </p>
                <Link
                  to="/products#corporate"
                  className="inline-flex items-center text-mtg-navy font-medium story-link text-sm sm:text-base"
                >
                  View Collection <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-mtg-navy text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-mtg-navy/90 transition-all shadow-lg text-sm sm:text-base"
            >
              View All Products <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-mtg-cream py-12 sm:py-16" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative">
              <img
                src="/lovable-uploads/8b8847f4-f186-4361-89cc-10b254a6d180.png"
                alt="Manufacturing facility"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <img
                  src="/lovable-uploads/e5fb24a4-db47-4f28-8782-506d72962572.png"
                  alt="Sewing machine"
                  className="w-40 h-40 object-cover rounded-lg shadow-lg border-4 border-white"
                />
              </div>
            </div>

            <div>
              <span className="badge-navy inline-block px-3 py-1 rounded-full bg-mtg-navy/10 text-mtg-navy text-sm">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                Crafting Excellence Since 2022
              </h2>
              <p className="text-mtg-neutral mb-6 text-sm sm:text-base">
                Mary Tailoring & Garments was established with a vision to
                revolutionize the uniform industry in Tamil Nadu. Our journey
                began with a small workshop in Kanyakumari District, and today
                we have evolved into a premier uniform manufacturing company
                serving educational institutions, corporations, and various
                sectors across the region.
              </p>
              <p className="text-mtg-neutral mb-6 text-sm sm:text-base">
                What sets us apart is our unwavering commitment to quality,
                attention to detail, and customer satisfaction. Every uniform we
                produce undergoes rigorous quality checks to ensure perfect
                stitching, comfort, and durability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mtg-gold/20 mr-3 mt-1 flex-shrink-0">
                    <Scissors className="text-mtg-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mtg-navy text-base">
                      Expert Craftsmanship
                    </h3>
                    <p className="text-mtg-neutral text-sm">
                      Skilled tailors with years of experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mtg-gold/20 mr-3 mt-1 flex-shrink-0">
                    <Stars className="text-mtg-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mtg-navy text-base">
                      Premium Materials
                    </h3>
                    <p className="text-mtg-neutral text-sm">
                      Only the finest fabrics and materials
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-mtg-navy text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-mtg-navy/90 transition-all text-sm sm:text-base"
              >
                Learn More About Us <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white py-12 sm:py-16" ref={testimonialsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge-gold inline-block px-3 py-1 rounded-full bg-mtg-gold/20 text-mtg-gold text-sm">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-mtg-neutral max-w-2xl mx-auto text-sm sm:text-base">
              Hear from educational institutions and organizations that trust us
              for their uniform needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-mtg-navy rounded-full flex items-center justify-center text-white font-bold mr-3">
                  RS
                </div>
                <div>
                  <h3 className="font-semibold text-base">
                    Rojavanam International School
                  </h3>
                  <p className="text-sm text-mtg-neutral">Nagercoil</p>
                </div>
              </div>
              <p className="text-mtg-neutral text-sm mb-3">
                "Mary Tailoring & Garments has been our trusted uniform partner
                for the past 5 years. Their quality, attention to detail, and
                timely delivery have always exceeded our expectations."
              </p>
              <div className="flex text-mtg-gold">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-mtg-navy rounded-full flex items-center justify-center text-white font-bold mr-3">
                  AK
                </div>
                <div>
                  <h3 className="font-semibold text-base">Akil International School</h3>
                  <p className="text-sm text-mtg-neutral">Colachel</p>
                </div>
              </div>
              <p className="text-mtg-neutral text-sm mb-3">
                "We've been impressed by the durability of the uniforms supplied
                by MTG. Even after regular use and multiple washes, they
                maintain their color and form. Their customer service is
                exceptional too."
              </p>
              <div className="flex text-mtg-gold">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-mtg-navy rounded-full flex items-center justify-center text-white font-bold mr-3">
                  BR
                </div>
                <div>
                  <h3 className="font-semibold text-base">Bishop Remigius School</h3>
                  <p className="text-sm text-mtg-neutral">Nagercoil</p>
                </div>
              </div>
              <p className="text-mtg-neutral text-sm mb-3">
                "The cultural program dresses designed by Mary Tailoring &
                Garments for our annual day were stunning. The students looked
                elegant, and the outfits received numerous compliments from
                parents and guests."
              </p>
              <div className="flex text-mtg-gold">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Tour Section */}
      <Section color="white" id="tour" className="py-12 sm:py-16" ref={tourRef}>
        <Container>
          <div>
            <div className="text-center mb-12">
              <span className="badge-navy inline-block px-3 py-1 rounded-full bg-mtg-navy/10 text-mtg-navy text-sm">
                Our Facility
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
                Take a Tour of Our Company
              </h2>
              <p className="text-mtg-neutral max-w-2xl mx-auto text-sm sm:text-base">
                Step inside Mary Tailoring & Garments and discover our
                state-of-the-art facilities where quality uniforms come to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/lovable-uploads/1abd22e5-bb0d-4a35-ac9a-d5e7295d056e.png"
                    alt="Tailoring facility"
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mtg-gold/20 mr-3 mt-1 flex-shrink-0">
                    <Factory className="text-mtg-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mtg-navy text-base sm:text-lg">
                      Production Floor
                    </h3>
                    <p className="text-mtg-neutral text-sm sm:text-base">
                      Our spacious production area equipped with modern
                      machinery for efficient uniform manufacturing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/lovable-uploads/e5fb24a4-db47-4f28-8782-506d72962572.png"
                    alt="Sewing machine close-up"
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mtg-gold/20 mr-3 mt-1 flex-shrink-0">
                    <Scissors className="text-mtg-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mtg-navy text-base sm:text-lg">
                      Precision Equipment
                    </h3>
                    <p className="text-mtg-neutral text-sm sm:text-base">
                      State-of-the-art sewing machines that ensure accurate
                      stitching and superior finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-lg shadow-md bg-white">
                <div className="h-60">
                  <img
                    src="/lovable-uploads/8b8847f4-f186-4361-89cc-10b254a6d180.png"
                    alt="Manufacturing facility overview"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-mtg-navy mb-2 text-base">
                    Main Workshop
                  </h3>
                  <p className="text-sm text-mtg-neutral">
                    Our primary production area where bulk orders are processed
                    with efficiency.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg shadow-md bg-white">
                <div className="h-60">
                  <img
                    src="/lovable-uploads/47894f98-be50-4061-8bf0-d134b5fa8398.png"
                    alt="Finished school uniforms"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-mtg-navy mb-2 text-base">
                    Quality Control
                  </h3>
                  <p className="text-sm text-mtg-neutral">
                    Final inspection area where each uniform undergoes rigorous
                    quality checks.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg shadow-md bg-white">
                <div className="h-60">
                  <img
                    src="/lovable-uploads/cd7d92ca-6c37-45ea-99d0-187c9fb6415e.png"
                    alt="Design and pattern making area"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-mtg-navy mb-2 text-base">
                    Design Studio
                  </h3>
                  <p className="text-sm text-mtg-neutral">
                    Where creativity meets craftsmanship in developing unique
                    uniform designs.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center bg-mtg-navy text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-mtg-navy/90 transition-all shadow-lg text-sm sm:text-base"
              >
                View Full Gallery <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-mtg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/lovable-uploads/ab356b2b-43d0-4f67-b9c4-5fc1b388e7c2.png"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Elevate Your Uniform Standards?
            </h2>
            <p className="text-gray-300 mb-8 text-sm sm:text-lg">
              Contact us today to discuss your uniform requirements and receive
              a customized quotation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-mtg-gold text-mtg-navy font-semibold px-6 py-3 rounded-md hover:bg-mtg-gold/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-sm sm:text-base"
              >
                Get in Touch
              </Link>
              <a
                href="tel:+919600427367"
                className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white/10 transition-all text-center flex items-center justify-center text-sm sm:text-base"
              >
                <Phone size={18} className="mr-2" /> +91 9600427367
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;