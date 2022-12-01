// let bio = localStorage.getItem("blueOceanUserProfile");
// let fullBio = JSON.parse(bio)
// let age = fullBio.age
// fetch api variable results and push into men and women variables.//
fetchRandomUsers().then((data)=> {
    let datingPool = data.results;

    const users = [men, women]; //import dummy data


    // specify gender filter.//
let genderFilter = 'male';
const filteredPool = datingPool.filter((person) => {
    return person.gender === genderFilter;
});

    var countryFilter = 'United Kingdom';
    var filtered = datingPool.filter((person) => {
        return person.location.country[0] === countryFilter;
    });

    // filter for age
    var ageFiltered = datingPool.filter(profile => {
        // we first have to grab it from local storage 
        /*  let tempArry = []
          if(profile.dob.age <= (age - 10 )) {
              profile.push(tempArry)
          }
          */
        // let topEnd = age + 10;
        // let lowerEnd = age - 10;
        return profile.dob.age <= 35 && profile.gender == genderFilter;
    })

    console.log(ageFiltered);
    console.log(`Filtered Age Dataset length ${ageFiltered.length}`);

// pull match information out of localStorage and parse into array//
let matches = {
    potential: filteredPool, //get preference from localuser
    accepted: JSON.parse(localStorage.getItem("matches")) || [], 
    rejected: []
}

// create a function that pulls random user information as a match//
    function randomUser() {
        let user = matches.potential[Math.floor(Math.random() * matches.potential.length)]
        return user;
    }

    function appendUser(user) {
        // Need forloop that runs twice 
        // In that forloop grab two random likes from user
        // compare those two likes to the current match likes
        // Try to use currentMatch.hobbies.includes(user.like)   
        // If does include go to user - if else skip to next user 
        if (user) {
            $(`.userpic`).css(`background`, `url(${user.picture.large}) no-repeat center/80%`);
        }
        else { alert("Out of matches") }
    }
    let currentMatch = randomUser();

    appendUser(currentMatch);

    // Add a search local storage function to look for matches already logged
    // Add to the list if there are already people there: Done
    // Needs to be part of the filter as well
    // Create page to loop through the matches and display them 
    // When they login - clear out the matches and start over 
    // Will add authenticiation when we are able to use servers (this is what it will look like when logging in and out)

    let matchCount = 0

    // create jQuery event listener click to tally up accept and reject.//
    $(`.match`).click(() => {
        console.log("accept");
        matches.potential = matches.potential.filter((matchOptions) => {
            if (matchOptions.id.value === currentMatch.id.value) {
                return false
            } else { return true }
        })
        matches.accepted.push(currentMatch);
        console.log(matches);
        currentMatch = randomUser();
        appendUser(currentMatch);
        localStorage.setItem("matches", JSON.stringify(matches.accepted))
        matchCount++
        document.getElementById('Accept').textContent = `Accept: ${matchCount} `;
    })
    let rejectCount = 0

    $(`.reject`).click(() => {
        console.log("reject")
        matches.potential = matches.potential.filter((matchOptions) => {
            if (matchOptions.id.value === currentMatch.id.value) {
                return false
            } else { return true }
        })
        matches.rejected.push(currentMatch);
        console.log(matches)
        currentMatch = randomUser();
        appendUser(currentMatch);
        rejectCount++
        console.log(rejectCount)
        document.getElementById('Reject').textContent = `Reject: ${rejectCount}`;
    })


    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }


})
// create a pseudo div grpoup with classes pulling information from matchArray//
var matchArray = []
matchArray = JSON.parse(localStorage.getItem("matches"));
function matchEl(listMatch) {
    var matchElement = `<img src=${listMatch.picture?.large} id=listPic></img>
    <div class="usercontent">
        <h4 class="firstName">${listMatch.name.first}<h4>
        <h4 class="pronoun">Gender: ${listMatch.gender}</h4>
        <p class="age">Age: ${listMatch.dob.age}</p>
        <p class="sports">Hobbies: ${listMatch.hobbies}</p>
        <p class="creativity"></p>
        <h4 class="username">Username: ${listMatch.login.username}</h4>
    </div><br/>`;
    return matchElement;
}
// render array information on match Queue page.//
function buildTable(matchArray) {
    let divList = "";
    for (let i = 0; i < matchArray.length; i++){
        $("#matchList").append(matchEl(matchArray[i]));
    }
    console.log(matchArray)
    //   document.getElementById('matchList').textContent = divList;
}
buildTable(matchArray);



function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

//Closes side nav bar
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function openModal() {
    document.getElementById("modal").classList.add("is-active")
}

function closeModal() {
    document.getElementById("modal").classList.remove("is-active")
}

// Add a click event on various child elements to close the parent modal
(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
        closeModal($target);
    });
});

// Add a keyboard event to close all modals
document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
        closeAllModals();
    }
});