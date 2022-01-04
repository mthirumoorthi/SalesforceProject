import { LightningElement } from 'lwc';

export default class ParentPublicMethod extends LightningElement {

constructor(){
    super();
    console.log('constructor called');
}

connectedCallback()
{
    console.log('connectedCallback called');
}
renderedCallback()
{
    console.log('renderedCallback called');

}



disconnectedCallback()
{
    console.log('disconnectedCallback called');
}


      value;
      onchangevent(event)
      {
          this.value=event.target.value;
      }
    selectCheckboxhandler(){
        const comp=this.template.querySelector('c-child-public-method');
       
       const response= comp.selectCheckbox(this.value);
       console.log(response);
    }
}