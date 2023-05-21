import FormHeader from './components/FormComponents/FormHeader';
import Form from './components/FormComponents/Form';
import { TextInput, InputField, Label } from './components/FormComponents/TextInput';
import Button from './components/FormComponents/Button';

const FormDemoTwo = () => {
    return (
        <Form classes={'relative px-4 py-10 bg-white mx-auto max-w-120 w-full border border-light-grey rounded-xl sm:p-8'}>
            <FormHeader title={'Create a Job'} step={2} />
            <>
                <Label name={'experience'} classes={'mb-1 mt-6 text-left block'} label={'Experience'} fontSize={'0.875rem'} fontWeight={'500'} width={'100%'} />
                <div className='grid gap-6 md:grid-cols-2'>
                    <TextInput classes={'flex flex-col'}>
                        <InputField
                            name={'experience'}
                            type={'text'}
                            classes={'ps-3 py-2 border w-full border-light-grey rounded-md focus:outline-none placeholder:text-grey-default'}
                            placeholder={'Minimum'}
                            fontSize={'0.875rem'}
                            fontWeight={'400'}
                        />
                    </TextInput>
                    <TextInput classes={'flex flex-col'}>
                        <InputField
                            type={'text'}
                            classes={'ps-3 py-2 border w-full border-light-grey rounded-md focus:outline-none placeholder:text-grey-default'}
                            placeholder={'Maximum'}
                            fontSize={'0.875rem'}
                            fontWeight={'400'}
                        />
                    </TextInput>
                </div>
            </>
            <>
                <Label name={'salary'} classes={'mb-1 mt-6 text-left block'} label={'Salary'} fontSize={'0.875rem'} fontWeight={'500'} width={'100%'} />
                <div className='grid gap-x-6 md:grid-cols-2'>
                    <TextInput classes={'flex flex-col'}>
                        <InputField
                            name={'salary'}
                            type={'text'}
                            classes={'ps-3 py-2 border w-full border-light-grey rounded-md focus:outline-none placeholder:text-grey-default'}
                            placeholder={'Minimum'}
                            fontSize={'0.875rem'}
                            fontWeight={'400'}
                        />
                    </TextInput>
                    <TextInput classes={'flex flex-col'}>
                        <InputField
                            type={'text'}
                            classes={'ps-3 py-2 border w-full border-light-grey rounded-md focus:outline-none placeholder:text-grey-default'}
                            placeholder={'Maximum'}
                            fontSize={'0.875rem'}
                            fontWeight={'400'}
                        />
                    </TextInput>
                </div>
            </>
            
            <TextInput classes={'flex flex-col pt-6'}>
                <Label name={'total_employee'} classes={'mb-1 text-left'} label={'Total employess'} fontSize={'0.875rem'} fontWeight={'500'} />
                <InputField
                    name={'total_employee'}
                    type={'text'}
                    classes={'ps-3 py-2 border w-full border-light-grey rounded-md focus:outline-none placeholder:text-grey-default'}
                    placeholder={'ex. 100'}
                    fontSize={'0.875rem'}
                    fontWeight={'400'}
                />
            </TextInput>
            <TextInput classes={'flex flex-col pt-6'}>
                <Label classes={'mb-3 text-left'} label={'Apply type'} fontSize={'0.875rem'} fontWeight={'500'} />
                <div className='flex flex-row'>
                    <InputField
                        name={'apply_type'}
                        type={'radio'}
                        classes={'ps-3 py-2 border border-light-grey'}
                        width={'1.25rem'}
                        height={'1.25rem'}
                    />
                    <Label classes={'text-grey-default pl-1 pr-4'} label={'Quick apply'} fontSize={'0.875rem'} fontWeight={'400'} />
                    <InputField
                        name={'apply_type'}
                        type={'radio'}
                        classes={'ps-3 py-2 border border-light-grey'}
                        width={'1.25rem'}
                        height={'1.25rem'}
                    />
                    <Label classes={'text-grey-default pl-1 pr-4'} label={'External apply'} fontSize={'0.875rem'} fontWeight={'400'} />
                </div>
            </TextInput>
            <div class="pt-24 flex justify-end">
                <Button variant={'primary'} title={'Save'} fontSize={'16px'} fontWeight={'500'} width={'4rem'} height={'2.5rem'} />
            </div>
        </Form>
    )
}

export default FormDemoTwo;

