var database = [
    {
        username: "ladan",
        password: "7777777"
    },
]


var timeline = [
    {
        username: "Peter",
        timeline: "I love being an engineer!"
    },
    {
        username: "Armaghan",
        timeline: "I love living in Miami!"
    }
]

var usernamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

function signIn (username, password) {


    if (username === database[0].username && password === database[0].password) {
        return timeline;
    } else {
        alert("Check your username and password!")
    }
}


signIn(usernamePrompt, passwordPrompt);




