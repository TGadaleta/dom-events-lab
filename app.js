/*-------------------------------- Constants --------------------------------*/
const memory = [] //create an empty array to act as our memeory
/*-------------------------------- Variables --------------------------------*/
let workingNum = '' //set our working number to an empty string
let result //create a variable that will hold the result 
/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator'); //grab the calculator frame including buttons
const display = document.querySelector('.display') //grab the display of the calculator
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => { //creates an event when a button is pushed based on which button is pushed
    checkIfNum(event) //function to check if the button pushed is a number
    checkIfOperator(event) //function to check if the button pushed is an operator
    checkIfEquals(event) //function to check if the button pushed is the equals sign
})
/*-------------------------------- Functions --------------------------------*/
function checkIfNum(event){
    if (event.target.classList.contains('number')) { //if the button is a number
        workingNum+=event.target.innerText //add it to the working number variable as a string
        display.textContent = workingNum //display what our current working number is
    }
}
function checkIfOperator(event){
    if (event.target.classList.contains('operator')) { //if the button is an operator
        if (event.target.innerText==='C'){ //if its specifically the C button
            memory=[] //reset our memory array to an empty array
            display.textContent = '' //clear our display
        }
        else { //if it is any other operator button
            memory.push(parseInt(workingNum)) //pushes our working number into our memory array as a number instaed of a string
            memory.push(event.target.innerText) //pushes the string value of the button pushed to the next index of memory array
        }
        workingNum = '' //which ever operator button is pushed, clear our working number variable
    }
}
function checkIfEquals(event){
    if (event.target.classList.contains('equals')){ //if the button is equals
        memory.push(parseInt(workingNum)) //push the working number into the memory array as a string
        result = memory[0] //set result to the first number that is placed in the string
        for (let i = 1;i<memory.length;i++){ //go through each index of the array
            if (memory[i]==='+') result += memory[i+1] //if the operator is add, add result with the number in the following index
            
            if (memory[i]==='*') result *= memory[i+1] //if the operator is multiplication, multiply result with the number in the follow index

            if (memory[i]==='/') result /= memory[i+1] //if the operator is division, divide result with the number in the following index
            
            if (memory[i]==='-') result -= memory[i+1] //if the operator is subtraction, subtract result with the number in the following index
        }   //because there are no if conditions for numbers, each index that has a number is passed over without doing anything
        display.textContent = result //display the final result to the calculator display
    }
}
