import { LightningElement } from 'lwc';
import LWCRestMethod from '@salesforce/apex/serviceCallHttpRequest.LWCRestMethod'


export default class ServiceCallFetchComp extends LightningElement {
    centerData;

connectedCallback()
{
    this.CallApexServiceClass();
    this.FetchServiceCall();
}

CallApexServiceClass(){
    console.log('Apex Call Testing');
   LWCRestMethod().then(response=>{
    console.log('Apex Call Testing 1');
    console.log(response);
   }).catch(error=>{
    console.log(error);
   })
   
}

async FetchServiceCall(){
    const callEndpoint=await fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=641664&date=04-10-2021');
    const output=await callEndpoint.json();
    this.centerData=output.centers;
    console.log(output.centers);

}

}