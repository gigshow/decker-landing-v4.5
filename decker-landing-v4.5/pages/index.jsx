// landing_page_final.jsx

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function LandingPage() {
  const [tone, setTone] = useState(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [dsl, setDsl] = useState(null);

  const handleToneSelect = async (selectedTone) => {
    setTone(selectedTone);
    setStep(2);
    try {
      await fetch('/api/set-tone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tone: selectedTone })
      });
    } catch (err) {
      console.error('tone 설정 실패:', err);
    }
  };

  const handleRecommend = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/trigger_추천');
      const result = await res.json();
      console.log('추천 결과:', result);
      setDsl(result.dsl_id || 'RPA-00');
    } catch (err) {
      console.error('추천 실패:', err);
      setDsl('RPA-00');
    }
    setLoading(false);
    setStep(3);
  };

  const goToReport = () => {
    window.open(`/report/${dsl}`, '_blank');
  };

  const goToTrade = () => {
    window.open(`/mock-trade/start?dsl=${dsl}`, '_blank');
  };

  const goToDashboard = () => {
    window.open(`/dashboard/demo-user`, '_blank');
  };

  const toneLabel = {
    calm: '침착한 전략가',
    analytical: '분석형 조언가',
    adventurous: '도전적인 리더'
  };

  return (
    <main className="flex flex-col items-center justify-center p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">
        오늘의 전략을 추천받고 직접 실행하세요<br />
        <span className="text-blue-600">DECKER가 도와드립니다.</span>
      </h1>

      {step === 1 && (
        <Card className="w-full max-w-md text-center">
          <CardContent className="space-y-4">
            <p className="text-lg font-medium">당신의 투자 스타일은?</p>
            <div className="grid grid-cols-1 gap-2">
              <Button onClick={() => handleToneSelect('calm')}>침착한 전략가</Button>
              <Button onClick={() => handleToneSelect('analytical')}>분석형 조언가</Button>
              <Button onClick={() => handleToneSelect('adventurous')}>도전적인 리더</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="w-full max-w-md text-center">
          <CardContent className="space-y-4">
            <p className="text-lg font-medium">
              {toneLabel[tone]}님을 위한 전략을 준비하고 있어요.
            </p>
            <Button onClick={handleRecommend} disabled={loading}>
              {loading ? '추천 중...' : '전략 추천 받기'}
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="w-full max-w-md text-center">
          <CardContent className="space-y-4">
            <p className="text-lg">📄 전략 리포트를 확인하거나 실행해보세요!</p>
            <div className="grid grid-cols-1 gap-2">
              <Button variant="outline" onClick={goToReport}>📄 리포트 보기</Button>
              <Button variant="default" onClick={goToTrade}>🚀 지금 실행하기</Button>
              <Button variant="ghost" onClick={goToDashboard}>📊 내 전략 이력 보기</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
