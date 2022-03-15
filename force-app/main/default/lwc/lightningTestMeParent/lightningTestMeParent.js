import { LightningElement, wire } from 'lwc';
import getAllAccountImpertiveCall from '@salesforce/apex/LightningApexClass.getAllAccount';
import { NavigationMixin } from 'lightning/navigation';


export default class LightningTestMeParent extends NavigationMixin(LightningElement) {
     inputValue;
   
    inputChange(event)
    {
        this.inputValue=event.target.value;
    }

    constructor()
    {
        super();
        this.template.addEventListener('clickevent',this.addEventListenerHandler.bind(this));
    }

    addEventListenerHandler(event)
    {
       this.inputFromChild=event.detail;
    }

    Accounts;
    inputFromChild;

    NavigatetoGoogle()
    {
        this[NavigationMixin.Navigate]({
                type:'standard__webPage',
                attributes:{
                    url:'https://www.google.com/'
                }
            });
    }

    NavigateToAccountHomePage()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'home'
            }
        });
    }

    /*clickeventHandler(event)
    {
       this.inputFromChild=event.detail;
    }*/


    PassValueToChild()
    {
        getAllAccountImpertiveCall({inputName: this.inputValue}).then(response=>{
            this.Accounts=response;
        }).catch(error=>{
            console.log(error.body.message);
        });
    }
}