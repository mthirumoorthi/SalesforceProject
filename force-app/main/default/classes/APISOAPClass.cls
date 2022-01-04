Global with sharing class APISOAPClass {
    WebService static List<Account> getAccountDetail(string accountId)
    {
        List<account> accountDetails=[select id,name from account where Id=:accountId];
        return accountDetails;
    }

}
