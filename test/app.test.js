
const Calculator = require('../app/app').Calculator;
const expect = require('chai').expect;

var assert = require('assert');
describe('calcul', function(){
    describe('addition', function(){
        it ('1.Addition commutative', function(done){
            let calculator = new Calculator();
            expect(calculator.Addition(1,2)).to.equal(calculator.Addition(2,1));
            done();
        })
        it ('2.element 0', function(done){
            let calculator = new Calculator();
            expect(calculator.Addition(0,2)).to.equal(2);
            done();
        })

    })
    describe('Multiplication', function(){
        it ('1.Multiplication commutative', function(done){
            let calculator = new Calculator();
            expect(calculator.Multiplication(1,2)).to.equal(calculator.Multiplication(2,1));
            done();
        })
        it ('2.Multiplication par 0', function(done){
            let calculator = new Calculator();
            expect(calculator.Multiplication(0,2)).to.equal(0);
            done();
        })
        it ('3.Multiplication par 1', function(done){
            let calculator = new Calculator();
            expect(calculator.Multiplication(1,2)).to.equal(2);
            done();
        })
        it ('4.Multiplication nombre negatif', function(done){
            let calculator = new Calculator();
            expect(calculator.Multiplication(1,2)).to.equal(2);
            done();
        })
    })
    describe('Soustraction ', function(){
        it ('1.Soustraction non commutaive', function(done){
            let calculator = new Calculator();
            expect(calculator.Soustraction(4,2)).to.equal(2);
            done();
        })
    })
    describe('division ', function(){
        it ('1.ne peut pas etre diviser par 0', function(done){
            let calculator = new Calculator();
            expect(calculator.Division(4,0)).to.equal('can\'t devide by 0');
            done();
        })
        it ('2.Division non commutative', function(done){
            let calculator = new Calculator();
            expect(calculator.Division(4,2)).to.equal(2);
            done();
        })
    })
    describe('division ', function(){
        it ('1.ne peut pas etre diviser par 0', function(done){
            let calculator = new Calculator();
            expect(calculator.Division(4,0)).to.equal('can\'t devide by 0');
            done();
        })
        it ('2.Division non commutative', function(done){
            let calculator = new Calculator();
            expect(calculator.Division(4,2)).to.equal(2);
            done();
        })
    })
    describe('carre ', function(){
        it ('1.carre verif', function(done){
            let calculator = new Calculator();
            expect(calculator.carre(2,2)).to.equal(4);
            done();
        })

    })
    describe('racine carre ', function(){
        it ('1.racine carre verif', function(done){
            let calculator = new Calculator();
            expect(calculator.racine_carre(9)).to.equal(3);
            done();
        })

    })
})