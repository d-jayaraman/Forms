import { Given, When, Then } from "cucumber";
import Constants from "../../../src/utility/constants";
import Driver from "../../../src/utility/driver";
import Email from "../../../src/utility/email";

// Pulling XML specific locators and data
const pagePath = Constants.getLocatorPath();
const dataPath = "../data/";

Then(/^verify policy period$/, () => {
  const packet = xmldata.getElementsByTagName("Packet")[0];
  const polfrom = packet.getElementsByTagName("OrigEffDate")[0].childNodes[0];
  const polto = packet.getElementsByTagName("OrigExpDate")[0].childNodes[0];
  console.log("Policy Period "+ polfrom + " TO " + polto);
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
  const excludedDrivers = xmldata.getElementsByTagName("Excluded")[0].childNodes;
  const excludedDriversXml = xmldata.getElementsByTagName("Excluded")[0];
  const edriverNum = excludedDriversXml.getElementsByTagName("DriverNum")[0].childNodes[0].toString();
  //console.log (excludedDriversXml);
    for (var i = 0; i<excludedDrivers.length; i++) {
      //const edriverNum = excludedDriversXml.getElementsByTagName("DriverNum")[0].childNodes[0].toString();
      //const eDriverName = drivers.getElementsByTagName("Name")[i].childNodes[0];
      //const eDriverStaus = drivers.getElementsByTagName("Excluded")[i].childNodes[0];
      //const eDriverSR22 = drivers.getElementsByTagName("SR22")[i].childNodes[0];
      //console.log(driverNum+" "+ driverName+" "+ driverStaus+" "+ driverSR22);
      console.log(edriverNum + "  I  "+i);
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
      //const vehVIN = vehicle.getElementsByTagName("VIN")[i].childNodes[0].toString();
      console.log(vehNum+" "+ vehyear+" "+ vehModel+" "+ vehVIN);
    }
});
