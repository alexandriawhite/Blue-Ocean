let userhobbies = $('#hobbiesBtn')
//function for hobbies
function hobbiesElement(hobbie) {
    var hobbieElement = `<div>
<input type="checkbox" class="hobbieInput" name=${hobbie} value=${hobbie} />
<label for=${hobbie}>${hobbie}</label>
</div>`;
    return hobbieElement;
}

//Appending hobbies list
function appendUserHobbies() {
    console.log("test")
    let hobbies = ["swimming",
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
    $("#hobbiesList").innerHTML = '';
    hobbies.forEach(hobby => {
        $("#hobbiesList").append(hobbiesElement(hobby))
    })
}
//Running hobbies
// appendUserHobbies();

/*Hobbies submit button*/
$("#userhobbiesForm").submit(e => {
    e.preventDefault();
    /*Find all checkboxes in form field*/
    /*Add all checkboxes with selected property to an array*/
    //Save array to user profile
    var userHobbies = [];
    $("input:checked").each(function () {

        //console.log($(this).val())
        // TODO:  userHobbies.push($(this).attr('name'));
    });
    // TODO: save hobby array to user object using dot notation
    //console.log({ user });
    window.location.href ="./profile.html";
});
console.log(userhobbies.text)
userhobbies.click(appendUserHobbies)

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

//Closes side nav bar
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}