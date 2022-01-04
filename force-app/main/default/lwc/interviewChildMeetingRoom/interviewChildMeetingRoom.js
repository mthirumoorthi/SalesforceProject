import { LightningElement,api,wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class InterviewChildMeetingRoom extends LightningElement {

    @api meetingRoomsInfo; //{roomno:'A-01',capacity:5}

    @api
    showMessage(message){
        alert(message);
    }

    @wire(CurrentPageReference) pageRef;


    // callParent(){
    //     const parentEvent=new CustomEvent('parentmessage',{detail:'Hi Message from child'});
    //     this.dispatchEvent(parentEvent);
    // }

     callParent(){
        const parentEvent=new CustomEvent('parentmessage',{detail:'Hi Message from child',bubbles:true});
        this.dispatchEvent(parentEvent);
        fireEvent(this.pageRef,'pubsubMessageEvent','Message from child to independent component');
    }

}