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

const hobbieList = [  "hiking","football","baseball","soccer","hockey","lacross","wrestling","golf","basketball","boxing","cycling","bowling","swimming","climbing","gymnastics","dance","cheer"]



/*404 error
fetch(badRequestUrl).then(function (response) {
    // Check the response value is equal to 404.
    if (response.status === 404) {
        // If the page is not on the 404 page, redirect to it.
        document.location.replace(redirectUrl);
    } else {
        return response.json();
    }
});*/

/*
function userInfo (){
    let nfo = document.querySelector(".info");
    info.textContent = `test`
    info.append(info);
}*/

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


/* 
const otherCheckbox = document.querySelector('#other');
const otherText = document.querySelector('#otherValue');
otherText.style.visibility = 'hidden';

otherCheckbox.addEventListener('change', () => {
    if (otherCheckbox.checked) {
        otherText.style.visibility = 'visible';
        otherText.value = '';
    } else {
        otherText.style.visibility = 'hidden';
    }
});*/

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
    console.log("helloWorld");
    /*Find all checkboxes in form field*/
    /*Add all checkboxes with selected property to an array*/
    //Save array to user profile
    var userHobbies = [];
    $("input:checked").each(function () {

        console.log($(this).val())
        // TODO:  userHobbies.push($(this).attr('name'));
    });
    // TODO: save hobbie array to user object using dot notation
    console.log({ user });
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
        // console.log(men);
        // console.log(women);
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

// Create a registration system
var userGroup = [
	{
		username: 'dalton',
		password: 'admin'
	},
	{
		username: 'alexandria',
		password: 'admin'
	},
	{
		username: 'maggie',
		password: 'admin'
	}
]

$("#loginForm").submit(function (e) {
    e.preventDefault();
    loginUser();
})

// login
function loginUser() {
    console.log("logging in")
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
    // let loginAttempt = {
	// 	username: username,
	// 	password: password
    // }

    try {
        for(var i = 0; i < userGroup.length; i++) {
            // check to 
            if (username == userGroup[i].username && password == userGroup[i].password) {
                throw new error("login accepted")
                // break;
            } 
            else {
                // error if username and password don't match
                // console.log('incorrect username or password');
                
            }
        }
    }
    catch {
        window.location.href ="./profile.html";
    }
};


// register functionality
function createUser() {
    
	let newUsername = document.getElementById('newUsername').value;
	let newPassword = document.getElementById('newPassword').value;
	// store new user data in newUser object so i can push the object into userGroup
	
    try {
        // loop through userGroup array to see if the username is taken, or password to short
        for(var i = 0; i < userGroup.length; i++) {
            // check if new username is equal to any already created usernames
            if (newUsername == userGroup[i].username) {
                // text prompt that username is taken
                $('#nameTaken').show();   
                break;
            } 
             else if (newPassword.length < 8) {
                // show invalid
                $('#invalidPassword').show();
                break;
            }; 
            // var emailAuth = new ZeroBounceApi(apiKey)
            var emailInput = $('#newEmail').val()//changes .value to .val()

            var result= emailAuth.validate(emailInput);
            // if(result === "alias_address" || result === "leading_period_removed") {
                if(result == "valid") {
                    console.log("is active")
                 
            }
            else if (result == "invalid") {
                $('#emailInvalid').show();
            break;
            };
            throw new error("profile created")
        }
            
    }
	// push new object to the people array
    catch {
        let newUser = {
		username: newUsername,
		password: newPassword
	};
        openModal();
        userGroup.push(newUser);
        userHobbies();
    }
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