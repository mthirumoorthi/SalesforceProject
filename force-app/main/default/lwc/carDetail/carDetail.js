import { LightningElement,api,wire } from 'lwc';
import carDetail from '@salesforce/apex/carTypeController.getCarDetail';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class CarDetail extends LightningElement {
@api carTypeId;
cars;
selectedcarid;
@wire(CurrentPageReference)
pageRef

connectedCallback()
{
    console.log(this.carTypeId);
}
renderedCallback()
{
    console.log(this.carTypeId);
}

tileclickeventHandler(event)
{
this.selectedcarid=event.detail;
console.log('this.selectedcarid',this.selectedcarid);
fireEvent('tileclickevent',this.pageRef,this.selectedcarid);
}

@wire(carDetail,{carTypeid:'$carTypeId'})
getCardetail({data,error}){
    console.log(data);
    if(data)
    {
        console.log(data);
    this.cars=data;
    }else if(error)
    {
console.log(error.body.message);
    }
}







}