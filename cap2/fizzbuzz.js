// My FizzBuzz
for(let i = 1; i <= 100; i++){
    var fizzBuzz = "";
    if(i % 3 == 0){
        fizzBuzz += "Fizz";
    }
    if(i % 5 == 0){
        fizzBuzz += "Buzz";
    }
    if(fizzBuzz.length != 0){
        console.log(fizzBuzz);
    }else{
        console.log(i);
    }
}

// Solution DX
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}