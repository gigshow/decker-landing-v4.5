import React from 'react';

const toneOptions = [
  { id: 'calm', label: '😌 침착한 전략가', description: '신중하게 기회를 기다리는 스타일', color: 'bg-blue-500' },
  { id: 'analytical', label: '🧠 분석형 조언가', description: '데이터와 흐름을 보는 전략가', color: 'bg-slate-600' },
  { id: 'adventurous', label: '🔥 도전적인 리더', description: '과감한 승부를 노리는 스타일', color: 'bg-rose-500' },
];

export default function ToneSelector({ onSelect }) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {toneOptions.map((tone) => (
        <button
          key={tone.id}
          onClick={() => onSelect(tone)}
          className={`rounded-xl p-6 text-white shadow-lg transition transform hover:scale-105 ${tone.color}`}
        >
          <div className="text-lg font-bold">{tone.label}</div>
          <div className="text-sm mt-2 text-white/90">{tone.description}</div>
        </button>
      ))}
    </div>
  );
}