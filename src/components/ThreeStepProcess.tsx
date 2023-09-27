// src/components/ThreeStepProcess.tsx

import React, { useState } from 'react';

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
            <div className="space-y-12 ">
                <div className="pb-12">
                    <h2 className="text-base text-center font-semibold leading-7 text-gray-900">Welcome to Euka Family</h2>
                    <p className="mt-1 text-sm leading-6 text-center  text-gray-600">Provide your details below so that we can create your parent account</p>

                    <div id='middle-content' className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Email Address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
                                />
                            </div>
                            <div className="relative flex gap-x-3  mt-2">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="comments" className="font-medium text-gray-900">
                                        Comments
                                    </label>
                                </div>
                            </div>

                            <button className="btn btn-neutral w-full mt-2">Neutral</button>

                            <p className="mt-1 text-sm leading-6 text-center  text-gray-600"> Have an account sign in</p>

                        </div>
                    </div>
                </div>
                <div className="divider">OR</div>
                <div className="pb-12">
                    <button className="btn btn-neutral w-full mt-2">Neutral</button>

                     <button className="btn btn-neutral w-full mt-2">Neutral</button>
                      <button className="btn btn-neutral w-full mt-2">Neutral</button>


                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
        </div>
    );
};

export default ThreeStepProcess;