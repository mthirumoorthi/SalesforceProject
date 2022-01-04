import { LightningElement, wire } from 'lwc';
import { createRecord,getRecord } from 'lightning/uiRecordApi';
const fieldArray= ['Account.Name', 'Account.Phone', 'Account.Website'];
export default class InterviewLDSCreateRecord extends LightningElement {

     accountName;
     accountPhone;
     accountWebsite;

     recordid;

     @wire(getRecord,{Name:'$recordid',fields:fieldArray,layoutTypes:'Full'})
     accountRecord;


    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }

    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
    }

    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
    }

    createAccount(){
        const fields = {'Name' : this.accountName, 'Phone' : this.accountPhone, 'Website': this.accountWebsite};
        const recordInput = {apiName : 'Account', fields};
        createRecord(recordInput).then(response=>{
            console.log(response.id);
            this.recordid=response.id;
        }).catch(error=>{
            console.log(error.body.message);
        });
       
    }

    get retAccountName()
    {
        console.log(this.recordid);
        console.log(this.accountRecord.data);
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    }

    get retAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }

    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }


}