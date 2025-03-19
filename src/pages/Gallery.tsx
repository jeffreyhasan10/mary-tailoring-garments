
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null);
  
  const galleryRef = useRef<HTMLDivElement>(null);

  const images: GalleryImage[] = [
    { 
      id: 1, 
      src: "/lovable-uploads/47894f98-be50-4061-8bf0-d134b5fa8398.png", 
      alt: "School uniforms group photo", 
      category: "school" 
    },
    { 
      id: 2, 
      src: "/lovable-uploads/7be8b1a8-623d-443f-aaf5-07aaba49352d.png", 
      alt: "Students in uniform", 
      category: "school" 
    },
    { 
      id: 3, 
      src: "/lovable-uploads/55ddebd3-2f4a-4e2d-962d-983e8d2cfa6f.png", 
      alt: "Female student in uniform", 
      category: "school" 
    },
    { 
      id: 4, 
      src: "/lovable-uploads/2eca9fe1-784c-4d54-bbe2-65243900fd8c.png", 
      alt: "College students in uniform", 
      category: "college" 
    },
    { 
      id: 5, 
      src: "/lovable-uploads/8b8847f4-f186-4361-89cc-10b254a6d180.png", 
      alt: "Manufacturing facility", 
      category: "facility" 
    },
    { 
      id: 6, 
      src: "/lovable-uploads/1abd22e5-bb0d-4a35-ac9a-d5e7295d056e.png", 
      alt: "Tailoring facility", 
      category: "facility" 
    },
    { 
      id: 7, 
      src: "/lovable-uploads/e5fb24a4-db47-4f28-8782-506d72962572.png", 
      alt: "Sewing machine close-up", 
      category: "facility" 
    },
    { 
      id: 8, 
      src: "/lovable-uploads/a3d6339a-40a6-46ee-9f6a-f147564d02b3.png", 
      alt: "Cultural program dress", 
      category: "cultural" 
    },
    { 
      id: 9, 
      src: "/public/lovable-uploads/ff9583bf-57a6-42cf-9a53-2ab4dae032c5.png", 
      alt: "Traditional dance costumes", 
      category: "cultural" 
    },
    { 
      id: 10, 
      src: "/public/lovable-uploads/cd7d92ca-6c37-45ea-99d0-187c9fb6415e.png", 
      alt: "Corporate uniforms", 
      category: "corporate" 
    },
    { 
      id: 11, 
      src: "/public/lovable-uploads/1c3a71f5-6092-43b6-a01b-0868b920cd08.png", 
      alt: "Graduation uniforms", 
      category: "college" 
    },
    { 
      id: 12, 
      src: "/public/lovable-uploads/ab356b2b-43d0-4f67-b9c4-5fc1b388e7c2.png", 
      alt: "School children in uniform", 
      category: "school" 
    },
    { 
      id: 13, 
      src: "/public/lovable-uploads/c3d830f7-e06a-42da-bfaa-ff149a86842d.png", 
      alt: "Dance performance in traditional dress", 
      category: "cultural" 
    },
    { 
      id: 14, 
      src: "/public/lovable-uploads/ad55a07b-7fc9-4047-b5cd-a7c00e9e35b1.png", 
      alt: "Pink traditional dresses", 
      category: "cultural" 
    },
    { 
      id: 15, 
      src: "/public/lovable-uploads/fb10461d-76f8-4815-9fb2-5d31dcfe783b.png", 
      alt: "Office uniforms", 
      category: "corporate" 
    },
    { 
      id: 16, 
      src: "/public/lovable-uploads/2032bf85-bbc1-47da-9bb3-d5e7e23419c2.png", 
      alt: "Graduation ceremony", 
      category: "college" 
    },
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  const openLightbox = (image: GalleryImage) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight' && currentImage) {
        const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
        if (currentIndex < filteredImages.length - 1) {
          setCurrentImage(filteredImages[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft' && currentImage) {
        const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
        if (currentIndex > 0) {
          setCurrentImage(filteredImages[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImage, filteredImages]);

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

    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => {
      if (galleryRef.current) observer.unobserve(galleryRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-mtg-navy">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/public/lovable-uploads/a3d6339a-40a6-46ee-9f6a-f147564d02b3.png" 
            alt="Gallery background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-2xl opacity-0" style={{animation: 'fade-in 1s ease-out forwards 0.3s'}}>
            <span className="badge-gold mb-4">Our Work</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-lg text-gray-100 mb-8">
              Browse through our collection of high-quality uniforms, cultural dresses, and glimpses of our manufacturing process.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeFilter === 'all' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('school')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeFilter === 'school' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
            >
              School Uniforms
            </button>
            <button 
              onClick={() => setActiveFilter('college')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeFilter === 'college' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
            >
              College Uniforms
            </button>
            <button 
              onClick={() => setActiveFilter('corporate')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeFilter === 'corporate' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
            >
              Corporate Uniforms
            </button>
            <button 
              onClick={() => setActiveFilter('cultural')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeFilter === 'cultural' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
            >
              Cultural Dresses
            </button>
            <button 
              onClick={() => setActiveFilter('facility')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeFilter === 'facility' ? 'bg-mtg-navy text-white' : 'bg-gray-100 text-mtg-neutral hover:bg-gray-200'}`}
            >
              Our Facility
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50" ref={galleryRef}>
        <div className="container mx-auto px-4 opacity-0" style={{animation: 'fade-in 1s ease-out forwards'}}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                onClick={() => openLightbox(image)}
              >
                <div className="h-64 relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-mtg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">View Larger</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-6xl mx-auto">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-mtg-gold p-2 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain mx-auto" 
            />
            <div className="text-center text-white mt-4">
              <p>{currentImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
