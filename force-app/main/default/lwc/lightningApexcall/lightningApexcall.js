import { LightningElement,wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/LightningApexClass.getAllAccount';
import getAllAccountImpertiveCall from '@salesforce/apex/LightningApexClass.getAllAccountImpertiveCall';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LightningApexcall extends LightningElement {
   
@wire(getAllAccounts)
Accs;

Accounts;

btnClick(){
    getAllAccountImpertiveCall().then(response=>{
this.Accounts=response;
const eventtoast=new ShowToastEvent({
    title:'Accounts retrieved',
    message:'Accounts retrieved',
    variant: 'success'
});
this.dispatchEvent(eventtoast);
    }).catch(error=>{
console.log(error.body.message);
    })
}




}