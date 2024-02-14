// function myFirst() {
//   console.log("hello");
// }

// function mySecond() {
//   console.log('good by')
// }

// myFirst();
// mySecond();



function myDisplayer(some) {
console.log(some)
  }
  
  function myCalculator(num1, num2, mycallback) {
    let sum = num1 + num2;
    mycallback(sum);
    
  }
  
  let result = myCalculator(5, 5, myDisplayer);
//   myDisplayer(result);