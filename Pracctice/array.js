const fruit = [ 1,2,3];

// for(i=0; i<fruit.length;i++){
//     console.log(fruit[i]);
// }

function myfunction (value){
    return  value*2;
}

const newArray = fruit.map(myfunction);

console.log(newArray);
