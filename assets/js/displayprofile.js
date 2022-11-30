function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

//Closes side nav bar
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


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