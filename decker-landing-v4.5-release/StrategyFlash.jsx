import React from 'react';
import { Button } from './components/ui/button';

export default function StrategyFlash({ tone, dslId }) {
  const tonePhrases = {
    calm: '지금은 관망이 유리할 수 있습니다.',
    analytical: '지표 흐름이 반등을 시사합니다.',
    adventurous: '돌파 시도가 유력합니다.'
  };

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-md p-6 text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-2">📌 추천 전략 도착</h2>
      <p className="text-gray-700 italic mb-3">{tonePhrases[tone.id]}</p>
      <p className="text-sm text-gray-500 mb-4">추천 DSL ID: <strong>{dslId}</strong></p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href={`/report/${dslId}`}><Button>📄 리포트 보기</Button></a>
        <a href={`/mock-trade/start?dsl=${dslId}`}><Button>🚀 전략 실행</Button></a>
        <a href={`/dashboard/demo-user`}><Button>📊 전략 이력</Button></a>
      </div>
    </div>
  );
}