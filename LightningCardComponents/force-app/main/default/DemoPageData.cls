public class DemoPageData 
{
	@AuraEnabled
    public static List<Account> accountDetail()
    {
       return [Select Id, Name,Goal_Title_Field__c,Due_Date__c,Status__c from Account where Goal_Title_Field__c!=null limit 5]; 
    }
}