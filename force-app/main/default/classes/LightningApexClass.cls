public with sharing class LightningApexClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccount(){
        List<Account> accounts=new List<Account>();       
        accounts= [select id,name,phone from account limit 10];       
        return accounts;
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccountImpertiveCall(){
        List<Account> accounts=new List<Account>();       
        accounts= [select id,name,phone from account limit 10];       
        return accounts;
    }
  
}