import { LightningElement } from 'lwc';

export default class InterviewMeetingRooms extends LightningElement {
    meetingRoomsInfo=[
        {roomno:'A-01',capacity:5},
        {roomno:'A-02',capacity:15},
        {roomno:'A-03',capacity:25}
    ];
    meetingRoomsInfonew=[
        {roomno:'C-01',capacity:5},           
    ];

    AddmeetingRoomsInfo(){        
        const res=[...this.meetingRoomsInfo,...this.meetingRoomsInfonew];
        this.meetingRoomsInfo=res;

    }
    sendmessage(){
        const comp=this.template.querySelector("c-interview-child-meeting-room");
        comp.showMessage("Hi I am your parent");
    }
    childEventhanlder(event){
        
        const message=event.detail;
       alert(message);

    }
    constructor(){
        super();
        this.template.addEventListener('parentmessage',this.childEventhanlder.bind(this));
    }
}