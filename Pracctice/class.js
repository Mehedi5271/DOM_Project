// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }

//   const car1 = new Car('toyota', 2343);

//   console.log(car1.name);
//   console.log(car1.year);



let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

console.log(obj.employees[1].firstName)