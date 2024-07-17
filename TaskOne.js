// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const people = [
  { name: 'Alice', age: 30, gender: 'Female' },
  { name: 'Bob', age: 25, gender: 'Male' },
  { name: 'Charlie', age: 35, gender: 'Male' },
  { name: 'Diana', age: 28, gender: 'Female' },
  { name: 'Eve', age: 22, gender: 'Female' }
];

function allFemales(params) {
  const allFemalesName = [];
  if (params.length > 0) {
    params.map(data => {
      if (data.gender === 'Female') {
        allFemalesName.push(data.name)
      }
    });
  }
  return allFemalesName;
};

const femaleNames = allFemales(people);
console.log(femaleNames);
