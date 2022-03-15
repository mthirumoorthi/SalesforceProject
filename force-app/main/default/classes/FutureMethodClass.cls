public with sharing class FutureMethodClass {
    @Future
    Public static void futureContactInsert(Set<id> ContactRecordID)
    {
        List<contact> contacts=[select id,name from Contact where id in:ContactRecordID];
        for(contact con :contacts)
        {
            con.LastName='Thiru'+con.Name;
        }
        update contacts;
    }
}