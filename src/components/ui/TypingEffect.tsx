'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
  cursorClassName?: string;
}

export default function TypingEffect({
  words,
  typingSpeed = 120,
  deletingSpeed = 60,
  delayBetweenWords = 1800,
  className = '',
  cursorClassName = '',
}: TypingEffectProps) {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentFullWord = words[currentWordIdx];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (currentText !== currentFullWord) {
        timer = setTimeout(() => {
          setCurrentText(currentFullWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Word completed, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      // Deleting phase
      if (currentText !== '') {
        timer = setTimeout(() => {
          setCurrentText(currentFullWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Word deleted, cycle to next word
        setIsDeleting(false);
        setCurrentWordIdx((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {currentText}
      <span className={cursorClassName}>
        |
      </span>
    </span>
  );
}
