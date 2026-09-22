function getNumbers() {
  const a = Number(document.getElementById("first-number").value);
  const b = Number(document.getElementById("second-number").value);
  return [a, b];
}

function showResult(result) {
  const output = document.getElementById("output");
  if (result < 0) {
    output.innerHTML = "<span class='negative'>" + String(result) + "</span>";
  } else {
    output.innerHTML = String(result);
  }
}

function addition() {
  const [a, b] = getNumbers();
  showResult(a + b);
}

function subtraction() {
  const [a, b] = getNumbers();
  showResult(a - b);
}

function multiplication() {
  const [a, b] = getNumbers();
  showResult(a * b);
}

function division() {
  const [a, b] = getNumbers();
  showResult(a / b);
}

// power() must use a for() loop, not Math.pow() or **
function power() {
  const [a, b] = getNumbers();
  let result = 1;
  for (let i = 0; i < b; i++) {
    result = result * a;
  }
  showResult(result);
}

function clearCalc() {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  document.getElementById("output").innerHTML = "";
}
