
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Products = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('school');
  
  const schoolRef = useRef<HTMLDivElement>(null);
  const collegeRef = useRef<HTMLDivElement>(null);
  const corporateRef = useRef<HTMLDivElement>(null);
  const medicalRef = useRef<HTMLDivElement>(null);
  const culturalRef = useRef<HTMLDivElement>(null);
  const specialtyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveCategory(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const refs = [schoolRef, collegeRef, corporateRef, medicalRef, culturalRef, specialtyRef];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-mtg-navy">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/public/lovable-uploads/55ddebd3-2f4a-4e2d-962d-983e8d2cfa6f.png" 
            alt="Uniforms background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-2xl opacity-0" style={{animation: 'fade-in 1s ease-out forwards 0.3s'}}>
            <span className="badge-gold mb-4">Our Products</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Premium Uniform Collections
            </h1>
            <p className="text-lg text-gray-100 mb-8">
              Explore our diverse range of high-quality uniforms designed for various sectors, from educational institutions to corporate environments.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 bg-white z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto whitespace-nowrap py-4">
            <div className="inline-flex space-x-1 md:space-x-2">
              <button 
                onClick={() => scrollToSection('school')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'school' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
              >
                School Uniforms
              </button>
              <button 
                onClick={() => scrollToSection('college')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'college' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
              >
                College Uniforms
              </button>
              <button 
                onClick={() => scrollToSection('corporate')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'corporate' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
              >
                Corporate Uniforms
              </button>
              <button 
                onClick={() => scrollToSection('medical')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'medical' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
              >
                Medical Uniforms
              </button>
              <button 
                onClick={() => scrollToSection('cultural')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'cultural' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
              >
                Cultural Dresses
              </button>
              <button 
                onClick={() => scrollToSection('specialty')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'specialty' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
              >
                Specialty Uniforms
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* School Uniforms Section */}
      <section id="school" className="py-16 bg-white" ref={schoolRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-navy mb-4">Educational Attire</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mtg-navy mb-6">School Uniforms</h2>
              <p className="text-mtg-neutral mb-6">
                Our school uniforms combine durability with comfort, designed to withstand the rigors of daily activity while 
                maintaining a smart appearance. Made from high-quality fabrics, our school wear is breathable, easy to maintain, 
                and designed to last throughout the academic year.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Shirts and blouses with precise stitching and durable buttons</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Comfortable trousers and skirts with reinforced seams</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Pinafores and jumpers that maintain shape and color</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Sports uniforms designed for movement and breathability</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Custom designs featuring school logos and colors</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Primary School
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Middle School
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  High School
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Sportswear
                </div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-mtg-navy font-medium hover:text-mtg-gold transition-colors">
                Request a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-72 shadow-md">
                <img 
                  src="/public/lovable-uploads/47894f98-be50-4061-8bf0-d134b5fa8398.png" 
                  alt="Primary school uniforms" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-72 shadow-md">
                <img 
                  src="/public/lovable-uploads/7be8b1a8-623d-443f-aaf5-07aaba49352d.png" 
                  alt="Middle school uniforms" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 col-span-2 shadow-md">
                <img 
                  src="/public/lovable-uploads/2eca9fe1-784c-4d54-bbe2-65243900fd8c.png" 
                  alt="High school uniforms" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Uniforms Section */}
      <section id="college" className="py-16 bg-mtg-cream" ref={collegeRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden h-72 shadow-md">
                  <img 
                    src="/public/lovable-uploads/55ddebd3-2f4a-4e2d-962d-983e8d2cfa6f.png" 
                    alt="College uniforms" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-72 shadow-md">
                  <img 
                    src="/public/lovable-uploads/2eca9fe1-784c-4d54-bbe2-65243900fd8c.png" 
                    alt="Department specific uniforms" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48 col-span-2 shadow-md">
                  <img 
                    src="/public/lovable-uploads/2032bf85-bbc1-47da-9bb3-d5e7e23419c2.png" 
                    alt="Graduation gowns" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="badge-navy mb-4">Higher Education</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mtg-navy mb-6">College Uniforms</h2>
              <p className="text-mtg-neutral mb-6">
                Our college uniforms are designed to reflect the professionalism and identity of higher education institutions. 
                We offer department-specific designs that adhere to college requirements while providing comfort and durability 
                for daily wear.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Department-specific designs with appropriate color coding</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Professional-looking shirts, trousers, and blazers</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Salwar kameez options with institutional design elements</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Graduation gowns and ceremonial wear</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Custom embroidery of college logos and insignia</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Engineering
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Medical
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Arts & Science
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Graduation Attire
                </div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-mtg-navy font-medium hover:text-mtg-gold transition-colors">
                Request a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Uniforms Section */}
      <section id="corporate" className="py-16 bg-white" ref={corporateRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-navy mb-4">Professional Attire</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mtg-navy mb-6">Corporate Uniforms</h2>
              <p className="text-mtg-neutral mb-6">
                Our corporate uniforms are crafted to align with your brand identity while providing comfort and professionalism. 
                Whether for office staff or client-facing roles, our corporate attire enhances your company's image and creates 
                a cohesive look across your organization.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Professional shirts and blouses with company branding</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Tailored trousers and skirts for a polished look</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Blazers and jackets with precise fitting and detailing</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Customized accessories including ties and scarves</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Department-specific variations with consistent branding</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Office Wear
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Front Desk
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Executive
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Customized Branding
                </div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-mtg-navy font-medium hover:text-mtg-gold transition-colors">
                Request a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-72 shadow-md">
                <img 
                  src="/public/lovable-uploads/fb10461d-76f8-4815-9fb2-5d31dcfe783b.png" 
                  alt="Corporate office wear" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-72 shadow-md">
                <img 
                  src="/public/lovable-uploads/cd7d92ca-6c37-45ea-99d0-187c9fb6415e.png" 
                  alt="Corporate staff uniforms" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 col-span-2 shadow-md">
                <img 
                  src="/public/lovable-uploads/ad55a07b-7fc9-4047-b5cd-a7c00e9e35b1.png" 
                  alt="Professional attire" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Uniforms Section */}
      <section id="medical" className="py-16 bg-mtg-cream" ref={medicalRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg overflow-hidden h-80 shadow-md">
                  <img 
                    src="/public/lovable-uploads/2eca9fe1-784c-4d54-bbe2-65243900fd8c.png" 
                    alt="Medical uniforms" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48 shadow-md">
                  <img 
                    src="/public/lovable-uploads/cd7d92ca-6c37-45ea-99d0-187c9fb6415e.png" 
                    alt="Hospital staff uniforms" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="badge-navy mb-4">Healthcare Attire</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mtg-navy mb-6">Medical Uniforms</h2>
              <p className="text-mtg-neutral mb-6">
                Our medical uniforms are designed with functionality and comfort in mind. From doctor's coats to nurse uniforms 
                and lab attire, we create healthcare apparel that meets the demanding needs of medical professionals while 
                maintaining a professional appearance.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Doctor coats with reinforced stitching and practical pockets</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Nurse uniforms designed for comfort during long shifts</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Scrubs in various colors for departmental identification</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Lab coats with durable, stain-resistant fabric</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Support staff attire with hospital branding</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Doctor Coats
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Nurse Uniforms
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Lab Coats
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Support Staff
                </div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-mtg-navy font-medium hover:text-mtg-gold transition-colors">
                Request a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Program Dresses Section */}
      <section id="cultural" className="py-16 bg-white" ref={culturalRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-navy mb-4">Traditional Attire</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mtg-navy mb-6">Cultural Program Dresses</h2>
              <p className="text-mtg-neutral mb-6">
                Our cultural program dresses celebrate the rich heritage of Tamil Nadu and India's diverse traditions. 
                Each outfit is meticulously crafted to showcase the beauty of traditional designs while ensuring comfort 
                for performances and events.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Traditional Tamil dance costumes with authentic details</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Classical performance attire with vibrant colors and embellishments</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Folk dance costumes representing various regional traditions</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Festive and ceremonial outfits for special occasions</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Customized group costumes for school and college performances</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Dance Costumes
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Traditional Wear
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Festival Attire
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-full text-mtg-neutral text-sm font-medium">
                  Performance Costumes
                </div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-mtg-navy font-medium hover:text-mtg-gold transition-colors">
                Request a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-72 shadow-md">
                <img 
                  src="/public/lovable-uploads/a3d6339a-40a6-46ee-9f6a-f147564d02b3.png" 
                  alt="Cultural performance dresses" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-72 shadow-md">
                <img 
                  src="/public/lovable-uploads/ff9583bf-57a6-42cf-9a53-2ab4dae032c5.png" 
                  alt="Traditional dance costumes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 col-span-2 shadow-md">
                <img 
                  src="/public/lovable-uploads/ad55a07b-7fc9-4047-b5cd-a7c00e9e35b1.png" 
                  alt="Folk dance outfits" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Uniforms Section */}
      <section id="specialty" className="py-16 bg-mtg-cream" ref={specialtyRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg overflow-hidden h-80 shadow-md">
                  <img 
                    src="/public/lovable-uploads/cd7d92ca-6c37-45ea-99d0-187c9fb6415e.png" 
                    alt="Specialty uniforms" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48 shadow-md">
                  <img 
                    src="/public/lovable-uploads/fb10461d-76f8-4815-9fb2-5d31dcfe783b.png" 
                    alt="Specialized work attire" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="badge-navy mb-4">Specialized Attire</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mtg-navy mb-6">Specialty Uniforms</h2>
              <p className="text-mtg-neutral mb-6">
                Our specialty uniforms cater to various sectors with specific requirements, from hospitality and security 
                to salon services and industrial workwear. Each uniform is designed with the particular needs of the profession 
                in mind, combining functionality, comfort, and professional appearance.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Hotel and restaurant staff uniforms with elegant designs</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Security guard attire with durable, professional appeal</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Salon and spa uniforms combining style and practicality</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Industrial workwear meeting safety standards</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-mtg-gold mt-1 mr-3 flex-shrink-0" size={18} />
                  <p className="text-mtg-neutral">Housekeeping uniforms for hospitality and institutional settings</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Hospitality
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Security
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Salon & Spa
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-mtg-neutral text-sm font-medium">
                  Industrial
                </div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-mtg-navy font-medium hover:text-mtg-gold transition-colors">
                Request a Quote <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-mtg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Order Custom Uniforms?</h2>
            <p className="text-gray-300 mb-8">
              Contact us to discuss your specific uniform requirements. We offer bulk ordering, customization options, 
              and competitive pricing for institutions and organizations.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-mtg-gold text-mtg-navy font-semibold px-8 py-3 rounded-md hover:bg-mtg-gold/90 transition-all shadow-lg"
            >
              Get in Touch for a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
