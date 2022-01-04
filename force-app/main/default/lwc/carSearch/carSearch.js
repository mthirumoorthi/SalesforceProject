import { LightningElement,wire,track } from 'lwc';
import getCarDetails from '@salesforce/apex/Car.getCarTypeList';
import { NavigationMixin } from 'lightning/navigation';

export default class CarSearch extends NavigationMixin(LightningElement) {
    selectedCar;
   @track carTypes;

    @wire(getCarDetails)
    carWire({data,error}){       
        if(data)
        {
            console.log(data);
            this.carTypes=[{value:'',label:'All Types'}];
            data.forEach(element=>{
                console.log(element.Name);
                const carType={};
                carType.value=element.Id;
                carType.label=element.Name;
                console.log(carType);
                this.carTypes.push(carType);
            })
        }else if(error){
            console.log(error.body.message);
        }
    }


    handleChange(event)
    {
    
    this.selectedCar=event.target.value;
   
    const carselectedevent=new CustomEvent("carselectedevent",{detail:this.selectedCar});
    this.dispatchEvent(carselectedevent);
  
   
    }

    newButtonHandler(){
        this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Car_Type__c',
                    actionName: 'new'
                }
            });

    }

}