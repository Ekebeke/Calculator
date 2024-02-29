function sum(a,b){
    return a + b;
}

let minus = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;

function calculator(){
    let a = prompt('Enter first number')

    while(isNaN(a)){
        a = prompt(' Not a number')
    }

    let op = prompt("Enter operator : ['+', '-', '*', '/' ]")
    
    while(!['+','-','*','/'].includes(op)){
        op = prompt('Not a operator')
    }


    let b = prompt('Enter second number')

    while(isNaN(b)){
        b = prompt('Not a number')
    }


    if ( op == '+'){
        alert(Number(a) + Number(b))
    }else if( op == '-'){
        alert(a - b)
    }else if ( op == '*'){
        alert( a * b)
    }else if ( op == '/'){
        alert( a / b)
    }
}
calculator()