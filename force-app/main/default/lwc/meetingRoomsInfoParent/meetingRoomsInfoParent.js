import { LightningElement } from 'lwc';

export default class MeetingRoomsInfoParent extends LightningElement {
    showResult;
    meetingRoomInfos=[{Roomno:'A-01',Capacity:'5'},
    {Roomno:'B-01',Capacity:'5'},
    {Roomno:'C-01',Capacity:'6'},
    {Roomno:'B-02',Capacity:'7'},
    {Roomno:'B-03',Capacity:'8'},
    {Roomno:'C-01',Capacity:'9'}    
    ];

    CheckboxChnaged(event){
this.showResult=event.target.checked;
    }

}