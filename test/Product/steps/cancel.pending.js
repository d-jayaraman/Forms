import { Given, When, Then } from "cucumber";
import Constants from "../../../src/utility/constants";
import Driver from "../../../src/utility/driver";
import Email from "../../../src/utility/email";

// Pulling page specific locators and data
const pagePath = Constants.getLocatorPath();
const dataPath = "../data/";

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
