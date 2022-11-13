let e=(arr)=>{
    for (let i = 0; i < arr.length; i++){
        const number = arr[i]
        let isPrime = true;
        if (number === 1) {
            console.log("1 is neither prime nor composite number.");
        }
        else if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        if (isPrime) {
                console.log(`${number} is a prime number`);
            } else {
                console.log(`${number} is a not prime number`);
            }
        }
        else {
            console.log("The number is not a prime number.");
        }
        }
}
console.log(e([1,2,3,4,3,4,2]));