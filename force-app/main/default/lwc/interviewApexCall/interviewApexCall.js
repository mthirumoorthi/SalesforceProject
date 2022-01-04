import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import {getAccounts} from '@salesforce/apex/lwcApexClass/getAccounts'
import getAllAccount from '@salesforce/apex/LightningApexClass.getAllAccount';

export default class InterviewApexCall extends LightningElement {
// @wire(getAllAccount)
// Accounts;
Accounts;;
getAccount(){
    getAllAccount({numberofrecords:50}).then(response=>{
        console.log(response);
       this.Accounts=response;
       const eve=new ShowToastEvent({
message:'Success fully loaded',
title:'Success',
variant:'success'
       });
       this.dispatchEvent(eve);
    }).catch(error=>{
        console.log(error.body.message);
        const eve=new ShowToastEvent({
            message:'not Success fully loaded',
            title:'not Success',
            variant:'errorr'
                   });
                   this.dispatchEvent(eve);
    })
}


get accountexists()
{
if(this.Accounts)
{
return true;
}
return false;
}

}