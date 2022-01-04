import { LightningElement,track } from 'lwc';
import {getBMI} from 'c/bmiGenereicScript';

export default class BmiCalculator extends LightningElement {
    title='bmi calculator';
    weight;
    height;
    result;
   @track bmiData={
        weight:0,
    height:0,
    result:0
    }


    Clickbtn()
    {
        this.title=this.title.toUpperCase();
        try{
            this.bmiData.result= getBMI(this.bmiData.weight,this.bmiData.height);
            //this.bmiData.result=this.bmiData.weight/(this.bmiData.height*this.bmiData.height);

        }
        catch(error)
        {
            console.log(error);
            this.result=0;
        }

    }
    onchangeHeight(event)
    {
this.bmiData.height=event.target.value;
    }

    onchangeWeight(event)
    {
        this.bmiData.weight=event.target.value;
    }

    get getbmiValue(){
        return `you BMI value is ${this.bmiData.result}`;
    }



}