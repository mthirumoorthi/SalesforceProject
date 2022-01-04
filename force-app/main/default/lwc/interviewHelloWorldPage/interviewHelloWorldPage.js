import { LightningElement } from 'lwc';

export default class InterviewHelloWorldPage extends LightningElement {

     dynamicGreeting="";
    showLightningCard=false;
    
    res={
        name:'testcode',
        results:'failure'
    };
    cityList=["tempe","chandler","phoenix"];
    checkboxHandler(event){
        this.showLightningCard=event.target.checked;
    this.cityList.push("chandler1");
    this.res.results='success';
    this.res.name='code tested';

    }
    greetingChangeHanlder(event){
        this.dynamicGreeting=event.target.value;

    }

    get resulttext() {
return `Result is ${this.res.name} ${this.res.results}`;
    }

}