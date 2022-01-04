import {createElement} from "lwc";
import meetingRooms from "c/meetingRoomsInfoParent";

describe("c-meetingRoomsInfoParent",()=>{
 afterEach(()=>{
     while(document.body.firstChild)
     {
        document.body.removeChild(document.body.firstChild);
     }
 } )

    it("Meeting Rooms count 7",()=>
    {
        const element=createElement("c-meetingRoomsInfoParent",{is:meetingRooms})
        document.body.appendChild(element);
        const AllroomsElemnt=element.shadowRoot.querySelectorAll('c-metting-room');
        debugger;
        expect(AllroomsElemnt.length).toBe(7);


    });


    it("meetting Room Title",()=>{
        const element=createElement("c-meetingRoomsInfoParent",{is:meetingRooms});
        document.body.appendChild(element);
        const AllroomsElemnt=element.shadowRoot.querySelector('lightning-card');
        debugger;

        expect(AllroomsElemnt.title).toBe("Room Information");

    });

  
})