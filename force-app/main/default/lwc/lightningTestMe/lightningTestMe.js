import { LightningElement,wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/LightningApexClass.getAllAccount';

export default class LightningTestMe extends LightningElement {

   @wire(getAllAccounts)
   Accounts;

   

}