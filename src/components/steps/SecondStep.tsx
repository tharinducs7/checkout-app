import Button from '../button/Button';
import LinkButton from '../button/LinkButton';
import AppleLogo from '../../../public/apple.svg'
import GoogleLogo from '../../../public/google.svg'
import MicrosoftLogo from '../../../public/microsoft.svg'
import Card from '../card/Card';

type SecondStepProps = {
    handleNext: () => void;
}
const SecondStep: React.FC<SecondStepProps> = ({ handleNext }) => {
    return (
        <div className="space-y-12">
            <div className="pb-4 mt-2">
                <h2 className="text-base text-center font-semibold leading-7 text-gray-900 text-2xl">Confirm Your Child's Grade Level</h2>
               
                <Card
                    title="Euka Jounior"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    avatarUrl="https://example.com/avatar.jpg"
                    tag="Featured"
                />
            </div>
            {/* <div className="divider">OR</div>
            <div className="pb-12">
                <Button variant="secondary" name="add_new" className='p-2 mb-2 w-full text-left'>
                    <div className="flex items-center">
                        <img src={AppleLogo} className="w-8 h-8 mr-3" title='apple' />
                        <span className="text-left">Next</span>
                    </div>
                </Button>
                <Button variant="secondary" name="add_new" className='p-2 mb-2 w-full text-left'>
                    <div className="flex items-center">
                        <img src={GoogleLogo} className="w-8 h-8 mr-3" title='apple' />
                        <span className="text-left">Next</span>
                    </div>
                </Button>
                <Button variant="secondary" name="add_new" className='p-2 mb-2 w-full text-left'>
                    <div className="flex items-center">
                        <img src={MicrosoftLogo} className="w-8 h-8 mr-3" title='apple' />
                        <span className="text-left">Next</span>
                    </div>
                </Button>
            </div> */}
        </div>
    )
}

export default SecondStep