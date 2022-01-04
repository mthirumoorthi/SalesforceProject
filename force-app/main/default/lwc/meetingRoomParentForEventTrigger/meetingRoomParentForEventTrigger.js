import { LightningElement } from 'lwc';

export default class MeetingRoomParentForEventTrigger extends LightningElement {
    selectedmeetingRoominfo='No Room is selected';
    selectedmeetingRoomCapacity='No Room is selected';

    constructor(){
        super();
        this.template.addEventListener('tileclickinchildbyProgram',this.tileclickinchildHandlerbyProgarm.bind(this));
    }

    meetingRoominfos=[
        {roomno:'A01',Capacity:10},
        {roomno:'A02',Capacity:15},
        {roomno:'A04',Capacity:6},
        {roomno:'A03',Capacity:8},
        {roomno:'B01',Capacity:9},
        {roomno:'C01',Capacity:10}
    ];

    tileclickinchildHandler(event)
    {
console.log('Triggered');
console.log(event.detail.roomno);
        this.selectedmeetingRoominfo=event.detail.roomno;
    }

    tileclickinchildHandlerbyProgarm(event)
    {
console.log(' tileclickinchildHandlerbyProgarm Triggered');
console.log(event.detail.Capacity);
        this.selectedmeetingRoomCapacity=event.detail.Capacity;
    }

}