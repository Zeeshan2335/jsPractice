

const fullname = document.getElementById("fullname").value;

console.log(fullname);

document
  .getElementById("getValueButton")
  .addEventListener("click", function () {
    // Get the value of the input element
    var inputValue = document.getElementById("fullname").value;
    // Do something with the value (e.g., log it to the console)
    // console.log(inputValue);
    alert(inputValue.toUpperCase())
  });
