import { LightningElement } from 'lwc';

export default class CarSearchParent extends LightningElement {
carTypeid;
    carSelectedEventHandler(event){
        console.log(event.detail);
this.carTypeid=event.detail;

    }
}