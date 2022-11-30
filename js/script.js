//the squares will be created by jscript directly in html once the program is started

//it will divide each number by 3 and then by 5 to check if both of them mach with the request

//even if one of the requested numbers is maching but the other is not it'll go on to check if the number is a multiple of 3

//eventually it goes further to check if the number is a multiple of 5

//then it'll create the grind in html directly

let square;
const container= document.getElementById('box')
for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
        square = `<div class="square square-red">FizzBuzz</div>`
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
        square = `<div class="square square-aqua">Fizz</div>`
    }
    else if (i % 5 == 0) {
        console.log('Buzz')
        square = `<div class="square square-yellow">Buzz</div>`
    }
    else {
        square = `<div class="square square-dark">${i}</div>`
        console.log(i)
    }
    container.innerHTML += square;
}