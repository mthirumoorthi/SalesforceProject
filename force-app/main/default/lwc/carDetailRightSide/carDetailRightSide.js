import { LightningElement,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener,unregisterListener } from 'c/pubsub';
import { NavigationMixin } from 'lightning/navigation';
import { createRecord } from 'lightning/uiRecordApi';

import CAR_ID from '@salesforce/schema/Car__c.Id';
import CAR_NAME from '@salesforce/schema/Car__c.Name';
import CAR_MILEAGE from '@salesforce/schema/Car__c.Mileage__c';
import CAR_PER_DAY_RENT from '@salesforce/schema/Car__c.Per_Day_Rent__c';
import CAR_BUILD_YEAR from '@salesforce/schema/Car__c.Build_Year__c';
import CAR_PICTURE from '@salesforce/schema/Car__c.Picture__c';

import ExpTitle from '@salesforce/schema/Car_Experience__c.Name';
import ExpDescription from '@salesforce/schema/Car_Experience__c.Experience__c';
import CarID from '@salesforce/schema/Car_Experience__c.Car__c';
import ExpObjectname from '@salesforce/schema/Car_Experience__c';


const fields = [
    CAR_ID,
    CAR_NAME,
    CAR_PER_DAY_RENT,
    CAR_BUILD_YEAR,
    CAR_PICTURE,
    CAR_MILEAGE
   
]

export default class CarDetailRightSide extends NavigationMixin(LightningElement) {
     carid;
     selectedtabValue;
     @wire(CurrentPageReference)
     pageRef;
     Exptitle;
     ExpDesc;

     @wire(getRecord,{recordId:'$carid',fields})
     car;


     connectedCallback(){
        console.log('registerListener');
         registerListener('tileclickfireevent',this.callbacktileclick,this)
     }

     callbacktileclick(payload)
     {        
        console.log('Payload');
      this.carid=payload;
      console.log(this.carid);
     }

     disconnectedCallback()
     {
        console.log('disconnectedCallback');
         unregisterListener(this);
     }

   

    tabchangeHandler(event)
    {
        this.selectedtabValue=event.target.value;
    }

    fullDetails()
    {

         this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.carid,
                    objectApiName: 'Car__c', // objectApiName is optional
                    actionName: 'view'
                }
            });

       
    }

    handleTitleHandler(event)
    {
       this.Exptitle=event.target.value;
    }
    handleDescriptionHandler(event)
    {
       this.ExpDesc=event.target.value;
    }

    addExperienceHandler(){
        console.log(ExpTitle.fieldApiName,this.Exptitle);
        console.log(ExpDescription.fieldApiName,this.ExpDesc);
        console.log(CarID.fieldApiName,this.carid);
const fieldscreate={};
//fieldscreate[ExpTitle.fieldApiName]=this.Exptitle;
fieldscreate[ExpDescription.fieldApiName]=this.ExpDesc;
fieldscreate[CarID.fieldApiName]=this.carid;
console.log(fieldscreate);

const recordinput={apiName:ExpObjectname.objectApiName,fields:fieldscreate};
createRecord(recordinput).then(carexp=>{
console.log('Success');
}).catch(error=>{
    console.log(error.body.message);
});

    }

    
    get carName(){
        
        if(this.car.data)
        {
            return this.car.data.fields.Name.value;

        }
        return 'Thiru';
     }

     get carMile(){       
        
        if(this.car.data)
        {
            console.log(this.car.data.fields.Mileage__c.value);
            return this.car.data.fields.Mileage__c.value;

        }
        return 'Thiru';
     }

     get carImage(){       
        
        if(this.car.data)
        {
            console.log(this.car.data.fields.Picture__c .value);
            return this.car.data.fields.Picture__c .value;

        }
        return 'Thiru';
     }

     get carfound(){
         if(this.car.data){
           return  true;
         }
            return  false;
         
     }
}