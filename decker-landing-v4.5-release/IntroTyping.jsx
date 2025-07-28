import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const typingTexts = [
  "당신의 전략을 함께 설계합니다...",
  "DECKER는 오늘의 전략을 판단 중입니다...",
  "단 3초면 전략 추천이 가능합니다..."
];

export default function IntroTyping({ onStart }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (index < typingTexts.length) {
      const currentText = typingTexts[index];
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setText(prev => prev + currentText[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const delay = setTimeout(() => {
          setText('');
          setCharIndex(0);
          setIndex(prev => prev + 1);
        }, 1500);
        return () => clearTimeout(delay);
      }
    } else {
      if (onStart) onStart();
    }
  }, [charIndex, index]);

  return (
    <motion.div
      className="text-center text-xl text-gray-700 font-semibold min-h-[80px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {text}
    </motion.div>
  );
}