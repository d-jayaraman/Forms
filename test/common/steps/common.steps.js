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

Then(/^Verify company address$/, () => {
    const programprofile = xmldata.getElementsByTagName("ProgramProfile")[0];
    const compname = programprofile.getElementsByTagName("PrintCoName1")[0].childNodes[0].toString();
    const compadd1 = programprofile.getElementsByTagName("PrintCoAddr1")[0].childNodes[0].toString();
    const compadd2 = programprofile.getElementsByTagName("PrintCoAddr2")[0].childNodes[0].toString();
    console.log(compadd1, compadd2);
    assert.equal(compname,'Infinity Value Added', 'Failed::Company name is wrong');
    assert.equal(compadd1,'2201 4th AvenueNorth', 'Failed::Company address is wrong');
});

Then(/^Verify Policy number$/, () => {
  const polid = xmldata.getElementsByTagName("PolicyId")[0].childNodes[0].toString();
  assert.equal(polid, '110801104017001', 'Failed::Policy ID did not Match');
});

  /*
  var transactiontinfo = xml.responseXML.getElementsByTagName("TransactionInfo")[0];
  var programprofile = xml.responseXML.getElementsByTagName("ProgramProfile")[0];
  var version = xml.responseXML.getElementsByTagName("Version")[0];
  var fin_cancel = xml.responseXML.getElementsByTagName("Financial")[0].getElementsByTagName("CancelPending")[0];
  var agency = xml.responseXML.getElementsByTagName("Agency")[0];
  var polholder = xml.responseXML.getElementsByTagName("PolHolder")[0];


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
