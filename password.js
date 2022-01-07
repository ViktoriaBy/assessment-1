const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome, please type your Password:", function(input) {
    
    
    if(input.length >= 10){
        console.log("Successfully entered Password")
    }else{
        console.log("Password needs to be at least 10 characters!")
    }

    if(input.length == 0){
        console.log("Password cannot be blank!")
    }
  
   
 
    reader.close()
  });
