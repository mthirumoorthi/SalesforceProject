({
    doint : function(component, event, helper) {
       component.set('v.meetingRoominfo',[
        {roomno:'A-01',Capacity:'5'},
        {roomno:'B-01',Capacity:'5'},
        {roomno:'C-01',Capacity:'6'},
        {roomno:'B-02',Capacity:'7'},
        {roomno:'B-03',Capacity:'8'},
        {roomno:'C-01',Capacity:'9'},
        {roomno:'C-01',Capacity:'9'}     
        ]);
        console.log(component.get('v.meetingRoominfo'));
    },
    tileclickinchildHandler: function(component, event, helper) {
        console.log(event.getParam('roomno'));
        component.set('v.selectedmeetingRoominfo',event.getParam('roomno'));
        component.set('v.selectedmeetingRoomCapacity',event.getParam('Capacity'));
       
    }
})