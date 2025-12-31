import colors from '@colors/colors';
colors.enable();
import readline from 'readline';
import { primeBtwnStartEndHALF,primeBtwnStartEndSQRT,primeBtwnStartSEIVE } from './logic/index.js';

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to ask a question and get input
const askQuestion = (query) => {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
};

// Main function
const main = async () => {
  console.log('Hello! Welcome to Prime Genrator\n');
  
  // Get start number
  const start = await askQuestion('start :  ');
  if(isNaN(start) || isNaN(Number(start)) || Number(start)<1){
    console.log('Invalid start number. Please enter a valid positive integer.'.red);
    rl.close();
    return;
  }
  
  // Get end number
  const end = await askQuestion('end : ');
  if(isNaN(end) || isNaN(Number(end)) || Number(end)<1 || Number(end)<Number(start)){
    console.log('Invalid end number. Please enter a valid positive integer greater than or equal to start.'.red);
    rl.close();
    return;
  }
  
  // Get strategy
  console.log('Choose your strategy: \n1. ByHalfNumbersMethod \n2. BySqrtMethod \n3. BySeiveOfEratosthenesMethod');
  const strategy = await askQuestion(' startegy : ');
  if(!['1','2','3'].includes(strategy)){
    console.log('Invalid strategy choice. Please enter 1, 2, or 3.'.red);
    rl.close();
    return;
  }

  let primes;
  
  // Process inputs and generate primes (placeholder logic)
  let startTime;
  let endTime;
    // Here you would call the appropriate prime generation function based on strategy
    switch(strategy){
        case '1':
            startTime = performance.now();
            primes = primeBtwnStartEndHALF(Number(start), Number(end));
            endTime = performance.now();
            break;
        case '2':
            startTime = performance.now();
            primes = primeBtwnStartEndSQRT(Number(start), Number(end));
            endTime = performance.now();
            break;
        case '3':
            startTime = performance.now();
            primes = primeBtwnStartSEIVE(Number(start), Number(end));
            endTime = performance.now();
            break;
    }
    primes = primeBtwnStartEndHALF(Number(start), Number(end));

  // RESULT
  console.log('\nRESULT:');
  console.log(`Primes from ${start} to ${end} using strategy ${strategy}...`);
  console.log(' Primes : ', colors.bgGreen(primes.join(', ')));
  console.log('Count : ', colors.magenta(primes.length));
  console.log(`Time elapsed : ${(endTime-startTime).toFixed(3)} ms`.green); // Placeholder for time taken
  
  
  // Close the readline interface
  rl.close();
};

// Run the main function
main();