import React, { useEffect } from 'react';
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../redux/formSlice';

const ThreeStepProcess: React.FC = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector((state: any) => state.form.currentStep); // Use RootState for type checking

    useEffect(() => {
        const savedStep = localStorage.getItem('currentStep');
        if (savedStep) {
            dispatch(setStep(parseInt(savedStep, 10)))
        }
    }, [dispatch]);

    const handleNext = () => {
        if (currentStep < 3) {
            dispatch(setStep(currentStep + 1));
            localStorage.setItem('currentStep', currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            dispatch(setStep(currentStep - 1));
            localStorage.setItem('currentStep', String(currentStep - 1));
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form className='-mt-40'>
                {currentStep === 1 && <FirstStep handleNext={handleNext} />}
                {currentStep === 2 && <SecondStep handleNext={handleNext} handlePrevious={handlePrevious} />}
                {currentStep === 3 && <ThirdStep handleNext={handleNext} handlePrevious={handlePrevious} />}
            </form>
        </div>
    );
};

export default ThreeStepProcess;
