// Initialize and add the map
function initMap() {
  // Location, object with latitude and longitude.
  const loc = { lat: 51.508658, lng: -0.123920 };
  // Centered map on location. Targeting class of .map from index.html and there will be map
  const map = new google.maps.Map(document.querySelector('.map'), {
    // zoom can be changed
    zoom: 14,
    // center position will be in location variable
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}


// Sticky menu background, vanilla js, added event to window object
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    // select navbar and set opacity if scroll more than 150
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
// we are targeting navbar link inside navbar and button, and if link is clicked, run function
$('#navbar a, .btn').on('click', function (event) {
  // check for hash
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    // call animate on body
    $('html, body').animate(
      {
        // scroll from top to that hash, add -100 to see titles
        scrollTop: $(hash).offset().top - 100
      },
      // speed for scrolling, its miliseconds
      800
    );
  }
});
