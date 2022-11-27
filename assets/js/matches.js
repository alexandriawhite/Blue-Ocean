const users = [men, women]; //import dummy data
console.log({ men, women });

var matches = {
    potential: users[Math.floor(Math.random() * users.length)], //get prefernce from localuser
    accepted: [], rejected: []
}
console.log({matches})


function randomUser() {
    let user = matches.potential[Math.floor(Math.random() * matches.potential.length)]
    console.log({rando: user})
    return user;
}

function appendUser(user) {
    console.log({user});
    $(`.userpic`).css(`background`, `url(${user.pic}) no-repeat center/80%`);
}
let currentMatch = randomUser();

appendUser(currentMatch);

$(`.match`).click(() => {
    console.log("accept");
    matches.accepted.push(currentMatch);
    console.log(matches);
    currentMatch = randomUser();
    appendUser(currentMatch);
})

$(`.reject`).click(() => {
    console.log("reject")
    matches.rejected.push(currentMatch);
    console.log(matches)
    currentMatch = randomUser();
    appendUser(currentMatch);
})


//do index of and splice out the current user from potential 
