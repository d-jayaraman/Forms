import { Given, When, Then } from "cucumber";
import Utility from "../../../src/utility/utility";
import Constants from "../../../src/utility/constants";
import Driver from "../../../src/utility/driver";

// Pulling path of page specific locators for elements
let pagePath = Constants.getLocatorPath();
/**
 * Common Steps
 */
Given(/^policy number is "(.*?)" for "(.*?)"$/, (upolnum, scenario) => {
  return new Promise(function(resolve, reject) {
    global.scenario=scenario;
    const filename = upolnum + '_' + scenario + ' XML.xml',
          fs = require('fs'),
          path = require('path'),
          DOMParser = require('xmldom').DOMParser,
          filePath = path.join('C:/Users/jayarad/Desktop/XML/Code/', filename);
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data) //https://stackoverflow.com/questions/18386361/read-a-file-in-node-js
          { if (!err) {
              resolve(  global.xmldata = new DOMParser().parseFromString(data,'text/xml'));
              } else {  reject(err);  }
          }
        );
  })
});


Then(/^verify scenario$/, () => {
  const version = xmldata.getElementsByTagName("Packet")[0];
  const packetType = version.getElementsByTagName("PacketType")[0].childNodes[0].toString();
  assert.equal(packetType, scenario, 'Failed::Scenario-XML mismatch');
  console.log("packettype "+ packetType);
});


Then(/^verify policy number$/, () => {
  const version = xmldata.getElementsByTagName("Version")[0];
  const polID = version.getElementsByTagName("PolicyId")[0].childNodes[0].toString();
  //assert.equal(polid, '110801104017001', 'Failed::Policy ID did not Match');
  console.log("polid "+ polID);
});

Then(/^verify company address$/, () => {
    const programProfile = xmldata.getElementsByTagName("ProgramProfile")[0];
    const compName = programProfile.getElementsByTagName("PrintCoName1")[0].childNodes[0].toString();
    const compAdd1 = programProfile.getElementsByTagName("PrintCoAddr1")[0].childNodes[0].toString();
    const compAdd2 = programProfile.getElementsByTagName("PrintCoAddr2")[0].childNodes[0].toString();
    //assert.equal(compname,'Infinity Value Added', 'Failed::Company name is wrong');
    //assert.equal(compadd1,'2201 4th Avenue North', 'Failed::Company address is wrong');
    console.log(compName+compAdd1+compAdd2);
});

Then(/^verify agency id$/, () => {
  const agency = xmldata.getElementsByTagName("Agency")[0];
  const agencyNum = agency.getElementsByTagName("AgencyNum")[0].childNodes[0].toString();
  //assert.equal(agencynum, '9999', 'Failed::Agency Number ID did not Match');
  console.log("agencynum" + agencyNum);
});

Then(/^verify date of notice$/, () => {
  const transactiontInfo = xmldata.getElementsByTagName("TransactionInfo")[0];
  const dateOfNotice = transactiontInfo.getElementsByTagName("Field")[0].childNodes[0].toString();
  console.log("dateofnotice "+ dateOfNotice);
});

Then(/^verify insured person details$/, () => {
  const polHolder = xmldata.getElementsByTagName("PolHolder")[0];
  const firstName = polHolder.getElementsByTagName("FirstName")[0].childNodes[0].toString();
  console.log(firstName);
  const lastName = polHolder.getElementsByTagName("LastName")[0].childNodes[0].toString();
  console.log(lastName);
  const mailAddr1 = polHolder.getElementsByTagName("MailAddr1")[0].childNodes[0].toString();
  console.log(mailAddr1);
  // const mailAddr2 = polHolder.getElementsByTagName("MailAddr2")[0].childNodes[0].nodeValue;
  // if(mailAddr2!=null){console.log(mailAddr2);};
  const mailCity = polHolder.getElementsByTagName("MailCity")[0].childNodes[0].toString();
  console.log(mailCity);
  const mailState = polHolder.getElementsByTagName("MailState")[0].childNodes[0].toString();
  console.log(mailState);
  const mailZip = polHolder.getElementsByTagName("MailZip")[0].childNodes[0].toString();
  console.log(mailZip);
  //console.log(firstname+lastname+mailaddr1+mailaddr2+mailcity+mailstate+mailzip);
});

Then(/^Verify name insured$/, () => {
  const polHolder = xmldata.getElementsByTagName("PolHolder")[0];
  const nameInsured = polHolder.getElementsByTagName("NamedInsured")[0].childNodes[0].toString();
  console.log(nameInsured);
  });
