const hobbies= ["swimming", "hiking", "football", "baseball", "soccer", "hockey"]

$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
        $.each(data.results, function(key,value){
            console.log(key);
            console.log(value.name.title);
            let randomHobbies= Math.floor(Math.random() * hobbies.length);
            value['hobbies']=hobbies[randomHobbies];
            if(value.gender=== "male") {
                men.push(value)
            } else {
                women.push(value)
            }
        })
      console.log(men);
      console.log(women);
    }
  });


import this script into HTML file, this needs to run first 
2nd script file, you'll pass the user email through this objects method

var apiKey= "7eaf03a186b541c9a59a953deb840f9a";

class ZeroBounceApi {
    constructor(apiKey){
        var baseUrl = "https://api.zerobounce.net/v2";
        var get = new XMLHttpRequest();
        this.apiKey = apiKey;
        this.getCredits = function(){
            var uri = baseUrl + "/getcredits" + "?api_key=" + apiKey;
            get.open('GET', uri, false);
            get.send();
            if (get.readyState === 4 && get.status === 200) {
                console.log(get.responseText);
                return get.responseText.status;
            }
        }


        /**
         * @param email - the email you want to validate
         * @param ip - the ip to be use for this validation (optional)
         * @return - a JSONObject with all of the information for the specified email
         * */
        this.validate = function(email, ip_address){
            var uri = baseUrl + "/validate" + "?api_key=" + apiKey + "&email=" + email + "&ip_address=" + ip_address;
            get.open('GET', uri, false);
            get.send();
            if (get.readyState == 4 && get.status == 200) {
                console.log(get.responseText);
                var responseObj= get.responseText;
                return JSON.parse(responseObj).status;
            }
        }
    }
}

var emailAuth = new ZeroBounceApi(apiKey)
// ZeroBounceApi.apiKey
// ZeroBounceApi.getCredits()
var result= emailAuth.validate("global_suppression@example.com")
console.log(result)
