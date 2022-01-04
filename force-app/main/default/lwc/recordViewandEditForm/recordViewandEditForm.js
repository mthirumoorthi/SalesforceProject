import { LightningElement } from 'lwc';

export default class RecordViewandEditForm extends LightningElement {
    recordid;
    successHandler(event)
    {
this.recordid=event.detail.id;
    }

}