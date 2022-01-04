public with sharing class lwcApexClass {
    //@AuraEnabled(cacheable=true)
    public static List<account> getAccounts(Integer numberofrecords){
        try {
            System.debug(numberofrecords);
            return [select id,name,phone from account limit :numberofrecords];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}
