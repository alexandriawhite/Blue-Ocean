// create functions for opening and closing side menu.//
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

//Closes side nav bar
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// create function to insert user input information from profile creation into local storage.//
function load() {
    let bio = localStorage.getItem("blueOceanUserProfile");
    let fullBio = JSON.parse(bio)
    let name = fullBio.name
    let location = fullBio.location
    let age = fullBio.age
    let job = fullBio.job
    let school = fullBio.school
    let userBio = fullBio.bio
    $('.disProfile').text(name);
    $('.age').text(age);
    $('.job').text(job);
    $('.school').text(school);
    $('.userBio').text(userBio);
}

load();