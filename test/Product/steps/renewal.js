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

Then(/^verify driver details$/, () => {

   var x, i, txt;
    txt = "";
    x = xmldata.getElementsByTagName("Active")[0].childNodes;
    const drivers = xmldata.getElementsByTagName("Drivers")[0];
   // console.log(x);
     for (i = 0; i< x.length; i++) {
      txt += drivers.getElementsByTagName("Name")[i].childNodes[0];
       console.log("txt inside  "+ txt);
     }
    console.log("txt outside   "+ txt);

});
