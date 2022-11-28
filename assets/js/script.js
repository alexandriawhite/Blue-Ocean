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
const hobbieList= ["swimming", "hiking", "football", "baseball", "soccer", "hockey"]





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

//Dating location
function callback(data) {
    state.innerHTML = data.state;
    city.innerHTML = data.city;
}

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geolocation-db.com/json/geoip.php?jsonp=callback';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);


function openNav() {
    document.getElementById("myNav").style.width = "100%";
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
    profileSection.classList.add("userProfile");
    matchesSection.classList.add("userMatches");
    settingsSection.classList.add("userSettings");
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Signup form Handler
$('#signupForm').submit(function (e) {
    e.preventDefault();
    userHobbies();

})

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
});

//Example from weather app 
// function setLocalStorage(city) {
//     if (localStorage.getItem(searchKey) !== null){
//     let cities = localStorage.getItem(searchKey)
//     let citiesSearches = JSON.parse(cities)
//     citiesSearches.push(city);
//     localStorage.setItem(searchKey, JSON.stringify(citiesSearches));
//     } else {
//     let searches = []
//     searches.push(city);
//     localStorage.setItem(searchKey, JSON.stringify(searches));
// }}

// function formTemplate () {
//     // create template later 
//     `    <div class="field">
//       <label class="label">Username</label>
//       <div class="control has-icons-left has-icons-right">
//         <input class="input" type="text" placeholder="Username Input" value="">
//         <span class="icon is-small is-left">
//           <i class="fas fa-user"></i>
//         </span>
//         <span class="icon is-small is-right">
//           <i class="fas fa-check"></i>
//         </span>
//       </div>`
// }

function generateForm() {
    form.classList.remove("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
    profileSection.classList.add("userProfile");
    matchesSection.classList.add("userMatches");
    settingsSection.classList.add("userSettings");
}


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
    profileSection.classList.add("userProfile");
    matchesSection.classList.add("userMatches");
    settingsSection.classList.add("userSettings");
}

//Displays user profile
let userProfile = function () {
    window.location.replace("./profile.html")
    profileSection.classList.remove("userProfile");
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
    matchesSection.classList.add("userMatches");
    settingsSection.classList.add("userSettings");

    closeNav();
}
//Displays user matches
let userMatches = function () {
    window.location.replace("./matches.html")
    matchesSection.classList.remove("userMatches");
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
    profileSection.classList.add("userProfile");
    settingsSection.classList.add("userSettings");
    closeNav();
}
//Displays user settings 
let userSettings = function () {
    window.location.replace("./settings.html")
    settingsSection.classList.remove("userSettings");
    signupForm.classList.add("hide");
    hobbiesForm.classList.add("hideform");
    loginScreen.classList.add("loginScreen");
    profileSection.classList.add("userProfile");
    matchesSection.classList.add("userMatches");
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
    profileSection.classList.add("userProfile");
    matchesSection.classList.add("userMatches");
    settingsSection.classList.add("userSettings");
}
//email validation api needs to be called, input an if statement about if the validation is good or bad.//
// Use eventlistenercd .. or an onclick to load when you tell it to.//
$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
        $.each(data.results, function(key,value){
            let randomHobbies= Math.floor(Math.random() * hobbieList.length);
            value['hobbies'] = hobbieList[randomHobbies];
            if(value.gender=== "male") {
                men.push(value)
            } else {
                women.push(value)
            }
        })
      console.log(men);
      console.log(women);
    }
  });
cancel.addEventListener("click", closeLogin)

profile.addEventListener("click", userProfile)
matches.addEventListener("click", userMatches)
settings.addEventListener("click", userSettings)

login.addEventListener("click", userLogin);

// Add event listener to search button
signup.addEventListener("click", generateForm);

