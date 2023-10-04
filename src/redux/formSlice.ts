import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentStep: 1,
    stepData: {
        step1: {},
        step2: {},
        step3: {},
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.currentStep = action.payload;
        },
        setStepData: (state, action) => {
            state.stepData = {
                ...state.stepData,
                [action.payload.step]: action.payload.data,
            };
        },
    },
});

export const { setStep, setStepData } = formSlice.actions;

export default formSlice.reducer;
