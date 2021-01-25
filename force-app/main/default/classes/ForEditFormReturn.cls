public with sharing class ForEditFormReturn {
    @AuraEnabled(cacheable=true)  
    public static  List<Customer_Report__c> forEditFormReturn(String recordId) {
     return [SELECT Id,Title__c,Template__c,Note__c,Schedule__c,Parcel__c,ICO__c,FTP__c,DataChange__c,Account__c,Code__c,External_Id__c,
     Frequency__c, Data_Source__c, Customer_Report__c 
     FROM Customer_Report__c WHERE  Id=:recordId];
    }
}