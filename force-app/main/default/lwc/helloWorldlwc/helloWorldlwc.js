import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    namediv;
    Finalvalue;

  onchnagetext(event)
  {

    this.namediv=event.target.value;
  }

  onbtnclick(){
        this.Finalvalue=this.namediv;
  }
   
}