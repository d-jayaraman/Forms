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

Then(/^verify notice of cancellation previously forwarded effective date$/, () => {
  const financial = xmldata.getElementsByTagName("Financial")[0];
  const prevcanceldate = financial.getElementsByTagName("PREV_CANCEL_DATE")[0].childNodes[0].toString();
  console.log("prevcanceldate "+prevcanceldate);
});
