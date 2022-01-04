import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigationService extends NavigationMixin(LightningElement) {

    buttonClick(){
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__webPage',
        //     attributes: {
        //         url: 'http://salesforce.com'
        //     }
        // });

       
            // Navigate to the Case object home page.
            // this[NavigationMixin.Navigate]({
            //     type: 'standard__objectPage',
            //     attributes: {
            //         objectApiName: 'Case',
            //         actionName: 'home'
            //     }
            // });

            // this[NavigationMixin.Navigate]({
            //     type: 'standard__objectPage',
            //     attributes: {
            //         objectApiName: 'Contact',
            //         actionName: 'list'
            //     },
            //     state: {
            //         // 'filterName' is a property on the page 'state'
            //         // and identifies the target list view.
            //         // It may also be an 18 character list view id.
            //         filterName: 'Recent' // or by 18 char '00BT0000002TONQMA4'
            //     }
            // });


            // this[NavigationMixin.Navigate]({
            //     type: 'standard__recordPage',
            //     attributes: {
            //         recordId: '0015e00000NP0jwAAD',
            //         objectApiName: 'Account', // objectApiName is optional
            //         actionName: 'edit'
            //     }
            // });

            const defaultValues = encodeDefaultFieldValues({
                Name: 'Morag',
                Phone: 'de Fault'
                
            });
    
         
    
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'new'
                },
                state: {
                    defaultFieldValues: defaultValues
                }
            });
        }
    
    

}