import { LightningElement,api } from 'lwc';

export default class ChildPublicMethod extends LightningElement {



    constructor(){
        super();
        console.log('constructor called',this.value);
    }
    

    errorCallback(error, stack){       
        console.log('Error' , error );     
        console.log(stack); 
          }
    
    connectedCallback()
    {
        console.log('connectedCallback called',this.value);
    }
    renderedCallback()
    {
        console.log('renderedCallback called',this.value);
    
    }
    
    disconnectedCallback()
    {
        console.log('disconnectedCallback called',this.value);
    }

    value='red';
    get options() {
        return [
            { label: 'red', value: 'red' },
            { label: 'green', value: 'green' },
            { label: 'yellow', value: 'yellow' },
        ];
    }

    @api
    selectCheckbox(checkboxValue){
      const selectedcheckbox= this.options.find(
            checkbox=> checkboxValue===checkbox.value
        );
        console.log('reached here');
        console.log(selectedcheckbox.value);
        if(selectedcheckbox)
        {
           this.value=selectedcheckbox.value;
            return 'Success';
        }
        else
        {
            return 'not selected';

        }

   

    }


}