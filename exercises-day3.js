

if (Modernizr.geolocation) {
  var pageBody = document.getElementsByTagName('body')[0];
  var catImage = document.createElement('img');
  catImage.src = 'https://i.pinimg.com/236x/f9/87/f5/f987f55d7d6b6b026e14251d5feb1329--weird-things-cat-things.jpg';
  pageBody.appendChild(catImage);
}
else {
  var body = document.getElementsByTagName('body')[0];
  var dogImage = document.createElement('img');
  dogImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwabqeRUZ7OQys-3UecOUs2eQ17GeF5o96BPPMk0KNsSpjXCBu';
  body.appendChild(dogImage);
}

var headingCustom = document.getElementById('heading-one');

headingCustom.style.color = 'red';
