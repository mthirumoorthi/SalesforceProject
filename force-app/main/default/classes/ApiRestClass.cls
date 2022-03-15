@restresource(urlmapping='/AccountReadRestApi/*')
Global with sharing class ApiRestClass {

    @httpGet
    Global static List<Account> getAccountDetail()
    {
        List<account> accountDetails;
        RestRequest req=RestContext.Request;
       string accountId= req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
       if(String.isBlank(accountId))
       {
        accountDetails=[select id,name from account];
       }
       else {
        accountDetails=[select id,name from account where Id=:accountId];
           
       }
        return accountDetails;
    }
    
}