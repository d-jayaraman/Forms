import { Given, When, Then } from "cucumber";
import Constants from "../../../src/utility/constants";
import Driver from "../../../src/utility/driver";
import Email from "../../../src/utility/email";

// Pulling XML specific locators and data
const pagePath = Constants.getLocatorPath();
const dataPath = "../data/";

Then(/^verify expiration date$/, () => {
  const packet = xmldata.getElementsByTagName("Packet")[0];
  const expirationDate = packet.getElementsByTagName("TrueExpTimestamp")[0].childNodes[0];
  console.log("expirationdate "+ expirationDate);
});

Then(/^verify notice of cancellation previously forwarded effective date$/, () => {
  const financial = xmldata.getElementsByTagName("Financial")[0];
  const prevCancelDate = financial.getElementsByTagName("PREV_CANCEL_DATE")[0].childNodes[0].toString();
  console.log("prevcanceldate "+prevCancelDate);
});
