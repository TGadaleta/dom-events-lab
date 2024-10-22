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
  
    if (event.target.classList.contains('number')) {
        workingNum+=event.target.innerText
        display.textContent = workingNum
    }

    if (event.target.classList.contains('operator')) {
        if (event.target.innerText==='C'){
            memory=[]
            display.textContent = ''
        }
        else {
            memory.push(parseInt(workingNum))
            memory.push(event.target.innerText)
        }
        workingNum = ''
    }

    if (event.target.classList.contains('equals')){
        memory.push(parseInt(workingNum))
        result = memory[0]
        for (let i = 1;i<memory.length;i++){
            if (memory[i]==='+'){
                result += memory[i+1]
            }
            if (memory[i]==='*'){
                result *= memory[i+1]
            }
            if (memory[i]==='/'){
                result /= memory[i+1]
            }
            if (memory[i]==='-'){
                result -= memory[i+1]
            }
        }
        display.textContent = result
    }
  });
  
  
/*-------------------------------- Functions --------------------------------*/
