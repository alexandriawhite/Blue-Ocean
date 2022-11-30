let disProfile = document.getElementsByClassName("disProfile")
let profileSaveBtn = document.querySelector(".saveProfile")
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geolocation-db.com/json/geoip.php?jsonp=callback';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);

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
$(".saveProfile").click(()=> {
    let userProfile = {
        pic: $("#file").val(),
        name: $(".name").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        bio: $(".bio").val(),
        job: $(".job").val(),
        school: $(".school").val(),
    }
    localStorage.setItem("blueOceanUserProfile", JSON.stringify(userProfile))
    console.log('hello');
let names = localStorage.getItem("blueOceanUserProfile")
let nameinput = JSON.parse(names).name
    console.log(nameinput);
    disProfile.textContent=`nameinput`  
})

// function userInfo (){
//     let nfo = document.querySelector(".info");
//     info.textContent = `test`
//     info.append(info);

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

//Closes side nav bar
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}