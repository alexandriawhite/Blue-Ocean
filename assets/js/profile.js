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