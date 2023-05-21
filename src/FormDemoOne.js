import FormHeader from './components/FormComponents/FormHeader';
import Form from './components/FormComponents/Form';
import { TextInput, InputField, Label } from './components/FormComponents/TextInput';
import Button from './components/FormComponents/Button';

const FormDemoOne = () => {
    return (
        <Form classes={'relative px-4 py-10 bg-white mx-auto max-w-120 w-full border border-light-grey rounded-xl sm:p-8'}>
            <FormHeader title={'Create a Job'} step={1} />
            <TextInput classes={'flex flex-col pt-6'}>
                <Label classes={'mb-1 text-left leading-5'} label={'Job title'} fontSize={'0.875rem'} fontWeight={'500'} />
                <InputField
                    type={'text'}
                    classes={'ps-3 py-2 border w-full border-light-grey rounded-md focus:outline-none placeholder:text-grey-default'}
                    placeholder={'ex: UI UX Designer'}
                    fontSize={'0.875rem'}
                    fontWeight={'400'}
                />
            </TextInput>
            <TextInput classes={'flex flex-col pt-6'}>
                <Label classes={'mb-1 text-left leading-5'} label={'Company name'} fontSize={'0.875rem'} fontWeight={'500'} />
                <InputField
                    type={'text'}
                    classes={'ps-3 py-2 border w-full border-light-grey rounded-md focus:outline-none placeholder:text-grey-default'}
                    placeholder={'ex: Google'}
                    fontSize={'0.875rem'}
                    fontWeight={'400'}
                />
            </TextInput>
            <TextInput classes={'flex flex-col pt-6'}>
                <Label classes={'mb-1 text-left leading-5'} label={'Industry'} fontSize={'0.875rem'} fontWeight={'500'} />
                <InputField
                    name={'industry'}
                    type={'text'}
                    classes={'ps-3 py-2 border w-full border-light-grey rounded-md focus:outline-none placeholder:text-grey-default'}
                    placeholder={'ex: Information Technology'}
                    fontSize={'0.875rem'}
                    fontWeight={'400'}
                />
            </TextInput>

            <div class="grid gap-6 mt-6 md:grid-cols-2">
                <TextInput classes={'flex flex-col'}>
                    <Label classes={'mb-1 text-left leading-5'} label={'Location'} fontSize={'0.875rem'} fontWeight={'500'} />
                    <InputField
                        type={'text'}
                        classes={'ps-3 py-2 border w-full border-light-grey rounded-md focus:outline-none placeholder:text-grey-default'}
                        placeholder={'ex: Chennai'}
                        fontSize={'0.875rem'}
                        fontWeight={'400'}
                    />
                </TextInput>
                <TextInput classes={'flex flex-col'}>
                    <Label classes={'mb-1 text-left leading-5'} label={'Remote type'} fontSize={'0.875rem'} fontWeight={'500'} />
                    <InputField
                        type={'text'}
                        classes={'ps-3 py-2 border w-full border-light-grey rounded-md focus:outline-none placeholder:text-grey-default'}
                        placeholder={'ex: In-office'}
                        fontSize={'0.875rem'}
                        fontWeight={'400'}
                    />
                </TextInput>
            </div>
            <div class="pt-24 flex justify-end">
                <Button variant={'primary'} title={'Next'} fontSize={'16px'} fontWeight={'500'} width={'4rem'} height={'2.5rem'} />
            </div>
        </Form>
    )
}

export default FormDemoOne;

