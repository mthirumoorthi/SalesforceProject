import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    result=undefined;
    firstNumber;
    secondNumber;
    btnname;
    blnDisable=false;
    previousresults=[];

    Firstnumberonchange(event){
       this.firstNumber=event.target.value;
      
    }
    secondnumberonchange(event){
        this.secondNumber=event.target.value;
        
    }
    EnbDisButton(){
      // alert('Hi');
        // const obj=this.firstNumber;
        //  console.log(obj);
        // console.log(this.secondNumber.value);
        //this.blnDisable=true;
       
        // if(this.firstNumber!=undefined && this.secondNumber!=undefined)
        //         {
        //             this.blnDisable=true;
        //         }
        //         else
        //         {
        //             this.blnDisable=false; 
        //         }
        //this.blnDisable=this.firstNumber!=undefined ? this.secondNumber!=undefined ? true:false:false;
    }
    

    showresult(event)
    {
      EnbDisButton();
      console.log('value',this.firstNumber);
      console.log('value',this.secondNumber);
     this.btnname=  event.target.dataset.name;
     if(this.btnname==='add')
     {
        this.result= Number(this.firstNumber)+Number(this.secondNumber);
        
     }else if(this.btnname==='Subtract')
     {
        this.result= this.firstNumber-this.secondNumber;
     }
     else if(this.btnname==='Division')
     {
        this.result= this.firstNumber/this.secondNumber;
     }else{
        this.result= this.firstNumber*this.secondNumber;
     }

     this.previousresults.push( this.result);

    }

    // ShowAddResult(event){
    //     this.btnname= event.target.dataset.name;
    //     console.log(this.btnname);
      
        
    //     this.result= Number(this.firstNumber)+Number(this.secondNumber);
    // }
    // ShowSubResult(){
    //     this.result= this.firstNumber-this.secondNumber;
    // }
    // ShowDivResult(){
    //     this.result= this.firstNumber/this.secondNumber;
    // }
    // ShowMultiResult(){
    //     this.result= this.firstNumber*this.secondNumber;
    // }

}