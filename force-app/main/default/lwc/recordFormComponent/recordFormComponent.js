import { LightningElement } from 'lwc';
import Name_field from '@salesforce/schema/Account.Name';
import Phone_field from '@salesforce/schema/Account.Phone';
import Website_field from '@salesforce/schema/Account.Website';

export default class RecordFormComponent extends LightningElement {
    recordID;
    modefield;
    //fieldsArray=['Name','Phone','Website'];
    fieldsArray=[Name_field,Phone_field,Website_field];
    successHandler(event){
        this.recordID=event.detail.id;
    }
    newRecord(){
        this.recordID=undefined;
        this.modefield='edit';
    }
}