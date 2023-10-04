// src/components/ThreeStepProcess.tsx

import React, { useState } from 'react';
import FirstStep from './steps/FirstStep';

const ThreeStepProcess: React.FC = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form>
               <FirstStep handleNext={handleNext}/>
            </form>
        </div>
    );
};

export default ThreeStepProcess;
