var badRequestUrl = './index.html';
var redirectUrl = './404.html';


/*404 error
fetch(badRequestUrl).then(function (response) {
    // Check the response value is equal to 404.
    if (response.status === 404) {
        // If the page is not on the 404 page, redirect to it.
        document.location.replace(redirectUrl);
    } else {
        return response.json();
    }
});*/

/*
function userInfo (){
    let nfo = document.querySelector(".info");
    info.textContent = `test`
    info.append(info);
}*/



function hobbiesElement(hobbie) {
var hobbieElement =`<div>
<input type="checkbox" class="hobbieInput" name=${hobbie} value=${hobbie} />
<label for=${hobbie}>${hobbie}</label>
</div>`;
return hobbieElement;
}



const otherCheckbox = document.querySelector('#other');
const otherText = document.querySelector('#otherValue');
otherText.style.visibility = 'hidden';

otherCheckbox.addEventListener('change', () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
});


function appendHobbies(){
    var hobbies =["swimming",
    "hiking",
    "football",
    "baseball",
    "soccer",
    "hockey"];
    for (var i=0; i <= hobbies.length;i++){
        $("#hobbiesList").append(hobbiesElement(hobbies[i]))
    }
}
appendHobbies();

/*Hobbies submit button*/
$("#hobbiesForm").submit(e=>{
e.preventDefault();
console.log("helloWorld");
});
