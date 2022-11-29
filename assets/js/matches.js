fetchRandomUsers().then((data)=> {
    var datingPool = data.results;
    console.log({datingPool});

const users = [men, women]; //import dummy data
console.log({ men, women });

var genderFilter = 'male';
var filteredPool = datingPool.filter((person) => {
    return person.gender === genderFilter;
});

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
})

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
})


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


})