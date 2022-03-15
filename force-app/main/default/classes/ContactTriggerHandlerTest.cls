@istest
public with sharing class ContactTriggerHandlerTest {


@TestSetup
Public static void makeData(){
    List<Account> accs=new List<Account>();
    accs.add(new account(name='Test Trigger'));
      insert accs;

    List<Contact> contacts=new List<Contact>();
    contacts.add(new contact(LastName='thiru',accountid=accs[0].Id,IsActive__c=true));
    insert contacts;
}

    @istest
   public static void contactTriggerAfterInsertTest1()
   {
     

      List<account> accs1= [select name,NumberOfActiveContacts__c from account];
      System.assertEquals(1, accs1[0].NumberOfActiveContacts__c, 'Not Equal');



   }

   @istest
   public static void contactTriggerAfterUpdateTest1()
   {
    
    List<Contact> contacts=[select name,id from contact];
      Contact objconatct=new contact();
      objconatct.Id=contacts[0].Id;
      objconatct.IsActive__c=true;
      update objconatct;     
      

      List<account> accs1= [select name,NumberOfActiveContacts__c from account];
      System.assertEquals(1, accs1[0].NumberOfActiveContacts__c, 'Not Equal');



   }

   @istest
   public static void contactTriggerAfterUpdateInactiveTest2()
   {
        List<Contact> contacts1=[select name,id from contact];

      Contact objconatct=new Contact();
      objconatct.Id=contacts1[0].Id;
      objconatct.IsActive__c=false;
      update objconatct;     
      

      List<account> accs1= [select name,NumberOfActiveContacts__c from account];
      System.assertEquals(0, accs1[0].NumberOfActiveContacts__c, 'Not Equal');



   }

   @istest
   public static void contactTriggerAfterUpdateInactiveTest1()
   {
      List<Account> accs=new List<Account>();
      accs.add(new account(name='Test Trigger'));
        insert accs;

      List<Contact> contacts=new List<Contact>();
      contacts.add(new contact(LastName='thiru',accountid=accs[0].Id,IsActive__c=false));
      insert contacts;

      Contact objconatct=new Contact();
      objconatct.Id=contacts[0].Id;
      objconatct.IsActive__c=true;
      update objconatct;     
      

      List<account> accs1= [select name,NumberOfActiveContacts__c from account];
      System.assertEquals(1, accs1[0].NumberOfActiveContacts__c, 'Not Equal');



   }

   @istest
   public static void contactTriggerBulkTest1()
   {
      List<Account> accs=new List<Account>();
      accs.add(new account(name='Test Trigger'));
        insert accs;
        List<Contact> contacts=new List<Contact>();
        for(Integer x=0;x<1000;x++)
        {
            contacts.add(new contact(LastName='thiru',accountid=accs[0].Id,IsActive__c=true));
        }  
      insert contacts;

      List<account> accs1= [select name,NumberOfActiveContacts__c from account];
      System.assertEquals(1000, accs1[0].NumberOfActiveContacts__c, 'Not Equal');



   }

  
}