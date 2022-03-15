import { LightningElement,api } from 'lwc';
import name_field from '@salesforce/schema/Account.Name';


export default class Interviewrecordform extends LightningElement {
@api recordId;
@api objectapiname;
// fields=[name_field];
// successHandler(event){
// this.recordid=event.detail.id;
// }

}