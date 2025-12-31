const primeCheckerByHalf = (num) => {
    if (num < 2) return false
    for(let i=2;i<=num/2;i++){
        if(num % i == 0) return false 
    }
    return true;
}


const primeBtwnStartEndHALF = (start,end) => {
    let primes = [];
    let num = start;
    while(num <= end){
        let isPrime = primeCheckerByHalf(num);
        if(isPrime) {
            primes.push(num);
            num++;
        } else {
            num++;
        }
    }
    return primes;
}


export { primeBtwnStartEndHALF };