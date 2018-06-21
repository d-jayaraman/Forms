import { Given, When, Then } from "cucumber";
import Utility from "../../../src/utility/utility";
import Constants from "../../../src/utility/constants";
import Driver from "../../../src/utility/driver";

// Pulling path of page specific locators for elements
let pagePath = Constants.getLocatorPath();
/**
 * Common Steps
 */
Given(/^Policy number is "(.*?)" for "(.*?)"$/, (upolnum, scenario) => {
  return new Promise(function(resolve, reject) {
    const filename = upolnum + '_' + scenario + ' XML.xml',
          fs = require('fs'),
          path = require('path'),
          DOMParser = require('xmldom').DOMParser,
          filePath = path.join('C:/Users/jayarad/Desktop/XML/Code/', filename);
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data) //https://stackoverflow.com/questions/18386361/read-a-file-in-node-js
          { if (!err) {
              resolve(
                global.xmldata = new DOMParser().parseFromString(data,'text/xml'));
                //console.log(xmldata)
                //programprofile = xmldata.getElementsByTagName("ProgramProfile")[0];
              } else {  reject(err);  }
          }
        );
  })
});

Then(/^Verify Policy number$/, () => {
  const version = xmldata.getElementsByTagName("Version")[0];
  const polid = version.getElementsByTagName("PolicyId")[0].childNodes[0].toString();
  //assert.equal(polid, '110801104017001', 'Failed::Policy ID did not Match');
  console.log("polid "+ polid);
});

Then(/^Verify company address$/, () => {
    const programprofile = xmldata.getElementsByTagName("ProgramProfile")[0];
    const compname = programprofile.getElementsByTagName("PrintCoName1")[0].childNodes[0].toString();
    const compadd1 = programprofile.getElementsByTagName("PrintCoAddr1")[0].childNodes[0].toString();
    const compadd2 = programprofile.getElementsByTagName("PrintCoAddr2")[0].childNodes[0].toString();
    //assert.equal(compname,'Infinity Value Added', 'Failed::Company name is wrong');
    //assert.equal(compadd1,'2201 4th Avenue North', 'Failed::Company address is wrong');
    console.log(compname+compadd1+compadd2);
});

Then(/^Verify Agency ID$/, () => {
  const agency = xmldata.getElementsByTagName("Agency")[0];
  const agencynum = agency.getElementsByTagName("AgencyNum")[0].childNodes[0].toString();
  //assert.equal(agencynum, '9999', 'Failed::Agency Number ID did not Match');
  console.log("agencynum" + agencynum);
});

Then(/^Verify Date of Notice$/, () => {
  const transactiontinfo = xmldata.getElementsByTagName("TransactionInfo")[0];
  const dateofnotice = transactiontinfo.getElementsByTagName("Field")[0].childNodes[0].toString();
  console.log("dateofnotice "+ dateofnotice);
});

Then(/^Verify canellation date$/, () => {
  const fincancel = xmldata.getElementsByTagName("Financial")[0].getElementsByTagName("CancelPending")[0];
  const cancellationdate = fincancel.getElementsByTagName("CancellationDate")[0].childNodes[0].toString();
  console.log("cancellationdate "+ cancellationdate);
});

Then(/^Verify reason for cancellation$/, () => {
  const fincancel = xmldata.getElementsByTagName("Financial")[0].getElementsByTagName("CancelPending")[0];
  const cancelreason = fincancel.getElementsByTagName("CancelReason")[0].childNodes[0].toString();
  console.log("cancelreason "+cancelreason);
});

Then(/^Verify Insured person details$/, () => {
  const polholder = xmldata.getElementsByTagName("PolHolder")[0];
  const firstname = polholder.getElementsByTagName("FirstName")[0].childNodes[0].toString();
  console.log(firstname);
  const lastname = polholder.getElementsByTagName("LastName")[0].childNodes[0].toString();
  console.log(lastname);
  const mailaddr1 = polholder.getElementsByTagName("MailAddr1")[0].childNodes[0].toString();
  console.log(mailaddr1);
  const mailaddr2 = polholder.getElementsByTagName("MailAddr2")[0].childNodes[0];
  if(mailaddr2!=null){console.log(mailaddr2);};
  const mailcity = polholder.getElementsByTagName("MailCity")[0].childNodes[0].toString();
  console.log(mailcity);
  const mailstate = polholder.getElementsByTagName("MailState")[0].childNodes[0].toString();
  console.log(mailstate);
  const mailzip = polholder.getElementsByTagName("MailZip")[0].childNodes[0].toString();
  console.log(mailzip);
  //console.log(firstname+lastname+mailaddr1+mailaddr2+mailcity+mailstate+mailzip);
});

  /*
  const transactiontinfo = xmldata.getElementsByTagName("TransactionInfo")[0];
  const programprofile = xmldata.getElementsByTagName("ProgramProfile")[0];
  const version = xmldata.getElementsByTagName("Version")[0];
  const fin_cancel = xmldata.getElementsByTagName("Financial")[0].getElementsByTagName("CancelPending")[0];
  const agency = xmldata.getElementsByTagName("Agency")[0];
  const polholder = xmldata.getElementsByTagName("PolHolder")[0];


 // console.log(compname).innerHTML;
  document.getElementById("demo").innerHTML =
  programprofile.getElementsByTagName("PrintCoName1")[0].childNodes[0].nodeValue + "<br>"  +
  programprofile.getElementsByTagName("PrintCoAddr1")[0].childNodes[0].nodeValue + "<br>" +
  programprofile.getElementsByTagName("PrintCoAddr2")[0].childNodes[0].nodeValue + "<br>" +
  version.getElementsByTagName("PolicyId")[0].childNodes[0].nodeValue + "<br>" +
  transactiontinfo.getElementsByTagName("Field")[0].childNodes[0].nodeValue + "<br>" +
  transactiontinfo.getElementsByTagName("Field")[1].childNodes[0].nodeValue + "<br>" +
  fin_cancel.getElementsByTagName("CancellationDate")[0].childNodes[0].nodeValue +  "<br>" +
  fin_cancel.getElementsByTagName("CancelReason")[0].childNodes[0].nodeValue + "<br>" +
  agency.getElementsByTagName("AgencyNum")[0].childNodes[0].nodeValue + "<br>" +
  polholder.getElementsByTagName("FirstName")[0].childNodes[0].nodeValue +  " "  +
  polholder.getElementsByTagName("LastName")[0].childNodes[0].nodeValue +  "<br> "  +
  polholder.getElementsByTagName("MailAddr1")[0].childNodes[0].nodeValue +  "<br> "  +
  polholder.getElementsByTagName("MailCity")[0].childNodes[0].nodeValue + ", " +
  polholder.getElementsByTagName("MailState")[0].childNodes[0].nodeValue +  " " +
  polholder.getElementsByTagName("MailZip")[0].childNodes[0].nodeValue;


*/
