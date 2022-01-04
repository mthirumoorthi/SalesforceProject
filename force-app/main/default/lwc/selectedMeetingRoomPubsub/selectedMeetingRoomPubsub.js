import { LightningElement,wire } from 'lwc';
import { registerListener,unregisterListener,unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SelectedMeetingRoomPubsub extends LightningElement {
    meetingRoomInput={};
    @wire(CurrentPageReference) pageRef;

    connectedCallback()
    {
        registerListener('tileclickinchildbyProgram',this.tileclickinchildbyProgramhandler,this)
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    tileclickinchildbyProgramhandler(payload)
    {
        console.log('Event called in new comp');
        console.log(payload.roomno,payload.Capacity);
       this.meetingRoomInput=payload;
    }

}