import LinkButton from '../button/LinkButton';
import PricingCard, { PricingCardProps } from '../pricing-card/PricingCard';
import dummyDataArray from '../../mock/third-step-data';

type ThirdStepProps = {
    handleNext: () => void;
    handlePrevious: () => void;
}
const ThirdStep: React.FC<ThirdStepProps> = ({ handleNext, handlePrevious }) => {
    return (
        <>
            <div className="space-y-12">
                <div className="pb-4 mt-2">
                    <h2 className="text-2xl font-semibold leading-7 text-center text-gray-900">How Long do you need access to Euka</h2>

                    <div className="pricing-cards-container">
                        {dummyDataArray.map((data: PricingCardProps, index: number) => (
                            <PricingCard key={index} {...data} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-6 gap-x-6">
                <LinkButton onClick={handlePrevious} variant="secondary" name="next_button" className='p-2'>
                    Go Back
                </LinkButton>
                <LinkButton onClick={handleNext} variant="primary" name="next_button" className='p-2'>
                    Next
                </LinkButton>
            </div>
        </>
    )
}

export default ThirdStep