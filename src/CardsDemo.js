import Card from './components/CardComponents/Card';
import Button from './components/FormComponents/Button';
import { CardImage, CardContent, CardHeader, CardText } from "./components/CardComponents/CardElements";
import test_logo from './assets/test_logo.png'

const CardsDemo = ({ cardList }) => {
    return (
        <>
        {cardList.map(elem => {
            let btnVariant = elem.applyType === 'quick' && 'primary'
            let btnText = elem.applyType === 'quick' ? 'Apply Now' : 'External Apply'
            return (
                <Card key={elem.id} classes={'flex border border-light-grey rounded-lg md:mx-auto md:max-w-150 mt-8 px-6 py-4'}>
                    <CardImage classes={'rounded object-cover mr-2 shadow'} logo={test_logo} width={'w-12'} height={'h-12'}/>
                    <CardContent classes={'text-left'}>
                        <CardHeader classes={'flex flex-col'}>
                            <CardText text={elem.title} fontSize={'text-2xl'} fontWeight={'font-normal'}/>
                            <CardText text={elem.cmpName} fontSize={'text-base'} fontWeight={'font-normal'}/>
                            <CardText text={elem.offLocation} classes={'text-grey-default'} fontSize={'text-base'} fontWeight={'normal'}/>
                        </CardHeader>
                        <CardContent classes={'mt-6 flex flex-col space-y-2 text-black-custom'}>
                            <CardText text={elem.details.type} />
                            <CardText text={elem.details.exp}/>
                            <CardText text={elem.details.salary}/>
                            <CardText text={elem.details.empCount}/>
                        </CardContent>
                        <Button classes={'mt-6'} variant={btnVariant} title={btnText}/>  
                    </CardContent>
                </Card>
            )
        })}
        </>
    );
}
 
export default CardsDemo;