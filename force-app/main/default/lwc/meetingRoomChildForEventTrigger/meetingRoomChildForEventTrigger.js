import { LightningElement,api,wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoomChildForEventTrigger extends LightningElement {
    @api meetingRoomInput; //{Roomno:A-01,Capacity:5}
  @api showResult=false;

  @wire(CurrentPageReference) pageRef;
  
  tileclickbyProgram()
  {
    fireEvent(this.pageRef,'tileclickinchildbyProgram',this.meetingRoomInput);
      console.log('tileeventbyProgram Button Clicked');
      const tileeventbyProgram=new CustomEvent('tileclickinchildbyProgram',{detail:this.meetingRoomInput,bubbles:true});
      this.dispatchEvent(tileeventbyProgram);
      
  }
  tileclick()
  {
    
      console.log('Button Clicked');
      const tileevent=new CustomEvent('tileclickinchild',{detail:this.meetingRoomInput});
      this.dispatchEvent(tileevent);

     
  }
}