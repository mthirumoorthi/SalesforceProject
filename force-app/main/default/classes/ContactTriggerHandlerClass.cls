public with sharing class ContactTriggerHandlerClass {
    public static void  contactTriggerAfterUpdate(List<contact> contacts) {
        List<string> accountIds=new List<string>();
        for(contact con: contacts)
        {
            if(!String.isBlank(con.accountid))
            {
                accountIds.add(con.accountid);
            }           
           
        }
        AggregateResult[] res=[select AccountId, Count(id) NumberOfActiveContacts__c  from contact where IsActive__c=true and accountid in :AccountIds group by AccountId];
          
        List<account> finalAccList=new  List<account> ();
        for(AggregateResult acc: res)
        {
        account acc1=new account();
        acc1.id=string.valueof(acc.get('AccountId'));
        acc1.NumberOfActiveContacts__c =integer.valueof(acc.get('NumberOfActiveContacts__c'));
        finalAccList.add(acc1);
        }
       
        update finalAccList;

    }

    public static void  contactTriggerAfterInsert(List<contact> contacts) {
        List<string> AccountIds=new List<string>();
            for(contact con: Contacts)
            {
              
                if(!String.isBlank(con.accountid))
                {
                    AccountIds.add(con.accountid);
                }     
              
            }
            AggregateResult[] res=[select AccountId, Count(id) NumberOfActiveContacts__c  from contact where IsActive__c=true and accountid in :AccountIds group by AccountId];
              
              
            List<account> finalAccList=new  List<account> ();
            for(AggregateResult acc: res)
            {
            account acc1=new account();
                acc1.id=string.valueof(acc.get('AccountId'));
            acc1.NumberOfActiveContacts__c =integer.valueof(acc.get('NumberOfActiveContacts__c'));
            finalAccList.add(acc1);
            }
            update finalAccList;
        }

    }

