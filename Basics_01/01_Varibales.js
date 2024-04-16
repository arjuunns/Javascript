const accountId = 144553;
let accountEmail = "arjun@gmail.com";
var accountPassword = "12345"; /* Prefer not to use var because of issue in block scope and functional scope*/
accountCity = "Jaipur"; /* js by default assigns memory and identifies datatype even if dataype is not mentioned but it is not recommended to use such practice */
// accountId=2 // not allowed as accountId was const
accountEmail = "harshu@yahoo.com";
accountPassword = "645654";
accountCity = "Dhanaura";
console.log(accountId);
let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity,accountState,]); // multiple print statements in single go
