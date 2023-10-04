import Button from '../button/Button';
import LinkButton from '../button/LinkButton';
import AppleLogo from '../../../public/apple.svg'
import GoogleLogo from '../../../public/google.svg'
import MicrosoftLogo from '../../../public/microsoft.svg'

type FirstStepProps = {
    handleNext: () => void; 
}
const FirstStep: React.FC<FirstStepProps> = ({ handleNext }) => {
    return (
        <div className="space-y-12 ">
            <div className="pb-4">
                <h2 className="text-base text-center font-semibold leading-7 text-gray-900 text-2xl">Welcome to Euka Family</h2>
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

                        <LinkButton onClick={handleNext} variant="primary" name="next_button" className='p-2 w-full'>
                            Next
                        </LinkButton>
                        <p className="mt-1 text-sm leading-6 text-center  text-gray-600"> Have an account sign in</p>
                    </div>
                </div>
            </div>
            <div className="divider">OR</div>
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
            </div>
        </div>
    )
}

export default FirstStep