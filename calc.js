let to = document.getElementById("to");
let from = document.getElementById("from");
let submit = document.querySelector("#submit");
const result = document.getElementById("res");
let number = document.getElementById("num");
let res;
submit.addEventListener("click", () => {
  if (number.value == "") {
    res = "Empty!";
  } else if (from.value === "decimal" && to.value === "binary") {
    let value = number.value;
    res = parseInt(value).toString(2);
  } else if (from.value === "binary" && to.value === "decimal") {
    let value = number.value;
    res = parseInt(value, 2).toString(10);
  } else {
    res = number.value;
  }
  result.innerText = res;
});
