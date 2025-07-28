import React, { useState } from 'react';
import IntroTyping from './IntroTyping';
import ToneSelector from './ToneSelector';
import RecommendLoader from './RecommendLoader';
import StrategyFlash from './StrategyFlash';

export default function LandingFlow() {
  const [step, setStep] = useState(0);
  const [selectedTone, setSelectedTone] = useState(null);
  const [dslId, setDslId] = useState(null);

  const handleToneSelect = (tone) => {
    setSelectedTone(tone);
    setStep(2);
    setTimeout(() => {
      const generatedDsl = 'DSL-RPA-77';
      setDslId(generatedDsl);
      setStep(3);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 font-sans">
      <div className="max-w-2xl mx-auto">
        {step === 0 && <IntroTyping onStart={() => setStep(1)} />}
        {step === 1 && <ToneSelector onSelect={handleToneSelect} />}
        {step === 2 && <RecommendLoader tone={selectedTone} onDone={() => {}} />}
        {step === 3 && <StrategyFlash tone={selectedTone} dslId={dslId} />}
      </div>
    </div>
  );
}