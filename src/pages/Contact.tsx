import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { useSupabase } from '../providers/SupabaseProvider'; // Assuming this is in the same directory or adjust the path
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Get user from Supabase context
  const { user, isLoading: authLoading } = useSupabase();

  // Pre-fill form with user data if authenticated
  useEffect(() => {
    if (user && !authLoading) {
      setName(user.user_metadata?.full_name || '');
      setEmail(user.email || '');
      setPhone(user.user_metadata?.phone || '');
    }
  }, [user, authLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert({
          name,
          email,
          phone,
          subject,
          message,
          user_id: user?.id || null, // Associate with authenticated user if available
          created_at: new Date().toISOString(),
          status: 'pending'
        });

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });

      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSubject('');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

    const refs = [formRef, contactRef, mapRef];
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
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/public/lovable-uploads/cd7d92ca-6c37-45ea-99d0-187c9fb6415e.png" 
            alt="Contact us background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl mx-auto text-center opacity-0" style={{ animation: 'fade-in 1s ease-out forwards 0.3s' }}>
            <span className="badge-gold mb-4 inline-block px-3 py-1 text-sm sm:text-base">Get In Touch</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-gray-100 mb-8">
              Have questions about our products or services? We're here to help. Reach out to us using the information below or fill out the contact form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {authLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div ref={formRef} className="opacity-0" style={{ animation: 'fade-in 1s ease-out forwards' }}>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-mtg-navy mb-6">
                  Send Us a Message
                </h2>
                <p className="text-mtg-neutral mb-8 text-sm sm:text-base">
                  Fill out the form below to get in touch with our team. We'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-mtg-neutral mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mtg-navy/50"
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-mtg-neutral mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mtg-navy/50"
                        placeholder="you@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-mtg-neutral mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mtg-navy/50"
                        placeholder="+91 XXXXXXXXXX"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-mtg-neutral mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mtg-navy/50"
                      placeholder="Inquiry about school uniforms"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-mtg-neutral mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mtg-navy/50"
                      placeholder="Your message here..."
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center bg-mtg-navy text-white font-semibold px-6 py-3 rounded-md hover:bg-mtg-navy/90 transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div ref={contactRef} className="opacity-0" style={{ animation: 'fade-in 1s ease-out forwards 0.3s' }}>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-mtg-navy mb-6">
                  Contact Information
                </h2>
                <p className="text-mtg-neutral mb-8 text-sm sm:text-base">
                  Reach out to us directly using the contact information below. We're available to answer your queries during our business hours.
                </p>
                
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mtg-navy/10 mr-4 flex-shrink-0">
                      <MapPin className="text-mtg-navy" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mtg-navy mb-1">Our Location</h3>
                      <p className="text-mtg-neutral text-sm sm:text-base">
                        Shakar Plaza, Manali Jn., Thuckalay - 629 175, Kanyakumari District, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mtg-navy/10 mr-4 flex-shrink-0">
                      <Phone className="text-mtg-navy" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mtg-navy mb-1">Phone Numbers</h3>
                      <p className="text-mtg-neutral mb-1 text-sm sm:text-base">
                        <a href="tel:+919600427367" className="hover:text-mtg-gold transition-colors">+91 9600427367</a>
                      </p>
                      <p className="text-mtg-neutral text-sm sm:text-base">
                        <a href="tel:+919790048353" className="hover:text-mtg-gold transition-colors">+91 9790048353</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mtg-navy/10 mr-4 flex-shrink-0">
                      <Mail className="text-mtg-navy" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mtg-navy mb-1">Email Address</h3>
                      <p className="text-mtg-neutral text-sm sm:text-base">
                        <a href="mailto:mtguniform@gmail.com" className="hover:text-mtg-gold transition-colors">mtguniform@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mtg-navy/10 mr-4 flex-shrink-0">
                      <Clock className="text-mtg-navy" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mtg-navy mb-1">Business Hours</h3>
                      <p className="text-mtg-neutral mb-1 text-sm sm:text-base">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-mtg-neutral text-sm sm:text-base">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 sm:mt-10">
                  <h3 className="font-semibold text-mtg-navy mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/MaryTailoringGarments/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-mtg-navy/10 hover:bg-mtg-navy/20 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mtg-navy">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://www.instagram.com/mtg_garments?igsh=djJmbHpxOHg0dzBi" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-mtg-navy/10 hover:bg-mtg-navy/20 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mtg-navy">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a 
                      href="https://wa.me/919600427367" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-mtg-navy/10 hover:bg-mtg-navy/20 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mtg-navy">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50" ref={mapRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0" style={{ animation: 'fade-in 1s ease-out forwards' }}>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-mtg-navy mb-4">Find Us</h2>
            <p className="text-mtg-neutral max-w-2xl mx-auto text-sm sm:text-base">
              Visit our tailoring facility and showroom at Shakar Plaza, Manali Junction in Thuckalay.
            </p>
          </div>
          
          <div className="h-80 sm:h-96 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31659.56711674166!2d77.24851317084612!3d8.255422025326912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0a04fca6a3d%3A0xc871a2514ed32a5f!2sThuckalay%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1683104672570!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mary Tailoring & Garments Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-mtg-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-mtg-neutral max-w-2xl mx-auto text-sm sm:text-base">
              Find answers to commonly asked questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="font-semibold text-mtg-navy mb-2">What is the minimum order quantity?</h3>
              <p className="text-mtg-neutral text-sm sm:text-base">
                Our minimum order quantity varies depending on the type of uniform. For school uniforms, we typically accept 
                orders of 25 pieces or more. For special customizations or cultural dresses, please contact us for details.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="font-semibold text-mtg-navy mb-2">What is the turnaround time for bulk orders?</h3>
              <p className="text-mtg-neutral text-sm sm:text-base">
                The production time for bulk orders depends on the quantity and complexity of the uniforms. Typically, our 
                turnaround time ranges from 2-4 weeks for standard orders. We can accommodate rush orders with advance notice.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="font-semibold text-mtg-navy mb-2">Do you offer customization options?</h3>
              <p className="text-mtg-neutral text-sm sm:text-base">
                Yes, we offer extensive customization options including embroidery, screen printing, custom colors, and 
                specific design elements to match your institution's requirements or brand identity.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="font-semibold text-mtg-navy mb-2">What areas do you serve?</h3>
              <p className="text-mtg-neutral text-sm sm:text-base">
                We primarily serve Tamil Nadu and neighboring states, but we can ship our products across India for bulk orders. 
                Contact us for specific delivery information to your location.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="font-semibold text-mtg-navy mb-2">What payment methods do you accept?</h3>
              <p className="text-mtg-neutral text-sm sm:text-base">
                We accept various payment methods including bank transfers, UPI payments, and cash on delivery for local orders. 
                For bulk institutional orders, we offer flexible payment terms with deposits and milestone payments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;