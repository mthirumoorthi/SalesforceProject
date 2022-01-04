public with sharing class serviceCallHttpRequest {
    //https://medium.com/salesforce-champion/todays-world-we-are-connected-to-each-other-and-it-is-very-important-to-share-the-data-between-93b6e0760fde
    @AuraEnabled
    public static string LWCRestMethod(){   
        String strResponse = null; 
        strResponse='Inittaed';
        try {  
            HttpRequest httpRequest = new HttpRequest();  
        httpRequest.setEndpoint('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=641664&date=04-10-2021');
        httpRequest.setMethod('GET');        
          Http http = new Http();   
                HttpResponse httpResponse = http.send(httpRequest);  
                strResponse=string.valueOf(httpResponse.getStatusCode());
                if (httpResponse.getStatusCode() == 200 ) {  
                    strResponse = httpResponse.getBody();  
                } 
                else {  
                    throw new CalloutException(httpResponse.getBody());  
                } 
             
            } 
            catch(Exception ex) {  
                throw ex;  
            } 
            finally
            {
                if(!String.isBlank(strResponse)) {
                    return strResponse;
                }else{
                    return null;
                }
            }
            return strResponse;
        
        }
    }


