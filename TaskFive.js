// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const people = [
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
  { name: "Emily Johnson", age: 40 },
  { name: "Michael Brown", age: 35 }
];

function updatePersonAge(peopleArray, personName, newAge) {
  const person = peopleArray.find(person => person.name === personName);
  if (person) {
    person.age = newAge;
  }
}

updatePersonAge(people, "Jane Smith", 28);
console.log(people);
