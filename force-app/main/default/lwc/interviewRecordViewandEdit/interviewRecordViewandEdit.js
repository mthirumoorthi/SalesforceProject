import { LightningElement } from 'lwc';

export default class InterviewRecordViewandEdit extends LightningElement {
    recordid;
    successHandler(event)
    {
this.recordid=event.detail.id;
    }
}