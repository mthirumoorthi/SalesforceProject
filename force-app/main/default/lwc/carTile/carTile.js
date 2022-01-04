import { LightningElement,api,wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class CarTile extends LightningElement {

@api car;
selectedcar;
@wire(CurrentPageReference)
pageRef

tileClickHandler(event)
{
    event.preventDefault();
    this.selectedcar=this.car.Id;
    console.log('tileclickfireevent');
    fireEvent(this.pageRef,'tileclickfireevent',this.selectedcar);
    
    
   //event.preventDefault(); 
   const tileclickEvent=new CustomEvent('tileclickevent',{detail:this.selectedcar});
   this.dispatchEvent(tileclickEvent);



 
}


}