public with sharing class AccountTriggerInterviewHandler {
              private static boolean isinsertted=false;
               
    public static void  beforeInsert(List<account> oldAccountDetails) {
        for(Account acc: oldAccountDetails)
        {
            acc.name=acc.name+' Interview';
        }

        
        List<sobject> sobjects=new List<sobject>();
       opportunity opp=new opportunity();
       opp.CloseDate=date.newInstance(2012,05,22);
       opp.Name='TestSobjects';
       opp.StageName='Prospecting';
        sobjects.add((opportunity)opp);
        contact con=new contact();
        con.Lastname='TestSobjects';
         sobjects.add((contact)con);
         system.debug(sobjects);
         insert sobjects;
         
         
      

    }
    public static void  beforeUpdate(List<account> oldAccountDetails) {
        for(Account acc: oldAccountDetails)
        {
            acc.name=acc.name+' Interview';
        }
        

    }
}