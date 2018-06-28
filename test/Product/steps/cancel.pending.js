import { Given, When, Then } from "cucumber";
import Constants from "../../../src/utility/constants";
import Driver from "../../../src/utility/driver";
import Email from "../../../src/utility/email";

// Pulling XML specific locators and data
const pagePath = Constants.getLocatorPath();
const dataPath = "../data/";

Then(/^verify canellation date$/, () => {
  const finCancel = xmldata.getElementsByTagName("Financial")[0].getElementsByTagName("CancelPending")[0];
  const cancellationDate = finCancel.getElementsByTagName("CancellationDate")[0].childNodes[0].toString();
  console.log("cancellationdate "+ cancellationDate);
});

Then(/^verify reason for cancellation$/, () => {
  const fincancel = xmldata.getElementsByTagName("Financial")[0].getElementsByTagName("CancelPending")[0];
  const cancelreason = fincancel.getElementsByTagName("CancelReason")[0].childNodes[0].toString();
  console.log("cancelreason "+cancelreason);
});
