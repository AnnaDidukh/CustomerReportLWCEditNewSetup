import { LightningElement, api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getReports from '@salesforce/apex/CustomerReportReturnData.getReports';
import getReportRecordData from '@salesforce/apex/CustomerReportReturnData.getReportRecordData';

export default class customerReportOverrideForm extends LightningElement {
  @track  files = []; 
  @api recordId;
  @wire (getReports,{accountId:'$recordId'})
  connectedCallback(){
    getReports()
    .then(data => {
        this.files = data;
        this.error = undefined;
    })
    .catch(error => {
        this.error = error;
        this.files = undefined;
    });
}    

  handleChange(event){  
   let customerReportType = event.target.value;
   getReportRecordData({ customerRep: customerReportType })
    .then((result) => {
      let reportInfo = JSON.parse(result);
      if(reportInfo.length > 0){
        this.Note = reportInfo[0].Note__c;
        this.Account = reportInfo[0].Account__c;
        this.Data_Source = reportInfo[0].Data_Source__c;
        this.Frequency = reportInfo[0].Frequency__c;
        this.FTPp = reportInfo[0].FTP__c;
        this.Parcel = reportInfo[0].Parcel__c;
        this.Schedule = reportInfo[0].Schedule__c;
        this.Template = reportInfo[0].Template__c;
        this.Title = reportInfo[0].Title__c;
        this.Code = reportInfo[0].Code__c;
        this.External = reportInfo[0].External_Id__c;
        this.DataChange = reportInfo[0].DataChange__c;
        }
      })
    .catch(error => {
        this.dispatchEvent(new ShowToastEvent({
            title: error.name,
            message: error.message,
            variant: 'error',
            mode:'sticky'
            }));
        })
}
  handleSuccess(event) {
    this.accountId = event.detail.id;
    const toastEvent = new ShowToastEvent({
        title: "Success",
        message: "Record ID: " + event.detail.id,
        variant: "success"
    });
    this.dispatchEvent(toastEvent);
  }
}