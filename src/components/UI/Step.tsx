import React from 'react';
// import './styles/StepsIndicator.scss';

interface StepsIndicatorProps {
  stepsCount: number;
  currentStep: number;
  submitted: boolean;
}

const StepsIndicator: React.FC<StepsIndicatorProps> = ({ stepsCount, currentStep, submitted }) => {
  const stepsCountWithSuccessPage = stepsCount + 1;
  
  return (
    <div className="steps-indicator">
      {Array.from({ length: stepsCountWithSuccessPage }).map((_, step) => (
        <div
          key={step}
          className={`step-indicator ${step <= currentStep || submitted ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default StepsIndicator;