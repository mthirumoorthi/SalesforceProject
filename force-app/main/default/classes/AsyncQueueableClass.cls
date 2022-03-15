public with sharing class AsyncQueueableClass implements Queueable {
    List<contact> contacsobject=new List<contact>();
 public AsyncQueueableClass(List<contact> contacs)
 {
   this.contacsobject=contacs;
 }

   public void execute(QueueableContext QC)
   {
       List<Contact> finalList=new List<Contact>();
      for(contact obj:contacsobject)
      {
          if(String.isBlank(obj.phone))
          {
              contact a=new Contact();
              a.Id=obj.Id;
            a.Languages__c='English';
            System.debug(a);
            finalList.add(a);
          }          
      }
      update contacsobject;
   }
}