var badRequestUrl = './index.html';
var redirectUrl = './404.html';
var user = localStorage.getItem('blueOceanUser') || {};
let formname = document.querySelector(".formname");
let formusername = document.querySelector(".formusername");
let formemail = document.querySelector(".formemail");
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let loginScreen = document.querySelector(".loginScreen")



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

// Signup form Handler
$('#signupForm').submit(function(e) {
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
    $("input:checked").each(function() {
        console.log($(this).val())
        // TODO:  userHobbies.push($(this).attr('name'));
    });
    // TODO: save hobbie array to user object using dot notation
    console.log({user});
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

function generateForm(){
    let form = document.querySelector(".hide")
    form.classList.remove("hide");
}

var userHobbies = function(){
    let signupForm = document.querySelector(".signupForm")
    let hobbiesForm = document.querySelector(".hideform")
    signupForm.classList.add("hide");
    hobbiesForm.classList.remove("hideform");
}

let userLogin = function(){
    console.log("login")
    loginScreen.classList.remove("loginScreen")
    login.classList.add("navHideLogin")
    signup.classList.add("navHideSignup")
}



login.addEventListener("click", userLogin);

// Add event listener to search button
signup.addEventListener("click", generateForm);
