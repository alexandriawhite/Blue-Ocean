// variable declarations.//
var badRequestUrl = './index.html';
var redirectUrl = './404.html';
var user = localStorage.getItem('blueOceanUser') || {};
let formname = document.querySelector(".formname");
let formusername = document.querySelector(".formusername");
let formemail = document.querySelector(".formemail");
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let loginScreen = document.querySelector(".loginScreen");
let profile = document.querySelector("#profile");
let matches = document.querySelector("#matches");
let settings = document.querySelector("#settings");
let profileSection = document.querySelector(".profile");
let matchesSection = document.querySelector(".matches");
let settingsSection = document.querySelector(".settings");
let cancel = document.querySelector(".cancelbtn");
var state = document.getElementById('state');
var city = document.getElementById('city');
let signupForm = document.querySelector(".signupForm");
let hobbiesForm = document.querySelector(".hideform");
let form = document.querySelector(".hide");
var modal = $("#modal")
let loginBtn = $("#loginBtn")
let register

const hobbieList = [  "hiking","football","baseball","soccer","hockey","lacrosse","wrestling","golf","basketball","boxing","cycling","bowling","swimming","climbing","gymnastics","dance","cheer"]


//Opens side nav bar
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
}

//Closes side nav bar
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Signup form Handler
$('#signupForm').submit(function (e) {
    e.preventDefault();
    createUser()
})

//function for hobbies
function hobbiesElement(hobbie) {
    var hobbieElement = `<div>
<input type="checkbox" class="hobbieInput" name=${hobbie} value=${hobbie} />
<label for=${hobbie}>${hobbie}</label>
</div>`;
    return hobbieElement;
}


//Appending hobbies list
function appendHobbies() {
    var hobbies = ["swimming",
        "hiking",
        "football",
        "baseball",
        "soccer",
        "hockey",
        "lacross",
        "wrestling",
        "golf",
        "basketball",
        "boxing",
        "cycling",
        "bowling",
        "swimming",
        "climbing",
        "gymnastics",
        "dance",
        "cheer"
    ];
    for (var i = 0; i <= hobbies.length; i++) {
        $("#hobbiesList").append(hobbiesElement(hobbies[i]))
    }
}
//Running hobbies
appendHobbies();

/*Hobbies submit button*/
$("#hobbiesForm").submit(e => {
    e.preventDefault();
    /*Find all checkboxes in form field*/
    /*Add all checkboxes with selected property to an array*/
    //Save array to user profile
    var userHobbies = [];
    $("input:checked").each(function () {

    });
    
    window.location.href ="./profile.html";
});

//displaying signup form
function generateForm() {
    form.classList.remove("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
}

//displaying userHobbies
var userHobbies = function () {
    signupForm.classList.add("hide");
    hobbiesForm.classList.remove("hideform");
}

//Displays login screen and takes away login and signup buttons
let userLogin = function () {
    loginScreen.classList.remove("loginScreen")
    login.classList.add("navHideLogin")
    signup.classList.add("navHideSignup")
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
}

//Displays user profile
let userProfile = function () {
    window.location.replace("./displayprofile.html")
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");

    closeNav();
}
//Displays user matches
let userMatches = function () {
    window.location.replace("./matches.html")
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
    closeNav();
}
//Displays user settings
let userSettings = function () {
    window.location.replace("./profile.html")
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
     closeNav();
}

let userQueue = function() {
    window.location.replace("./matchQueue.html")
    settingsSection.classList.remove("userQueue");
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
    closeNav();
}


//Profile picture function
var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

//Cancel button on login section
let closeLogin = function () {
    loginScreen.classList.add("loginScreen")
    login.classList.remove("navHideLogin")
    signup.classList.remove("navHideSignup")
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
}
//email validation api needs to be called, input an if statement about if the validation is good or bad.//
// Use eventlistenercd .. or an onclick to load when you tell it to.//
$.ajax({
    url: 'https://randomuser.me/api/?results=10&seed=207f2c5bb4388564',
    dataType: 'json',
    success: function (data) {
        $.each(data.results, function (key, value) {
            let randomHobbies = Math.floor(Math.random() * hobbieList.length);
            value['hobbies'] = hobbieList[randomHobbies];
            if (value.gender === "male") {
                men.push(value)
            } else {
                women.push(value)
            }
        })
    }
});
cancel?.addEventListener("click", closeLogin)
profile.addEventListener("click", userProfile)
matches.addEventListener("click", userMatches)
settings.addEventListener("click", userSettings)
login?.addEventListener("click", userLogin);
matchQueue.addEventListener("click", userQueue);

// Add event listener to search button
signup?.addEventListener("click", generateForm);

$("#loginForm").submit(function (e) {
    e.preventDefault();
    loginUser();
})

// login
function loginUser() {
    console.log("logging in")
    let username = $('#username').val();
    let password = $('#password').val();
    // let loginAttempt = {
    // 	username: username,
    // 	password: password
    // }

    let users = getUsers();
    if (users.findIndex(u => u.username === username && u.password === password) != -1) {
        //User found and password correct
        window.location.href ="./profile.html";
    } else {
        // User was not found OR password was incorrect --please check your entry.
    }
};


// register functionality
function createUser() {
    let newUsername = $('#newUsername').val()
    let newPassword = $('#newPassword').val()
    let emailInput = $('#newEmail').val()
    // let newUsername = document.getElementById('newUsername').value;
    // let newPassword = document.getElementById('newPassword').value;
    // store new user data in newUser object so i can push the object into userGroup

    let users = getUsers();
    if (users.findIndex(u => u.username === newUsername) != -1) {
        $('#nameTaken').show();
        return;
    } else if (newPassword.length < 8) {
        $('#invalidPassword').show();
        return;
    }

    let result= emailAuth.validate(emailInput);
    if(result === "valid") {
        let newUser = {
            username: newUsername,
            password: newPassword
        };
        openModal();
        addNewUser(newUser);
        userHobbies();
    }
    else if (result === "invalid") {
        // Do something for invalid
        $('#emailInvalid').show()
        return;
    }
}

function addNewUser(user) {
    let users = getUsers();
    users.push(user);
    let usersJson = JSON.stringify(users);
    localStorage.setItem('Users', usersJson);
}

function getUsers() {
    // Get the users --if they are not found seed an initial array or users
    let usersJson = localStorage.getItem('Users') ?? `[
        {
            "username": "dalton",
            "password": "admin"
        },
        {
            "username": "alexandria",
            "password": "admin"
        },
        {
            "username": "maggie",
            "password": "admin"
        }
        ]`;
    return JSON.parse(usersJson);
}

// Functions to open and close a modal
function openModal() {
    document.getElementById("modal").classList.add("is-active")
}

function closeModal() {
    document.getElementById("modal").classList.remove("is-active")
}

// Add a click event on various child elements to close the parent modal
(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
        closeModal($target);
    });
});

// Add a keyboard event to close all modals
document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
        closeAllModals();
    }
});