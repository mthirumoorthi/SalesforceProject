import { LightningElement,api } from 'lwc';
import getAllAccountImpertiveCall from '@salesforce/apex/LightningApexClass.getAllAccountImpertiveCall';


export default class LightningTestMeImpertiveCall extends LightningElement {
Accounts;

@api
accountName;
//='thiruTestTestTestTestTestTestTestTestTest Interview Interview Interview InterviewTestTest';





btnClick()
{
   const event=new CustomEvent("clickevent",{detail:'Callme',bubbles:true});
   this.dispatchEvent(event);
}


}