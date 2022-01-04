import { LightningElement } from 'lwc';

export default class ConditionalPageLWC extends LightningElement {
    blnShowMe=false;
    cityListsort;
    cityList=['Tempe','Chandler','Gilbert'];



    onCheckboxChange(event){

       this.blnShowMe=event.target.checked;
       const divelement=document.getElementsByClassName('divclassClickme');
       divelement.style.color="red";
       cityListsort= cityList.sort((a,b)=>a-b);
       console.log(cityListsort.value);
      
    }

}