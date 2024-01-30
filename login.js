const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

var fs = require('fs');
var csv = require('csv-parser');
function writeSuccess(err) {
    // check if there is error
    if (err) console.error(err);
    else console.log('write success');
  }
  
fs.appendFile("data\\accounts.csv", "DUMMY", writeSuccess);