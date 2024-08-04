const accountId = 12345
let accountEmail = "Vaish@gmail.com"
var accountPassword = "98765"
accountCity = "Jalna"

console.table([accountId,accountEmail,accountPassword,accountCity])

let accountState;
/*
Prefer not to use Var because 
issues is in block scope and functinal scope;

*/

console.log(accountState)
// it display the undefined 