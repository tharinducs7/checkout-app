import LinkButton from '../button/LinkButton';
import Card from '../card/Card';
import { cardData } from '../../mock/second-step-data';

type SecondStepProps = {
    handleNext: () => void;
    handlePrevious: () => void;
}
const SecondStep: React.FC<SecondStepProps> = ({ handleNext, handlePrevious }) => {
    return (
        <>
            <div className="space-y-12">
                <div className="pb-4 mt-2">
                    <h2 className="text-2xl font-semibold leading-7 text-center text-gray-900">Confirm Your Child's Grade Level</h2>

                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            avatarUrl={card.avatarUrl}
                            tag={card.tag}
                        />
                    ))}
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

export default SecondStep