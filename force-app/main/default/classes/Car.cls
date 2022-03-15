public with sharing class Car {
    @AuraEnabled(cacheable=true)
    public static List<Car_Type__c> getCarTypeList(){
       
          return [SELECT Id, Name FROM Car_Type__c];
       
    }
}