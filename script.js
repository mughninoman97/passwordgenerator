const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase') //boolean
const lowercaseEl = document.getElementById('lowercase') //boolean
const numbersEl = document.getElementById('numbers') //boolean
const symbolsEl = document.getElementById('symbols') //boolean
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard') //copy

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}




clipboardEl.addEventListener('click', () => {
    // copy function

    
})

generateEl.addEventListener('click', () => {
   
    // check all fields are checked
    if(!(uppercaseEl.checked || lowercaseEl.checked || numbersEl.checked || symbolsEl.checked)){
        return alert('one field is required')

    }
    const result = generatePassword()
    resultEl.innerText = result;

    
})

function generatePassword() {
    console.log('it worked');
   
    let passwordprocess = ""
    let password = ""
    console.log(password);
    console.log(uppercaseEl.checked);
    if(uppercaseEl.checked){
        
        passwordprocess +=  randomFunc.upper
    }
    if(lowercaseEl.checked){
        passwordprocess += randomFunc.lower
    }
    if(numbersEl.checked){
        passwordprocess += randomFunc.number
    }
    if(symbolsEl.checked){
        passwordprocess += randomFunc.symbol
    }

    for (let i = 1; i <= lengthEl.value; i++) {
         password += passwordprocess[Math.floor(Math.random() * passwordprocess.length)]
        
    }
    return password
    console.log(password);
    
}

function getRandomLower() {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let small = "";
    for(let i=0;i < lower.length;i++){
        const randomindex =   Math.floor(Math.random()* lower.length);
        const randomletter = lower.charAt(randomindex)
        small = small + randomletter
    }
    return small;
    
 
}

function getRandomUpper() {
    let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let capital = "";
    
    for (let i = 0; i < caps.length; i++) {
        const upperIndex = Math.floor(Math.random() * caps.length)        
        const upperletter = caps.charAt(upperIndex)
        capital = capital+ upperletter

    }
    return capital
   
}

function getRandomNumber() {
    
    let numbers=""
    for (let i = 0; i <= 9; i++) {
       
         numbers = numbers + Math.floor(Math.random() * 10) 
       
        
    }
    return numbers
}

function getRandomSymbol() {
    let chars = '!@#$%^&*()';
    let special = "";
    for(let i=0;i < chars.length;i++){
        charindex=  Math.floor(Math.random() * chars.length)
        const character = chars.charAt(charindex)
        special = special+character
    }
    return special;
}





