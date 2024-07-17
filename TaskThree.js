// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function composeFunctions(num) {
  const squared = square(num);
  const doubled = double(squared);
  const result = addFive(doubled);
  return result;
}

const result = composeFunctions(7);
console.log(result);