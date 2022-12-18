

class Calculator {

    Addition (a,b) {
        return a + b ;
    }
    Multiplication(a,b){
        return a * b;
    }
    Soustraction(a,b){
        return a - b ;
    }
    Division(a,b){
        if( b === 0){
            return 'can\'t devide by 0' 
        }
        return a / b ;   
    }
    carre(a)
    {
        return Math.pow(a,2);
    }
    racine_carre(a)
    {
        return Math.sqrt(a);
    }

     backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }
}

module.exports = {
    Calculator:Calculator
}