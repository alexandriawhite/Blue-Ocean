// let bio = localStorage.getItem("blueOceanUserProfile");
// let fullBio = JSON.parse(bio)
// let age = fullBio.age

fetchRandomUsers().then((data) => {
    var datingPool = data.results;
    console.log({ datingPool });

    const users = [men, women]; //import dummy data
    console.log({ men, women });

    var genderFilter = 'male';
    var filteredPool = datingPool.filter((person) => {
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

    var matches = {
        potential: filteredPool, //get prefernce from localuser
        accepted: JSON.parse(localStorage.getItem("matches")) || [],
        rejected: []
    }
    console.log({ matches })


    function randomUser() {
        let user = matches.potential[Math.floor(Math.random() * matches.potential.length)]
        console.log({ rando: user })
        return user;
    }

    function appendUser(user) {
        // Need forloop that runs twice 
        // In that forloop grab two random likes from user
        // compare those two likes to the current match likes
        // Try to use currentMatch.hobbies.includes(user.like)   
        // If does include go to user - if else skip to next user 
        console.log({ user });
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
        document.getElementById('Accept').textContent = "Accept: " + matchCount;
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
        document.getElementById('Reject').textContent = "Reject: " + rejectCount;
    })


    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }


})
var matchArray = []
matchArray = JSON.parse(localStorage.getItem("matches"));
function matchEl(listMatch) {
    var matchElement = `<img src=${listMatch.picture?.large} id=listPic></img>
    <div class="usercontent">
        <h4 class="firstName">${listMatch.name.first}<h2>
        <h4 class="username">${listMatch.login.username}</h4>
        <p class="age">${listMatch.dob.age}</p>
        <p class="sports">${listMatch.hobbies}</p>
        <p class="creativity"></p>
    </div><br/>`;
    return matchElement;
}
function buildTable(matchArray) {
    console.log("Entering Method");
    var divList = "";
    for (let i = 0; i < matchArray.length; i++) {
        $("#matchList").append(matchEl(matchArray[i]));
    }
    console.log(matchArray)
    //   document.getElementById('matchList').textContent = divList;
}
buildTable(matchArray);
/* <div class="userpic"></div>
<div class="usercontent">
    <h4 class="username"></h4>
    <p class="age"></p>
    <p class="sports"></p>
    <p class="creativity"></p>
</div> */
// $("#hobbiesList").append(hobbiesElement(hobbies[i]))



function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

//Closes side nav bar
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}