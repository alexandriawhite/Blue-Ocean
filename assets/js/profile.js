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
$(".saveProfile").click(() => {
    let userProfile = {
        //pic: $("#file").val(),
        name: $(".name").val(),
       // city: $("#city").val(),
        // state: $("#state").val(),
        age: $(".age").val(),
        bio: $(".bio").val(),
        job: $(".job").val(),
        school: $(".school").val(),
    }
    localStorage.setItem("blueOceanUserProfile", JSON.stringify(userProfile))

    // reload/redirect to the DisplayProfile
    window.location.replace("./displayprofile.html");    
})



//Profile picture function
var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);

   
    console.log(image.src)
    console.log(image)
    // let b = image
    // let c = b.slice(9, 4);
   // console.log(c);
    
   
//    const a = new FileReader
//     a.readAsDataURL(file.image);
//     a.addEventListener('load', () => {
//         const url=a.result;
//         console.log(a);
//     })
   
    
    // let imgOutput = document.getElementById("imgOutput");
    // let test = image.src
    // localStorage.setItem("img", JSON.stringify(test))
    // let img = localStorage.getItem("img")
    // let photo = JSON.parse(img)
    // console.log(photo)
    //imgOutput.src = URL.createObjectURL(photo);
    
//};



let reader = new FileReader();
reader.readAsDataURL(img); // converts the blob to base64 and calls onload
  imageOutput.src = reader.result; // data url
  console.log("hi")
};


//`img src=${event.target.file}></img>`


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