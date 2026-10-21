import { useState, useEffect } from 'react';

const phrases = [
  'You Can Trust',
  'For Your Family',
  'In Visakhapatnam',
  'Around the Clock',
  'With Compassion',
];

export default function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed]     = useState('');
  const [isDeleting, setIsDeleting]   = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      // Pause at full word then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 45);
    } else if (isDeleting && displayed.length === 0) {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <span className="text-teal-200">
      {displayed}
      <span className="inline-block w-0.5 h-10 bg-teal-300 ml-1 align-middle animate-pulse" />
    </span>
  );
}
