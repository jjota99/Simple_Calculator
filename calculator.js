function addCharacter(character) {
  const number = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = number + character;
}

function removeAll() {
  document.getElementById("result").innerHTML = "";
}

function remove() {
  const result = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = result.substring(
    0,
    result.length - 1
  );
}

function calculate() {
  const result = document.getElementById("result").innerHTML;
  if (result) {
    document.getElementById("result").innerHTML = eval(result);
  } else {
    document.getElementById("result").innerHTML = "Empty...";
  }
}
