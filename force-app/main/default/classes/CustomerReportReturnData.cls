public with sharing class CustomerReportReturnData {
    @AuraEnabled(cacheable=true)        
    public static  List<Customer_Report__c> getReports(String accountId) {
        return [SELECT Id,Title__c,Template__c,Note__c,Schedule__c,Parcel__c,FTP__c,Account__c,Code__c,External_Id__c,
        Frequency__c, Data_Source__c, Customer_Report__c, DataChange__c 
        FROM Customer_Report__c WHERE  Account__c=:accountId];
    }

    @AuraEnabled(cacheable=true) 
    public static List<Customer_Report__c> getReportRecordData(String customerRep) {
        return [SELECT Id,Title__c,Template__c,Note__c,Schedule__c,Parcel__c,FTP__c,Frequency__c,Account__c,External_Id__c,Code__c,
        Data_Source__c, Customer_Report__c,DataChange__c
        FROM Customer_Report__c WHERE  Customer_Report__c=:customerRep LIMIT 1];
    }
}