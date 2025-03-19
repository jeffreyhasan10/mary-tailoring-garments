
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, ShieldCheck, Users, Scissors, Award } from 'lucide-react';

const About = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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

    const refs = [headingRef, storyRef, missionRef, processRef, teamRef];
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-mtg-navy">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/public/lovable-uploads/1abd22e5-bb0d-4a35-ac9a-d5e7295d056e.png" 
            alt="Tailoring facility" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 z-10" ref={headingRef}>
          <div className="max-w-2xl opacity-0" style={{animation: 'fade-in 1s ease-out forwards 0.3s'}}>
            <span className="badge-gold mb-4">Our Journey</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              About Mary Tailoring & Garments
            </h1>
            <p className="text-lg text-gray-100 mb-8">
              Weaving excellence into every stitch since 2022. Discover the story behind Tamil Nadu's premier uniform manufacturing company.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white" ref={storyRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mtg-navy mb-6">Our Story</h2>
              <p className="text-mtg-neutral mb-4">
                Mary Tailoring & Garments began as a small workshop in Thuckalay, Kanyakumari District, with a simple goal: to create high-quality uniforms that blend comfort, durability, and style. Founded by Mary Jeya Sunitha, a skilled tailor with a passion for perfection, the company quickly gained recognition for its exceptional craftsmanship.
              </p>
              <p className="text-mtg-neutral mb-4">
                What started as a modest enterprise has now evolved into a prominent uniform manufacturing company in Tamil Nadu. Our growth has been organic, built on the foundation of satisfied customers and word-of-mouth recommendations.
              </p>
              <p className="text-mtg-neutral mb-4">
                Today, we proudly serve numerous educational institutions, corporate clients, healthcare facilities, and various other sectors across Tamil Nadu. Our state-of-the-art facility in Shakar Plaza, equipped with modern machinery and staffed by skilled professionals, allows us to meet large-volume orders without compromising on quality.
              </p>
              <p className="text-mtg-neutral">
                The journey has been remarkable, but our core values remain unchanged – delivering excellence in every stitch, every fabric, and every uniform we produce.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img 
                  src="/public/lovable-uploads/1c3a71f5-6092-43b6-a01b-0868b920cd08.png" 
                  alt="Company history" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img 
                  src="/public/lovable-uploads/c3d830f7-e06a-42da-bfaa-ff149a86842d.png" 
                  alt="Uniform manufacturing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img 
                  src="/public/lovable-uploads/ff9583bf-57a6-42cf-9a53-2ab4dae032c5.png" 
                  alt="Cultural dresses" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img 
                  src="/public/lovable-uploads/2032bf85-bbc1-47da-9bb3-d5e7e23419c2.png" 
                  alt="Graduation uniforms" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 md:py-24 bg-mtg-cream" ref={missionRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-navy mb-4">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mtg-navy mb-6">Mission & Values</h2>
            <p className="text-mtg-neutral">
              Our mission is to redefine uniform manufacturing by combining tradition with innovation, 
              creating apparel that instills pride, comfort, and confidence in the wearer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-mtg-gold/20 mx-auto mb-6">
                <CheckCircle className="text-mtg-gold" size={32} />
              </div>
              <h3 className="text-xl font-display font-semibold text-center mb-4">Quality Excellence</h3>
              <p className="text-mtg-neutral text-center">
                We are uncompromising in our pursuit of quality, using premium materials and maintaining 
                the highest standards of craftsmanship in every product we create.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-mtg-gold/20 mx-auto mb-6">
                <ShieldCheck className="text-mtg-gold" size={32} />
              </div>
              <h3 className="text-xl font-display font-semibold text-center mb-4">Integrity</h3>
              <p className="text-mtg-neutral text-center">
                Honesty, transparency, and ethical business practices form the cornerstone of our 
                operations and relationships with clients, employees, and suppliers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-mtg-gold/20 mx-auto mb-6">
                <Users className="text-mtg-gold" size={32} />
              </div>
              <h3 className="text-xl font-display font-semibold text-center mb-4">Customer Focus</h3>
              <p className="text-mtg-neutral text-center">
                We listen attentively to our clients' needs and strive to exceed their expectations 
                through personalized service, timely delivery, and exceptional products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-white" ref={processRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-gold mb-4">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mtg-navy mb-6">Our Process</h2>
            <p className="text-mtg-neutral">
              From concept to completion, our meticulous manufacturing process ensures high-quality uniforms 
              tailored to your exact specifications.
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-mtg-gold/30 transform -translate-x-1/2"></div>
            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 text-right">
                  <h3 className="text-xl font-display font-semibold text-mtg-navy mb-3">Consultation & Design</h3>
                  <p className="text-mtg-neutral">
                    We begin with an in-depth consultation to understand your requirements, preferences, and brand identity. 
                    Our design team then creates detailed sketches and samples for your approval.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-mtg-gold text-white z-10">
                  1
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <img 
                    src="/public/lovable-uploads/ad55a07b-7fc9-4047-b5cd-a7c00e9e35b1.png" 
                    alt="Consultation process" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 text-right order-1 md:order-2">
                  <img 
                    src="/public/lovable-uploads/8b8847f4-f186-4361-89cc-10b254a6d180.png" 
                    alt="Material selection" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-mtg-gold text-white z-10 order-2 md:order-3">
                  2
                </div>
                <div className="md:w-1/2 md:pl-16 order-3 md:order-1">
                  <h3 className="text-xl font-display font-semibold text-mtg-navy mb-3">Material Selection</h3>
                  <p className="text-mtg-neutral">
                    We carefully select high-quality fabrics and materials that align with your requirements for comfort, 
                    durability, and aesthetics, ensuring the best possible outcome.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 text-right">
                  <h3 className="text-xl font-display font-semibold text-mtg-navy mb-3">Precision Cutting & Stitching</h3>
                  <p className="text-mtg-neutral">
                    Our skilled tailors employ advanced cutting techniques and meticulous stitching processes to ensure 
                    each uniform is crafted to perfection, with attention to every detail.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-mtg-gold text-white z-10">
                  3
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <img 
                    src="/public/lovable-uploads/e5fb24a4-db47-4f28-8782-506d72962572.png" 
                    alt="Stitching process" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 text-right order-1 md:order-2">
                  <img 
                    src="/public/lovable-uploads/47894f98-be50-4061-8bf0-d134b5fa8398.png" 
                    alt="Quality control" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-mtg-gold text-white z-10 order-2 md:order-3">
                  4
                </div>
                <div className="md:w-1/2 md:pl-16 order-3 md:order-1">
                  <h3 className="text-xl font-display font-semibold text-mtg-navy mb-3">Quality Control & Delivery</h3>
                  <p className="text-mtg-neutral">
                    Each uniform undergoes rigorous quality checks before packaging and delivery. We ensure timely delivery 
                    of orders, regardless of volume, and provide ongoing support for any adjustments or queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-mtg-cream" ref={teamRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-navy mb-4">The Talent Behind Our Success</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mtg-navy mb-6">Our Expert Team</h2>
            <p className="text-mtg-neutral">
              Behind every perfectly crafted uniform is a team of skilled professionals dedicated to excellence in their craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/public/lovable-uploads/ad55a07b-7fc9-4047-b5cd-a7c00e9e35b1.png" 
                  alt="Team member" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-mtg-navy mb-1">Mary Jeya Sunitha</h3>
                <p className="text-mtg-gold font-medium mb-3">Founder & Head Designer</p>
                <p className="text-mtg-neutral text-sm">
                  With years of experience in tailoring, Mary leads our design team with expertise and passion.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/public/lovable-uploads/1abd22e5-bb0d-4a35-ac9a-d5e7295d056e.png" 
                  alt="Manufacturing team" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-mtg-navy mb-1">Production Team</h3>
                <p className="text-mtg-gold font-medium mb-3">Skilled Tailors & Craftspeople</p>
                <p className="text-mtg-neutral text-sm">
                  Our production team combines traditional craftsmanship with modern techniques to create exceptional uniforms.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/public/lovable-uploads/8b8847f4-f186-4361-89cc-10b254a6d180.png" 
                  alt="Quality control team" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-mtg-navy mb-1">Quality Assurance</h3>
                <p className="text-mtg-gold font-medium mb-3">Perfection Guardians</p>
                <p className="text-mtg-neutral text-sm">
                  Our quality control experts ensure that every uniform meets our high standards before reaching our clients.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/public/lovable-uploads/cd7d92ca-6c37-45ea-99d0-187c9fb6415e.png" 
                  alt="Customer service team" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-mtg-navy mb-1">Customer Service</h3>
                <p className="text-mtg-gold font-medium mb-3">Client Support Specialists</p>
                <p className="text-mtg-neutral text-sm">
                  Our dedicated service team provides personalized support to ensure complete client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-mtg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-gold mb-4">Our Advantages</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Why Choose Us</h2>
            <p className="text-gray-300">
              Discover the key factors that make Mary Tailoring & Garments the preferred choice for uniform manufacturing in Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-mtg-gold/20 mb-6">
                <Award className="text-mtg-gold" size={32} />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-4">Unmatched Quality</h3>
              <p className="text-gray-300">
                Our unwavering commitment to quality is evident in every stitch, seam, and button. We use premium materials 
                that withstand daily wear and maintain their appearance even after numerous washes.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-mtg-gold/20 mb-6">
                <Scissors className="text-mtg-gold" size={32} />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-300">
                Our team of skilled tailors brings years of experience and passion to their craft, ensuring that every 
                uniform is expertly cut, precisely stitched, and perfectly finished.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-mtg-gold/20 mb-6">
                <Clock className="text-mtg-gold" size={32} />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-4">Timely Delivery</h3>
              <p className="text-gray-300">
                We understand the importance of deadlines, especially for educational institutions. Our efficient production 
                process ensures that your orders are delivered on time, every time.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-mtg-gold text-mtg-navy font-semibold px-6 py-3 rounded-md hover:bg-mtg-gold/90 transition-all shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
