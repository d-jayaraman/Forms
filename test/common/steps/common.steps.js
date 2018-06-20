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
  var filename = upolnum + '_' + scenario + ' XML.xml';
  var fs = require('fs'),
    path = require('path'),
    filePath = path.join('C:/Users/jayarad/Desktop/XML/Code/', filename);
      fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data) //https://stackoverflow.com/questions/18386361/read-a-file-in-node-js
        {
        if (!err) {
            console.log("File reader bagan");
            var DOMParser = require('xmldom').DOMParser;
            global.xmldata = new DOMParser().parseFromString(data,'text/xml');
            global.polid = xmldata.getElementsByTagName("PolicyId")[0].childNodes[0].toString();
            console.log("inside file reader policy# is----------------- " + polid);
            } else {
            console.log(err);}
        });
  });

Then(/^Verify company name is "(.*?)"$/, (compid) => {
    const companyname = global.xmldata.getElementsByTagName("PrintCoName1")[0].childNodes[0].toString();
    console.log("THEN : Company name is----------------- " + companyname);
    });

Then(/^Verify Policy number "(.*?)"$/, dmy => {
  global.polid = xmldata.getElementsByTagName("PolicyId")[0].childNodes[0].toString();
  console.log("Verify policy# is----------------- " + global.polid);
  assert.equal(polid, '110801104017001', 'Failed:: Policy ID did not Match' );

  });



