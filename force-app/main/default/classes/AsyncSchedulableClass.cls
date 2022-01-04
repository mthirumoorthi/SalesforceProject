public with sharing class AsyncSchedulableClass implements Schedulable {
    public void execute(SchedulableContext sc)
    {
        List<contact> contacsobject=[select Id,name,phone,Languages__c from contact];
        List<Contact> finalList=new List<Contact>();
        for(contact obj:contacsobject)
        { 
             contact a=new Contact();
              a.Id=obj.Id;
              a.Languages__c='EnglishSchedule';
              System.debug(a);
              finalList.add(a);
        }
        update finalList;
    }
}
