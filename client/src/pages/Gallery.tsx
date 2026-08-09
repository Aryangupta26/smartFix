import { useState } from 'react';
import { X, Play, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config.ts';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState<typeof siteConfig.gallery[0] | null>(null);

  // Derive unique categories from config
  const categories = ['All', ...new Set(siteConfig.gallery.map(item => item.category))];

  const filteredMedia = activeCategory === 'All'
    ? siteConfig.gallery
    : siteConfig.gallery.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20 pb-20 bg-[#f4f4f4] text-black min-h-screen">
      
      {/* Title */}
      <section className="bg-[#222222] text-white py-20 text-left border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block">Media Gallery</span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Training Gallery</h1>
          <p className="text-neutral-400 text-sm max-w-2xl font-light leading-relaxed">
            Take a look inside our high-tech micro-soldering labs, tool setups, and recent graduation batches.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 mt-12">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-black/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-neutral-900 border-neutral-900 text-white shadow-sm'
                  : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredMedia.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedMedia(item)}
              className="group relative aspect-square bg-white overflow-hidden border border-neutral-200 cursor-pointer hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[10%] group-hover:scale-103 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5 text-left text-white">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#e32831] mb-1">
                  {item.category}
                </span>
                <h3 className="font-bold text-sm uppercase tracking-tight truncate">{item.title}</h3>
              </div>
              
              {/* Media type indicators */}
              <div className="absolute top-4 right-4 p-2 bg-neutral-900/80 text-white">
                {item.type === 'video' ? <Play size={12} /> : <ImageIcon size={12} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 p-2 bg-neutral-900 text-white hover:bg-[#e32831] cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>
          
          <div className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center space-y-4">
            <div className="w-full h-full overflow-hidden bg-neutral-950 flex items-center justify-center">
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.url}
                  controls
                  autoPlay
                  className="max-h-[70vh] max-w-full"
                />
              ) : (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="max-h-[70vh] max-w-full object-contain"
                />
              )}
            </div>
            <div className="text-center text-white space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#e32831] tracking-wider">
                {selectedMedia.category}
              </span>
              <p className="font-bold text-base uppercase tracking-tight">{selectedMedia.title}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
