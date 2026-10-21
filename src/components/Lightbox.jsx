import { useEffect, useCallback } from 'react';

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')     onClose();
    if (e.key === 'ArrowLeft')  onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    if (index === null) {
      // Make sure scroll is restored whenever lightbox is closed
      document.body.style.overflow = '';
      return;
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, handleKey]);

  if (index === null) return null;

  const { src, alt } = images[index];

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-1.5 rounded-full pointer-events-none">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Previous"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl ring-2 ring-white/20"
        />
        <div className="mt-4 bg-white/10 backdrop-blur-sm text-white text-sm px-5 py-2 rounded-full text-center">
          {alt}
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Next"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
