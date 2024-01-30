const fs = required('fs');
fs.writeFile('data\\accounts.csv', username.value + ',' + password.value + ',' + email.value);