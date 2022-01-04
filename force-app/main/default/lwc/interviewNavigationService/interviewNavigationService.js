import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class InterviewNavigationService extends NavigationMixin(LightningElement) {

    openGoogle(){
        this[NavigationMixin.navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'Home'
            }
        });
        // this[NavigationMixin.Navigate]({
        //     type:'standard__webPage',
        //     attributes:{
        //         url:'https://developer.salesforce.com/docs/component-library/bundle/lightning-platform-show-toast-event/documentation'
        //     }
        // });
    }
}