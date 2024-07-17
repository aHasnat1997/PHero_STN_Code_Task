// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2008 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Chevrolet", model: "Impala", year: 2012 },
  { make: "Nissan", model: "Altima", year: 2005 }
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
