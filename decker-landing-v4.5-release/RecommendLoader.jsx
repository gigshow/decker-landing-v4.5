import React, { useEffect, useState } from 'react';

export default function RecommendLoader({ tone, onDone }) {
  const [dots, setDots] = useState('');
  const toneMessages = {
    calm: '신중한 판단을 준비 중입니다',
    analytical: '데이터를 분석하고 있습니다',
    adventurous: '기회를 탐색 중입니다'
  };

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    const timer = setTimeout(() => {
      clearInterval(dotInterval);
      onDone();
    }, 2500);
    return () => {
      clearInterval(dotInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="mt-6 text-center text-lg text-gray-700 italic animate-pulse">
      {toneMessages[tone.id] || '전략 판단 중입니다'}{dots}
    </div>
  );
}