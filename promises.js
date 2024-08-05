const promiseOne = new Promise(function (resolve, reject) {
  //Do any sync task
  //DB call, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "zeeshan",
      email: "zeeshan@example.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); //{ username: 'zeeshan', email: 'zeeshan@example.com' }
});

const promiseFoure = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "syed", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

const result = promiseFoure
  .then((user) => {
    console.log("user :", user);
    return user.username;
  })
  .then((username) => console.log(username))
  .catch((err) => console.log(err))
  .finally(() => console.log("The promises is either resolved or rejected"));
console.log("result :", result);

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javaScript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log("response :", response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// https://jsonplaceholder.typicode.com/posts

// async function getAllPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log("data :", data);
//   } catch (error) {
//     console.log("E ", error);
//   }
// }
// getAllPosts();

// api calling using promises
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
