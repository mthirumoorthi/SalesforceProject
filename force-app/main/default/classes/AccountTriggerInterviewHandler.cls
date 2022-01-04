public with sharing class AccountTriggerInterviewHandler {
    public static void  beforeInsert(List<account> oldAccountDetails) {
        for(Account acc: oldAccountDetails)
        {
            acc.name=acc.name+'beforeInsertTriggertest';
        }
        update oldAccountDetails;

    }
    public static void  beforeUpdate(List<account> oldAccountDetails) {
        for(Account acc: oldAccountDetails)
        {
            acc.name=acc.name+'beforeUpdateTriggertest';
        }
        update oldAccountDetails;

    }
}
