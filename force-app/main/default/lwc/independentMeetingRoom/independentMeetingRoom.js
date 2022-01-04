import { LightningElement,wire } from 'lwc';
import { registerListener,unregisterListener } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
export default class IndependentMeetingRoom extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    disconnectedCallback(){
        unregisterListener(this);
    }

    connectedCallback(){
        registerListener('pubsubMessageEvent',this.showMessagefromChild,this);
    }

    showMessagefromChild(payload){
        console.log(payload);
        alert(payload);

    }
}