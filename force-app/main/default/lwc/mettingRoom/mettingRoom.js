import { LightningElement,api } from 'lwc';

export default class MettingRoom extends LightningElement {
  @api meetingRoomInput; //{Roomno:A-01,Capacity:5}
  @api showResult=false;

}