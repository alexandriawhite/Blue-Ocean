let disProfile = document.getElementsByClassName("disProfile")
let profileSaveBtn = document.querySelector(".saveProfile")
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geolocation-db.com/json/geoip.php?jsonp=callback';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);
localStorage.append

//Dating location
function callback(data) {
    state.innerHTML = data.state;
    city.innerHTML = data.city;
}

// Need to add hobbies in here 
// Check if hobbies exist, if they do - set new item 
// Appending user profile to local storage 
//if (localStorage.getItem(blueOceanUserProfile) !== null)//{
// append only new data - Still need to write this
//} else {
$(".saveProfile").click(() => {
    let userProfile = {
        pic: $("#file").val(),
        name: $(".name").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        age: $(".age").val(),
        bio: $(".bio").val(),
        job: $(".job").val(),
        school: $(".school").val(),
    }
    localStorage.setItem("blueOceanUserProfile", JSON.stringify(userProfile))
    let bio = localStorage.getItem("blueOceanUserProfile")
    let fullBio = JSON.parse(bio)
    let name = fullBio.name
    let location = fullBio.location
    let age = fullBio.age
    let job = fullBio.job
    let school = fullBio.school
    let userBio = fullBio.bio
    console.log(fullBio);
    console.log(name, location, age, job, school, userBio);
    disProfile.innerHTML=name
    
    
})

//Profile picture function
var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

// $(".appendBio").click(()=> {
// let bio = localStorage.getItem("blueOceanUserProfile")
// let fullBio = JSON.parse(bio)
// let name = fullBio.name
//     console.log(name);
// disProfile.textContent=`nameinput`
// }


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

//Closes side nav bar
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}