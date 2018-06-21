
  const transactiontinfo = xmldata.getElementsByTagName("TransactionInfo")[0];
  const programprofile = xmldata.getElementsByTagName("ProgramProfile")[0];
  const version = xmldata.getElementsByTagName("Version")[0];
  const fin_cancel = xmldata.getElementsByTagName("Financial")[0].getElementsByTagName("CancelPending")[0];
  const agency = xmldata.getElementsByTagName("Agency")[0];
  const polholder = xmldata.getElementsByTagName("PolHolder")[0];


 console.log(compname).innerHTML;
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
