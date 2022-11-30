function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

//Closes side nav bar
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function load() {
    let bio = localStorage.getItem("blueOceanUserProfile");
    console.log(bio);
    
    let fullBio = JSON.parse(bio)
    console.log(fullBio);
    let name = fullBio.name
    let location = fullBio.location
    let age = fullBio.age
    let job = fullBio.job
    let school = fullBio.school
    let userBio = fullBio.bio
    console.log(fullBio);
    console.log(name, location, age, job, school, userBio);
    $('.disProfile').text(name);
    $('.age').text(age);
    $('.job').text(job);
    $('.school').text(school);
    $('.userBio').text(userBio);
}

load();