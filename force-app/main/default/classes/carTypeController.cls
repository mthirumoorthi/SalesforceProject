public with sharing class carTypeController {
    @AuraEnabled(cacheable=true)
    public static List<car__c> getCarDetail(String carTypeid ){
        if(String.isEmpty(carTypeid))
        {
            return [SELECT Id, IsDeleted, Name, CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, SystemModstamp, LastActivityDate, LastViewedDate, LastReferencedDate, Contact__c, Available_For_Rent__c, Build_Year__c, Car_Type__c, Description__c, Geolocation__Latitude__s, Geolocation__Longitude__s, Geolocation__c, Mileage__c, Per_Day_Rent__c, Picture__c FROM Car__c
           ];
        }else {
            return [SELECT Id, IsDeleted, Name, CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, SystemModstamp, LastActivityDate, LastViewedDate, LastReferencedDate, Contact__c, Available_For_Rent__c, Build_Year__c, Car_Type__c, Description__c, Geolocation__Latitude__s, Geolocation__Longitude__s, Geolocation__c, Mileage__c, Per_Day_Rent__c, Picture__c FROM Car__c
            where Car_Type__c=: carTypeid];
        }
  
    }
}
