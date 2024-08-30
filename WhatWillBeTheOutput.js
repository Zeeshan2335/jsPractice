function handleVariable() {
  setTimeout(() => {
    console.log(x, y); // 10,20 will pring
  }, 3000);
}

var x = 10;
let y = 20;
handleVariable();
