{
  //Compound Statement
  var a = 101;
  console.log(a);
}

if (true) {
  //Compound Statement
  var a = 101;
  console.log(a);
}

{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);

let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(b);

const c = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(c);

const d = 100;
function x() {
  const d = 10;
  console.log(d);
}
x();
console.log(d);

var a = 20;
{
  const a = 20;
}

const x = 111;
{
  const y = 222;
  {
    const z = 333;
    console.log(z);
  }
}
