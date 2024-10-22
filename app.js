/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let workingNum = ''
let memory = []
let disText = ''
let result
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
        workingNum+=event.target.innerText
        display.textContent = workingNum
    }
    // Example
    if (event.target.innerText === '*') {
        memory.push(parseInt(workingNum))
        memory.push(event.target.innerText)
        workingNum = ''
        console.log(memory)
    }

    if (event.target.innerText === '='){
        memory.push(parseInt(workingNum))
        result = memory[0]
        for (let i = 1;i<memory.length;i++){
            if (memory[i]==='+'){
                result += memory[i+1]
            }
            if (memory[i]==='*'){
                result *= memory[i+1]
            }
        }
        display.textContent = result
    }
  });
  
  
/*-------------------------------- Functions --------------------------------*/
