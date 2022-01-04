import { LightningElement,wire,api } from 'lwc';
import { createRecord,getRecord } from 'lightning/uiRecordApi';

const fieldsvalue=['Account.Name','Account.Phone','Account.CreatedById'];
export default class LDSComponentPage extends LightningElement {
Phone;
name;
@api
recordid;
// AccName;
// AccPhone;
// CreatedById;

@wire(getRecord,{recordId:'$recordid',fields:fieldsvalue})
accountRecord;






nameChange(event){
    this.name=event.target.value;
}
PhoneChange(event){
    this.Phone=event.target.value;
}


accountSaveClick()
{
    
    const fields={'Name':this.name,'Phone':this.phone};
const recordInput={'apiName':'Account',fields};
    createRecord(recordInput).then(response=>{
        console.log('Acc Created',response.id);
        this.recordid=response.id;
        
    }).catch(error=>{
        console.log('Error',error.body.message);
    });
}

get AccName(){
    console.log('data',this.accountRecord.data);
    if(this.accountRecord.data)
    {
        return this.accountRecord.data.fields.Name.value;
    }
}

get AccPhone(){
    if(this.accountRecord.data)
    {
       return this.accountRecord.data.fields.Phone.value;
    }
}

get CreatedById(){
    if(this.accountRecord.data)
    {
        return this.accountRecord.data.fields.CreatedById.value;
    }
}


}


