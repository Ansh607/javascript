const accountId = 1333233
let accountEmail = "ansh@google.com"
var accountPassword= "1232121"
 accountCity = "Gwalior"
 let accountState;

 //accountId = 4 // not allowed


accountEmail = "as@as.com"
accountPassword = "23214411"
accountCity = "Bengaluru"

// console.log(accountId);
// console.log(accountEmail);

/*
prefer not to use var
because of issue in block scope and functional scope 
*/
/*
Avoid using 'var' in JavaScript because:
1. 'var' is function-scoped, not block-scoped, which can lead to unexpected behavior.
2. Variables declared with 'var' can be hoisted and accessed before declaration, causing bugs.
3. 'let' and 'const' provide block scope and are safer for modern JavaScript development.
*/

console.table({ accountId, accountEmail, accountPassword, accountCity,accountState });
