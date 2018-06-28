import { Given, When, Then } from "cucumber";
import Constants from "../../../src/utility/constants";
import Driver from "../../../src/utility/driver";
import Email from "../../../src/utility/email";

// Pulling XML specific locators and data
const pagePath = Constants.getLocatorPath();
const dataPath = "../data/";

Then(/^verify policy period$/, () => {
  const packet = xmldata.getElementsByTagName("Packet")[0];
  const polFrom = packet.getElementsByTagName("OrigEffDate")[0].childNodes[0];
  const polTo = packet.getElementsByTagName("OrigExpDate")[0].childNodes[0];
  console.log("Policy Period "+ polFrom + " TO " + polTo);
});

Then(/^verify active driver details$/, () => {
    const activeDrivers = xmldata.getElementsByTagName("Active")[0].childNodes;
    const activeDriversXMl = xmldata.getElementsByTagName("Active")[0];
      for (var i = 0; i<activeDrivers.length; i++) {
        const aDriverNum = activeDriversXMl.getElementsByTagName("DriverNum")[i].childNodes[0].toString();
        const aDriverName = activeDriversXMl.getElementsByTagName("Name")[i].childNodes[0].toString();
        const aDriverStaus = activeDriversXMl.getElementsByTagName("Excluded")[i].childNodes[0].toString();
        const aDriverSR22 = activeDriversXMl.getElementsByTagName("SR22")[i].childNodes[0].toString();
        console.log(aDriverNum+" "+ aDriverName+" "+ aDriverStaus+" "+ aDriverSR22);
      }
});

Then(/^verify excluded driver details$/, () => {
  const activeDrivers = xmldata.getElementsByTagName("Active")[0].childNodes;
  const excludedDriverXml = xmldata.getElementsByTagName("Drivers")[0].getElementsByTagName("Excluded")[activeDrivers.length];//data

  const excludedDrivers = excludedDriverXml.getElementsByTagName("Driver")[0].childNodes;
  //const edriverNum = excludedDriversXml.getElementsByTagName("DriverNum")[0].childNodes[0].toString();
 // console.log ("XML is "+ excludedDriverXml);
    for (var i = 0; i<excludedDrivers.length; i++) {
      const edriverNum = excludedDriverXml.getElementsByTagName("DriverNum")[0].childNodes[0].toString();
      const eDriverName = excludedDriverXml.getElementsByTagName("Name")[i].childNodes[0];
      const eDriverStaus = excludedDriverXml.getElementsByTagName("Excluded")[i].childNodes[0];
      const eDriverSR22 = excludedDriverXml.getElementsByTagName("SR22")[i].childNodes[0];
      console.log(edriverNum+" "+ eDriverName+" "+ eDriverStaus+" "+ eDriverSR22);
      console.log("  I  "+i);
    }
});

Then(/^verify coverage details$/, () => {
  const coverages = xmldata.getElementsByTagName("Version")[0].getElementsByTagName("Coverages")[0].childNodes;
  const coverage = xmldata.getElementsByTagName("Version")[0].getElementsByTagName("Coverages")[0];
    for (var i = 0; i<coverages.length; i++) {
      const covName = coverage.getElementsByTagName("Description")[i].childNodes[0];
      const perPerson = coverage.getElementsByTagName("Desc1")[i].childNodes[0];
      const perAccident = coverage.getElementsByTagName("Desc2")[i].childNodes[0];
      console.log(covName+" --- "+ perPerson+" --- "+ perAccident);
    }
});

Then(/^verify vehicle details$/, () => {
  const vehicles = xmldata.getElementsByTagName("Vehicles")[0].childNodes;
  const vehicle = xmldata.getElementsByTagName("Vehicles")[0];
      for (var i = 0; i<vehicles.length; i++) {
      const vehNum = vehicle.getElementsByTagName("VehNum")[i].childNodes[0].toString();
      const vehyear = vehicle.getElementsByTagName("Year")[i].childNodes[0].toString();
      const vehModel = vehicle.getElementsByTagName("Model")[i].childNodes[0].toString();
      const vehVIN = vehicle.getElementsByTagName("VIN")[i].childNodes[0].toString();
      const comp = vehicle.getElementsByTagName("COM_COL_DED")[i].childNodes[0].toString();
      console.log(vehNum+" "+ vehyear+" "+ vehModel+" "+ vehVIN +" "+ comp);
    }
});
Then(/^verify premium details$/, () => {
  const vehicles = xmldata.getElementsByTagName("Vehicles")[0].childNodes;
  const coverages = xmldata.getElementsByTagName("Vehicles")[0].getElementsByTagName("Coverages")[0].childNodes;
  console.log("vehicles count "+ vehicles.length+ " coverages count " +coverages.length)
    for (var i = 0; i<vehicles.length; i++) {
    console.log("Vehicle # "+ i);
    const vehicle = xmldata.getElementsByTagName("Vehicle")[i];
      for (var j = 0; j<coverages.length; j++) {
      const covPremium = vehicle.getElementsByTagName("CovPrem")[j].childNodes[0].nodeValue;
      console.log(covPremium);
      }
    }
});


