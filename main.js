import colors from '@colors/colors';
colors.enable();
import readline from 'readline';
import { strategySelector } from './utils/algoSelector.js';

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
  console.log('Choose your strategy: \n1. ByHalfNumbersMethod \n2. BySqrtMethod \n3. BySeiveOfEratosthenesMethod \n4. fastest BHN \n5. fastest BSN \n6. fastest SOE');
  const strategy = await askQuestion(' startegy : ');
  if(!['1','2','3','4','5','6'].includes(strategy)){
    console.log('Invalid strategy choice. Please enter 1, 2, 3, 4, 5, or 6.'.red);
    rl.close();
    return;
  }

  const result = strategySelector(start,end,strategy)
  // RESULT
  console.log(result)
  
  
  // Close the readline interface
  rl.close();
};

// Run the main function
main();