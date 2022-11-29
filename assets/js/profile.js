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
    localStorage.setItem("blueOceanUserProfile", JSON.stringify(userProfile));
})