var database = [
  {
    username: "ladan",
    password: "7777777",
  },
  {
    username: "sally",
    password: "123",
  },
  {
    username: "yasaman",
    password: "789",
  },
  {
    username: "bardia",
    password: "hahaha",
  },
];

var timeline = [
  {
    username: "Peter",
    timeline: "I love being an engineer!",
  },
  {
    username: "Armaghan",
    timeline: "I love living in Miami!",
  },
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(username, password) {
//   database.map((user) => {
//     if (username === user.username && password === user.password) {
//       return timeline;
//     } else {
//       alert("Sorry, wrong username and password!");
//     }
//   });

    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            console.log(timeline)
        } else {
            alert("Sorry, wrong username and password")
        }
    }
}

signIn(usernamePrompt, passwordPrompt);
